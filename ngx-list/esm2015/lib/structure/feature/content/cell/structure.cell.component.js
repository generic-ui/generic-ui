/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandDispatcher } from '../../../domain-api/source/source.command-dispatcher';
import { ChangedValueEmitter } from '../../../../composition/domain-api/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../composition/domain-api/read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
export class StructureCellComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureCellEditArchive
     * @param {?} structureCellEditStore
     * @param {?} cellEditCloseAllService
     * @param {?} sourceCommandService
     */
    constructor(changeDetectorRef, elementRef, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureCellEditStore = structureCellEditStore;
        this.cellEditCloseAllService = cellEditCloseAllService;
        this.sourceCommandService = sourceCommandService;
        this.inEditMode = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // if (changes.editMode !== undefined) {
        // 	if (this.editMode) {
        // 		this.cellEditingEnabled = true;
        // 		this.enterEditMode(false);
        // 	} else if (!this.editMode) {
        // 		this.exitEditMode();
        // 	}
        // }
        //
        // if (!this.editMode) {
        // 	this.exitEditMode();
        // }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cellEditCloseAllService
            .onCloseAll()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.exitEditMode();
        }));
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        return this.cellEditingEnabled && this.cell.isCellEditingEnabled();
    }
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    enterEditMode(forceCheck = true) {
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        timer(0)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.inEditMode = true;
            this.valueChanges$ = new ChangedValueEmitter();
            this.status$ = new ChangedValueEmitter();
            this.editContext = {
                status: this.status$,
                valueChanges: this.valueChanges$,
                value: this.cell.getValue(this.entity).value,
                focus: forceCheck,
                parent: this.elementRef
            };
            this.observeFieldStatus();
            this.observeValueChanges();
            this.publishEditEnter();
            if (!forceCheck) {
                this.changeDetectorRef.markForCheck();
            }
            else {
                this.changeDetectorRef.detectChanges();
            }
        }));
    }
    /**
     * @return {?}
     */
    exitEditMode() {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    submitChangesAndExit() {
        /** @type {?} */
        const itemId = this.entity.getId();
        /** @type {?} */
        const updatedValue = this.actualValue;
        /** @type {?} */
        const fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
        this.exitEditMode();
    }
    /**
     * @private
     * @return {?}
     */
    observeFieldStatus() {
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChangesAndExit();
                    this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    this.exitEditMode();
                    this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.actualValue = value;
        }));
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    publishEditState(state) {
        this.structureCellEditStore.next(state);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    /**
     * @private
     * @return {?}
     */
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
}
StructureCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-cell[entity][cell]',
                template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight()}\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<gui-structure-cell-edit-boolean [cell]=\"cell\"\n\t\t\t\t\t\t\t\t\t [entity]=\"entity\">\n\t</gui-structure-cell-edit-boolean>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureCellComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureCellEditArchive },
    { type: StructureCellEditStore },
    { type: StructureCellEditCloseAllService },
    { type: SourceCommandDispatcher }
];
StructureCellComponent.propDecorators = {
    entity: [{ type: Input }],
    cell: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditingEnabled: [{ type: Input }],
    searchPhrase: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureCellComponent.prototype.entity;
    /** @type {?} */
    StructureCellComponent.prototype.cell;
    /** @type {?} */
    StructureCellComponent.prototype.editMode;
    /** @type {?} */
    StructureCellComponent.prototype.cellEditingEnabled;
    /** @type {?} */
    StructureCellComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureCellComponent.prototype.inEditMode;
    /** @type {?} */
    StructureCellComponent.prototype.editContext;
    /** @type {?} */
    StructureCellComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellComponent.prototype.status$;
    /** @type {?} */
    StructureCellComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.cellEditCloseAllService;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzFILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNySCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTcEcsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7Ozs7Ozs7OztJQTJCekQsWUFBNkIsaUJBQW9DLEVBQzdDLFVBQXNCLEVB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LElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXJMRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsK3NDQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBN0JBLGlCQUFpQjtZQUVqQixVQUFVO1lBV0Ysd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQU90QixnQ0FBZ0M7WUFOaEMsdUJBQXVCOzs7cUJBaUI5QixLQUFLO21CQUdMLEtBQUs7dUJBR0wsS0FBSztpQ0FHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFaTix3Q0FDbUI7O0lBRW5CLHNDQUMrQjs7SUFFL0IsMENBQ2tCOztJQUVsQixvREFDNEI7O0lBRTVCLDhDQUNxQjs7SUFFckIsNENBQTRCOztJQUU1Qiw2Q0FBaUI7O0lBRWpCLCtDQUF3Qzs7SUFFeEMseUNBQWtDOztJQUVsQyw2Q0FBaUI7Ozs7O0lBRUwsbURBQXFEOzs7OztJQUM5RCw0Q0FBdUM7Ozs7O0lBQ3ZDLDBEQUFtRTs7Ozs7SUFDbkUsd0RBQStEOzs7OztJQUMvRCx5REFBMEU7Ozs7O0lBQzFFLHNEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRpbkVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHR2YWx1ZUNoYW5nZXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0c3RhdHVzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdGFjdHVhbFZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlOiBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0Ly8gaWYgKGNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0aWYgKHRoaXMuZWRpdE1vZGUpIHtcblx0XHQvLyBcdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgPSB0cnVlO1xuXHRcdC8vIFx0XHR0aGlzLmVudGVyRWRpdE1vZGUoZmFsc2UpO1xuXHRcdC8vIFx0fSBlbHNlIGlmICghdGhpcy5lZGl0TW9kZSkge1xuXHRcdC8vIFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvL1xuXHRcdC8vIGlmICghdGhpcy5lZGl0TW9kZSkge1xuXHRcdC8vIFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHQvLyB9XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jZWxsRWRpdENsb3NlQWxsU2VydmljZVxuXHRcdFx0Lm9uQ2xvc2VBbGwoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgJiYgdGhpcy5jZWxsLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCk7XG5cdH1cblxuXHRlbnRlckVkaXRNb2RlKGZvcmNlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UuY2xvc2VBbGwoKTtcblxuXHRcdHRpbWVyKDApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5FZGl0TW9kZSA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdFx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLnZhbHVlLFxuXHRcdFx0XHRcdGZvY3VzOiBmb3JjZUNoZWNrLFxuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5lbGVtZW50UmVmXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5vYnNlcnZlRmllbGRTdGF0dXMoKTtcblx0XHRcdFx0dGhpcy5vYnNlcnZlVmFsdWVDaGFuZ2VzKCk7XG5cblx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdEVudGVyKCk7XG5cblx0XHRcdFx0aWYgKCFmb3JjZUNoZWNrKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGV4aXRFZGl0TW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmluRWRpdE1vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHN1Ym1pdENoYW5nZXNBbmRFeGl0KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gdGhpcy5lbnRpdHkuZ2V0SWQoKSxcblx0XHRcdHVwZGF0ZWRWYWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWUsXG5cdFx0XHRmaWVsZElkID0gdGhpcy5jZWxsLmNvbHVtbkZpZWxkSWQ7XG5cblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLmVkaXRJdGVtKG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkSWQsIHVwZGF0ZWRWYWx1ZSkpO1xuXG5cdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUZpZWxkU3RhdHVzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlc0FuZEV4aXQoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRTdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0Q2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVWYWx1ZUNoYW5nZXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdGF0ZShzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZS5uZXh0KHN0YXRlKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVCk7XG5cdH1cbn1cbiJdfQ==