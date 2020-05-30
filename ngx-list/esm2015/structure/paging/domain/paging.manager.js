/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../../lib/structure/domain/structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHNUYsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7Ozs7OztJQXFCekIsWUFBNEIsT0FBZ0IsRUFDL0IsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLFVBQWtCLEVBQzFCLE1BQWM7UUFQUyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQy9CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFROztRQXhCZCxXQUFNLEdBQXVDLEVBQUUsQ0FBQztRQTBCaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBeEJELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBYztRQUM1QixPQUFPLElBQUksYUFBYSxDQUN2QixLQUFLLEVBQ0wsQ0FBQyxFQUNELEVBQUUsRUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFnQkQsTUFB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RUQsTUFBTSxDQUFDLE1BQWtCO1FBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDO1NBQ2Q7O1lBRUcsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFakMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBRUQ7Ozs7OztJQXZQQSwrQkFBaUU7Ozs7O0lBZ0JqRSwrQkFBZ0M7Ozs7O0lBRVosZ0NBQXdCOzs7OztJQUN2Qyw2QkFBb0I7Ozs7O0lBQ3BCLGlDQUF3Qjs7Ozs7SUFDeEIsa0NBQWdDOzs7OztJQUNoQyxpQ0FBeUI7Ozs7O0lBQ3pCLG9DQUE0Qjs7Ozs7SUFDNUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5pbXBvcnQgeyBQYWdpbmdDb25maWdXaXRoSWQgfSBmcm9tICcuL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ01hbmFnZXIge1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZGVmYXVsdChsb2dnZXI6IExvZ2dlcikge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZnJvbUNvbmZpZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCwgbG9nZ2VyOiBMb2dnZXIpOiBQYWdpbmdNYW5hZ2VyIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uID0gUGFnaW5nTWFuYWdlci5kZWZhdWx0KGxvZ2dlciksXG5cdFx0XHRlbmFibGVkID0gcGFnaW5nLmVuYWJsZWQgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHRwYWdlID0gcGFnaW5nLnBhZ2UgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZSgpLFxuXHRcdFx0cGFnZVNpemUgPSBwYWdpbmcucGFnZVNpemUgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplcyA9IHBhZ2luZy5wYWdlU2l6ZXMgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZVNpemVzKCksXG5cdFx0XHRwYWdlclRvcCA9IHBhZ2luZy5wYWdlclRvcCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc1BhZ2VyVG9wKCksXG5cdFx0XHRwYWdlckJvdHRvbSA9IHBhZ2luZy5wYWdlckJvdHRvbSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc1BhZ2VyQm90dG9tKCk7XG5cblx0XHRyZXR1cm4gbmV3IFBhZ2luZ01hbmFnZXIoXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cGFnZSxcblx0XHRcdHBhZ2VTaXplLFxuXHRcdFx0cGFnZVNpemVzLFxuXHRcdFx0cGFnZXJUb3AsXG5cdFx0XHRwYWdlckJvdHRvbSxcblx0XHRcdDAsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjaGFuZ2UocGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBwYWdpbmdDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlID0gcGFnaW5nQ29uZmlnLnBhZ2U7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemVzID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplcztcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJUb3AgPSBwYWdpbmdDb25maWcucGFnZXJUb3A7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gcGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9PT0gZmFsc2UgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdQYWdlcnMgY2Fubm90IGJlIHR1cm4gb2ZmIHdoZW4gcGFnaW5nIGlzIGVuYWJsZWQuJyk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgbmV4dFBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNOZXh0UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdG5leHRQYWdlICs9IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gbmV4dFBhZ2U7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgcHJldlBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNQcmV2UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdHByZXZQYWdlIC09IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gcHJldlBhZ2U7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmICh0aGlzLnBhZ2VTaXplcy5maW5kKChwczogbnVtYmVyKSA9PiBwcyA9PT0gcGFnZVNpemUpKSB7XG5cblx0XHRcdHRoaXMuc2V0UGFnZSgxKTtcblx0XHRcdHRoaXMuc2V0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmV2ZW50cztcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgZmlyc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlyc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlRW5kKCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMucGFnZSAqIHRoaXMucGFnZVNpemU7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZCgpKTtcblx0fVxuXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cbn1cbiJdfQ==