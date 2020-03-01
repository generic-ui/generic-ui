/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../../composition/ui-api/composition-read-model.service';
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
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\n\t\t\t\t\t\t<gui-structure-column-config-sort *ngIf=\"column.isSortEnabled()\"\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t\t\t<gui-structure-menu-column-manager>\n\t\t\t\t\t\t</gui-structure-menu-column-manager>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRTVHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSWpHO0lBa0RvRCwwREFBYztJQU9qRSx3Q0FBb0IsaUJBQW9DLEVBQzdDLHVCQUFnRCxFQUNoRCwyQkFBd0QsRUFDeEQsZ0NBQWtFLEVBQ2pELE1BQStCO1FBSjNELFlBS0MsaUJBQU8sU0FDUDtRQU5tQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2pELFlBQU0sR0FBTixNQUFNLENBQXlCOztJQUUzRCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFUQSxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBaUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtEQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7O2dCQWhGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHU0Q0ErQ1Q7aUJBQ0Q7Ozs7Z0JBNURRLGlCQUFpQjtnQkFFakIsdUJBQXVCO2dCQUd2QiwyQkFBMkI7Z0JBRTNCLGdDQUFnQztnQkFKaEMsdUJBQXVCLHVCQXFFM0IsTUFBTSxTQUFDLFFBQVE7OztpQ0FUbEIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE2Qi9DLHFDQUFDO0NBQUEsQUFqRkQsQ0FrRG9ELGNBQWMsR0ErQmpFO1NBL0JZLDhCQUE4Qjs7O0lBRTFDLHdEQUMyQjs7SUFFM0IsZ0RBQWtDOzs7OztJQUV0QiwyREFBNEM7Ozs7O0lBQ3JELGlFQUF3RDs7Ozs7SUFDeEQscUVBQWdFOzs7OztJQUNoRSwwRUFBMEU7O0lBQzFFLGdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQgKm5nSWY9XCJjb2x1bW4uaXNTb3J0RW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0XHRbY29sdW1uXT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydD5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZVxuXHRcdFx0XHRcdFx0XHRcdFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZT5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZVxuXHRcdFx0XHRcdFx0XHRcdFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZT5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNGaWx0ZXJpbmdFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0RmlsdGVyTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRGaWx0ZXJNZW51KCl9fTwvZGl2PlxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldENvbHVtbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9ndWktdGFiPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0QEluamVjdCgnY29sdW1uJykgcHVibGljIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxufVxuIl19