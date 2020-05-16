/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../../../domain-api/structure.command-dispatcher';
import { CompositionWarehouse } from '../../../../../../composition/domain-api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
var StructureColumnConfigSortComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigSortComponent, _super);
    function StructureColumnConfigSortComponent(changeDetectorRef, structureCommandService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCommandService = structureCommandService;
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
        this.structureCommandService.setSortOrder(this.column.getFieldId(), sort);
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
        { type: StructureCommandDispatcher },
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
    StructureColumnConfigSortComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvbWVudS9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzlILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVqRjtJQWtDd0QsOERBQWM7SUFXckUsNENBQW9CLGlCQUFvQyxFQUM3Qyx1QkFBbUQsRUFDbkQsMkJBQWlEO1FBRjVELFlBR0MsaUJBQU8sU0FDUDtRQUptQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFDbkQsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQVI1RCxlQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUV2QyxZQUFNLEdBQUcsU0FBUyxDQUFDOztJQVFuQixDQUFDOzs7O0lBRUQscURBQVE7OztJQUFSO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQXFCO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsdURBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQseURBQVk7Ozs7SUFBWixVQUFhLElBQWU7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkFoRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFFBQVEsRUFBRSw4bUNBOEJUO2lCQUNEOzs7O2dCQTNDUSxpQkFBaUI7Z0JBTWpCLDBCQUEwQjtnQkFDMUIsb0JBQW9COzs7eUJBdUMzQixLQUFLOztJQTZDUCx5Q0FBQztDQUFBLEFBakZELENBa0N3RCxjQUFjLEdBK0NyRTtTQS9DWSxrQ0FBa0M7OztJQUU5QyxvREFDZ0M7O0lBRWhDLHVEQUF1Qzs7SUFFdkMsb0RBQW1COztJQUVuQix3REFBc0I7Ozs7O0lBRVYsK0RBQTRDOzs7OztJQUNyRCxxRUFBMkQ7Ozs7O0lBQzNELHlFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRyb3Bkb3duIFtwbGFjZW1lbnRdPVwicGxhY2VtZW50XCJcblx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRdPVwiJ0NvbHVtbiBTb3J0J1wiXG5cdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNBc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+QXNjZW5kaW5nXG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbc29ydF09XCJ0cnVlXCIgW3JvdGF0ZURlZ109XCIwXCI+XG5cdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkRFU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPkRlc2NlbmRpbmdcblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uIFtzb3J0XT1cInRydWVcIiBbcm90YXRlRGVnXT1cIjE4MFwiPlxuXHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5OT05FKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdFx0XHROb25lXG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0PC9ndWktZHJvcGRvd24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cbn1cbiJdfQ==