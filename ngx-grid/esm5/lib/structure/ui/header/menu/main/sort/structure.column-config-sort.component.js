/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, Input } from '@angular/core';
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
                    template: "\n\n\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Ascending<span class=\"gui-sort gui-sort-asc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t\t\t<div class=\"gui-sort-title\">Descending<span class=\"gui-sort gui-sort-desc\"></span></div>\n\t\t\t</gui-dropdown-item>\n\n\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t\t\tNone\n\t\t\t</gui-dropdown-item>\n\n\t\t</gui-dropdown>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUMxSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFakY7SUE0QndELDhEQUFjO0lBV3JFLDRDQUFvQixpQkFBb0MsRUFDN0MsdUJBQWdELEVBQ2hELDJCQUF3RDtRQUZuRSxZQUdDLGlCQUFPLFNBQ1A7UUFKbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFSbkUsZUFBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFdkMsWUFBTSxHQUFHLFVBQVUsQ0FBQzs7SUFRcEIsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxVQUFzQjtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHlEQUFZOzs7O0lBQVosVUFBYSxJQUFnQjtRQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQTFFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLHE2QkF3QlQ7aUJBQ0Q7Ozs7Z0JBckNRLGlCQUFpQjtnQkFNakIsdUJBQXVCO2dCQUN2QiwyQkFBMkI7Ozt5QkFpQ2xDLEtBQUs7O0lBNkNQLHlDQUFDO0NBQUEsQUEzRUQsQ0E0QndELGNBQWMsR0ErQ3JFO1NBL0NZLGtDQUFrQzs7O0lBRTlDLG9EQUNnQzs7SUFFaEMsdURBQXVDOztJQUV2QyxvREFBb0I7O0lBRXBCLHdEQUF1Qjs7Ozs7SUFFWCwrREFBNEM7Ozs7O0lBQ3JELHFFQUF3RDs7Ozs7SUFDeEQseUVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktZHJvcGRvd24gW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dF09XCInQ29sdW1uIFNvcnQnXCJcblx0XHRcdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0XHRcdCAgW3Nob3dPbkhvdmVyXT1cInRydWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5Bc2NlbmRpbmc8c3BhbiBjbGFzcz1cImd1aS1zb3J0IGd1aS1zb3J0LWFzY1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5EZXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1kZXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0XHRcdE5vbmVcblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0c3RhdHVzID0gU29ydFN0YXR1cztcblxuXHRzb3J0U3RhdHVzOiBTb3J0U3RhdHVzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSB0aGlzLmNvbHVtbi5nZXRTb3J0U3RhdHVzKCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uU29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzb3J0U3RhdHVzOiBTb3J0U3RhdHVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuREVTQztcblx0fVxuXG5cdGlzTm9uZVNvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHNvcnQpO1xuXHR9XG59XG4iXX0=