/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { SortStatus } from '../../../domain/composition/command/column/sort/sort-status';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { Placement } from '@generic-ui/fabric';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
var StructureColumnConfigComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigComponent, _super);
    function StructureColumnConfigComponent(changeDetectorRef, structureCommandService, compositionReadModelService, structureColumnMenuConfigArchive, column) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCommandService = structureCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.column = column;
        _this.status = SortStatus;
        _this.placement = Placement.Right;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.ngOnInit = /**
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
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.config && this.config.isEnabled();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.toggleSort = /**
     * @return {?}
     */
    function () {
        this.structureCommandService.toggleSort(this.column.getFieldId());
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.isAscSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortStatus.ASC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.isDescSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortStatus.DESC;
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.isNoneSort = /**
     * @return {?}
     */
    function () {
        return this.sortStatus === SortStatus.NONE;
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.setSortOrder = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        this.structureCommandService.setSortOrder(this.column.getFieldId(), sort);
    };
    StructureColumnConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isAscSort()\">\n\t\t\t\t\t\t\t\t\t<div class=\"gui-sort-title\">Ascending<span class=\"gui-sort gui-sort-asc\"></span></div>\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isDescSort()\">\n\t\t\t\t\t\t\t\t\t<div class=\"gui-sort-title\">Descending<span class=\"gui-sort gui-sort-desc\"></span></div>\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isNoneSort()\">\n\t\t\t\t\t\t\t\t\tTurned off\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t</gui-dropdown>\n\t\t\t\t\t\t</div>\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Autosize This Column</div>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Autosize All Column</div>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Reset Columns</div>-->\n<!--\t\t\t\t\t\t<hr>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">GenericUI is Great</div>-->\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilter()\">\n\t\t\t\t\t\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\t\t\t\t\t\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumns()\">\n\t\t\t\t\t\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t\t\t<gui-structure-menu-column-manager>\n\t\t\t\t\t\t</gui-structure-menu-column-manager>\n\t\t\t\t\t\t\n\t\t\t\t\t</gui-tab-item>\n\t\t\t\t\t\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureCommandService },
        { type: CompositionReadModelService },
        { type: StructureColumnMenuConfigArchive },
        { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
    ]; };
    StructureColumnConfigComponent.propDecorators = {
        headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
    };
    return StructureColumnConfigComponent;
}(SmartComponent));
export { StructureColumnConfigComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigComponent.prototype.headerSortMenu;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.config;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.sortStatus;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.status;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJakc7SUFrRW9ELDBEQUFjO0lBYWpFLHdDQUFvQixpQkFBb0MsRUFDN0MsdUJBQWdELEVBQ2hELDJCQUF3RCxFQUN4RCxnQ0FBa0UsRUFDaEQsTUFBK0I7UUFKNUQsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDaEQsWUFBTSxHQUFOLE1BQU0sQ0FBeUI7UUFSNUQsWUFBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixlQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7SUFRdkMsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQXVCQztRQXJCQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQXNCO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFpQztZQUM1QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxrREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsbURBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscURBQVk7Ozs7SUFBWixVQUFhLElBQWdCO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkF0SUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpNkVBK0RUO2lCQUNEOzs7O2dCQTdFUSxpQkFBaUI7Z0JBRWpCLHVCQUF1QjtnQkFJdkIsMkJBQTJCO2dCQUUzQixnQ0FBZ0M7Z0JBTGhDLHVCQUF1Qix1QkE0RjNCLE1BQU0sU0FBQyxRQUFROzs7aUNBZmxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBb0UvQyxxQ0FBQztDQUFBLEFBeElELENBa0VvRCxjQUFjLEdBc0VqRTtTQXRFWSw4QkFBOEI7OztJQUUxQyx3REFDMkI7O0lBRTNCLGdEQUFrQzs7SUFFbEMsb0RBQXVCOztJQUV2QixnREFBb0I7O0lBRXBCLG1EQUF1Qzs7Ozs7SUFFM0IsMkRBQTRDOzs7OztJQUNyRCxpRUFBd0Q7Ozs7O0lBQ3hELHFFQUFnRTs7Ozs7SUFDaEUsMEVBQTBFOzs7OztJQUMxRSxnREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtdGFiXCI+XG5cblx0XHRcdDxndWktdGFiIFttZW51XT1cImNvbmZpZy5nZXRNZW51cygpXCIgW2FjdGl2ZV09XCJjb25maWcuZ2V0QWN0aXZlTWVudSgpXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc01haW5FbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gY2xhc3M9XCJndWktdGFiLWl0ZW0tZHJvcGRvd25cIiBbdGFiXT1cImNvbmZpZy5nZXRNYWluTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2ID5cblx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93biBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dF09XCInQ29sdW1uIFNvcnQnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbc2hvd09uSG92ZXJdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLXRleHQtYm9sZF09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+QXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1hc2NcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci10ZXh0LWJvbGRdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5EZXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1kZXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdFx0XHRcdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuTk9ORSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0VHVybmVkIG9mZlxuXHRcdFx0XHRcdFx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdFx0XHRcdFx0PC9ndWktZHJvcGRvd24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5BdXRvc2l6ZSBUaGlzIENvbHVtbjwvZGl2Pi0tPlxuPCEtLVx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPkF1dG9zaXplIEFsbCBDb2x1bW48L2Rpdj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5SZXNldCBDb2x1bW5zPC9kaXY+LS0+XG48IS0tXHRcdFx0XHRcdFx0PGhyPi0tPlxuPCEtLVx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPkdlbmVyaWNVSSBpcyBHcmVhdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNGaWx0ZXIoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0RmlsdGVyTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRGaWx0ZXJNZW51KCl9fTwvZGl2PlxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzQ29sdW1ucygpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBbdGFiXT1cImNvbmZpZy5nZXRDb2x1bW5NZW51KClcIj5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtbWVudS1jb2x1bW4tbWFuYWdlcj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2d1aS10YWI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlclNvcnRNZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlclNvcnRNZW51OiBFbGVtZW50UmVmO1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRzb3J0U3RhdHVzOiBTb3J0U3RhdHVzO1xuXG5cdHN0YXR1cyA9IFNvcnRTdGF0dXM7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0QEluamVjdCgnY29sdW1uJykgcHJpdmF0ZSBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydFN0YXR1cykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0U3RhdHVzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaXNFbmFibGVkKCk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UudG9nZ2xlU29ydCh0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuTk9ORTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihzb3J0OiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCBzb3J0KTtcblx0fVxuXG59XG4iXX0=