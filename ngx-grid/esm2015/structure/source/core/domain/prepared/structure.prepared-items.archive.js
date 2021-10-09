/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
export class StructurePreparedItemsArchive extends AggregateArchive {
    constructor() {
        super(StructurePreparedItemsArchive.default);
    }
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    getPreparedItems(structureId) {
        return this.get(structureId).getValueOrNullOrThrowError();
    }
}
StructurePreparedItemsArchive.default = [];
StructurePreparedItemsArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePreparedItemsArchive.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StructurePreparedItemsArchive.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdEQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGdCQUFpRDtJQUluRztRQUNDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxXQUF3QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUMzRCxDQUFDOztBQVhlLHFDQUFPLEdBQW9DLEVBQUUsQ0FBQzs7WUFIOUQsVUFBVTs7Ozs7O0lBR1Ysc0NBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+PiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IGRlZmF1bHQ6IFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0UHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoc3RydWN0dXJlSWQpLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk7XG5cdH1cblxufVxuIl19