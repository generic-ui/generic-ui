/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterMenuComponent } from './filter-menu.component';
import { filterContainerToken } from '../../core/api/config/filter-container-token';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
var FilterMenuTriggerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuTriggerComponent, _super);
    function FilterMenuTriggerComponent(detector, elementRef, injector, drawerService, filterContainerRef) {
        var _this = _super.call(this, detector, elementRef) || this;
        _this.injector = injector;
        _this.drawerService = drawerService;
        _this.filterContainerRef = filterContainerRef;
        return _this;
    }
    /**
     * @return {?}
     */
    FilterMenuTriggerComponent.prototype.openDrawer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementRef = this.filterContainerRef.getElementRef();
        this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    };
    /**
     * @protected
     * @return {?}
     */
    FilterMenuTriggerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-filter-menu-trigger';
    };
    FilterMenuTriggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-filter-menu-trigger]',
                    template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\" class=\"gui-filter-icon-wrapper\">\n\t<div gui-filter-icon></div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".gui-filter-icon-wrapper{margin-right:24px}.gui-filter-menu{width:400px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}"]
                }] }
    ];
    /** @nocollapse */
    FilterMenuTriggerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Injector },
        { type: FabricDrawerService },
        { type: undefined, decorators: [{ type: Inject, args: [filterContainerToken,] }] }
    ]; };
    return FilterMenuTriggerComponent;
}(SmartComponent));
export { FilterMenuTriggerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.drawerService;
    /**
     * @type {?}
     * @private
     */
    FilterMenuTriggerComponent.prototype.filterContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEY7SUFTZ0Qsc0RBQWM7SUFFN0Qsb0NBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxRQUFrQixFQUNsQixhQUFrQyxFQUNKLGtCQUFzQztRQUp4RixZQUtDLGtCQUFNLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FDM0I7UUFKbUIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDSix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COztJQUV4RixDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWOztZQUNPLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7OztJQUVTLG9EQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHFKQUFtRDtvQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFJL0M7Ozs7Z0JBakJpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFBVSxRQUFRO2dCQUVuRixtQkFBbUI7Z0RBc0J2QixNQUFNLFNBQUMsb0JBQW9COztJQWFoQyxpQ0FBQztDQUFBLEFBNUJELENBU2dELGNBQWMsR0FtQjdEO1NBbkJZLDBCQUEwQjs7Ozs7O0lBSW5DLDhDQUFtQzs7Ozs7SUFDbkMsbURBQW1EOzs7OztJQUNuRCx3REFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaWx0ZXJDb250YWluZXJUb2tlbiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXRva2VuJztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lclJlZiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXJlZic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtdHJpZ2dlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vc3R5bGUvZmlsdGVyLm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSxcblx0XHRcdFx0QEluamVjdChmaWx0ZXJDb250YWluZXJUb2tlbikgcHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb250YWluZXJSZWY6IEZpbHRlckNvbnRhaW5lclJlZikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9wZW5EcmF3ZXIoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZmlsdGVyQ29udGFpbmVyUmVmLmdldEVsZW1lbnRSZWYoKTtcblxuXHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIEZpbHRlck1lbnVDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUtdHJpZ2dlcic7XG5cdH1cbn1cbiJdfQ==