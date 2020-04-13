/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../../../ui-api/structure.command-dispatcher';
import { CompositionWarehouse } from '../../../../../../composition/ui-api/composition.warehouse';
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
                    template: "\n\n\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Ascending<span class=\"gui-sort gui-sort-asc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Descending<span class=\"gui-sort gui-sort-desc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t\t\tNone\n\t\t\t</gui-dropdown-item>\n\n\t\t</gui-dropdown>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFakY7SUE0QndELDhEQUFjO0lBV3JFLDRDQUFvQixpQkFBb0MsRUFDN0MsdUJBQW1ELEVBQ25ELDJCQUFpRDtRQUY1RCxZQUdDLGlCQUFPLFNBQ1A7UUFKbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQTRCO1FBQ25ELGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7UUFSNUQsZUFBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFdkMsWUFBTSxHQUFHLFNBQVMsQ0FBQzs7SUFRbkIsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxVQUFxQjtZQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxJQUFlO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Z0JBMUVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxRQUFRLEVBQUUscTZCQXdCVDtpQkFDRDs7OztnQkFyQ1EsaUJBQWlCO2dCQU1qQiwwQkFBMEI7Z0JBQzFCLG9CQUFvQjs7O3lCQWlDM0IsS0FBSzs7SUE2Q1AseUNBQUM7Q0FBQSxBQTNFRCxDQTRCd0QsY0FBYyxHQStDckU7U0EvQ1ksa0NBQWtDOzs7SUFFOUMsb0RBQ2dDOztJQUVoQyx1REFBdUM7O0lBRXZDLG9EQUFtQjs7SUFFbkIsd0RBQXNCOzs7OztJQUVWLCtEQUE0Qzs7Ozs7SUFDckQscUVBQTJEOzs7OztJQUMzRCx5RUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRyb3Bkb3duIFtwbGFjZW1lbnRdPVwicGxhY2VtZW50XCJcblx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRdPVwiJ0NvbHVtbiBTb3J0J1wiXG5cdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNBc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+QXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1hc2NcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0Rlc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+RGVzY2VuZGluZzxzcGFuIGNsYXNzPVwiZ3VpLXNvcnQgZ3VpLXNvcnQtZGVzY1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5OT05FKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdFx0XHROb25lXG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0PC9ndWktZHJvcGRvd24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cbn1cbiJdfQ==