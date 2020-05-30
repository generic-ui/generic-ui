/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { PagesizeChangedAggregateEvent } from './pagesize/pagesize-changed.aggregate-event';
var PagingManager = /** @class */ (function () {
    function PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, sourceSize, logger) {
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
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    PagingManager.default = 
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        return new PagingManager(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    };
    // TODO Remove
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    PagingManager.fromConfig = 
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    function (paging, logger) {
        /** @type {?} */
        var defaultPagingDefinition = PagingManager.default(logger);
        /** @type {?} */
        var enabled = paging.enabled || defaultPagingDefinition.isEnabled();
        /** @type {?} */
        var page = paging.page || defaultPagingDefinition.getPage();
        /** @type {?} */
        var pageSize = paging.pageSize || defaultPagingDefinition.getPageSize();
        /** @type {?} */
        var pageSizes = paging.pageSizes || defaultPagingDefinition.getPageSizes();
        /** @type {?} */
        var pagerTop = paging.pagerTop || defaultPagingDefinition.isPagerTop();
        /** @type {?} */
        var pagerBottom = paging.pagerBottom || defaultPagingDefinition.isPagerBottom();
        return new PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return !this.enabled;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return this.page;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.getPageSize = /**
     * @return {?}
     */
    function () {
        return this.pageSize;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.getPageSizes = /**
     * @return {?}
     */
    function () {
        return this.pageSizes;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isPagerTop = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isPagerBottom = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.getSourceSize = /**
     * @return {?}
     */
    function () {
        return this.sourceSize;
    };
    /**
     * @param {?} pagingConfig
     * @return {?}
     */
    PagingManager.prototype.change = /**
     * @param {?} pagingConfig
     * @return {?}
     */
    function (pagingConfig) {
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
    };
    /**
     * @param {?} size
     * @return {?}
     */
    PagingManager.prototype.setSourceSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.sourceSize = size;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextPage = this.page;
        if (!this.isNextPageDisabled()) {
            nextPage += 1;
        }
        this.page = nextPage;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagingManager.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        if (this.pageSizes.find((/**
         * @param {?} ps
         * @return {?}
         */
        function (ps) { return ps === pageSize; }))) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isNextPageDisabled = /**
     * @return {?}
     */
    function () {
        if (this.sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(this.sourceSize / this.pageSize);
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.calculateStart = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (this.sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.calculateEnd = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastItem = this.page * this.pageSize;
        if (this.sourceSize < lastItem) {
            return this.sourceSize;
        }
        return lastItem;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    PagingManager.prototype.sample = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        if (this.isDisabled()) {
            return source;
        }
        /** @type {?} */
        var start = this.calculateStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd());
    };
    /**
     * @return {?}
     */
    PagingManager.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    PagingManager.prototype.setPage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    };
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    PagingManager.prototype.setPageSize = /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    };
    return PagingManager;
}());
export { PagingManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHNUY7SUFxQkMsdUJBQTRCLE9BQWdCLEVBQy9CLElBQVksRUFDWixRQUFnQixFQUNoQixTQUF3QixFQUN4QixRQUFpQixFQUNqQixXQUFvQixFQUNwQixVQUFrQixFQUMxQixNQUFjO1FBUFMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUMvQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTs7UUF4QmQsV0FBTSxHQUF1QyxFQUFFLENBQUM7UUEwQmhFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUF6QkQsY0FBYzs7Ozs7O0lBQ1AscUJBQU87Ozs7OztJQUFkLFVBQWUsTUFBYztRQUM1QixPQUFPLElBQUksYUFBYSxDQUN2QixLQUFLLEVBQ0wsQ0FBQyxFQUNELEVBQUUsRUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7SUFlRCxjQUFjOzs7Ozs7O0lBQ1Asd0JBQVU7Ozs7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SUFnQmpFLCtCQUFnQzs7Ozs7SUFFWixnQ0FBd0I7Ozs7O0lBQ3ZDLDZCQUFvQjs7Ozs7SUFDcEIsaUNBQXdCOzs7OztJQUN4QixrQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUF5Qjs7Ozs7SUFDekIsb0NBQTRCOzs7OztJQUM1QixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2UtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUGFnaW5nTWFuYWdlciB7XG5cblx0Ly8gVE9ET1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdHN0YXRpYyBkZWZhdWx0KGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdNYW5hZ2VyKFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHQxLFxuXHRcdFx0MjUsXG5cdFx0XHRbMTAsIDI1LCA1MCwgMTAwXSxcblx0XHRcdGZhbHNlLFxuXHRcdFx0dHJ1ZSxcblx0XHRcdDAsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyVG9wOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlckJvdHRvbTogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgc291cmNlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0bG9nZ2VyOiBMb2dnZXIpIHtcblx0XHR0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdHN0YXRpYyBmcm9tQ29uZmlnKHBhZ2luZzogUGFnaW5nQ29uZmlnV2l0aElkLCBsb2dnZXI6IExvZ2dlcik6IFBhZ2luZ01hbmFnZXIge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24gPSBQYWdpbmdNYW5hZ2VyLmRlZmF1bHQobG9nZ2VyKSxcblx0XHRcdGVuYWJsZWQgPSBwYWdpbmcuZW5hYmxlZCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHBhZ2UgPSBwYWdpbmcucGFnZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZSA9IHBhZ2luZy5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzID0gcGFnaW5nLnBhZ2VTaXplcyB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdHBhZ2VyVG9wID0gcGFnaW5nLnBhZ2VyVG9wIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJUb3AoKSxcblx0XHRcdHBhZ2VyQm90dG9tID0gcGFnaW5nLnBhZ2VyQm90dG9tIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJCb3R0b20oKTtcblxuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwYWdlLFxuXHRcdFx0cGFnZVNpemUsXG5cdFx0XHRwYWdlU2l6ZXMsXG5cdFx0XHRwYWdlclRvcCxcblx0XHRcdHBhZ2VyQm90dG9tLFxuXHRcdFx0MCxcblx0XHRcdGxvZ2dlclxuXHRcdCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRnZXRTb3VyY2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGNoYW5nZShwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHBhZ2luZ0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdpbmdDb25maWcucGFnZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemUgPSBwYWdpbmdDb25maWcucGFnZVNpemU7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZXMgPSBwYWdpbmdDb25maWcucGFnZVNpemVzO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlclRvcCA9IHBhZ2luZ0NvbmZpZy5wYWdlclRvcDtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSBwYWdpbmdDb25maWcucGFnZXJCb3R0b207XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID09PSBmYWxzZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHRydWU7XG5cblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ1BhZ2VycyBjYW5ub3QgYmUgdHVybiBvZmYgd2hlbiBwYWdpbmcgaXMgZW5hYmxlZC4nKTtcblx0XHR9XG5cblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBuZXh0UGFnZSA9IHRoaXMucGFnZTtcblxuXHRcdGlmICghdGhpcy5pc05leHRQYWdlRGlzYWJsZWQoKSkge1xuXHRcdFx0bmV4dFBhZ2UgKz0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBuZXh0UGFnZTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBwcmV2UGFnZSA9IHRoaXMucGFnZTtcblxuXHRcdGlmICghdGhpcy5pc1ByZXZQYWdlRGlzYWJsZWQoKSkge1xuXHRcdFx0cHJldlBhZ2UgLT0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBwcmV2UGFnZTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKHRoaXMucGFnZVNpemVzLmZpbmQoKHBzOiBudW1iZXIpID0+IHBzID09PSBwYWdlU2l6ZSkpIHtcblxuXHRcdFx0dGhpcy5zZXRQYWdlKDEpO1xuXHRcdFx0dGhpcy5zZXRQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG5cdH1cblxuXHRjYWxjdWxhdGVTdGFydCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgZmlyc3RJdGVtID0gMSArICgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFzdEl0ZW07XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBzb3VyY2U7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuY2FsY3VsYXRlRW5kKCkpO1xuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxufVxuIl19