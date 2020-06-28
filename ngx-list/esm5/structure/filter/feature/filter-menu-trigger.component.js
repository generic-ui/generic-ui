/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterMenuComponent } from './menu/filter-menu.component';
import { filterContainerToken } from './config/filter-container-token';
var FilterMenuTriggerComponent = /** @class */ (function () {
    function FilterMenuTriggerComponent(injector, drawerService, filterContainerRef) {
        this.injector = injector;
        this.drawerService = drawerService;
        this.filterContainerRef = filterContainerRef;
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
    FilterMenuTriggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-filter-menu-trigger',
                    template: "\n\t\t<div [gui-tooltip]=\"'Filters'\"\n\t\t\t (click)=\"openDrawer()\"\n\t\t\t class=\"gui-filter-icon-wrapper\">\n\t\t\t<gui-filter-icon></gui-filter-icon>\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-filter-menu-trigger]': 'true'
                    },
                    styles: [".gui-filter-icon-wrapper{margin-right:24px}.gui-filter-icon-wrapper .gui-filter-icon{cursor:pointer}.gui-filter-icon-wrapper .gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon-wrapper .gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon-wrapper .gui-filter-icon:hover .cls-1{stroke:#464646}.gui-filter-menu{display:block;width:400px}"]
                }] }
    ];
    /** @nocollapse */
    FilterMenuTriggerComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: FabricDrawerService },
        { type: undefined, decorators: [{ type: Inject, args: [filterContainerToken,] }] }
    ]; };
    return FilterMenuTriggerComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3ZFO0lBb0JDLG9DQUE2QixRQUFrQixFQUMzQixhQUFrQyxFQUNKLGtCQUFzQztRQUYzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNKLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDeEYsQ0FBQzs7OztJQUVELCtDQUFVOzs7SUFBVjs7WUFDTyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtRQUUxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Z0JBN0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsK0tBTVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsaUNBQWlDLEVBQUUsTUFBTTtxQkFDekM7O2lCQUlEOzs7O2dCQXpCb0QsUUFBUTtnQkFFcEQsbUJBQW1CO2dEQTRCdkIsTUFBTSxTQUFDLG9CQUFvQjs7SUFRaEMsaUNBQUM7Q0FBQSxBQTlCRCxJQThCQztTQVpZLDBCQUEwQjs7Ozs7O0lBRTFCLDhDQUFtQzs7Ozs7SUFDNUMsbURBQW1EOzs7OztJQUNuRCx3REFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXRva2VuJztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lclJlZiB9IGZyb20gJy4vY29uZmlnL2ZpbHRlci1jb250YWluZXItcmVmJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpbHRlci1tZW51LXRyaWdnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidGaWx0ZXJzJ1wiXG5cdFx0XHQgKGNsaWNrKT1cIm9wZW5EcmF3ZXIoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktZmlsdGVyLWljb24td3JhcHBlclwiPlxuXHRcdFx0PGd1aS1maWx0ZXItaWNvbj48L2d1aS1maWx0ZXItaWNvbj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1maWx0ZXItbWVudS10cmlnZ2VyXSc6ICd0cnVlJ1xuXHR9LFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9maWx0ZXIubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdEBJbmplY3QoZmlsdGVyQ29udGFpbmVyVG9rZW4pIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29udGFpbmVyUmVmOiBGaWx0ZXJDb250YWluZXJSZWYpIHtcblx0fVxuXG5cdG9wZW5EcmF3ZXIoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZmlsdGVyQ29udGFpbmVyUmVmLmdldEVsZW1lbnRSZWYoKTtcblxuXHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIEZpbHRlck1lbnVDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdH1cbn1cbiJdfQ==