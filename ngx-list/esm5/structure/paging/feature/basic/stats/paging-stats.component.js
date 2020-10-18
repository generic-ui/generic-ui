/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { Paging } from '../../../core/api/read/paging';
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
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | translate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | translate}}\n\t</span>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd2RDtJQVMwQyxnREFBYTtJQVd0RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUM7SUFDRixDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXRDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNmZBQTBDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCwwQkFBMEIsRUFBRSxVQUFRO3FCQUNwQztpQkFDRDs7Ozs7eUJBR0MsS0FBSzs7SUE2QlAsMkJBQUM7Q0FBQSxBQXhDRCxDQVMwQyxhQUFhLEdBK0J0RDtTQS9CWSxvQkFBb0I7OztJQUVoQyxzQ0FDZTs7SUFFZiwwQ0FBbUI7O0lBRW5CLDhDQUF1Qjs7SUFFdkIsNkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wYWdpbmctc3RhdHMnLFxuXHR0ZW1wbGF0ZVVybDogYHBhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcGFnaW5nLXN0YXRzXSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdTdGF0c0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRmaXJzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGxhc3RJdGVtSW5kZXg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nKSB7XG5cdFx0XHR0aGlzLmZpcnN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0U3RhcnQoKTtcblx0XHRcdHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMucGFnaW5nLmdldEVuZCgpO1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gdGhpcy5wYWdpbmcuZ2V0U291cmNlU2l6ZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzU291cmNlTm90RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxufVxuIl19