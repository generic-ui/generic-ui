/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
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
var StructureCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, elementRef, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
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
     * @return {?}
     */
    StructureCellComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQzlILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHcEc7SUFNNEMsa0RBQWM7SUEyQnpELGdDQUE2QixpQkFBb0MsRUFDN0MsVUFBc0IsRUFDdEIsd0JBQWtELEVBQ2xELHNCQUE4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QUFDO0lBQ3JELENBQUM7Ozs7O0lBRU8sa0RBQWlCOzs7O0lBQXpCO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU8sa0RBQWlCOzs7O0lBQXpCO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRVMsZ0RBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7O2dCQTNLRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQscXFDQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF0QmdELGlCQUFpQjtnQkFBYSxVQUFVO2dCQU1oRix3QkFBd0I7Z0JBQ3hCLHNCQUFzQjtnQkFPdEIsZ0NBQWdDO2dCQU5oQyxvQkFBb0I7Ozt5QkFpQjNCLEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLO3FDQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUF3SlAsNkJBQUM7Q0FBQSxBQTVLRCxDQU00QyxjQUFjLEdBc0t6RDtTQXRLWSxzQkFBc0I7OztJQUVsQyx3Q0FDbUI7O0lBRW5CLHNDQUMrQjs7SUFFL0IsMENBQ2tCOztJQUVsQixvREFDNEI7O0lBRTVCLDhDQUNxQjs7SUFFckIsNENBQTRCOztJQUU1Qiw2Q0FBaUI7O0lBRWpCLCtDQUF3Qzs7SUFFeEMseUNBQWtDOztJQUVsQyw2Q0FBaUI7Ozs7O0lBRUwsbURBQXFEOzs7OztJQUM5RCw0Q0FBdUM7Ozs7O0lBQ3ZDLDBEQUFtRTs7Ozs7SUFDbkUsd0RBQStEOzs7OztJQUMvRCx5REFBMEU7Ozs7O0lBQzFFLHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNlbGxdW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNlbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRpbkVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHR2YWx1ZUNoYW5nZXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0c3RhdHVzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdGFjdHVhbFZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlOiBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLmNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlXG5cdFx0XHQub25DbG9zZUFsbCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZCAmJiB0aGlzLmNlbGwuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKTtcblx0fVxuXG5cdGVudGVyRWRpdE1vZGUoZm9yY2VDaGVjazogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jZWxsRWRpdENsb3NlQWxsU2VydmljZS5jbG9zZUFsbCgpO1xuXG5cdFx0dGltZXIoMClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5pbkVkaXRNb2RlID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPigpO1xuXG5cdFx0XHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHRcdFx0dmFsdWVDaGFuZ2VzOiB0aGlzLnZhbHVlQ2hhbmdlcyQsXG5cdFx0XHRcdFx0dmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSh0aGlzLmVudGl0eSkudmFsdWUsXG5cdFx0XHRcdFx0Zm9jdXM6IGZvcmNlQ2hlY2ssXG5cdFx0XHRcdFx0cGFyZW50OiB0aGlzLmVsZW1lbnRSZWZcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVGaWVsZFN0YXR1cygpO1xuXHRcdFx0XHR0aGlzLm9ic2VydmVWYWx1ZUNoYW5nZXMoKTtcblxuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0RW50ZXIoKTtcblxuXHRcdFx0XHRpZiAoIWZvcmNlQ2hlY2spIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0ZXhpdEVkaXRNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5FZGl0TW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c3VibWl0Q2hhbmdlc0FuZEV4aXQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cblx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRmllbGRTdGF0dXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnN0YXR1cyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0dXMpIHtcblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRDaGFuZ2VzQW5kRXhpdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdFN1Ym1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRDYW5jZWwoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVZhbHVlQ2hhbmdlcygpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN0YXRlKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLm5leHQoc3RhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRDYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY2VsbCc7XG5cdH1cbn1cbiJdfQ==