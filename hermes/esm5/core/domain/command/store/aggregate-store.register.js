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
            var aggregate = store.getById(aggregateId);
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
        return JSON.parse(JSON.stringify(aggregates));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQUE7UUFFa0IsV0FBTSxHQUFtRSxFQUFFLENBQUM7SUFpQzlGLENBQUM7Ozs7O0lBL0JBLHlDQUFROzs7O0lBQVIsVUFBUyxLQUE4RDtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBEQUF5Qjs7OztJQUF6QixVQUEwQixXQUF3QjtRQUVqRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O1lBRUcsVUFBVSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUE4RDs7Z0JBRTVFLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGdEQUFlOzs7OztJQUF2QixVQUF3QixVQUF5RDtRQUNoRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRiw2QkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7Ozs7SUFqQ0Esd0NBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0b3JlczogQXJyYXk8QWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pj4gPSBbXTtcblxuXHRyZWdpc3RlcihzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuXHR9XG5cblx0Y2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+IH0ge1xuXG5cdFx0aWYgKCFhZ2dyZWdhdGVJZCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdGxldCBhZ2dyZWdhdGVzID0ge307XG5cblx0XHR0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+PikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBzdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRcdGxldCBhZ2dyZWdhdGVOYW1lID0gYWdncmVnYXRlLmNvbnN0cnVjdG9yLm5hbWU7XG5cblx0XHRcdFx0YWdncmVnYXRlc1thZ2dyZWdhdGVOYW1lXSA9IGFnZ3JlZ2F0ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlczogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9KTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhZ2dyZWdhdGVzKSk7XG5cdH1cbn1cbiJdfQ==