/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/core/domain-read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
import { hermesTimer } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
var StructureCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, elementRef, structureId, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.structureId = structureId;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureCellEditStore = structureCellEditStore;
        _this.cellEditCloseAllService = cellEditCloseAllService;
        _this.sourceCommandService = sourceCommandService;
        _this.inEditMode = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.hermesSubscribeWithoutRender(this.cellEditCloseAllService.onCloseAll(), (/**
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
        hermesTimer(0)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.inEditMode = true;
            _this.valueChanges$ = new ChangedValueEmitter();
            _this.status$ = new ChangedValueEmitter();
            _this.editContext = {
                status: _this.status$,
                valueChanges: _this.valueChanges$,
                value: _this.cell.getValue(_this.entity).value,
                focus: forceCheck,
                parent: _this.elementRef
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
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
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
            .pipe(this.hermesTakeUntil())
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
            .pipe(this.hermesTakeUntil())
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
    /**
     * @protected
     * @return {?}
     */
    StructureCellComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-cell';
    };
    StructureCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-cell][entity][cell]',
                    template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight()}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<div [cell]=\"cell\" [entity]=\"entity\"\n\t\t gui-structure-cell-edit-boolean>\n\t</div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: StructureCellEditArchive },
        { type: StructureCellEditStore },
        { type: StructureCellEditCloseAllService },
        { type: SourceCommandInvoker }
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
    StructureCellComponent.prototype.structureId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUVyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUM5SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDdkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDN0gsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEU7SUFNNEMsa0RBQWM7SUEyQnpELGdDQUE2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O0lBQy9ELHlEQUEwRTs7Ozs7SUFDMUUsc0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlJztcbmltcG9ydCB7IGhlcm1lc1RpbWVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jZWxsXVtlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNlbGw6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0aW5FZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0U3RvcmU6IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2U6IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uub25DbG9zZUFsbCgpLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQgJiYgdGhpcy5jZWxsLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCk7XG5cdH1cblxuXHRlbnRlckVkaXRNb2RlKGZvcmNlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UuY2xvc2VBbGwoKTtcblxuXHRcdGhlcm1lc1RpbWVyKDApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5FZGl0TW9kZSA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdFx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLnZhbHVlLFxuXHRcdFx0XHRcdGZvY3VzOiBmb3JjZUNoZWNrLFxuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5lbGVtZW50UmVmXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5vYnNlcnZlRmllbGRTdGF0dXMoKTtcblx0XHRcdFx0dGhpcy5vYnNlcnZlVmFsdWVDaGFuZ2VzKCk7XG5cblx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdEVudGVyKCk7XG5cblx0XHRcdFx0aWYgKCFmb3JjZUNoZWNrKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGV4aXRFZGl0TW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmluRWRpdE1vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHN1Ym1pdENoYW5nZXNBbmRFeGl0KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gdGhpcy5lbnRpdHkuZ2V0SWQoKSxcblx0XHRcdHVwZGF0ZWRWYWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWUsXG5cdFx0XHRmaWVsZElkID0gdGhpcy5jZWxsLmNvbHVtbkZpZWxkSWQ7XG5cblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLmVkaXRJdGVtKFxuXHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlSWRcblx0XHQpO1xuXG5cdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUZpZWxkU3RhdHVzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlc0FuZEV4aXQoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRTdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0Q2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVWYWx1ZUNoYW5nZXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdGF0ZShzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZS5uZXh0KHN0YXRlKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNlbGwnO1xuXHR9XG59XG4iXX0=