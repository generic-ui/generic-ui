/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEventBus, hermesFilter, hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import { PagingWarehouse } from '../api/paging.warehouse';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
import { PagingEventRepository } from '../api/paging.event-repository';
import { Injectable } from '@angular/core';
export class PagingDomainEventRepository extends PagingEventRepository {
    /**
     * @param {?} eventBus
     * @param {?} pagingWarehouse
     */
    constructor(eventBus, pagingWarehouse) {
        super(eventBus);
        this.eventBus = eventBus;
        this.pagingWarehouse = pagingWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageChange(structureId) {
        return this.eventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toAggregateId().toString())), hermesSwitchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPage())));
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageSizeChange(structureId) {
        return this.eventBus
            .ofEvent((/** @type {?} */ (PagesizeChangedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toAggregateId().toString())), hermesSwitchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())));
        })));
    }
}
PagingDomainEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDomainEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: PagingWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDomainEventRepository.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    PagingDomainEventRepository.prototype.pagingWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvZG9tYWluLXJlYWQvcGFnaW5nLmRvbWFpbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzdILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxQjs7Ozs7SUFFckUsWUFBNkIsUUFBd0IsRUFDakMsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRlksYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRXBELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFdBQXFDO1FBRWpELE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxPQUFPLENBQ1AsbUJBQUEsYUFBYSxFQUFPLEVBQ3BCLG1CQUFBLGFBQWEsRUFBTyxFQUNwQixtQkFBQSxnQkFBZ0IsRUFBTyxDQUN2QjthQUNBLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQy9ILGVBQWU7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUVuRCxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUN4QixVQUFVLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN2QyxJQUFJLENBQ0osU0FBUzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FDL0MsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFdBQXFDO1FBRXJELE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxPQUFPLENBQ1AsbUJBQUEsb0JBQW9CLEVBQU8sQ0FDM0I7YUFDQSxJQUFJLENBQ0osWUFBWTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUMvSCxlQUFlOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFFbkQsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDeEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdkMsSUFBSSxDQUNKLFNBQVM7Ozs7WUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQ25ELENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFiVyxjQUFjO1lBRzNCLGVBQWU7Ozs7Ozs7SUFhWCwrQ0FBeUM7Ozs7O0lBQ2xELHNEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIGhlcm1lc1N3aXRjaE1hcCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9kb21haW4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nV2FyZWhvdXNlOiBQYWdpbmdXYXJlaG91c2UpIHtcblx0XHRzdXBlcihldmVudEJ1cyk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBQcmV2UGFnZUV2ZW50IGFzIGFueSxcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50IGFzIGFueSxcblx0XHRcdFx0XHQgICBQYWdlQ2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b0FnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzU3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1dhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25jZVBhZ2luZyhzdHJ1Y3R1cmVJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBQYWdlc2l6ZUNoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uY2VQYWdpbmcoc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZVNpemUoKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==