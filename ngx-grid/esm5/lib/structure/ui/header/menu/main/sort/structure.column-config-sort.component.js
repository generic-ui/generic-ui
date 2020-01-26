/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortStatus } from '../../../../../../composition/domain/command/column/sort/sort-status';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../../../ui-api/structure/structure-command.service';
import { CompositionReadModelService } from '../../../../../../composition/ui-api/composition-read-model.service';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
var StructureColumnConfigSortComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigSortComponent, _super);
    function StructureColumnConfigSortComponent(changeDetectorRef, structureCommandService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCommandService = structureCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.placement = Placement.Right;
        _this.status = SortStatus;
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
        return this.sortStatus === SortStatus.ASC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.isDescSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortStatus.DESC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigSortComponent.prototype.isNoneSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortStatus.NONE;
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
                    template: "\n\n\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isAscSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Ascending<span class=\"gui-sort gui-sort-asc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isDescSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Descending<span class=\"gui-sort gui-sort-desc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isNoneSort()\">\n\t\t\t\tTurned off\n\t\t\t</gui-dropdown-item>\n\n\t\t</gui-dropdown>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigSortComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureCommandService },
        { type: CompositionReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUMxSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFakY7SUE0QndELDhEQUFjO0lBV3JFLDRDQUFvQixpQkFBb0MsRUFDN0MsdUJBQWdELEVBQ2hELDJCQUF3RDtRQUZuRSxZQUdDLGlCQUFPLFNBQ1A7UUFKbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFSbkUsZUFBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFdkMsWUFBTSxHQUFHLFVBQVUsQ0FBQzs7SUFRcEIsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxVQUFzQjtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxJQUFnQjtRQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQTFFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLHE2QkF3QlQ7aUJBQ0Q7Ozs7Z0JBckNrQyxpQkFBaUI7Z0JBTTNDLHVCQUF1QjtnQkFDdkIsMkJBQTJCOzs7eUJBaUNsQyxLQUFLOztJQTZDUCx5Q0FBQztDQUFBLEFBM0VELENBNEJ3RCxjQUFjLEdBK0NyRTtTQS9DWSxrQ0FBa0M7OztJQUU5QyxvREFDZ0M7O0lBRWhDLHVEQUF1Qzs7SUFFdkMsb0RBQW9COztJQUVwQix3REFBdUI7Ozs7O0lBRVgsK0RBQTRDOzs7OztJQUNyRCxxRUFBd0Q7Ozs7O0lBQ3hELHlFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRyb3Bkb3duIFtwbGFjZW1lbnRdPVwicGxhY2VtZW50XCJcblx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRdPVwiJ0NvbHVtbiBTb3J0J1wiXG5cdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzQXNjU29ydCgpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPkFzY2VuZGluZzxzcGFuIGNsYXNzPVwiZ3VpLXNvcnQgZ3VpLXNvcnQtYXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkRFU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5EZXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1kZXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdFx0XHRUdXJuZWQgb2ZmXG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0PC9ndWktZHJvcGRvd24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRTdGF0dXM7XG5cblx0c29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydFN0YXR1cykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0U3RhdHVzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuTk9ORTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihzb3J0OiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCBzb3J0KTtcblx0fVxufVxuIl19