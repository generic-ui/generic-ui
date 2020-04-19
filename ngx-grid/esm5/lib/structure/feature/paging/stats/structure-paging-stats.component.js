/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../feature-api/paging/read/paging';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYWdpbmcvc3RhdHMvc3RydWN0dXJlLXBhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHakU7SUFBQTtJQWdDQSxDQUFDOzs7OztJQWhCQSxtREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxpREFBUzs7O0lBQVQ7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUM7SUFDRixDQUFDOzs7O0lBRUQsd0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQTlCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsOGZBQW9EO29CQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozt5QkFHQyxLQUFLOztJQXlCUCxvQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLDZCQUE2Qjs7O0lBRXpDLCtDQUNlOztJQUVmLG1EQUFtQjs7SUFFbkIsdURBQXVCOztJQUV2QixzREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9yZWFkL3BhZ2luZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1wYWdpbmctc3RhdHMnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1wYWdpbmctc3RhdHMuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdTdGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdGZpcnN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bGFzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZykge1xuXHRcdFx0dGhpcy5maXJzdEl0ZW1JbmRleCA9IHRoaXMucGFnaW5nLmdldFN0YXJ0KCk7XG5cdFx0XHR0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRFbmQoKTtcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHRoaXMucGFnaW5nLmdldFNvdXJjZVNpemUoKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cbn1cbiJdfQ==