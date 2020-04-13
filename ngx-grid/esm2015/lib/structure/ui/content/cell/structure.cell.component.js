/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../composition/read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandDispatcher } from '../../../ui-api/source/source.command-dispatcher';
import { ChangedValueEmitter } from '../../../../composition/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../composition/read/edit/state/edit.event-type';
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
            /** @type {?} */
            const parentElement = this.elementRef.nativeElement.querySelector('.gui-cell-edit-mode');
            this.editContext = {
                status: this.status$,
                valueChanges: this.valueChanges$,
                value: this.cell.getValue(this.entity),
                focus: forceCheck,
                parent: parentElement
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBU3BHLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjOzs7Ozs7Ozs7SUEyQnpELFlBQTZCLGlCQUFvQyxFQUM3QyxVQUFzQixFQUN0Qix3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QUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXZMRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsK3NDQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBN0JBLGlCQUFpQjtZQUVqQixVQUFVO1lBV0Ysd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQU90QixnQ0FBZ0M7WUFOaEMsdUJBQXVCOzs7cUJBaUI5QixLQUFLO21CQUdMLEtBQUs7dUJBR0wsS0FBSztpQ0FHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFaTix3Q0FDbUI7O0lBRW5CLHNDQUMrQjs7SUFFL0IsMENBQ2tCOztJQUVsQixvREFDNEI7O0lBRTVCLDhDQUNxQjs7SUFFckIsNENBQTRCOztJQUU1Qiw2Q0FBaUI7O0lBRWpCLCtDQUF3Qzs7SUFFeEMseUNBQWtDOztJQUVsQyw2Q0FBaUI7Ozs7O0lBRUwsbURBQXFEOzs7OztJQUM5RCw0Q0FBdUM7Ozs7O0lBQ3ZDLDBEQUFtRTs7Ozs7SUFDbkUsd0RBQStEOzs7OztJQUMvRCx5REFBMEU7Ozs7O0lBQzFFLHNEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNlbGxbZW50aXR5XVtjZWxsXScsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLmNlbGwuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjZWxsOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdGluRWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRlZGl0Q29udGV4dDogYW55O1xuXG5cdHZhbHVlQ2hhbmdlcyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRzdGF0dXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0YWN0dWFsVmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0U3RvcmU6IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2U6IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHQvLyBpZiAoY2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHRpZiAodGhpcy5lZGl0TW9kZSkge1xuXHRcdC8vIFx0XHR0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZCA9IHRydWU7XG5cdFx0Ly8gXHRcdHRoaXMuZW50ZXJFZGl0TW9kZShmYWxzZSk7XG5cdFx0Ly8gXHR9IGVsc2UgaWYgKCF0aGlzLmVkaXRNb2RlKSB7XG5cdFx0Ly8gXHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vXG5cdFx0Ly8gaWYgKCF0aGlzLmVkaXRNb2RlKSB7XG5cdFx0Ly8gXHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdC8vIH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlXG5cdFx0XHQub25DbG9zZUFsbCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZCAmJiB0aGlzLmNlbGwuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKTtcblx0fVxuXG5cdGVudGVyRWRpdE1vZGUoZm9yY2VDaGVjazogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jZWxsRWRpdENsb3NlQWxsU2VydmljZS5jbG9zZUFsbCgpO1xuXG5cdFx0dGltZXIoMClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5pbkVkaXRNb2RlID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPigpO1xuXG5cdFx0XHRcdGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpLWNlbGwtZWRpdC1tb2RlJyk7XG5cblx0XHRcdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzJCxcblx0XHRcdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdFx0XHR2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKHRoaXMuZW50aXR5KSxcblx0XHRcdFx0XHRmb2N1czogZm9yY2VDaGVjayxcblx0XHRcdFx0XHRwYXJlbnQ6IHBhcmVudEVsZW1lbnRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVGaWVsZFN0YXR1cygpO1xuXHRcdFx0XHR0aGlzLm9ic2VydmVWYWx1ZUNoYW5nZXMoKTtcblxuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0RW50ZXIoKTtcblxuXHRcdFx0XHRpZiAoIWZvcmNlQ2hlY2spIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0ZXhpdEVkaXRNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5FZGl0TW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c3VibWl0Q2hhbmdlc0FuZEV4aXQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cblx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRmllbGRTdGF0dXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnN0YXR1cyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0dXMpIHtcblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRDaGFuZ2VzQW5kRXhpdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdFN1Ym1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRDYW5jZWwoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVZhbHVlQ2hhbmdlcygpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN0YXRlKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLm5leHQoc3RhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRDYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUKTtcblx0fVxufVxuIl19