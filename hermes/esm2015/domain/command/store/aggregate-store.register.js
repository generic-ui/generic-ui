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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRWtCLFdBQU0sR0FBbUUsRUFBRSxDQUFDO0lBaUM5RixDQUFDOzs7OztJQS9CQSxRQUFRLENBQUMsS0FBOEQ7UUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxXQUF3QjtRQUVqRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O1lBRUcsVUFBVSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUE4RCxFQUFFLEVBQUU7O2tCQUVoRixTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFNUMsSUFBSSxTQUFTLEVBQUU7O29CQUVWLGFBQWEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBRTlDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDdEM7UUFFRixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsVUFBeUQ7UUFDaEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Q7Ozs7OztJQWpDQSx3Q0FBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdG9yZXM6IEFycmF5PEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4+ID0gW107XG5cblx0cmVnaXN0ZXIoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkIHtcblx0XHR0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcblx0fVxuXG5cdGNhcHR1cmVBZ2dyZWdhdGVzU25hcHNob3QoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9IHtcblxuXHRcdGlmICghYWdncmVnYXRlSWQpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRsZXQgYWdncmVnYXRlcyA9IHt9O1xuXG5cdFx0dGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPj4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gc3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGUpIHtcblxuXHRcdFx0XHRsZXQgYWdncmVnYXRlTmFtZSA9IGFnZ3JlZ2F0ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0ZXNbYWdncmVnYXRlTmFtZV0gPSBhZ2dyZWdhdGU7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmNsb25lQWdncmVnYXRlcyhhZ2dyZWdhdGVzKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXM6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4gfSk6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4gfSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWdncmVnYXRlcykpO1xuXHR9XG59XG4iXX0=