/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import { StructureSourceWarehouse } from '../../../lib/structure/domain-api/source/structure-source.warehouse';
var GuiListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiListComponent, _super);
    function GuiListComponent(platformId, elementRef, changeDetectorRef, structureSourceWarehouse) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        return _this;
    }
    GuiListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list',
                    template: "<gui-container\n\t\t[items]=\"source\"\n\t\t[template]=\"containerTemplate\"\n\t\t[cardTemplate]=\"listCardTemplate\"\n\t\t[paging]=\"paging\"\n\t\t[mode]=\"listViewMode\"\n\t\t[modeSelector]=\"listViewModeSelector\"\n>\n</gui-container>\n",
                    providers: tslib_1.__spread(guiListProviders),
                    host: {
                        '[class.gui-list]': "\"true\""
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GuiListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: StructureSourceWarehouse }
    ]; };
    return GuiListComponent;
}(GuiListGateway));
export { GuiListComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.structureSourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRy9HO0lBY3NDLDRDQUFjO0lBRW5ELDBCQUF5QyxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUMzQix3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTHdDLGdCQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0IsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjs7SUFFdEUsQ0FBQzs7Z0JBckJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsMlBBQXdDO29CQUl4QyxTQUFTLG1CQUNMLGdCQUFnQixDQUNuQjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsa0JBQWtCLEVBQUUsVUFBUTtxQkFDNUI7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnREFHYSxNQUFNLFNBQUMsV0FBVztnQkF4Qk8sVUFBVTtnQkFBeEMsaUJBQWlCO2dCQUtqQix3QkFBd0I7O0lBMEJqQyx1QkFBQztDQUFBLEFBdkJELENBY3NDLGNBQWMsR0FTbkQ7U0FUWSxnQkFBZ0I7Ozs7OztJQUVoQixzQ0FBNEM7Ozs7O0lBQ3JELHNDQUE4Qjs7Ozs7SUFDOUIsNkNBQTRDOzs7OztJQUM1QyxvREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0R2F0ZXdheSB9IGZyb20gJy4vZ3VpLmxpc3QuZ2F0ZXdheSc7XG5pbXBvcnQgeyBndWlMaXN0UHJvdmlkZXJzIH0gZnJvbSAnLi9ndWkubGlzdC5wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkubGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2d1aS5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5ndWlMaXN0UHJvdmlkZXJzXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0XSc6IGBcInRydWVcImBcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0Q29tcG9uZW50IGV4dGVuZHMgR3VpTGlzdEdhdGV3YXkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG59XG4iXX0=