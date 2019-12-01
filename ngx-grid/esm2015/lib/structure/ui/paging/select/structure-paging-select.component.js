/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Paging } from '../../../domain/paging/query/paging';
export class StructurePagingSelectComponent {
    constructor() {
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
}
StructurePagingSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging-select',
                template: "<span>Items per page:</span>\n<gui-select [options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\"\n\t\t\t(optionChanged)=\"changePageSize($event)\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
StructurePagingSelectComponent.propDecorators = {
    paging: [{ type: Input }],
    pageSizeChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructurePagingSelectComponent.prototype.paging;
    /** @type {?} */
    StructurePagingSelectComponent.prototype.pageSizeChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9zZWxlY3Qvc3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVE3RCxNQUFNLE9BQU8sOEJBQThCO0lBTDNDO1FBV0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS3RDLENBQUM7Ozs7O0lBSEEsY0FBYyxDQUFDLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQWZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyw4TkFBcUQ7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7cUJBR0MsS0FBSzs4QkFHTCxNQUFNOzs7O0lBSFAsZ0RBQ2U7O0lBRWYseURBQ3FDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXBhZ2luZy1zZWxlY3QnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1wYWdpbmctc2VsZWN0LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nU2VsZWN0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxufVxuIl19