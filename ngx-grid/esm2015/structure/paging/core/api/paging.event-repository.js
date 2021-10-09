/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
export class PagingEventRepository extends EventRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
PagingEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageChange = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageSizeChange = function (structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFNdkYsTUFBTSxPQUFnQixxQkFBc0IsU0FBUSxlQUFzRDs7Ozs7SUFFekcsWUFBc0IsY0FBOEI7UUFDbkQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQUxELFVBQVU7Ozs7WUFMRixjQUFjOzs7Ozs7OztJQVl0QiwwRUFBdUY7Ozs7OztJQUV2Riw4RUFBMkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnksIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRhYnN0cmFjdCBvblBhZ2VDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPjtcblxuXHRhYnN0cmFjdCBvblBhZ2VTaXplQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cbn1cbiJdfQ==