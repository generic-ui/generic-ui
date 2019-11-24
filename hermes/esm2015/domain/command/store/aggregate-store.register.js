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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFpQzFDLENBQUM7Ozs7O0lBL0JBLFFBQVEsQ0FBQyxLQUFnQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLFdBQXdCO1FBRWpELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDVjs7WUFFRyxVQUFVLEdBQUcsRUFBRTtRQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRTs7a0JBRWxELFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxVQUF3QztRQUMvRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDs7Ozs7O0lBakNBLHdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RvcmVzOiBBcnJheTxhbnk+ID0gW107XG5cblx0cmVnaXN0ZXIoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZT4pOiB2b2lkIHtcblx0XHR0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcblx0fVxuXG5cdGNhcHR1cmVBZ2dyZWdhdGVzU25hcHNob3QoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGUgfSB7XG5cblx0XHRpZiAoIWFnZ3JlZ2F0ZUlkKSB7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXG5cdFx0bGV0IGFnZ3JlZ2F0ZXMgPSB7fTtcblxuXHRcdHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGU+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IHN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRpZiAoYWdncmVnYXRlKSB7XG5cblx0XHRcdFx0bGV0IGFnZ3JlZ2F0ZU5hbWUgPSBhZ2dyZWdhdGUuY29uc3RydWN0b3IubmFtZTtcblxuXHRcdFx0XHRhZ2dyZWdhdGVzW2FnZ3JlZ2F0ZU5hbWVdID0gYWdncmVnYXRlO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5jbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlcyk7XG5cdH1cblxuXHRwcml2YXRlIGNsb25lQWdncmVnYXRlcyhhZ2dyZWdhdGVzOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZSB9KTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGUgfSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWdncmVnYXRlcykpO1xuXHR9XG59XG4iXX0=