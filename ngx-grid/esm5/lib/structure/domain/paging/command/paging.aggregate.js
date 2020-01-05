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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUs1Rjs7O0lBb0JDLHlCQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUF4QmQsV0FBTSxHQUEwQixFQUFFLENBQUM7UUEwQm5ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUF6QkQsY0FBYzs7Ozs7O0lBQ1AsdUJBQU87Ozs7OztJQUFkLFVBQWUsTUFBYztRQUM1QixPQUFPLElBQUksZUFBZSxDQUN6QixLQUFLLEVBQ0wsQ0FBQyxFQUNELEVBQUUsRUFDRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7SUFlRCxjQUFjOzs7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Q0FBd0I7Ozs7O0lBQ3hCLG9DQUFnQzs7Ozs7SUFDaEMsbUNBQXlCOzs7OztJQUN6QixzQ0FBNEI7Ozs7O0lBQzVCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4uL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cblxuLy8gQWdncmVnYXRlXG5leHBvcnQgY2xhc3MgUGFnaW5nQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+ID0gW107XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGRlZmF1bHQobG9nZ2VyOiBMb2dnZXIpIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZ0FnZ3JlZ2F0ZShcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZnJvbUNvbmZpZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCwgbG9nZ2VyOiBMb2dnZXIpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24gPSBQYWdpbmdBZ2dyZWdhdGUuZGVmYXVsdChsb2dnZXIpLFxuXHRcdFx0ZW5hYmxlZCA9IHBhZ2luZy5lbmFibGVkIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0cGFnZSA9IHBhZ2luZy5wYWdlIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplID0gcGFnaW5nLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXMgPSBwYWdpbmcucGFnZVNpemVzIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplcygpLFxuXHRcdFx0cGFnZXJUb3AgPSBwYWdpbmcucGFnZXJUb3AgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlclRvcCgpLFxuXHRcdFx0cGFnZXJCb3R0b20gPSBwYWdpbmcucGFnZXJCb3R0b20gfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlckJvdHRvbSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdBZ2dyZWdhdGUoXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cGFnZSxcblx0XHRcdHBhZ2VTaXplLFxuXHRcdFx0cGFnZVNpemVzLFxuXHRcdFx0cGFnZXJUb3AsXG5cdFx0XHRwYWdlckJvdHRvbSxcblx0XHRcdDAsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjaGFuZ2UocGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBwYWdpbmdDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlID0gcGFnaW5nQ29uZmlnLnBhZ2U7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemVzID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplcztcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJUb3AgPSBwYWdpbmdDb25maWcucGFnZXJUb3A7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gcGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9PT0gZmFsc2UgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdQYWdlcnMgY2Fubm90IGJlIHR1cm4gb2ZmIHdoZW4gcGFnaW5nIGlzIGVuYWJsZWQuJyk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgbmV4dFBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNOZXh0UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdG5leHRQYWdlICs9IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gbmV4dFBhZ2U7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgcHJldlBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNQcmV2UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdHByZXZQYWdlIC09IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gcHJldlBhZ2U7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0aWYgKHRoaXMucGFnZVNpemVzLmZpbmQoKHBzOiBudW1iZXIpID0+IHBzID09PSBwYWdlU2l6ZSkpIHtcblxuXHRcdFx0dGhpcy5zZXRQYWdlKDEpO1xuXHRcdFx0dGhpcy5zZXRQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG5cdH1cblxuXHRjYWxjdWxhdGVTdGFydCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgZmlyc3RJdGVtID0gMSArICgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFzdEl0ZW07XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBzb3VyY2U7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuY2FsY3VsYXRlRW5kKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG59XG4iXX0=