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
                    template: "<gui-container\n\t\t[source]=\"items\"\n\t\t[template]=\"containerTemplate\">\n\n</gui-container>\n",
                    providers: tslib_1.__spread(guiListProviders),
                    host: {
                        '[class]': "\"gui-list\""
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBR2hIO0lBY3NDLDRDQUFjO0lBRW5ELDBCQUF5QyxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUMzQix3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTHdDLGdCQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDM0IsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjs7SUFFdEUsQ0FBQzs7Z0JBckJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsK0dBQXdDO29CQUl4QyxTQUFTLG1CQUNMLGdCQUFnQixDQUNuQjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsU0FBUyxFQUFFLGNBQVk7cUJBQ3ZCO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0RBR2EsTUFBTSxTQUFDLFdBQVc7Z0JBeEJPLFVBQVU7Z0JBQXhDLGlCQUFpQjtnQkFLakIsd0JBQXdCOztJQTBCakMsdUJBQUM7Q0FBQSxBQXZCRCxDQWNzQyxjQUFjLEdBU25EO1NBVFksZ0JBQWdCOzs7Ozs7SUFFaEIsc0NBQTRDOzs7OztJQUNyRCxzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE0Qzs7Ozs7SUFDNUMsb0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEdhdGV3YXkgfSBmcm9tICcuL2d1aS5saXN0LmdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpTGlzdFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmxpc3QucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2d1aS5saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZ3VpLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUxpc3RQcm92aWRlcnNcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogYFwiZ3VpLWxpc3RcImBcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0Q29tcG9uZW50IGV4dGVuZHMgR3VpTGlzdEdhdGV3YXkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG59XG4iXX0=