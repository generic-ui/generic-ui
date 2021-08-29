/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../core/api/read/paging';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
export class PagingSelectComponent extends PureComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.paging) {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        }
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
    }
    /**
     * @private
     * @return {?}
     */
    getSelectPageSizes() {
        /** @type {?} */
        const selectPageSizes = [];
        /** @type {?} */
        const pageSizes = this.paging.getPageSizes();
        pageSizes.forEach((/**
         * @param {?} pageSize
         * @return {?}
         */
        (pageSize) => {
            /** @type {?} */
            const selectOption = this.getSelectPageSize(pageSize);
            selectPageSizes.push(selectOption);
        }));
        return selectPageSizes;
    }
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    getSelectPageSize(pageSize) {
        return { name: pageSize.toString(), value: pageSize.toString() };
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-paging-select';
    }
}
PagingSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging-select][paging]',
                template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
PagingSelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
PagingSelectComponent.propDecorators = {
    paging: [{ type: Input }],
    pageSizeChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFJLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFVaEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7Ozs7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXJDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUN4RTtTQUNEO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBeUI7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7O2NBQ25CLGVBQWUsR0FBMkIsRUFBRTs7Y0FDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1FBRXZDLFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7O2tCQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUNyRCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsUUFBZ0I7UUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7OztZQXRERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsd1JBQTZDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFiNEMsVUFBVTs7O3FCQWdCckQsS0FBSzs4QkFHTCxNQUFNOzs7O0lBSFAsdUNBQ2U7O0lBRWYsZ0RBQ3FDOztJQUVyQyxnREFBd0M7O0lBRXhDLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLXNlbGVjdF1bcGFnaW5nXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0c2VsZWN0UGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nU2VsZWN0Q29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nKSB7XG5cdFx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RQYWdlU2l6ZXMgPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplcygpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdFBhZ2VTaXplID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZSh0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdCgrcGFnZVNpemUudmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTZWxlY3RQYWdlU2l6ZXMoKTogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0Y29uc3Qgc2VsZWN0UGFnZVNpemVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW10sXG5cdFx0XHRwYWdlU2l6ZXMgPSB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZXMoKTtcblxuXHRcdHBhZ2VTaXplcy5mb3JFYWNoKChwYWdlU2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RPcHRpb24gPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplKHBhZ2VTaXplKTtcblx0XHRcdHNlbGVjdFBhZ2VTaXplcy5wdXNoKHNlbGVjdE9wdGlvbik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc2VsZWN0UGFnZVNpemVzO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTZWxlY3RQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyBuYW1lOiBwYWdlU2l6ZS50b1N0cmluZygpLCB2YWx1ZTogcGFnZVNpemUudG9TdHJpbmcoKSB9O1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1zZWxlY3QnO1xuXHR9XG5cbn1cbiJdfQ==