/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../source/core/api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../source/core/api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../source/core/api/row-selection';
var SelectAllComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectAllComponent, _super);
    function SelectAllComponent(changeDetectorRef, elementRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.rowSelectionModeRepository = rowSelectionModeRepository;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.formationWarehouse = formationWarehouse;
        _this.modeMulti = false;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectAllComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.formationWarehouse.onMode(this.structureId), (/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.modeMulti = mode === RowSelectionMode.MULTIPLE;
        }));
        this.hermesSubscribe(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (/**
         * @param {?} rowSelectedReadModel
         * @return {?}
         */
        function (rowSelectedReadModel) {
            _this.selectAllChecked = rowSelectedReadModel.isAllSelected();
            _this.selectAllIndeterminate = rowSelectedReadModel.isIndeterminate();
        }));
    };
    /**
     * @return {?}
     */
    SelectAllComponent.prototype.toggleSelectAll = /**
     * @return {?}
     */
    function () {
        if (this.selectAllIndeterminate) {
            this.formationCommandDispatcher.unselectAll(this.structureId);
        }
        else {
            if (this.selectAllChecked) {
                this.formationCommandDispatcher.unselectAll(this.structureId);
            }
            else {
                this.formationCommandDispatcher.selectAll(this.structureId);
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    SelectAllComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-select-all';
    };
    SelectAllComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-select-all]',
                    template: "<gui-checkbox (changed)=\"toggleSelectAll()\"\n\t\t\t  *ngIf=\"modeMulti\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n</gui-checkbox>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SelectAllComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: RowSelectionModeRepository },
        { type: FormationCommandInvoker },
        { type: FormationWarehouse }
    ]; };
    return SelectAllComponent;
}(SmartComponent));
export { SelectAllComponent };
if (false) {
    /** @type {?} */
    SelectAllComponent.prototype.selectAllChecked;
    /** @type {?} */
    SelectAllComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    SelectAllComponent.prototype.modeMulti;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.rowSelectionModeRepository;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.formationWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVoRjtJQU13Qyw4Q0FBYztJQVFyRCw0QkFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsMEJBQXNELEVBQ3RELDBCQUFtRCxFQUNuRCxrQkFBc0M7UUFMMUQsWUFNQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVAxRCxlQUFTLEdBQVksS0FBSyxDQUFDOztJQVMzQixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZEEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7O1FBQ2hELFVBQUMsSUFBc0I7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ3JELENBQUMsRUFDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDaEUsVUFBQyxvQkFBMEM7WUFDMUMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdELEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0RSxDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFFQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDOzs7OztJQUVTLDRDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOztnQkF6REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDBPQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFmaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBRWpFLFdBQVc7Z0JBS1gsMEJBQTBCO2dCQUoxQix1QkFBdUI7Z0JBRXZCLGtCQUFrQjs7SUFnRTNCLHlCQUFDO0NBQUEsQUEzREQsQ0FNd0MsY0FBYyxHQXFEckQ7U0FyRFksa0JBQWtCOzs7SUFFOUIsOENBQTBCOztJQUUxQixvREFBZ0M7O0lBRWhDLHVDQUEyQjs7Ozs7SUFFZiwrQ0FBcUQ7Ozs7O0lBRTlELHlDQUF5Qzs7Ozs7SUFDekMsd0RBQXVFOzs7OztJQUN2RSx3REFBb0U7Ozs7O0lBQ3BFLGdEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zZWxlY3QtYWxsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtYWxsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHRtb2RlTXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vbk1vZGUodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQobW9kZTogUm93U2VsZWN0aW9uTW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGVNdWx0aSA9IG1vZGUgPT09IFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Uub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChyb3dTZWxlY3RlZFJlYWRNb2RlbDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNBbGxTZWxlY3RlZCgpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUoKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0QWxsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VsZWN0LWFsbCc7XG5cdH1cblxufVxuIl19