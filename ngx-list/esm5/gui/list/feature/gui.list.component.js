/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import { StructureSourceWarehouse } from '../../../lib/structure/feature-api/source/structure-source.warehouse';
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
                    template: "<gui-container\n\t\t[items]=\"items\"\n\t\t[template]=\"containerTemplate\"\n\t\t[paging]=\"paging\"\n>\n</gui-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBR2hIO0lBY3NDLDRDQUFjO0lBRW5ELDBCQUF5QyxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUMzQix3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTHdDLGdCQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0IsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjs7SUFFdEUsQ0FBQzs7Z0JBckJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsdUlBQXdDO29CQUl4QyxTQUFTLG1CQUNMLGdCQUFnQixDQUNuQjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsa0JBQWtCLEVBQUUsVUFBUTtxQkFDNUI7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnREFHYSxNQUFNLFNBQUMsV0FBVztnQkF4Qk8sVUFBVTtnQkFBeEMsaUJBQWlCO2dCQUtqQix3QkFBd0I7O0lBMEJqQyx1QkFBQztDQUFBLEFBdkJELENBY3NDLGNBQWMsR0FTbkQ7U0FUWSxnQkFBZ0I7Ozs7OztJQUVoQixzQ0FBNEM7Ozs7O0lBQ3JELHNDQUE4Qjs7Ozs7SUFDOUIsNkNBQTRDOzs7OztJQUM1QyxvREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0R2F0ZXdheSB9IGZyb20gJy4vZ3VpLmxpc3QuZ2F0ZXdheSc7XG5pbXBvcnQgeyBndWlMaXN0UHJvdmlkZXJzIH0gZnJvbSAnLi9ndWkubGlzdC5wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUtYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9ndWkubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpTGlzdFByb3ZpZGVyc1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdF0nOiBgXCJ0cnVlXCJgXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxufVxuIl19