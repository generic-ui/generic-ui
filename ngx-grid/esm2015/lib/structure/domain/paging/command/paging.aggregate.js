/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../structure-id';
import { PagesizeChangedAggregateEvent } from './pagesize/pagesize-changed.aggregate-event';
// Aggregate
export class PagingAggregate {
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
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    static default(logger) {
        return new PagingAggregate(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    static fromConfig(paging, logger) {
        /** @type {?} */
        const defaultPagingDefinition = PagingAggregate.default(logger);
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
        return new PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUs1RixNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7O0lBb0IzQixZQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUF4QmQsV0FBTSxHQUEwQixFQUFFLENBQUM7UUEwQm5ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQXhCRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWM7UUFDNUIsT0FBTyxJQUFJLGVBQWUsQ0FDekIsS0FBSyxFQUNMLENBQUMsRUFDRCxFQUFFLEVBQ0YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDakIsS0FBSyxFQUNMLElBQUksRUFDSixDQUFDLEVBQ0QsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFD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QUNqQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNkOztZQUVHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWpDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQXlCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFFBQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztDQUVEOzs7Ozs7SUFuUEEsaUNBQW9EOzs7OztJQWdCcEQsaUNBQWdDOzs7OztJQUVaLGtDQUF3Qjs7Ozs7SUFDdkMsK0JBQW9COzs7OztJQUNwQixtQ0FBd0I7Ozs7O0lBQ3hCLG9DQUFnQzs7Ozs7SUFDaEMsbUNBQXlCOzs7OztJQUN6QixzQ0FBNEI7Ozs7O0lBQzVCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4uL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cblxuLy8gQWdncmVnYXRlXG5leHBvcnQgY2xhc3MgUGFnaW5nQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+ID0gW107XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGRlZmF1bHQobG9nZ2VyOiBMb2dnZXIpIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZ0FnZ3JlZ2F0ZShcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZnJvbUNvbmZpZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCwgbG9nZ2VyOiBMb2dnZXIpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24gPSBQYWdpbmdBZ2dyZWdhdGUuZGVmYXVsdChsb2dnZXIpLFxuXHRcdFx0ZW5hYmxlZCA9IHBhZ2luZy5lbmFibGVkIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0cGFnZSA9IHBhZ2luZy5wYWdlIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplID0gcGFnaW5nLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXMgPSBwYWdpbmcucGFnZVNpemVzIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmdldFBhZ2VTaXplcygpLFxuXHRcdFx0cGFnZXJUb3AgPSBwYWdpbmcucGFnZXJUb3AgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlclRvcCgpLFxuXHRcdFx0cGFnZXJCb3R0b20gPSBwYWdpbmcucGFnZXJCb3R0b20gfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNQYWdlckJvdHRvbSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdBZ2dyZWdhdGUoXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cGFnZSxcblx0XHRcdHBhZ2VTaXplLFxuXHRcdFx0cGFnZVNpemVzLFxuXHRcdFx0cGFnZXJUb3AsXG5cdFx0XHRwYWdlckJvdHRvbSxcblx0XHRcdDAsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjaGFuZ2UocGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBwYWdpbmdDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlID0gcGFnaW5nQ29uZmlnLnBhZ2U7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemVzID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplcztcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJUb3AgPSBwYWdpbmdDb25maWcucGFnZXJUb3A7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gcGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9PT0gZmFsc2UgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdQYWdlcnMgY2Fubm90IGJlIHR1cm4gb2ZmIHdoZW4gcGFnaW5nIGlzIGVuYWJsZWQuJyk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgbmV4dFBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNOZXh0UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdG5leHRQYWdlICs9IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gbmV4dFBhZ2U7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgcHJldlBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNQcmV2UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdHByZXZQYWdlIC09IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gcHJldlBhZ2U7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0aWYgKHRoaXMucGFnZVNpemVzLmZpbmQoKHBzOiBudW1iZXIpID0+IHBzID09PSBwYWdlU2l6ZSkpIHtcblxuXHRcdFx0dGhpcy5zZXRQYWdlKDEpO1xuXHRcdFx0dGhpcy5zZXRQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG5cdH1cblxuXHRjYWxjdWxhdGVTdGFydCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgZmlyc3RJdGVtID0gMSArICgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFzdEl0ZW07XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBzb3VyY2U7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuY2FsY3VsYXRlRW5kKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudChuZXcgU3RydWN0dXJlSWQoJ1RPRE8gbmVlZCB0byBiZSBjaGFuZ2VkJykpKTtcblx0fVxuXG59XG4iXX0=