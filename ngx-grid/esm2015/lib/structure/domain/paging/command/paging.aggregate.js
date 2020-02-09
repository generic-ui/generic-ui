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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUk1RixNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7O0lBb0IzQixZQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUF4QmQsV0FBTSxHQUEwQixFQUFFLENBQUM7UUEwQm5ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQXhCRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWM7UUFDNUIsT0FBTyxJQUFJLGVBQWUsQ0FDekIsS0FBSyxFQUNMLENBQUMsRUFDRCxFQUFFLEVBQ0YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDakIsS0FBSyxFQUNMLElBQUksRUFDSixDQUFDLEVBQ0QsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFD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QUNqQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNkOztZQUVHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWpDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQXlCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFFBQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztDQUVEOzs7Ozs7SUFuUEEsaUNBQW9EOzs7OztJQWdCcEQsaUNBQWdDOzs7OztJQUVaLGtDQUF3Qjs7Ozs7SUFDdkMsK0JBQW9COzs7OztJQUNwQixtQ0FBd0I7Ozs7O0lBQ3hCLG9DQUFnQzs7Ozs7SUFDaEMsbUNBQXlCOzs7OztJQUN6QixzQ0FBNEI7Ozs7O0lBQzVCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4uL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbi8vIEFnZ3JlZ2F0ZVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0FnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiA9IFtdO1xuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdHN0YXRpYyBkZWZhdWx0KGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdBZ2dyZWdhdGUoXG5cdFx0XHRmYWxzZSxcblx0XHRcdDEsXG5cdFx0XHQyNSxcblx0XHRcdFsxMCwgMjUsIDUwLCAxMDBdLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHR0cnVlLFxuXHRcdFx0MCxcblx0XHRcdGxvZ2dlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyQm90dG9tOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRsb2dnZXI6IExvZ2dlcikge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGZyb21Db25maWcocGFnaW5nOiBQYWdpbmdDb25maWdXaXRoSWQsIGxvZ2dlcjogTG9nZ2VyKTogUGFnaW5nQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uID0gUGFnaW5nQWdncmVnYXRlLmRlZmF1bHQobG9nZ2VyKSxcblx0XHRcdGVuYWJsZWQgPSBwYWdpbmcuZW5hYmxlZCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHBhZ2UgPSBwYWdpbmcucGFnZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZSA9IHBhZ2luZy5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzID0gcGFnaW5nLnBhZ2VTaXplcyB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdHBhZ2VyVG9wID0gcGFnaW5nLnBhZ2VyVG9wIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJUb3AoKSxcblx0XHRcdHBhZ2VyQm90dG9tID0gcGFnaW5nLnBhZ2VyQm90dG9tIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJCb3R0b20oKTtcblxuXHRcdHJldHVybiBuZXcgUGFnaW5nQWdncmVnYXRlKFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHBhZ2UsXG5cdFx0XHRwYWdlU2l6ZSxcblx0XHRcdHBhZ2VTaXplcyxcblx0XHRcdHBhZ2VyVG9wLFxuXHRcdFx0cGFnZXJCb3R0b20sXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2hhbmdlKHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gcGFnaW5nQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZSA9IHBhZ2luZ0NvbmZpZy5wYWdlO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplcyA9IHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXM7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyVG9wID0gcGFnaW5nQ29uZmlnLnBhZ2VyVG9wO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVkID09PSB0cnVlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPT09IGZhbHNlICYmXG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5sb2dnZXIud2FybignUGFnZXJzIGNhbm5vdCBiZSB0dXJuIG9mZiB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLicpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IG5leHRQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzTmV4dFBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRuZXh0UGFnZSArPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IG5leHRQYWdlO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IHByZXZQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzUHJldlBhZ2VEaXNhYmxlZCgpKSB7XG5cdFx0XHRwcmV2UGFnZSAtPSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHByZXZQYWdlO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGlmICh0aGlzLnBhZ2VTaXplcy5maW5kKChwczogbnVtYmVyKSA9PiBwcyA9PT0gcGFnZVNpemUpKSB7XG5cblx0XHRcdHRoaXMuc2V0UGFnZSgxKTtcblx0XHRcdHRoaXMuc2V0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmV2ZW50cztcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgZmlyc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlyc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlRW5kKCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMucGFnZSAqIHRoaXMucGFnZVNpemU7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxufVxuIl19