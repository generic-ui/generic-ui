/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../../core/api/structure.id';
import { PagesizeChangedAggregateEvent } from './pagesize/pagesize-changed.aggregate-event';
export class PagingManager {
    /**
     * @private
     * @param {?} enabled
     * @param {?} page
     * @param {?} pageSize
     * @param {?} pageSizes
     * @param {?} pagerTop
     * @param {?} pagerBottom
     * @param {?} sourceSize
     * @param {?} logger
     */
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, sourceSize, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.sourceSize = sourceSize;
        // TODO
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    static default(logger) {
        return new PagingManager(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    static fromConfig(paging, logger) {
        /** @type {?} */
        const defaultPagingDefinition = PagingManager.default(logger);
        /** @type {?} */
        const enabled = paging.enabled || defaultPagingDefinition.isEnabled();
        /** @type {?} */
        const page = paging.page || defaultPagingDefinition.getPage();
        /** @type {?} */
        const pageSize = paging.pageSize || defaultPagingDefinition.getPageSize();
        /** @type {?} */
        const pageSizes = paging.pageSizes || defaultPagingDefinition.getPageSizes();
        /** @type {?} */
        const pagerTop = paging.pagerTop || defaultPagingDefinition.isPagerTop();
        /** @type {?} */
        const pagerBottom = paging.pagerBottom || defaultPagingDefinition.isPagerBottom();
        return new PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return !this.enabled;
    }
    /**
     * @return {?}
     */
    getPage() {
        return this.page;
    }
    /**
     * @return {?}
     */
    getPageSize() {
        return this.pageSize;
    }
    /**
     * @return {?}
     */
    getPageSizes() {
        return this.pageSizes;
    }
    /**
     * @return {?}
     */
    isPagerTop() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    }
    /**
     * @return {?}
     */
    isPagerBottom() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    }
    /**
     * @return {?}
     */
    getSourceSize() {
        return this.sourceSize;
    }
    /**
     * @param {?} pagingConfig
     * @return {?}
     */
    change(pagingConfig) {
        if (pagingConfig.enabled !== undefined) {
            this.enabled = pagingConfig.enabled;
        }
        if (pagingConfig.page !== undefined) {
            this.page = pagingConfig.page;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSize !== undefined) {
            this.pageSize = pagingConfig.pageSize;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSizes !== undefined) {
            this.pageSizes = pagingConfig.pageSizes;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerTop !== undefined) {
            this.pagerTop = pagingConfig.pagerTop;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerBottom !== undefined) {
            this.pagerBottom = pagingConfig.pagerBottom;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (this.enabled === true &&
            pagingConfig.pagerTop === false &&
            pagingConfig.pagerBottom === false) {
            this.pagerBottom = true;
            this.logger.warn('Pagers cannot be turn off when paging is enabled.');
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setSourceSize(size) {
        this.sourceSize = size;
    }
    /**
     * @return {?}
     */
    nextPage() {
        /** @type {?} */
        let nextPage = this.page;
        if (!this.isNextPageDisabled()) {
            nextPage += 1;
        }
        this.page = nextPage;
    }
    /**
     * @return {?}
     */
    prevPage() {
        /** @type {?} */
        let prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        if (this.pageSizes.find((/**
         * @param {?} ps
         * @return {?}
         */
        (ps) => ps === pageSize))) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    }
    /**
     * @return {?}
     */
    isNextPageDisabled() {
        if (this.sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(this.sourceSize / this.pageSize);
    }
    /**
     * @return {?}
     */
    isPrevPageDisabled() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    calculateStart() {
        /** @type {?} */
        const firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (this.sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    }
    /**
     * @return {?}
     */
    calculateEnd() {
        /** @type {?} */
        const lastItem = this.page * this.pageSize;
        if (this.sourceSize < lastItem) {
            return this.sourceSize;
        }
        return lastItem;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    sample(source) {
        if (this.isDisabled()) {
            return source;
        }
        /** @type {?} */
        let start = this.calculateStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd());
    }
    /**
     * @return {?}
     */
    clearEvents() {
        this.events.length = 0;
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    setPageSize(pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.events;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.page;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    PagingManager.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUc1RixNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7Ozs7O0lBcUJ6QixZQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7O1FBVmQsV0FBTSxHQUF1QyxFQUFFLENBQUM7UUFZaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBM0JELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBYztRQUM1QixPQUFPLElBQUksYUFBYSxDQUN2QixLQUFLLEVBQ0wsQ0FBQyxFQUNELEVBQUUsRUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFtQkQs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O0lBRUQsTUFBTSxDQUFDLE1BQWtCO1FBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDO1NBQ2Q7O1lBRUcsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFakMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBRUQ7Ozs7OztJQXpPQSwrQkFBaUU7Ozs7O0lBRWpFLCtCQUFnQzs7Ozs7SUFFWixnQ0FBd0I7Ozs7O0lBQ3ZDLDZCQUFvQjs7Ozs7SUFDcEIsaUNBQXdCOzs7OztJQUN4QixrQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUF5Qjs7Ozs7SUFDekIsb0NBQTRCOzs7OztJQUM1QixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdNYW5hZ2VyIHtcblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZGVmYXVsdChsb2dnZXI6IExvZ2dlcikge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyQm90dG9tOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRsb2dnZXI6IExvZ2dlcikge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGZyb21Db25maWcocGFnaW5nOiBQYWdpbmdDb25maWdXaXRoSWQsIGxvZ2dlcjogTG9nZ2VyKTogUGFnaW5nTWFuYWdlciB7XG5cblx0XHRjb25zdCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbiA9IFBhZ2luZ01hbmFnZXIuZGVmYXVsdChsb2dnZXIpLFxuXHRcdFx0ZW5hYmxlZCA9IHBhZ2luZy5lbmFibGVkIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0cGFnZSA9IHBhZ2luZy5wYWdlIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplID0gcGFnaW5nLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXMgPSBwYWdpbmcucGFnZVNpemVzIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplcygpLFxuXHRcdFx0cGFnZXJUb3AgPSBwYWdpbmcucGFnZXJUb3AgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlclRvcCgpLFxuXHRcdFx0cGFnZXJCb3R0b20gPSBwYWdpbmcucGFnZXJCb3R0b20gfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlckJvdHRvbSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdNYW5hZ2VyKFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHBhZ2UsXG5cdFx0XHRwYWdlU2l6ZSxcblx0XHRcdHBhZ2VTaXplcyxcblx0XHRcdHBhZ2VyVG9wLFxuXHRcdFx0cGFnZXJCb3R0b20sXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2hhbmdlKHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gcGFnaW5nQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZSA9IHBhZ2luZ0NvbmZpZy5wYWdlO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplcyA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXM7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyVG9wID0gcGFnaW5nQ29uZmlnLnBhZ2VyVG9wO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVkID09PSB0cnVlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPT09IGZhbHNlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5sb2dnZXIud2FybignUGFnZXJzIGNhbm5vdCBiZSB0dXJuIG9mZiB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLicpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IG5leHRQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzTmV4dFBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRuZXh0UGFnZSArPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IG5leHRQYWdlO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IHByZXZQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzUHJldlBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRwcmV2UGFnZSAtPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHByZXZQYWdlO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAodGhpcy5wYWdlU2l6ZXMuZmluZCgocHM6IG51bWJlcikgPT4gcHMgPT09IHBhZ2VTaXplKSkge1xuXG5cdFx0XHR0aGlzLnNldFBhZ2UoMSk7XG5cdFx0XHR0aGlzLnNldFBhZ2VTaXplKHBhZ2VTaXplKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudHM7XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdlU2l6ZSk7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcblx0fVxuXG5cdGNhbGN1bGF0ZVN0YXJ0KCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBmaXJzdEl0ZW0gPSAxICsgKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA8IGZpcnN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpcnN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZUVuZCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLnBhZ2UgKiB0aGlzLnBhZ2VTaXplO1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA8IGxhc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdHJldHVybiBsYXN0SXRlbTtcblx0fVxuXG5cdHNhbXBsZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIHNvdXJjZTtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSB0aGlzLmNhbGN1bGF0ZVN0YXJ0KCk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5jYWxjdWxhdGVFbmQoKSk7XG5cdH1cblxuXHRjbGVhckV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG59XG4iXX0=