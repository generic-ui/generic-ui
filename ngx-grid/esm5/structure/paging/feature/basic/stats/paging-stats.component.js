/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { Paging } from '../../../core/api/read/paging';
var PagingStatsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagingStatsComponent, _super);
    function PagingStatsComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.addClassToHost('gui-mx-6');
        return _this;
    }
    /**
     * @return {?}
     */
    PagingStatsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    /**
     * @protected
     * @return {?}
     */
    PagingStatsComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-paging-stats';
    };
    PagingStatsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-paging-stats][paging]',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\t{{ 'pagingOf' | guiTranslate }}\n\t</span>\n\t<span class=\"gui-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PagingStatsComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd2RDtJQU0wQyxnREFBYTtJQVd0RCw4QkFBWSxVQUFzQjtRQUFsQyxZQUNDLGtCQUFNLFVBQVUsQ0FBQyxTQUVqQjtRQURBLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ2pDLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QztJQUNGLENBQUM7Ozs7SUFFRCwrQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFUyw4Q0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxtZ0JBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVg0QyxVQUFVOzs7eUJBY3JELEtBQUs7O0lBa0NQLDJCQUFDO0NBQUEsQUExQ0QsQ0FNMEMsYUFBYSxHQW9DdEQ7U0FwQ1ksb0JBQW9COzs7SUFFaEMsc0NBQ2U7O0lBRWYsMENBQW1COztJQUVuQiw4Q0FBdUI7O0lBRXZCLDZDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmctc3RhdHNdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXN0YXRzLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU3RhdHNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0Zmlyc3RJdGVtSW5kZXg6IG51bWJlcjtcblxuXHRsYXN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1teC02Jyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZykge1xuXHRcdFx0dGhpcy5maXJzdEl0ZW1JbmRleCA9IHRoaXMucGFnaW5nLmdldFN0YXJ0KCk7XG5cdFx0XHR0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRFbmQoKTtcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHRoaXMucGFnaW5nLmdldFNvdXJjZVNpemUoKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1zdGF0cyc7XG5cdH1cblxufVxuIl19