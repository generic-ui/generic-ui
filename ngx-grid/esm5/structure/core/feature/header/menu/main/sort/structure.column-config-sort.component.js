/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../composition/domain-api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
import { SortingCommandInvoker } from '../../../../../../sorting/domain-api/sorting.command-invoker';
import { CompositionId } from '../../../../../../../composition/domain/composition.id';
import { StructureId } from '../../../../../domain/structure.id';
var StructureColumnConfigSortComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigSortComponent, _super);
    function StructureColumnConfigSortComponent(changeDetectorRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        var _this = _super.call(this) || this;
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
        this.compositionReadModelService
            .onSortOrder(this.column.getFieldId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} sortStatus
         * @return {?}
         */
        function (sortStatus) {
            _this.sortStatus = sortStatus;
            _this.changeDetectorRef.detectChanges();
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
    StructureColumnConfigSortComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-sort',
                    template: "\n\n\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Ascending\n\t\t\t\t\t<gui-structure-column-menu-arrow-icon [sort]=\"true\" [rotateDeg]=\"0\">\n\t\t\t\t\t</gui-structure-column-menu-arrow-icon>\n\t\t\t\t</div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Descending\n\t\t\t\t\t<gui-structure-column-menu-arrow-icon [sort]=\"true\" [rotateDeg]=\"180\">\n\t\t\t\t\t</gui-structure-column-menu-arrow-icon>\n\t\t\t\t</div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t\t\tNone\n\t\t\t</gui-dropdown-item>\n\n\t\t</gui-dropdown>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigSortComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CompositionId },
        { type: StructureId },
        { type: SortingCommandInvoker },
        { type: CompositionWarehouse }
    ]; };
    StructureColumnConfigSortComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureColumnConfigSortComponent;
}(SmartComponent));
export { StructureColumnConfigSortComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.column;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUNqSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVqRTtJQWtDd0QsOERBQWM7SUFXckUsNENBQTZCLGlCQUFvQyxFQUM3QyxhQUE0QixFQUM1QixXQUF3QixFQUN4Qix3QkFBK0MsRUFDL0MsMkJBQWlEO1FBSnJFLFlBS0MsaUJBQU8sU0FDUDtRQU40Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBdUI7UUFDL0MsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQVZyRSxlQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUV2QyxZQUFNLEdBQUcsU0FBUyxDQUFDOztJQVVuQixDQUFDOzs7O0lBRUQscURBQVE7OztJQUFSO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQXFCO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsdURBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQseURBQVk7Ozs7SUFBWixVQUFhLElBQWU7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7Z0JBbEZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxRQUFRLEVBQUUsOG1DQThCVDtpQkFDRDs7OztnQkE3Q1EsaUJBQWlCO2dCQVNqQixhQUFhO2dCQUNiLFdBQVc7Z0JBRlgscUJBQXFCO2dCQUZyQixvQkFBb0I7Ozt5QkEwQzNCLEtBQUs7O0lBK0NQLHlDQUFDO0NBQUEsQUFuRkQsQ0FrQ3dELGNBQWMsR0FpRHJFO1NBakRZLGtDQUFrQzs7O0lBRTlDLG9EQUNnQzs7SUFFaEMsdURBQXVDOztJQUV2QyxvREFBbUI7O0lBRW5CLHdEQUFzQjs7Ozs7SUFFViwrREFBcUQ7Ozs7O0lBQzlELDJEQUE2Qzs7Ozs7SUFDN0MseURBQXlDOzs7OztJQUN6QyxzRUFBZ0U7Ozs7O0lBQ2hFLHlFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc29ydGluZy9kb21haW4tYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1kcm9wZG93biBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHRcdFx0ICBbZHJvcGRvd25UZXh0XT1cIidDb2x1bW4gU29ydCdcIlxuXHRcdFx0XHRcdCAgW3dpZHRoXT1cIjIyNVwiXG5cdFx0XHRcdFx0ICBbc2hvd09uSG92ZXJdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1kcm9wZG93blwiPlxuXG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuQVNDKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzQXNjU29ydCgpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPkFzY2VuZGluZ1xuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24gW3NvcnRdPVwidHJ1ZVwiIFtyb3RhdGVEZWddPVwiMFwiPlxuXHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5EZXNjZW5kaW5nXG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbc29ydF09XCJ0cnVlXCIgW3JvdGF0ZURlZ109XCIxODBcIj5cblx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuTk9ORSlcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc05vbmVTb3J0KClcIj5cblx0XHRcdFx0Tm9uZVxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdDwvZ3VpLWRyb3Bkb3duPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudCA9IFBsYWNlbWVudC5SaWdodDtcblxuXHRzdGF0dXMgPSBTb3J0T3JkZXI7XG5cblx0c29ydFN0YXR1czogU29ydE9yZGVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnNldFNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHNvcnQsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==