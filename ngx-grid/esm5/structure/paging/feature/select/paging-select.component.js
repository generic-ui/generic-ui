/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../core/api/read/paging';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
var PagingSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagingSelectComponent, _super);
    function PagingSelectComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.pageSizeChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PagingSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.paging) {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        }
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagingSelectComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
    };
    /**
     * @private
     * @return {?}
     */
    PagingSelectComponent.prototype.getSelectPageSizes = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectPageSizes = [];
        /** @type {?} */
        var pageSizes = this.paging.getPageSizes();
        pageSizes.forEach((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            /** @type {?} */
            var selectOption = _this.getSelectPageSize(pageSize);
            selectPageSizes.push(selectOption);
        }));
        return selectPageSizes;
    };
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    PagingSelectComponent.prototype.getSelectPageSize = /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        return { name: pageSize.toString(), value: pageSize.toString() };
    };
    /**
     * @protected
     * @return {?}
     */
    PagingSelectComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-paging-select';
    };
    PagingSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-paging-select][paging]',
                    template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PagingSelectComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PagingSelectComponent.propDecorators = {
        paging: [{ type: Input }],
        pageSizeChanged: [{ type: Output }]
    };
    return PagingSelectComponent;
}(PureComponent));
export { PagingSelectComponent };
if (false) {
    /** @type {?} */
    PagingSelectComponent.prototype.paging;
    /** @type {?} */
    PagingSelectComponent.prototype.pageSizeChanged;
    /** @type {?} */
    PagingSelectComponent.prototype.selectPageSizes;
    /** @type {?} */
    PagingSelectComponent.prototype.selectPageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxSSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSWhGO0lBTTJDLGlEQUFhO0lBWXZELCtCQUFZLFVBQXNCO1FBQWxDLFlBQ0Msa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBUkQscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQVFyQyxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUF5QztRQUVwRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDeEU7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8sa0RBQWtCOzs7O0lBQTFCO1FBQUEsaUJBVUM7O1lBVE0sZUFBZSxHQUEyQixFQUFFOztZQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFFdkMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLFFBQWdCOztnQkFDNUIsWUFBWSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFDckQsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLGlEQUFpQjs7Ozs7SUFBekIsVUFBMEIsUUFBZ0I7UUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRVMsK0NBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7O2dCQXRERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsd1JBQTZDO29CQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWI0QyxVQUFVOzs7eUJBZ0JyRCxLQUFLO2tDQUdMLE1BQU07O0lBNkNSLDRCQUFDO0NBQUEsQUF4REQsQ0FNMkMsYUFBYSxHQWtEdkQ7U0FsRFkscUJBQXFCOzs7SUFFakMsdUNBQ2U7O0lBRWYsZ0RBQ3FDOztJQUVyQyxnREFBd0M7O0lBRXhDLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLXNlbGVjdF1bcGFnaW5nXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0c2VsZWN0UGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nU2VsZWN0Q29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nKSB7XG5cdFx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RQYWdlU2l6ZXMgPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplcygpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdFBhZ2VTaXplID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZSh0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdCgrcGFnZVNpemUudmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTZWxlY3RQYWdlU2l6ZXMoKTogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0Y29uc3Qgc2VsZWN0UGFnZVNpemVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW10sXG5cdFx0XHRwYWdlU2l6ZXMgPSB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZXMoKTtcblxuXHRcdHBhZ2VTaXplcy5mb3JFYWNoKChwYWdlU2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RPcHRpb24gPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplKHBhZ2VTaXplKTtcblx0XHRcdHNlbGVjdFBhZ2VTaXplcy5wdXNoKHNlbGVjdE9wdGlvbik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc2VsZWN0UGFnZVNpemVzO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTZWxlY3RQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyBuYW1lOiBwYWdlU2l6ZS50b1N0cmluZygpLCB2YWx1ZTogcGFnZVNpemUudG9TdHJpbmcoKSB9O1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1zZWxlY3QnO1xuXHR9XG5cbn1cbiJdfQ==