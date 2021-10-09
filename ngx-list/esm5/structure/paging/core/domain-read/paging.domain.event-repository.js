/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEventBus, hermesFilter, hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import { PagingWarehouse } from '../api/paging.warehouse';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
import { PagingEventRepository } from '../api/paging.event-repository';
import { Injectable } from '@angular/core';
var PagingDomainEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(PagingDomainEventRepository, _super);
    function PagingDomainEventRepository(eventBus, pagingWarehouse) {
        var _this = _super.call(this, eventBus) || this;
        _this.eventBus = eventBus;
        _this.pagingWarehouse = pagingWarehouse;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainEventRepository.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.eventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toAggregateId().toString(); })), hermesSwitchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPage(); })));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainEventRepository.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.eventBus
            .ofEvent((/** @type {?} */ (PagesizeChangedEvent)))
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toAggregateId().toString(); })), hermesSwitchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingWarehouse
                .oncePaging(structureId.toAggregateId())
                .pipe(hermesMap((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })));
        })));
    };
    PagingDomainEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingDomainEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingWarehouse }
    ]; };
    return PagingDomainEventRepository;
}(PagingEventRepository));
export { PagingDomainEventRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvZG9tYWluLXJlYWQvcGFnaW5nLmRvbWFpbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLGNBQWMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc3SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQ2lELHVEQUFxQjtJQUVyRSxxQ0FBNkIsUUFBd0IsRUFDakMsZUFBZ0M7UUFEcEQsWUFFQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUg0QixjQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUNqQyxxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7O0lBRXBELENBQUM7Ozs7O0lBRUQsa0RBQVk7Ozs7SUFBWixVQUFhLFdBQXFDO1FBQWxELGlCQW1CQztRQWpCQSxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsT0FBTyxDQUNQLG1CQUFBLGFBQWEsRUFBTyxFQUNwQixtQkFBQSxhQUFhLEVBQU8sRUFDcEIsbUJBQUEsZ0JBQWdCLEVBQU8sQ0FDdkI7YUFDQSxJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQTVFLENBQTRFLEVBQUMsRUFDL0gsZUFBZTs7OztRQUFDLFVBQUMsS0FBK0I7WUFFL0MsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDeEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdkMsSUFBSSxDQUNKLFNBQVM7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQyxDQUMvQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsc0RBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQXFDO1FBQXRELGlCQWlCQztRQWZBLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxPQUFPLENBQ1AsbUJBQUEsb0JBQW9CLEVBQU8sQ0FDM0I7YUFDQSxJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQTVFLENBQTRFLEVBQUMsRUFDL0gsZUFBZTs7OztRQUFDLFVBQUMsS0FBK0I7WUFFL0MsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDeEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdkMsSUFBSSxDQUNKLFNBQVM7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUNuRCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQTlDRCxVQUFVOzs7O2dCQWJXLGNBQWM7Z0JBRzNCLGVBQWU7O0lBMER4QixrQ0FBQztDQUFBLEFBaERELENBQ2lELHFCQUFxQixHQStDckU7U0EvQ1ksMkJBQTJCOzs7Ozs7SUFFM0IsK0NBQXlDOzs7OztJQUNsRCxzREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdEb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBQYWdpbmdFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZXZlbnRCdXMpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUHJldlBhZ2VFdmVudCBhcyBhbnksXG5cdFx0XHRcdFx0ICAgTmV4dFBhZ2VFdmVudCBhcyBhbnksXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uY2VQYWdpbmcoc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZSgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUGFnZXNpemVDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvQWdncmVnYXRlSWQoKS50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNTd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vbmNlUGFnaW5nKHN0cnVjdHVyZUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVybWVzTWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2VTaXplKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=