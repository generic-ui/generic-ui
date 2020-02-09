/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../structure-id';
import { PagesizeChangedAggregateEvent } from './pagesize/pagesize-changed.aggregate-event';
// Aggregate
var 
// Aggregate
PagingAggregate = /** @class */ (function () {
    function PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, sourceSize, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.sourceSize = sourceSize;
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    PagingAggregate.default = 
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        return new PagingAggregate(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    };
    // TODO Remove
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    PagingAggregate.fromConfig = 
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    function (paging, logger) {
        /** @type {?} */
        var defaultPagingDefinition = PagingAggregate.default(logger);
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
        return new PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return !this.enabled;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return this.page;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPageSize = /**
     * @return {?}
     */
    function () {
        return this.pageSize;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPageSizes = /**
     * @return {?}
     */
    function () {
        return this.pageSizes;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isPagerTop = /**
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
    PagingAggregate.prototype.isPagerBottom = /**
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
    PagingAggregate.prototype.getSourceSize = /**
     * @return {?}
     */
    function () {
        return this.sourceSize;
    };
    /**
     * @param {?} pagingConfig
     * @return {?}
     */
    PagingAggregate.prototype.change = /**
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
    PagingAggregate.prototype.setSourceSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.sourceSize = size;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.nextPage = /**
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
    PagingAggregate.prototype.prevPage = /**
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
    PagingAggregate.prototype.changePageSize = /**
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
    PagingAggregate.prototype.isNextPageDisabled = /**
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
    PagingAggregate.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.calculateStart = /**
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
    PagingAggregate.prototype.calculateEnd = /**
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
    PagingAggregate.prototype.sample = /**
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
     * @private
     * @param {?} page
     * @return {?}
     */
    PagingAggregate.prototype.setPage = /**
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
    PagingAggregate.prototype.setPageSize = /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    };
    return PagingAggregate;
}());
// Aggregate
export { PagingAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.events;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.page;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUk1Rjs7O0lBb0JDLHlCQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUF4QmQsV0FBTSxHQUEwQixFQUFFLENBQUM7UUEwQm5ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUF6QkQsY0FBYzs7Ozs7O0lBQ1AsdUJBQU87Ozs7OztJQUFkLFVBQWUsTUFBYztRQUM1QixPQUFPLElBQUksZUFBZSxDQUN6QixLQUFLLEVBQ0wsQ0FBQyxFQUNELEVBQUUsRUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7SUFlRCxjQUFjOzs7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Q0FBd0I7Ozs7O0lBQ3hCLG9DQUFnQzs7Ozs7SUFDaEMsbUNBQXlCOzs7OztJQUN6QixzQ0FBNEI7Ozs7O0lBQzVCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4uL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbi8vIEFnZ3JlZ2F0ZVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0FnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiA9IFtdO1xuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdHN0YXRpYyBkZWZhdWx0KGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdBZ2dyZWdhdGUoXG5cdFx0XHRmYWxzZSxcblx0XHRcdDEsXG5cdFx0XHQyNSxcblx0XHRcdFsxMCwgMjUsIDUwLCAxMDBdLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHR0cnVlLFxuXHRcdFx0MCxcblx0XHRcdGxvZ2dlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyQm90dG9tOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRsb2dnZXI6IExvZ2dlcikge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGZyb21Db25maWcocGFnaW5nOiBQYWdpbmdDb25maWdXaXRoSWQsIGxvZ2dlcjogTG9nZ2VyKTogUGFnaW5nQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uID0gUGFnaW5nQWdncmVnYXRlLmRlZmF1bHQobG9nZ2VyKSxcblx0XHRcdGVuYWJsZWQgPSBwYWdpbmcuZW5hYmxlZCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHBhZ2UgPSBwYWdpbmcucGFnZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZSA9IHBhZ2luZy5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzID0gcGFnaW5nLnBhZ2VTaXplcyB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdHBhZ2VyVG9wID0gcGFnaW5nLnBhZ2VyVG9wIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJUb3AoKSxcblx0XHRcdHBhZ2VyQm90dG9tID0gcGFnaW5nLnBhZ2VyQm90dG9tIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJCb3R0b20oKTtcblxuXHRcdHJldHVybiBuZXcgUGFnaW5nQWdncmVnYXRlKFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHBhZ2UsXG5cdFx0XHRwYWdlU2l6ZSxcblx0XHRcdHBhZ2VTaXplcyxcblx0XHRcdHBhZ2VyVG9wLFxuXHRcdFx0cGFnZXJCb3R0b20sXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2hhbmdlKHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gcGFnaW5nQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZSA9IHBhZ2luZ0NvbmZpZy5wYWdlO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplcyA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXM7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyVG9wID0gcGFnaW5nQ29uZmlnLnBhZ2VyVG9wO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVkID09PSB0cnVlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPT09IGZhbHNlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5sb2dnZXIud2FybignUGFnZXJzIGNhbm5vdCBiZSB0dXJuIG9mZiB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLicpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IG5leHRQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzTmV4dFBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRuZXh0UGFnZSArPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IG5leHRQYWdlO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IHByZXZQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzUHJldlBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRwcmV2UGFnZSAtPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHByZXZQYWdlO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGlmICh0aGlzLnBhZ2VTaXplcy5maW5kKChwczogbnVtYmVyKSA9PiBwcyA9PT0gcGFnZVNpemUpKSB7XG5cblx0XHRcdHRoaXMuc2V0UGFnZSgxKTtcblx0XHRcdHRoaXMuc2V0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmV2ZW50cztcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgZmlyc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlyc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlRW5kKCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMucGFnZSAqIHRoaXMucGFnZVNpemU7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxufVxuIl19