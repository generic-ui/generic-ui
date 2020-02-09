/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../domain/paging/read/paging';
var StructurePagingStatsComponent = /** @class */ (function () {
    function StructurePagingStatsComponent() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructurePagingStatsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    StructurePagingStatsComponent.prototype.calculate = /**
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
    StructurePagingStatsComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    StructurePagingStatsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging-stats',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-structure-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\tof\n\t</span>\n\t<span class=\"gui-structure-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    StructurePagingStatsComponent.propDecorators = {
        paging: [{ type: Input }]
    };
    return StructurePagingStatsComponent;
}());
export { StructurePagingStatsComponent };
if (false) {
    /** @type {?} */
    StructurePagingStatsComponent.prototype.paging;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.firstItemIndex;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.lastItemIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0YXRzL3N0cnVjdHVyZS1wYWdpbmctc3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVEO0lBQUE7SUFnQ0EsQ0FBQzs7Ozs7SUFoQkEsbURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsaURBQVM7OztJQUFUO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7OztJQUVELHdEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDhmQUFvRDtvQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7eUJBR0MsS0FBSzs7SUF5QlAsb0NBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSw2QkFBNkI7OztJQUV6QywrQ0FDZTs7SUFFZixtREFBbUI7O0lBRW5CLHVEQUF1Qjs7SUFFdkIsc0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXBhZ2luZy1zdGF0cycsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ1N0YXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0Zmlyc3RJdGVtSW5kZXg6IG51bWJlcjtcblxuXHRsYXN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nKSB7XG5cdFx0XHR0aGlzLmZpcnN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0U3RhcnQoKTtcblx0XHRcdHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMucGFnaW5nLmdldEVuZCgpO1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gdGhpcy5wYWdpbmcuZ2V0U291cmNlU2l6ZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzU291cmNlTm90RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxufVxuIl19