/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { SortStatus } from '../../../domain/composition/command/sort/sort-status';
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
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<gui-dropdown [placement]=\"placement\"\n\t\t\t\t\t\t\t\t\t\t  [dropdownText]=\"'Column Sort'\"\n\t\t\t\t\t\t\t\t\t\t  [width]=\"225\"\n\t\t\t\t\t\t\t\t\t\t  [showOnHover]=\"true\"\n\t\t\t\t\t\t\t\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isAscSort()\">\n\t\t\t\t\t\t\t\t\tAscending\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isDescSort()\">\n\t\t\t\t\t\t\t\t\tDescending\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [class.gui-header-text-bold]=\"isNoneSort()\">\n\t\t\t\t\t\t\t\t\tTurned off\n\t\t\t\t\t\t\t\t</gui-dropdown-item>\n\n\t\t\t\t\t\t\t</gui-dropdown>\n\t\t\t\t\t\t</div>\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Autosize This Column</div>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Autosize All Column</div>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">Reset Columns</div>-->\n<!--\t\t\t\t\t\t<hr>-->\n<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">GenericUI is Great</div>-->\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilter()\">\n\t\t\t\t\t\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\t\t\t\t\t\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumns()\">\n\t\t\t\t\t\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getColumnMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\t\t\t\t\t\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJakc7SUErRG9ELDBEQUFjO0lBYWpFLHdDQUFvQixpQkFBb0MsRUFDN0MsdUJBQWdELEVBQ2hELDJCQUF3RCxFQUN4RCxnQ0FBa0UsRUFDaEQsTUFBK0I7UUFKNUQsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDaEQsWUFBTSxHQUFOLE1BQU0sQ0FBeUI7UUFSNUQsWUFBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixlQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7SUFRdkMsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQXVCQztRQXJCQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQXNCO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFpQztZQUM1QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxrREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsbURBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscURBQVk7Ozs7SUFBWixVQUFhLElBQWdCO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkFuSUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2dEVBNERUO2lCQUNEOzs7O2dCQTFFUSxpQkFBaUI7Z0JBRWpCLHVCQUF1QjtnQkFJdkIsMkJBQTJCO2dCQUUzQixnQ0FBZ0M7Z0JBTGhDLHVCQUF1Qix1QkF5RjNCLE1BQU0sU0FBQyxRQUFROzs7aUNBZmxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBb0UvQyxxQ0FBQztDQUFBLEFBcklELENBK0RvRCxjQUFjLEdBc0VqRTtTQXRFWSw4QkFBOEI7OztJQUUxQyx3REFDMkI7O0lBRTNCLGdEQUFrQzs7SUFFbEMsb0RBQXVCOztJQUV2QixnREFBb0I7O0lBRXBCLG1EQUF1Qzs7Ozs7SUFFM0IsMkRBQTRDOzs7OztJQUNyRCxpRUFBd0Q7Ozs7O0lBQ3hELHFFQUFnRTs7Ozs7SUFDaEUsMEVBQTBFOzs7OztJQUMxRSxnREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3NvcnQvc29ydC1zdGF0dXMnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImlzRW5hYmxlZCgpXCJcblx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS10YWJcIj5cblxuXHRcdFx0PGd1aS10YWIgW21lbnVdPVwiY29uZmlnLmdldE1lbnVzKClcIiBbYWN0aXZlXT1cImNvbmZpZy5nZXRBY3RpdmVNZW51KClcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzTWFpbkVuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBjbGFzcz1cImd1aS10YWItaXRlbS1kcm9wZG93blwiIFt0YWJdPVwiY29uZmlnLmdldE1haW5NZW51KClcIj5cblx0XHRcdFx0XHRcdDxkaXYgPlxuXHRcdFx0XHRcdFx0XHQ8Z3VpLWRyb3Bkb3duIFtwbGFjZW1lbnRdPVwicGxhY2VtZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbZHJvcGRvd25UZXh0XT1cIidDb2x1bW4gU29ydCdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1kcm9wZG93blwiPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzQXNjU29ydCgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRBc2NlbmRpbmdcblx0XHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkRFU0MpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLXRleHQtYm9sZF09XCJpc0Rlc2NTb3J0KClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdERlc2NlbmRpbmdcblx0XHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLXRleHQtYm9sZF09XCJpc05vbmVTb3J0KClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFR1cm5lZCBvZmZcblx0XHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdDwvZ3VpLWRyb3Bkb3duPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+QXV0b3NpemUgVGhpcyBDb2x1bW48L2Rpdj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5BdXRvc2l6ZSBBbGwgQ29sdW1uPC9kaXY+LS0+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+UmVzZXQgQ29sdW1uczwvZGl2Pi0tPlxuPCEtLVx0XHRcdFx0XHRcdDxocj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5HZW5lcmljVUkgaXMgR3JlYXQ8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzRmlsdGVyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldEZpbHRlck1lbnUoKVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+e3tjb25maWcuZ2V0RmlsdGVyTWVudSgpfX08L2Rpdj5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0NvbHVtbnMoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0Q29sdW1uTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRDb2x1bW5NZW51KCl9fTwvZGl2PlxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9ndWktdGFiPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0c29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRzdGF0dXMgPSBTb3J0U3RhdHVzO1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHByaXZhdGUgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHRoaXMuY29sdW1uLmdldFNvcnRTdGF0dXMoKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Tb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNvcnRTdGF0dXM6IFNvcnRTdGF0dXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydFN0YXR1cztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0dG9nZ2xlU29ydCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNvcnQodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5ERVNDO1xuXHR9XG5cblx0aXNOb25lU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLk5PTkU7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoc29ydDogU29ydFN0YXR1cyk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cblxufVxuIl19