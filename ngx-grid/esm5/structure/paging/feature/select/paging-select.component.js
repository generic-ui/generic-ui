/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../core/api/read/paging';
var PagingSelectComponent = /** @class */ (function () {
    function PagingSelectComponent() {
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagingSelectComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    PagingSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-paging-select',
                    template: "<span>{{ 'pagingItemsPerPage' | translate }}</span>\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-paging-select]': "\"true\""
                    }
                }] }
    ];
    PagingSelectComponent.propDecorators = {
        paging: [{ type: Input }],
        pageSizeChanged: [{ type: Output }]
    };
    return PagingSelectComponent;
}());
export { PagingSelectComponent };
if (false) {
    /** @type {?} */
    PagingSelectComponent.prototype.paging;
    /** @type {?} */
    PagingSelectComponent.prototype.pageSizeChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3BEO0lBQUE7UUFlQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLdEMsQ0FBQzs7Ozs7SUFIQSw4Q0FBYzs7OztJQUFkLFVBQWUsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxUEFBMkM7b0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLDJCQUEyQixFQUFFLFVBQVE7cUJBQ3JDO2lCQUNEOzs7eUJBR0MsS0FBSztrQ0FHTCxNQUFNOztJQU1SLDRCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FYWSxxQkFBcUI7OztJQUVqQyx1Q0FDZTs7SUFFZixnREFDcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3JlYWQvcGFnaW5nJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcGFnaW5nLXNlbGVjdCcsXG5cdHRlbXBsYXRlVXJsOiBgcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcGFnaW5nLXNlbGVjdF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU2VsZWN0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxufVxuIl19