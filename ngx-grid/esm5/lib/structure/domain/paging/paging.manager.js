/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3BhZ2luZy9wYWdpbmcubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzVGO0lBcUJDLHVCQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7O1FBeEJkLFdBQU0sR0FBdUMsRUFBRSxDQUFDO1FBMEJoRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBekJELGNBQWM7Ozs7OztJQUNQLHFCQUFPOzs7Ozs7SUFBZCxVQUFlLE1BQWM7UUFDNUIsT0FBTyxJQUFJLGFBQWEsQ0FDdkIsS0FBSyxFQUNMLENBQUMsRUFDRCxFQUFFLEVBQ0YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDakIsS0FBSyxFQUNMLElBQUksRUFDSixDQUFDLEVBQ0QsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDO0lBZUQsY0FBYzs7Ozs7OztJQUNQLHdCQUFV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LGtDQUFnQzs7Ozs7SUFDaEMsaUNBQXlCOzs7OztJQUN6QixvQ0FBNEI7Ozs7O0lBQzVCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnLXdpdGgtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdNYW5hZ2VyIHtcblxuXHQvLyBUT0RPXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGRlZmF1bHQobG9nZ2VyOiBMb2dnZXIpIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZ01hbmFnZXIoXG5cdFx0XHRmYWxzZSxcblx0XHRcdDEsXG5cdFx0XHQyNSxcblx0XHRcdFsxMCwgMjUsIDUwLCAxMDBdLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHR0cnVlLFxuXHRcdFx0MCxcblx0XHRcdGxvZ2dlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyQm90dG9tOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRsb2dnZXI6IExvZ2dlcikge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGZyb21Db25maWcocGFnaW5nOiBQYWdpbmdDb25maWdXaXRoSWQsIGxvZ2dlcjogTG9nZ2VyKTogUGFnaW5nTWFuYWdlciB7XG5cblx0XHRjb25zdCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbiA9IFBhZ2luZ01hbmFnZXIuZGVmYXVsdChsb2dnZXIpLFxuXHRcdFx0ZW5hYmxlZCA9IHBhZ2luZy5lbmFibGVkIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0cGFnZSA9IHBhZ2luZy5wYWdlIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplID0gcGFnaW5nLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXMgPSBwYWdpbmcucGFnZVNpemVzIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplcygpLFxuXHRcdFx0cGFnZXJUb3AgPSBwYWdpbmcucGFnZXJUb3AgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlclRvcCgpLFxuXHRcdFx0cGFnZXJCb3R0b20gPSBwYWdpbmcucGFnZXJCb3R0b20gfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlckJvdHRvbSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdNYW5hZ2VyKFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHBhZ2UsXG5cdFx0XHRwYWdlU2l6ZSxcblx0XHRcdHBhZ2VTaXplcyxcblx0XHRcdHBhZ2VyVG9wLFxuXHRcdFx0cGFnZXJCb3R0b20sXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2hhbmdlKHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gcGFnaW5nQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZSA9IHBhZ2luZ0NvbmZpZy5wYWdlO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplcyA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXM7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyVG9wID0gcGFnaW5nQ29uZmlnLnBhZ2VyVG9wO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVkID09PSB0cnVlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPT09IGZhbHNlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5sb2dnZXIud2FybignUGFnZXJzIGNhbm5vdCBiZSB0dXJuIG9mZiB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLicpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IG5leHRQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzTmV4dFBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRuZXh0UGFnZSArPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IG5leHRQYWdlO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IHByZXZQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzUHJldlBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRwcmV2UGFnZSAtPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHByZXZQYWdlO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAodGhpcy5wYWdlU2l6ZXMuZmluZCgocHM6IG51bWJlcikgPT4gcHMgPT09IHBhZ2VTaXplKSkge1xuXG5cdFx0XHR0aGlzLnNldFBhZ2UoMSk7XG5cdFx0XHR0aGlzLnNldFBhZ2VTaXplKHBhZ2VTaXplKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudHM7XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdlU2l6ZSk7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcblx0fVxuXG5cdGNhbGN1bGF0ZVN0YXJ0KCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBmaXJzdEl0ZW0gPSAxICsgKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA8IGZpcnN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpcnN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZUVuZCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLnBhZ2UgKiB0aGlzLnBhZ2VTaXplO1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA8IGxhc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdHJldHVybiBsYXN0SXRlbTtcblx0fVxuXG5cdHNhbXBsZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIHNvdXJjZTtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSB0aGlzLmNhbGN1bGF0ZVN0YXJ0KCk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5jYWxjdWxhdGVFbmQoKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cbn1cbiJdfQ==