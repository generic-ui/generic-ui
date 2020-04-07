/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
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
var StructureCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, elementRef, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureCellEditStore = structureCellEditStore;
        _this.cellEditCloseAllService = cellEditCloseAllService;
        _this.sourceCommandService = sourceCommandService;
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
     * @return {?}
     */
    StructureCellComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cellEditCloseAllService
            .onCloseAll()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.exitEditMode();
        }));
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.isCellEditingEnabled = /**
     * @return {?}
     */
    function () {
        return this.cellEditingEnabled && this.cell.isCellEditingEnabled();
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
        var _this = this;
        if (forceCheck === void 0) { forceCheck = true; }
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        timer(0)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.inEditMode = true;
            _this.valueChanges$ = new ChangedValueEmitter();
            _this.status$ = new ChangedValueEmitter();
            /** @type {?} */
            var parentElement = _this.elementRef.nativeElement.querySelector('.gui-cell-edit-mode');
            _this.editContext = {
                status: _this.status$,
                valueChanges: _this.valueChanges$,
                value: _this.cell.getValue(_this.entity),
                focus: forceCheck,
                parent: parentElement
            };
            _this.observeFieldStatus();
            _this.observeValueChanges();
            _this.publishEditEnter();
            if (!forceCheck) {
                _this.changeDetectorRef.markForCheck();
            }
            else {
                _this.changeDetectorRef.detectChanges();
            }
        }));
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
                    selector: 'gui-structure-cell[entity][cell]',
                    template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight()}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<gui-structure-cell-edit-boolean [cell]=\"cell\"\n\t\t\t\t\t\t\t\t\t [entity]=\"entity\">\n\t</gui-structure-cell-edit-boolean>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureCellEditArchive },
        { type: StructureCellEditStore },
        { type: StructureCellEditCloseAllService },
        { type: SourceCommandDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQWEsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNySCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHcEc7SUFNNEMsa0RBQWM7SUEyQnpELGdDQUE2QixpQkFBb0MsRUFDN0MsVUFBc0IsRUFDdEIsd0JBQWtELEVBQ2xELHNCQUE4QyxFQUM5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K0I7O0lBRS9CLDBDQUNrQjs7SUFFbEIsb0RBQzRCOztJQUU1Qiw4Q0FDcUI7O0lBRXJCLDRDQUE0Qjs7SUFFNUIsNkNBQWlCOztJQUVqQiwrQ0FBd0M7O0lBRXhDLHlDQUFrQzs7SUFFbEMsNkNBQWlCOzs7OztJQUVMLG1EQUFxRDs7Ozs7SUFDOUQsNENBQXVDOzs7OztJQUN2QywwREFBbUU7Ozs7O0lBQ25FLHdEQUErRDs7Ozs7SUFDL0QseURBQTBFOzs7OztJQUMxRSxzREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY2VsbFtlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNlbGw6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0aW5FZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdENsb3NlQWxsU2VydmljZTogU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh0aGlzLmVkaXRNb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5lbnRlckVkaXRNb2RlKGZhbHNlKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuZWRpdE1vZGUpIHtcblx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuZWRpdE1vZGUpIHtcblx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Vcblx0XHRcdC5vbkNsb3NlQWxsKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkICYmIHRoaXMuY2VsbC5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpO1xuXHR9XG5cblx0ZW50ZXJFZGl0TW9kZShmb3JjZUNoZWNrOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlLmNsb3NlQWxsKCk7XG5cblx0XHR0aW1lcigwKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluRWRpdE1vZGUgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktY2VsbC1lZGl0LW1vZGUnKTtcblxuXHRcdFx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0XHRcdGZvY3VzOiBmb3JjZUNoZWNrLFxuXHRcdFx0XHRcdHBhcmVudDogcGFyZW50RWxlbWVudFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMub2JzZXJ2ZUZpZWxkU3RhdHVzKCk7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZVZhbHVlQ2hhbmdlcygpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaEVkaXRFbnRlcigpO1xuXG5cdFx0XHRcdGlmICghZm9yY2VDaGVjaykge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdH1cblxuXHRleGl0RWRpdE1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5pbkVkaXRNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRzdWJtaXRDaGFuZ2VzQW5kRXhpdCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IHRoaXMuZW50aXR5LmdldElkKCksXG5cdFx0XHR1cGRhdGVkVmFsdWUgPSB0aGlzLmFjdHVhbFZhbHVlLFxuXHRcdFx0ZmllbGRJZCA9IHRoaXMuY2VsbC5jb2x1bW5GaWVsZElkO1xuXG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5lZGl0SXRlbShuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZElkLCB1cGRhdGVkVmFsdWUpKTtcblxuXHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVGaWVsZFN0YXR1cygpOiB2b2lkIHtcblxuXHRcdHRoaXMuc3RhdHVzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0dXM6IEVkaXRFdmVudFR5cGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdENoYW5nZXNBbmRFeGl0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0U3VibWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdENhbmNlbCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3RhdGUoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmUubmV4dChzdGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0RW50ZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQpO1xuXHR9XG59XG4iXX0=