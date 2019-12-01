/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Paging } from '../../../domain/paging/query/paging';
var StructurePagingStatsComponent = /** @class */ (function () {
    function StructurePagingStatsComponent() {
        this.sourceSize = 0;
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
        if (this.paging && this.sourceSize) {
            this.firstItemIndex = this.paging.calculateStart(this.sourceSize);
            this.lastItemIndex = this.paging.calculateEnd(this.sourceSize);
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
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0YXRzL3N0cnVjdHVyZS1wYWdpbmctc3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzdEO0lBQUE7UUFXQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBcUJ4QixDQUFDOzs7OztJQWZBLG1EQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlEQUFTOzs7SUFBVDtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7OztJQUVELHdEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDhmQUFvRDtvQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7eUJBR0MsS0FBSzs2QkFHTCxLQUFLOztJQXNCUCxvQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLDZCQUE2Qjs7O0lBRXpDLCtDQUNlOztJQUVmLG1EQUN1Qjs7SUFFdkIsdURBQXVCOztJQUV2QixzREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXBhZ2luZy1zdGF0cycsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ1N0YXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHRzb3VyY2VTaXplOiBudW1iZXIgPSAwO1xuXG5cdGZpcnN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bGFzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZyAmJiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5jYWxjdWxhdGVTdGFydCh0aGlzLnNvdXJjZVNpemUpO1xuXHRcdFx0dGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuY2FsY3VsYXRlRW5kKHRoaXMuc291cmNlU2l6ZSk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG59XG4iXX0=