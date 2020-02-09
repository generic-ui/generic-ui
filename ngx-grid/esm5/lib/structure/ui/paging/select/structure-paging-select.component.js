/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../domain/paging/read/paging';
var StructurePagingSelectComponent = /** @class */ (function () {
    function StructurePagingSelectComponent() {
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    StructurePagingSelectComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    StructurePagingSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging-select',
                    template: "<span>Items per page:</span>\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    StructurePagingSelectComponent.propDecorators = {
        paging: [{ type: Input }],
        pageSizeChanged: [{ type: Output }]
    };
    return StructurePagingSelectComponent;
}());
export { StructurePagingSelectComponent };
if (false) {
    /** @type {?} */
    StructurePagingSelectComponent.prototype.paging;
    /** @type {?} */
    StructurePagingSelectComponent.prototype.pageSizeChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9zZWxlY3Qvc3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1RDtJQUFBO1FBV0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS3RDLENBQUM7Ozs7O0lBSEEsdURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQWZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyw4TkFBcUQ7b0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7O3lCQUdDLEtBQUs7a0NBR0wsTUFBTTs7SUFNUixxQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksOEJBQThCOzs7SUFFMUMsZ0RBQ2U7O0lBRWYseURBQ3FDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nLXNlbGVjdCcsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdTZWxlY3RDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG59XG4iXX0=