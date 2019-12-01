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
    function PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
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
        return new PagingAggregate(false, 1, 25, [10, 25, 50, 100], false, true, logger);
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
        var defaultPaginDefinition = PagingAggregate.default(logger);
        /** @type {?} */
        var enabled = paging.enabled || defaultPaginDefinition.isEnabled();
        /** @type {?} */
        var page = paging.page || defaultPaginDefinition.getPage();
        /** @type {?} */
        var pageSize = paging.pageSize || defaultPaginDefinition.getPageSize();
        /** @type {?} */
        var pageSizes = paging.pageSizes || defaultPaginDefinition.getPageSizes();
        /** @type {?} */
        var pagerTop = paging.pagerTop || defaultPaginDefinition.isPagerTop();
        /** @type {?} */
        var pagerBottom = paging.pagerBottom || defaultPaginDefinition.isPagerBottom();
        return new PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, logger);
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
            this.logger.warn('Pagers cannot be turn of when paging is enabled.');
        }
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.nextPage = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var nextPage = this.page;
        if (!this.isNextPageDisabled(sourceSize)) {
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
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.isNextPageDisabled = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        return this.page === Math.ceil(sourceSize / this.pageSize);
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
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.calculateStart = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.calculateEnd = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var lastItem = this.page * this.pageSize;
        if (sourceSize < lastItem) {
            return sourceSize;
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
        var sourceSize = source.length;
        /** @type {?} */
        var start = this.calculateStart(sourceSize);
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd(sourceSize));
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUs1Rjs7O0lBbUJDLHlCQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDNUIsTUFBYztRQU5TLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBdEJoQixXQUFNLEdBQTBCLEVBQUUsQ0FBQztRQXdCbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQXZCRCxjQUFjOzs7Ozs7SUFDUCx1QkFBTzs7Ozs7O0lBQWQsVUFBZSxNQUFjO1FBQzVCLE9BQU8sSUFBSSxlQUFlLENBQ3pCLEtBQUssRUFDTCxDQUFDLEVBQ0QsRUFBRSxFQUNGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ2pCLEtBQUssRUFDTCxJQUFJLEVBQ0osTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDO0lBY0QsY0FBYzs7Ozs7OztJQUNQLDBCQUFVOzs7Ozs7O0lBQWpCLFVBQWtCLE1BQTBCLEVBQUUsTUFBYzs7WUFFckQsc0JBQXNCLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1lBQzdELE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLHNCQUFzQixDQUFDLFNBQVMsRUFBRTs7WUFDOUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksc0JBQXNCLENBQUMsT0FBTyxFQUFFOztZQUN0RCxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUU7O1lBQ2xFLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLHNCQUFzQixDQUFDLFlBQVksRUFBRTs7WUFDckUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksc0JBQXNCLENBQUMsVUFBVSxFQUFFOztZQUNqRSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxzQkFBc0IsQ0FBQyxhQUFhLEVBQUU7UUFFM0UsT0FBTyxJQUFJLGVBQWUsQ0FDekIsT0FBTyxFQUNQLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsdUNBQWE7OztJQUFiO1FBQ0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxZQUEwQjtRQUVoQyxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztTQUNwQztRQUVELElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRTlCLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Q7UUFFRCxJQUFJLFlBQVksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUV0QyxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNEO1FBRUQsSUFBSSxZQUFZLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFFeEMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRDtRQUVELElBQUksWUFBWSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBRXRDLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Q7UUFFRCxJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUk7WUFDeEIsWUFBWSxDQUFDLFFBQVEsS0FBSyxLQUFLO1lBQy9CLFlBQVksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7SUFFRixDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxVQUFrQjs7WUFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsUUFBUSxJQUFJLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjs7WUFDSyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQy9CLFFBQVEsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBRTlCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxFQUFFLEtBQUssUUFBUSxFQUFmLENBQWUsRUFBQyxFQUFFO1lBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDRDQUFrQjs7OztJQUFsQixVQUFtQixVQUFrQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsVUFBa0I7O1lBRTFCLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUV2RCxJQUFJLFVBQVUsR0FBRyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFVBQWtCOztZQUV4QixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUTtRQUUxQyxJQUFJLFVBQVUsR0FBRyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxVQUFVLENBQUM7U0FDbEI7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxNQUFrQjtRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNkOztZQUVLLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTTs7WUFFNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBRTNDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFTyxpQ0FBTzs7Ozs7SUFBZixVQUFnQixJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQXlCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7O0lBRU8scUNBQVc7Ozs7O0lBQW5CLFVBQW9CLFFBQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQXZPRCxJQXVPQzs7Ozs7Ozs7SUFyT0EsaUNBQW9EOzs7OztJQWVwRCxpQ0FBZ0M7Ozs7O0lBRVosa0NBQXdCOzs7OztJQUN2QywrQkFBb0I7Ozs7O0lBQ3BCLG1DQUF3Qjs7Ozs7SUFDeEIsb0NBQWdDOzs7OztJQUNoQyxtQ0FBeUI7Ozs7O0lBQ3pCLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4uL3BhZ2luZy1jb25maWctd2l0aC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cblxuLy8gQWdncmVnYXRlXG5leHBvcnQgY2xhc3MgUGFnaW5nQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+ID0gW107XG5cblx0Ly8gVE9ETyBSZW1vdmVcblx0c3RhdGljIGRlZmF1bHQobG9nZ2VyOiBMb2dnZXIpIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZ0FnZ3JlZ2F0ZShcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2VyVG9wOiBib29sZWFuLFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlckJvdHRvbTogYm9vbGVhbixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZnJvbUNvbmZpZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCwgbG9nZ2VyOiBMb2dnZXIpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2luRGVmaW5pdGlvbiA9IFBhZ2luZ0FnZ3JlZ2F0ZS5kZWZhdWx0KGxvZ2dlciksXG5cdFx0XHRlbmFibGVkID0gcGFnaW5nLmVuYWJsZWQgfHwgZGVmYXVsdFBhZ2luRGVmaW5pdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHBhZ2UgPSBwYWdpbmcucGFnZSB8fCBkZWZhdWx0UGFnaW5EZWZpbml0aW9uLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplID0gcGFnaW5nLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdpbkRlZmluaXRpb24uZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplcyA9IHBhZ2luZy5wYWdlU2l6ZXMgfHwgZGVmYXVsdFBhZ2luRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdHBhZ2VyVG9wID0gcGFnaW5nLnBhZ2VyVG9wIHx8IGRlZmF1bHRQYWdpbkRlZmluaXRpb24uaXNQYWdlclRvcCgpLFxuXHRcdFx0cGFnZXJCb3R0b20gPSBwYWdpbmcucGFnZXJCb3R0b20gfHwgZGVmYXVsdFBhZ2luRGVmaW5pdGlvbi5pc1BhZ2VyQm90dG9tKCk7XG5cblx0XHRyZXR1cm4gbmV3IFBhZ2luZ0FnZ3JlZ2F0ZShcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwYWdlLFxuXHRcdFx0cGFnZVNpemUsXG5cdFx0XHRwYWdlU2l6ZXMsXG5cdFx0XHRwYWdlclRvcCxcblx0XHRcdHBhZ2VyQm90dG9tLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGNoYW5nZShwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHBhZ2luZ0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdpbmdDb25maWcucGFnZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemUgPSBwYWdpbmdDb25maWcucGFnZVNpemU7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZXMgPSBwYWdpbmdDb25maWcucGFnZVNpemVzO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlclRvcCA9IHBhZ2luZ0NvbmZpZy5wYWdlclRvcDtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSBwYWdpbmdDb25maWcucGFnZXJCb3R0b207XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID09PSBmYWxzZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHRydWU7XG5cblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ1BhZ2VycyBjYW5ub3QgYmUgdHVybiBvZiB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLicpO1xuXHRcdH1cblxuXHR9XG5cblx0bmV4dFBhZ2Uoc291cmNlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0bGV0IG5leHRQYWdlID0gdGhpcy5wYWdlO1xuXG5cdFx0aWYgKCF0aGlzLmlzTmV4dFBhZ2VEaXNhYmxlZChzb3VyY2VTaXplKSkge1xuXHRcdFx0bmV4dFBhZ2UgKz0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBuZXh0UGFnZTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBwcmV2UGFnZSA9IHRoaXMucGFnZTtcblxuXHRcdGlmICghdGhpcy5pc1ByZXZQYWdlRGlzYWJsZWQoKSkge1xuXHRcdFx0cHJldlBhZ2UgLT0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBwcmV2UGFnZTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRpZiAodGhpcy5wYWdlU2l6ZXMuZmluZCgocHM6IG51bWJlcikgPT4gcHMgPT09IHBhZ2VTaXplKSkge1xuXG5cdFx0XHR0aGlzLnNldFBhZ2UoMSk7XG5cdFx0XHR0aGlzLnNldFBhZ2VTaXplKHBhZ2VTaXplKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudHM7XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoc291cmNlU2l6ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoc291cmNlU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAoc291cmNlU2l6ZSA8IGZpcnN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpcnN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZUVuZChzb3VyY2VTaXplOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLnBhZ2UgKiB0aGlzLnBhZ2VTaXplO1xuXG5cdFx0aWYgKHNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNvdXJjZVNpemUgPSBzb3VyY2UubGVuZ3RoO1xuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydChzb3VyY2VTaXplKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZChzb3VyY2VTaXplKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cbn1cbiJdfQ==