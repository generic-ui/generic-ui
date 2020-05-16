/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
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
    StructureColumnConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\n\t\t\t\t\t\t<gui-structure-column-config-sort *ngIf=\"column.isSortEnabled()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t\t\t<gui-structure-menu-column-manager>\n\t\t\t\t\t\t</gui-structure-menu-column-manager>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureCommandDispatcher },
        { type: CompositionWarehouse },
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
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN4SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJakc7SUFrRG9ELDBEQUFjO0lBT2pFLHdDQUFvQixpQkFBb0MsRUFDN0MsdUJBQW1ELEVBQ25ELDJCQUFpRCxFQUNqRCxnQ0FBa0UsRUFDakQsTUFBK0I7UUFKM0QsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCO1FBQ2pELHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDakQsWUFBTSxHQUFOLE1BQU0sQ0FBeUI7O0lBRTNELENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVRBLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFpQztZQUM1QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0RBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBaEZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscTVDQStDVDtpQkFDRDs7OztnQkE1RFEsaUJBQWlCO2dCQUVqQiwwQkFBMEI7Z0JBRzFCLG9CQUFvQjtnQkFFcEIsZ0NBQWdDO2dCQUpoQyx1QkFBdUIsdUJBcUUzQixNQUFNLFNBQUMsUUFBUTs7O2lDQVRsQixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTZCL0MscUNBQUM7Q0FBQSxBQWpGRCxDQWtEb0QsY0FBYyxHQStCakU7U0EvQlksOEJBQThCOzs7SUFFMUMsd0RBQzJCOztJQUUzQixnREFBa0M7Ozs7O0lBRXRCLDJEQUE0Qzs7Ozs7SUFDckQsaUVBQTJEOzs7OztJQUMzRCxxRUFBeUQ7Ozs7O0lBQ3pELDBFQUEwRTs7SUFDMUUsZ0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQgKm5nSWY9XCJjb2x1bW4uaXNTb3J0RW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0PlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlXG5cdFx0XHRcdFx0XHRcdFx0W2NvbHVtbl09XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlXG5cdFx0XHRcdFx0XHRcdFx0W2NvbHVtbl09XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlPlxuXG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0ZpbHRlcmluZ0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBbdGFiXT1cImNvbmZpZy5nZXRGaWx0ZXJNZW51KClcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPnt7Y29uZmlnLmdldEZpbHRlck1lbnUoKX19PC9kaXY+XG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0Q29sdW1uTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtbWVudS1jb2x1bW4tbWFuYWdlcj5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2d1aS10YWI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlclNvcnRNZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlclNvcnRNZW51OiBFbGVtZW50UmVmO1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHB1YmxpYyBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaXNFbmFibGVkKCk7XG5cdH1cbn1cbiJdfQ==