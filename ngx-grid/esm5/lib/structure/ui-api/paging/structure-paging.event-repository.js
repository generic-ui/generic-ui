/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructurePagingReadModelWarehouse } from './structure-paging.read-model-warehouse';
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
        { type: StructurePagingReadModelWarehouse }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUdsRztJQUdDLHdDQUE2QixjQUE4QixFQUN2QyxzQkFBeUQ7UUFEaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBbUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxxREFBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFBckMsaUJBb0JDO1FBbEJBLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGFBQWEsRUFDYixhQUFhLEVBQ2IsZ0JBQWdCLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQzVGLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTVCLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQyxFQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHlEQUFnQjs7OztJQUFoQixVQUFpQixXQUF3QjtRQUF6QyxpQkFrQkM7UUFoQkEsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1Asb0JBQW9CLENBQ3BCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQzVGLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTVCLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkEvQ0QsVUFBVTs7OztnQkFYVyxjQUFjO2dCQUUzQixpQ0FBaUM7O0lBMEQxQyxxQ0FBQztDQUFBLEFBakRELElBaURDO1NBaERZLDhCQUE4Qjs7Ozs7O0lBRTlCLHdEQUErQzs7Ozs7SUFDeEQsZ0VBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIE5leHRQYWdlRXZlbnQsXG5cdFx0XHRcdFx0ICAgUHJldlBhZ2VFdmVudCxcblx0XHRcdFx0XHQgICBQYWdlQ2hhbmdlZEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUGFnZXNpemVDaGFuZ2VkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBhZ2luZyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2VTaXplKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==