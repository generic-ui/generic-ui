/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageChangedAggregateEvent } from './page/page-changed.aggregate-event';
import { StructureId } from '../../../core/api/structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUc1RjtJQXFCQyx1QkFBNEIsT0FBZ0IsRUFDL0IsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLFVBQWtCLEVBQzFCLE1BQWM7UUFQUyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQy9CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFROztRQXhCZCxXQUFNLEdBQXVDLEVBQUUsQ0FBQztRQTBCaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQXpCRCxjQUFjOzs7Ozs7SUFDUCxxQkFBTzs7Ozs7O0lBQWQsVUFBZSxNQUFjO1FBQzVCLE9BQU8sSUFBSSxhQUFhLENBQ3ZCLEtBQUssRUFDTCxDQUFDLEVBQ0QsRUFBRSxFQUNGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ2pCLEtBQUssRUFDTCxJQUFJLEVBQ0osQ0FBQyxFQUNELE1BQU0sQ0FDTixDQUFDO0lBQ0gsQ0FBQztJQWVELGNBQWM7Ozs7Ozs7SUFDUCx3QkFBVTs7Ozs7OztJQUFqQixVQUFrQixNQUEwQixFQUFFLE1BQWM7O1lBRXJELHVCQUF1QixHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUM1RCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxTQUFTLEVBQUU7O1lBQy9ELElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLHVCQUF1QixDQUFDLE9BQU8sRUFBRTs7WUFDdkQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFOztZQUNuRSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLEVBQUU7O1lBQ3RFLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLHVCQUF1QixDQUFDLFVBQVUsRUFBRTs7WUFDbEUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksdUJBQXVCLENBQUMsYUFBYSxFQUFFO1FBRTVFLE9BQU8sSUFBSSxhQUFhLENBQ3ZCLE9BQU8sRUFDUCxJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxFQUNYLENBQUMsRUFDRCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGtDQUFVOzs7SUFBVjtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxrQ0FBVTs7O0lBQVY7UUFDQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sWUFBMEI7UUFFaEMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDcEM7UUFFRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztZQUU5QixJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNEO1FBRUQsSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFFdEMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRDtRQUVELElBQUksWUFBWSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBRXhDLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Q7UUFFRCxJQUFJLFlBQVksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUV0QyxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNEO1FBRUQsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7WUFFNUMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLEtBQUssS0FBSztZQUMvQixZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO0lBRUYsQ0FBQzs7Ozs7SUFFRCxxQ0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSOztZQUNLLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDL0IsUUFBUSxJQUFJLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjs7WUFDSyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQy9CLFFBQVEsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsc0NBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBRTlCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxFQUFFLEtBQUssUUFBUSxFQUFmLENBQWUsRUFBQyxFQUFFO1lBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsMENBQWtCOzs7SUFBbEI7UUFFQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsMENBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxzQ0FBYzs7O0lBQWQ7O1lBRU8sU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxvQ0FBWTs7O0lBQVo7O1lBRU8sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFFMUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxNQUFrQjtRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNkOztZQUVHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWpDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sK0JBQU87Ozs7O0lBQWYsVUFBZ0IsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUF5QixDQUFDLElBQUksV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7OztJQUVPLG1DQUFXOzs7OztJQUFuQixVQUFvQixRQUFnQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDZCQUE2QixDQUFDLElBQUksV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUExUEQsSUEwUEM7Ozs7Ozs7SUF2UEEsK0JBQWlFOzs7OztJQWdCakUsK0JBQWdDOzs7OztJQUVaLGdDQUF3Qjs7Ozs7SUFDdkMsNkJBQW9COzs7OztJQUNwQixpQ0FBd0I7Ozs7O0lBQ3hCLGtDQUFnQzs7Ozs7SUFDaEMsaUNBQXlCOzs7OztJQUN6QixvQ0FBNEI7Ozs7O0lBQzVCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnLXdpdGgtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ01hbmFnZXIge1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZGVmYXVsdChsb2dnZXI6IExvZ2dlcikge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZnJvbUNvbmZpZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZ1dpdGhJZCwgbG9nZ2VyOiBMb2dnZXIpOiBQYWdpbmdNYW5hZ2VyIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uID0gUGFnaW5nTWFuYWdlci5kZWZhdWx0KGxvZ2dlciksXG5cdFx0XHRlbmFibGVkID0gcGFnaW5nLmVuYWJsZWQgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHRwYWdlID0gcGFnaW5nLnBhZ2UgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZSgpLFxuXHRcdFx0cGFnZVNpemUgPSBwYWdpbmcucGFnZVNpemUgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplcyA9IHBhZ2luZy5wYWdlU2l6ZXMgfHwgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24uZ2V0UGFnZVNpemVzKCksXG5cdFx0XHRwYWdlclRvcCA9IHBhZ2luZy5wYWdlclRvcCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc1BhZ2VyVG9wKCksXG5cdFx0XHRwYWdlckJvdHRvbSA9IHBhZ2luZy5wYWdlckJvdHRvbSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc1BhZ2VyQm90dG9tKCk7XG5cblx0XHRyZXR1cm4gbmV3IFBhZ2luZ01hbmFnZXIoXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cGFnZSxcblx0XHRcdHBhZ2VTaXplLFxuXHRcdFx0cGFnZVNpemVzLFxuXHRcdFx0cGFnZXJUb3AsXG5cdFx0XHRwYWdlckJvdHRvbSxcblx0XHRcdDAsXG5cdFx0XHRsb2dnZXJcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjaGFuZ2UocGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBwYWdpbmdDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlID0gcGFnaW5nQ29uZmlnLnBhZ2U7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZVNpemVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemVzID0gcGFnaW5nQ29uZmlnLnBhZ2VTaXplcztcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJUb3AgPSBwYWdpbmdDb25maWcucGFnZXJUb3A7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2VyQm90dG9tID0gcGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9PT0gZmFsc2UgJiZcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdQYWdlcnMgY2Fubm90IGJlIHR1cm4gb2ZmIHdoZW4gcGFnaW5nIGlzIGVuYWJsZWQuJyk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgbmV4dFBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNOZXh0UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdG5leHRQYWdlICs9IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gbmV4dFBhZ2U7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRsZXQgcHJldlBhZ2UgPSB0aGlzLnBhZ2U7XG5cblx0XHRpZiAoIXRoaXMuaXNQcmV2UGFnZURpc2FibGVkKCkpIHtcblx0XHRcdHByZXZQYWdlIC09IDE7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gcHJldlBhZ2U7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmICh0aGlzLnBhZ2VTaXplcy5maW5kKChwczogbnVtYmVyKSA9PiBwcyA9PT0gcGFnZVNpemUpKSB7XG5cblx0XHRcdHRoaXMuc2V0UGFnZSgxKTtcblx0XHRcdHRoaXMuc2V0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmV2ZW50cztcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgZmlyc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlyc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlRW5kKCk6IG51bWJlciB7XG5cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMucGFnZSAqIHRoaXMucGFnZVNpemU7XG5cblx0XHRpZiAodGhpcy5zb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZCgpKTtcblx0fVxuXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KG5ldyBTdHJ1Y3R1cmVJZCgnVE9ETyBuZWVkIHRvIGJlIGNoYW5nZWQnKSkpO1xuXHR9XG5cbn1cbiJdfQ==