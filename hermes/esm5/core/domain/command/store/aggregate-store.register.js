/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AggregateStoreRegister = /** @class */ (function () {
    function AggregateStoreRegister() {
        this.stores = [];
    }
    /**
     * @param {?} store
     * @return {?}
     */
    AggregateStoreRegister.prototype.register = /**
     * @param {?} store
     * @return {?}
     */
    function (store) {
        this.stores.push(store);
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateStoreRegister.prototype.captureAggregatesSnapshot = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (!aggregateId) {
            return {};
        }
        /** @type {?} */
        var aggregates = {};
        this.stores.forEach((/**
         * @param {?} store
         * @return {?}
         */
        function (store) {
            /** @type {?} */
            var aggregate = store.findById(aggregateId);
            if (aggregate) {
                /** @type {?} */
                var aggregateName = aggregate.constructor.name;
                aggregates[aggregateName] = aggregate;
            }
        }));
        return this.cloneAggregates(aggregates);
    };
    /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    AggregateStoreRegister.prototype.cloneAggregates = /**
     * @private
     * @param {?} aggregates
     * @return {?}
     */
    function (aggregates) {
        // return JSON.parse(JSON.stringify(aggregates));
        return aggregates;
    };
    return AggregateStoreRegister;
}());
export { AggregateStoreRegister };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateStoreRegister.prototype.stores;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQUE7UUFFa0IsV0FBTSxHQUFtRSxFQUFFLENBQUM7SUFrQzlGLENBQUM7Ozs7O0lBaENBLHlDQUFROzs7O0lBQVIsVUFBUyxLQUE4RDtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBEQUF5Qjs7OztJQUF6QixVQUEwQixXQUF3QjtRQUVqRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O1lBRUcsVUFBVSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUE4RDs7Z0JBRTVFLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUU3QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGdEQUFlOzs7OztJQUF2QixVQUF3QixVQUF5RDtRQUNoRixpREFBaUQ7UUFDakQsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQztJQUNGLDZCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQzs7Ozs7OztJQWxDQSx3Q0FBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RvcmVzOiBBcnJheTxBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4+PiA9IFtdO1xuXG5cdHJlZ2lzdGVyKHN0b3JlOiBBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4+KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG5cdH1cblxuXHRjYXB0dXJlQWdncmVnYXRlc1NuYXBzaG90KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4gfSB7XG5cblx0XHRpZiAoIWFnZ3JlZ2F0ZUlkKSB7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXG5cdFx0bGV0IGFnZ3JlZ2F0ZXMgPSB7fTtcblxuXHRcdHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBBZ2dyZWdhdGVTdG9yZTxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IHN0b3JlLmZpbmRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRcdGxldCBhZ2dyZWdhdGVOYW1lID0gYWdncmVnYXRlLmNvbnN0cnVjdG9yLm5hbWU7XG5cblx0XHRcdFx0YWdncmVnYXRlc1thZ2dyZWdhdGVOYW1lXSA9IGFnZ3JlZ2F0ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlczogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9KTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9IHtcblx0XHQvLyByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhZ2dyZWdhdGVzKSk7XG5cdFx0cmV0dXJuIGFnZ3JlZ2F0ZXM7XG5cdH1cbn1cbiJdfQ==