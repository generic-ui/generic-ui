/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AggregateStoreRegister {
    constructor() {
        this.stores = [];
    }
    /**
     * @param {?} store
     * @return {?}
     */
    register(store) {
        this.stores.push(store);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    captureAggregatesSnapshot(aggregateId) {
        if (!aggregateId) {
            return {};
        }
        /** @type {?} */
        let aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        (store) => {
            /** @type {?} */
            const aggregate = store.getById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                let aggregateName = aggregate.constructor.name;
                aggregates[aggregateName] = aggregate;
            }
        }));
        return this.cloneAggregates(aggregates);
    }
    /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    cloneAggregates(aggregates) {
        return JSON.parse(JSON.stringify(aggregates));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateStoreRegister.prototype.stores;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFFa0IsV0FBTSxHQUFtRSxFQUFFLENBQUM7SUFpQzlGLENBQUM7Ozs7O0lBL0JBLFFBQVEsQ0FBQyxLQUE4RDtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLFdBQXdCO1FBRWpELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDVjs7WUFFRyxVQUFVLEdBQUcsRUFBRTtRQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQThELEVBQUUsRUFBRTs7a0JBRWhGLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxVQUF5RDtRQUNoRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDs7Ozs7O0lBakNBLHdDQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdG9yZXM6IEFycmF5PEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4+ID0gW107XG5cblx0cmVnaXN0ZXIoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkIHtcblx0XHR0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcblx0fVxuXG5cdGNhcHR1cmVBZ2dyZWdhdGVzU25hcHNob3QoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9IHtcblxuXHRcdGlmICghYWdncmVnYXRlSWQpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRsZXQgYWdncmVnYXRlcyA9IHt9O1xuXG5cdFx0dGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gc3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGUpIHtcblxuXHRcdFx0XHRsZXQgYWdncmVnYXRlTmFtZSA9IGFnZ3JlZ2F0ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0ZXNbYWdncmVnYXRlTmFtZV0gPSBhZ2dyZWdhdGU7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmNsb25lQWdncmVnYXRlcyhhZ2dyZWdhdGVzKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXM6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4gfSk6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4gfSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWdncmVnYXRlcykpO1xuXHR9XG59XG4iXX0=