/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/core/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/component/smart-component';
import { SortingCommandInvoker } from '../../../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../../../core/api/structure.id';
var StructureColumnConfigSortComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigSortComponent, _super);
    function StructureColumnConfigSortComponent(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionId = compositionId;
        _this.structureId = structureId;
        _this.sortingCommandDispatcher = sortingCommandDispatcher;
        _this.compositionReadModelService = compositionReadModelService;
        _this.placement = Placement.Right;
        _this.status = SortOrder;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sortStatus = this.column.getSortStatus();
        this.hermesSubscribe(this.compositionReadModelService.onSortOrder(this.column.getFieldId(), this.compositionId), (/**
         * @param {?} sortStatus
         * @return {?}
         */
        function (sortStatus) {
            _this.sortStatus = sortStatus;
        }));
    };
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.isAscSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.ASC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.isDescSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.DESC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.isNoneSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortOrder.NONE;
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.setSortOrder = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        event.stopPropagation();
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-config-sort';
    };
    StructureColumnConfigSortComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-config-sort]',
                    template: "<gui-dropdown [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [rotateDeg]=\"0\" [sort]=\"true\" gui-structure-column-menu-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [rotateDeg]=\"180\" [sort]=\"true\" gui-structure-column-menu-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigSortComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: CompositionId },
        { type: StructureId },
        { type: SortingCommandInvoker },
        { type: CompositionWarehouse }
    ]; };
    StructureColumnConfigSortComponent.propDecorators = {
        column: [{ type: Input }],
        dropdownTextTranslation: [{ type: Input }]
    };
    return StructureColumnConfigSortComponent;
}(SmartComponent));
export { StructureColumnConfigSortComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.dropdownTextTranslation;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.placement;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.status;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.sortingCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDbEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHdEU7SUFNd0QsOERBQWM7SUFjckUsNENBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLHdCQUErQyxFQUMvQywyQkFBaUQ7UUFMckUsWUFNQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQXVCO1FBQy9DLGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7UUFYckUsZUFBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFdkMsWUFBTSxHQUFHLFNBQVMsQ0FBQzs7SUFXbkIsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDOzs7O1FBQzFGLFVBQUMsVUFBcUI7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDOUIsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsc0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxJQUFlO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Ozs7O0lBRVMsNERBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGtDQUFrQyxDQUFDO0lBQzNDLENBQUM7O2dCQTNERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsa29DQUE0RDtvQkFDNUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFsQmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQVNqRSxhQUFhO2dCQUNiLFdBQVc7Z0JBRlgscUJBQXFCO2dCQUZyQixvQkFBb0I7Ozt5QkFlM0IsS0FBSzswQ0FHTCxLQUFLOztJQWlEUCx5Q0FBQztDQUFBLEFBNURELENBTXdELGNBQWMsR0FzRHJFO1NBdERZLGtDQUFrQzs7O0lBRTlDLG9EQUNnQzs7SUFFaEMscUVBQ2dDOztJQUVoQyx1REFBdUM7O0lBRXZDLG9EQUFtQjs7SUFFbkIsd0RBQXNCOzs7OztJQUVWLCtEQUFxRDs7Ozs7SUFFOUQsMkRBQTZDOzs7OztJQUM3Qyx5REFBeUM7Ozs7O0lBQ3pDLHNFQUFnRTs7Ozs7SUFDaEUseUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHRUcmFuc2xhdGlvbjogc3RyaW5nO1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHRoaXMuY29sdW1uLmdldFNvcnRTdGF0dXMoKTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Uub25Tb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KHNvcnRTdGF0dXM6IFNvcnRPcmRlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0U3RhdHVzO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnNldFNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHNvcnQsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCc7XG5cdH1cbn1cbiJdfQ==