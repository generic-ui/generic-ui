/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructurePagingWarehouse } from './structure-paging.warehouse';
import { NextPageEvent } from '../../domain/paging/next-page/next-page.event';
import { PrevPageEvent } from '../../domain/paging/prev-page/prev-page.event';
import { PageChangedEvent } from '../../domain/paging/page/page-changed.event';
import { PagesizeChangedEvent } from '../../domain/paging/change-pagesize/pagesize-changed.event';
var StructurePagingEventRepository = /** @class */ (function () {
    function StructurePagingEventRepository(domainEventBus, pagingReadModelService) {
        this.domainEventBus = domainEventBus;
        this.pagingReadModelService = pagingReadModelService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructurePagingEventRepository.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId)
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
    StructurePagingEventRepository.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    StructurePagingEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePagingEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: StructurePagingWarehouse }
    ]; };
    return StructurePagingEventRepository;
}());
export { StructurePagingEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingEventRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructurePagingEventRepository.prototype.pagingReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUdsRztJQUdDLHdDQUE2QixjQUE4QixFQUN2QyxzQkFBZ0Q7UUFEdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxxREFBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFBckMsaUJBb0JDO1FBbEJBLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGFBQWEsRUFDYixhQUFhLEVBQ2IsZ0JBQWdCLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQ3pHLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRXpDLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQyxFQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHlEQUFnQjs7OztJQUFoQixVQUFpQixXQUF3QjtRQUF6QyxpQkFrQkM7UUFoQkEsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1Asb0JBQW9CLENBQ3BCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQ3pHLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRXpDLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkEvQ0QsVUFBVTs7OztnQkFYVyxjQUFjO2dCQUUzQix3QkFBd0I7O0lBMERqQyxxQ0FBQztDQUFBLEFBakRELElBaURDO1NBaERZLDhCQUE4Qjs7Ozs7O0lBRTlCLHdEQUErQzs7Ozs7SUFDeEQsZ0VBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1JlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSkge1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUGFnZXNpemVDaGFuZ2VkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZVNpemUoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19