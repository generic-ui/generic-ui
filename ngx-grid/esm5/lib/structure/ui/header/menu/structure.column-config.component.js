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
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\t\t\t\t\t\t<gui-structure-column-config-sort\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilter()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumns()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t\t\t<gui-structure-menu-column-manager>\n\t\t\t\t\t\t</gui-structure-menu-column-manager>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRTVHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSWpHO0lBaURvRCwwREFBYztJQU9qRSx3Q0FBb0IsaUJBQW9DLEVBQzdDLHVCQUFnRCxFQUNoRCwyQkFBd0QsRUFDeEQsZ0NBQWtFLEVBQ2pELE1BQStCO1FBSjNELFlBS0MsaUJBQU8sU0FDUDtRQU5tQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2pELFlBQU0sR0FBTixNQUFNLENBQXlCOztJQUUzRCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFUQSxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBaUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtEQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7O2dCQS9FRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDYwQ0E4Q1Q7aUJBQ0Q7Ozs7Z0JBM0RRLGlCQUFpQjtnQkFFakIsdUJBQXVCO2dCQUd2QiwyQkFBMkI7Z0JBRTNCLGdDQUFnQztnQkFKaEMsdUJBQXVCLHVCQW9FM0IsTUFBTSxTQUFDLFFBQVE7OztpQ0FUbEIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE2Qi9DLHFDQUFDO0NBQUEsQUFoRkQsQ0FpRG9ELGNBQWMsR0ErQmpFO1NBL0JZLDhCQUE4Qjs7O0lBRTFDLHdEQUMyQjs7SUFFM0IsZ0RBQWtDOzs7OztJQUV0QiwyREFBNEM7Ozs7O0lBQ3JELGlFQUF3RDs7Ozs7SUFDeEQscUVBQWdFOzs7OztJQUNoRSwwRUFBMEU7O0lBQzFFLGdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0XG5cdFx0XHRcdFx0XHRcdFx0W2NvbHVtbl09XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQ+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGVcblx0XHRcdFx0XHRcdFx0XHRbY29sdW1uXT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGU+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmVcblx0XHRcdFx0XHRcdFx0XHRbY29sdW1uXT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmU+XG5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzRmlsdGVyKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0RmlsdGVyTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRGaWx0ZXJNZW51KCl9fTwvZGl2PlxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNDb2x1bW5zKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0Q29sdW1uTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtbWVudS1jb2x1bW4tbWFuYWdlcj5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2d1aS10YWI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlclNvcnRNZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlclNvcnRNZW51OiBFbGVtZW50UmVmO1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KCdjb2x1bW4nKSBwdWJsaWMgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG59XG4iXX0=