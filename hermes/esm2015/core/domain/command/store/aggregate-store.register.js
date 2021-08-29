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
        const aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        (store) => {
            /** @type {?} */
            const aggregate = store.findById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                const aggregateName = aggregate.constructor.name;
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
        // return JSON.parse(JSON.stringify(aggregates));
        return aggregates;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateStoreRegister.prototype.stores;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFFa0IsV0FBTSxHQUFtRSxFQUFFLENBQUM7SUFrQzlGLENBQUM7Ozs7O0lBaENBLFFBQVEsQ0FBQyxLQUE4RDtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLFdBQXdCO1FBRWpELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDVjs7Y0FFSyxVQUFVLEdBQUcsRUFBRTtRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQThELEVBQUUsRUFBRTs7a0JBRWhGLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUU3QyxJQUFJLFNBQVMsRUFBRTs7c0JBRVIsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFaEQsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxVQUF5RDtRQUNoRixpREFBaUQ7UUFDakQsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQztDQUNEOzs7Ozs7SUFsQ0Esd0NBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0b3JlczogQXJyYXk8QWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pj4gPSBbXTtcblxuXHRyZWdpc3RlcihzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuXHR9XG5cblx0Y2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+IH0ge1xuXG5cdFx0aWYgKCFhZ2dyZWdhdGVJZCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZXMgPSB7fTtcblxuXHRcdHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IHN0b3JlLmZpbmRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZU5hbWUgPSBhZ2dyZWdhdGUuY29uc3RydWN0b3IubmFtZTtcblxuXHRcdFx0XHRhZ2dyZWdhdGVzW2FnZ3JlZ2F0ZU5hbWVdID0gYWdncmVnYXRlO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5jbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlcyk7XG5cdH1cblxuXHRwcml2YXRlIGNsb25lQWdncmVnYXRlcyhhZ2dyZWdhdGVzOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+IH0pOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+IH0ge1xuXHRcdC8vIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFnZ3JlZ2F0ZXMpKTtcblx0XHRyZXR1cm4gYWdncmVnYXRlcztcblx0fVxufVxuIl19