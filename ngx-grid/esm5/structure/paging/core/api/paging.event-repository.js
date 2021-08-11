/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
var PagingEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(PagingEventRepository, _super);
    function PagingEventRepository(eventBus, pagingReadModelService) {
        var _this = _super.call(this, eventBus) || this;
        _this.eventBus = eventBus;
        _this.pagingReadModelService = pagingReadModelService;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.eventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toAggregateId().toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPage(); })), take(1));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.onEvent(structureId, PagesizeChangedEvent)
            .pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    PagingEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingWarehouse }
    ]; };
    return PagingEventRepository;
}(EventRepository));
export { PagingEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.pagingReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQWUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSXhGO0lBQzJDLGlEQUFzRDtJQUVoRywrQkFBNkIsUUFBd0IsRUFDakMsc0JBQXVDO1FBRDNELFlBRUMsa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFINEIsY0FBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDakMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjs7SUFFM0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsV0FBcUM7UUFBbEQsaUJBb0JDO1FBbEJBLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxPQUFPLENBQ1AsbUJBQUEsYUFBYSxFQUFPLEVBQ3BCLG1CQUFBLGFBQWEsRUFBTyxFQUNwQixtQkFBQSxnQkFBZ0IsRUFBTyxDQUN2QjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBNUUsQ0FBNEUsRUFBQyxFQUN6SCxTQUFTOzs7O1FBQUMsVUFBQyxLQUErQjtZQUV6QyxPQUFPLEtBQUksQ0FBQyxzQkFBc0I7aUJBQy9CLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3JDLElBQUksQ0FDSixHQUFHOzs7O1lBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQWhCLENBQWdCLEVBQUMsRUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsV0FBcUM7UUFBdEQsaUJBY0M7UUFaQSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDO2FBQ2hELElBQUksQ0FDSixTQUFTOzs7O1FBQUMsVUFBQyxLQUErQjtZQUV6QyxPQUFPLEtBQUksQ0FBQyxzQkFBc0I7aUJBQy9CLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3JDLElBQUksQ0FDSixHQUFHOzs7O1lBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQXBCLENBQW9CLEVBQUMsRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBNUNELFVBQVU7Ozs7Z0JBWlcsY0FBYztnQkFFM0IsZUFBZTs7SUF3RHhCLDRCQUFDO0NBQUEsQUE5Q0QsQ0FDMkMsZUFBZSxHQTZDekQ7U0E3Q1kscUJBQXFCOzs7Ozs7SUFFckIseUNBQXlDOzs7OztJQUNsRCx1REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4vcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9kb21haW4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nUmVhZE1vZGVsU2VydmljZTogUGFnaW5nV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZXZlbnRCdXMpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUHJldlBhZ2VFdmVudCBhcyBhbnksXG5cdFx0XHRcdFx0ICAgTmV4dFBhZ2VFdmVudCBhcyBhbnksXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBhZ2luZyhzdHJ1Y3R1cmVJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc3RydWN0dXJlSWQsIFBhZ2VzaXplQ2hhbmdlZEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZVNpemUoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19