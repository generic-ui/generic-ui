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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFpQzFDLENBQUM7Ozs7O0lBL0JBLFFBQVEsQ0FBQyxLQUFnQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLFdBQXdCO1FBRWpELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDVjs7WUFFRyxVQUFVLEdBQUcsRUFBRTtRQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRTs7a0JBRWxELFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxVQUF3QztRQUMvRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDs7Ozs7O0lBakNBLHdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0b3JlczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHJlZ2lzdGVyKHN0b3JlOiBBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGU+KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG5cdH1cblxuXHRjYXB0dXJlQWdncmVnYXRlc1NuYXBzaG90KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlIH0ge1xuXG5cdFx0aWYgKCFhZ2dyZWdhdGVJZCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdGxldCBhZ2dyZWdhdGVzID0ge307XG5cblx0XHR0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBzdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRcdGxldCBhZ2dyZWdhdGVOYW1lID0gYWdncmVnYXRlLmNvbnN0cnVjdG9yLm5hbWU7XG5cblx0XHRcdFx0YWdncmVnYXRlc1thZ2dyZWdhdGVOYW1lXSA9IGFnZ3JlZ2F0ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlczogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGUgfSk6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlIH0ge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFnZ3JlZ2F0ZXMpKTtcblx0fVxufVxuIl19