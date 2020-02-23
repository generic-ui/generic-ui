/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../composition/domain/read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandService } from '../../../ui-api/source/source-command.service';
import { ChangedValueEmitter } from '../../../../composition/domain/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../composition/domain/read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../domain/source/command/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructureSearchPhraseRepository } from '../../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../domain/structure-id';
var StructureCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, structureCellEditArchive, structureCellEditStore, sourceCommandService, id, structureSearchPhraseRepository) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureCellEditStore = structureCellEditStore;
        _this.sourceCommandService = sourceCommandService;
        _this.id = id;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        _this.inEditMode = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.editMode !== undefined) {
            if (this.editMode) {
                this.cellEditingEnabled = true;
                this.enterEditMode(false);
            }
            else if (!this.editMode) {
                this.exitEditMode();
            }
        }
        if (!this.editMode) {
            this.exitEditMode();
        }
    };
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    StructureCellComponent.prototype.enterEditMode = /**
     * @param {?=} forceCheck
     * @return {?}
     */
    function (forceCheck) {
        if (forceCheck === void 0) { forceCheck = true; }
        if (!this.cellEditingEnabled) {
            return;
        }
        this.inEditMode = true;
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity),
            focus: forceCheck
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
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.exitEditMode = /**
     * @return {?}
     */
    function () {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.submitChangesAndExit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemId = this.entity.getId();
        /** @type {?} */
        var updatedValue = this.actualValue;
        /** @type {?} */
        var fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
        this.exitEditMode();
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeFieldStatus = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            switch (status) {
                case EditEventType.SUBMIT:
                    _this.submitChangesAndExit();
                    _this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    _this.exitEditMode();
                    _this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.actualValue = value;
        }));
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.structureCellEditStore.next(state);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.ENTER);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditCancel = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.CANCEL);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditSubmit = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.SUBMIT);
    };
    StructureCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-cell',
                    template: "\n\n\t\t<span *ngIf=\"!inEditMode\"\n\t\t\t  (click)=\"enterEditMode()\">\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t\t<span *ngIf=\"inEditMode\" class=\"gui-cell-edit-mode\">\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\t\tcontext: editContext\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureCellEditArchive },
        { type: StructureCellEditStore },
        { type: SourceCommandService },
        { type: StructureId },
        { type: StructureSearchPhraseRepository }
    ]; };
    StructureCellComponent.propDecorators = {
        entity: [{ type: Input }],
        cell: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditingEnabled: [{ type: Input }],
        searchPhrase: [{ type: Input }]
    };
    return StructureCellComponent;
}(SmartComponent));
export { StructureCellComponent };
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
    StructureCellComponent.prototype.sourceCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckosT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3RILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMvRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDckksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzNEO0lBdUI0QyxrREFBYztJQTJCekQsZ0NBQW9CLGlCQUFvQyxFQUM3Qyx3QkFBa0QsRUFDbEQsc0JBQThDLEVBQzlDLG9CQUEwQyxFQUMxQyxFQUFl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LFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSw4Y0FpQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF2Q2lDLGlCQUFpQjtnQkFLMUMsd0JBQXdCO2dCQUN4QixzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtnQkFPcEIsV0FBVztnQkFEWCwrQkFBK0I7Ozt5QkE2QnRDLEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLO3FDQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUEySVAsNkJBQUM7Q0FBQSxBQWhMRCxDQXVCNEMsY0FBYyxHQXlKekQ7U0F6Slksc0JBQXNCOzs7SUFFbEMsd0NBQ21COztJQUVuQixzQ0FDK0I7O0lBRS9CLDBDQUNrQjs7SUFFbEIsb0RBQzRCOztJQUU1Qiw4Q0FDcUI7O0lBRXJCLDRDQUE0Qjs7SUFFNUIsNkNBQWlCOztJQUVqQiwrQ0FBd0M7O0lBRXhDLHlDQUFrQzs7SUFFbEMsNkNBQWlCOzs7OztJQUVMLG1EQUE0Qzs7Ozs7SUFDckQsMERBQTBEOzs7OztJQUMxRCx3REFBc0Q7Ozs7O0lBQ3RELHNEQUFrRDs7Ozs7SUFDbEQsb0NBQXVCOzs7OztJQUN2QixpRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuICpuZ0lmPVwiIWluRWRpdE1vZGVcIlxuXHRcdFx0ICAoY2xpY2spPVwiZW50ZXJFZGl0TW9kZSgpXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLnRlbXBsYXRlO1xuXHRcdFx0XHRcdGNvbnRleHQ6IHsgZWxlbWVudDogY2VsbC5nZXRWYWx1ZShlbnRpdHksIHNlYXJjaFBocmFzZSkgfVwiPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9zcGFuPlxuXG5cdFx0PHNwYW4gKm5nSWY9XCJpbkVkaXRNb2RlXCIgY2xhc3M9XCJndWktY2VsbC1lZGl0LW1vZGVcIj5cblx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRcdGNvbnRleHQ6IGVkaXRDb250ZXh0XCI+XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L3NwYW4+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRpbkVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHR2YWx1ZUNoYW5nZXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0c3RhdHVzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdGFjdHVhbFZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgaWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHRoaXMuZWRpdE1vZGUpIHtcblx0XHRcdFx0dGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmVudGVyRWRpdE1vZGUoZmFsc2UpO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5lZGl0TW9kZSkge1xuXHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5lZGl0TW9kZSkge1xuXHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHR9XG5cdH1cblxuXHRlbnRlckVkaXRNb2RlKGZvcmNlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuY2VsbEVkaXRpbmdFbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbkVkaXRNb2RlID0gdHJ1ZTtcblxuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzJCxcblx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0dmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSh0aGlzLmVudGl0eSksXG5cdFx0XHRmb2N1czogZm9yY2VDaGVja1xuXHRcdH07XG5cblx0XHR0aGlzLm9ic2VydmVGaWVsZFN0YXR1cygpO1xuXHRcdHRoaXMub2JzZXJ2ZVZhbHVlQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5wdWJsaXNoRWRpdEVudGVyKCk7XG5cblx0XHRpZiAoIWZvcmNlQ2hlY2spIHtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblxuXHR9XG5cblx0ZXhpdEVkaXRNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5FZGl0TW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c3VibWl0Q2hhbmdlc0FuZEV4aXQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cblx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRmllbGRTdGF0dXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnN0YXR1cyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0dXMpIHtcblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRDaGFuZ2VzQW5kRXhpdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdFN1Ym1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRDYW5jZWwoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVZhbHVlQ2hhbmdlcygpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN0YXRlKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLm5leHQoc3RhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRDYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUKTtcblx0fVxuXG59XG4iXX0=