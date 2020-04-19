/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../feature-api/paging/read/paging';
export class StructurePagingStatsComponent {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.calculate();
    }
    /**
     * @return {?}
     */
    calculate() {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    }
    /**
     * @return {?}
     */
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYWdpbmcvc3RhdHMvc3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFRakUsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFXekMsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QztJQUNGLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsOGZBQW9EO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O3FCQUdDLEtBQUs7Ozs7SUFBTiwrQ0FDZTs7SUFFZixtREFBbUI7O0lBRW5CLHVEQUF1Qjs7SUFFdkIsc0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nLXN0YXRzJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtcGFnaW5nLXN0YXRzLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nU3RhdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRmaXJzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGxhc3RJdGVtSW5kZXg6IG51bWJlcjtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRTdGFydCgpO1xuXHRcdFx0dGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0RW5kKCk7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSB0aGlzLnBhZ2luZy5nZXRTb3VyY2VTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG59XG4iXX0=