/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../domain-api/read/paging';
import { PureComponent } from '../../../../common/cdk/pure-component';
var PagingStatsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagingStatsComponent, _super);
    function PagingStatsComponent() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PagingStatsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    PagingStatsComponent.prototype.calculate = /**
     * @return {?}
     */
    function () {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    };
    /**
     * @return {?}
     */
    PagingStatsComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    PagingStatsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-paging-stats',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\tof\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-paging-stats]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    PagingStatsComponent.ctorParameters = function () { return []; };
    PagingStatsComponent.propDecorators = {
        paging: [{ type: Input }]
    };
    return PagingStatsComponent;
}(PureComponent));
export { PagingStatsComponent };
if (false) {
    /** @type {?} */
    PagingStatsComponent.prototype.paging;
    /** @type {?} */
    PagingStatsComponent.prototype.sourceSize;
    /** @type {?} */
    PagingStatsComponent.prototype.firstItemIndex;
    /** @type {?} */
    PagingStatsComponent.prototype.lastItemIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd0RTtJQVMwQyxnREFBYTtJQVd0RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUM7SUFDRixDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXRDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsc2RBQTBDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCwwQkFBMEIsRUFBRSxVQUFRO3FCQUNwQztpQkFDRDs7Ozs7eUJBR0MsS0FBSzs7SUE2QlAsMkJBQUM7Q0FBQSxBQXhDRCxDQVMwQyxhQUFhLEdBK0J0RDtTQS9CWSxvQkFBb0I7OztJQUVoQyxzQ0FDZTs7SUFFZiwwQ0FBbUI7O0lBRW5CLDhDQUF1Qjs7SUFFdkIsNkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXBhZ2luZy1zdGF0cycsXG5cdHRlbXBsYXRlVXJsOiBgcGFnaW5nLXN0YXRzLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1wYWdpbmctc3RhdHNdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1N0YXRzQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdGZpcnN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bGFzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRTdGFydCgpO1xuXHRcdFx0dGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0RW5kKCk7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSB0aGlzLnBhZ2luZy5nZXRTb3VyY2VTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG59XG4iXX0=