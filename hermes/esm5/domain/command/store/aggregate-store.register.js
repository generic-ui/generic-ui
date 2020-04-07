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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQUFBO1FBRWtCLFdBQU0sR0FBbUUsRUFBRSxDQUFDO0lBaUM5RixDQUFDOzs7OztJQS9CQSx5Q0FBUTs7OztJQUFSLFVBQVMsS0FBOEQ7UUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwwREFBeUI7Ozs7SUFBekIsVUFBMEIsV0FBd0I7UUFFakQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQztTQUNWOztZQUVHLFVBQVUsR0FBRyxFQUFFO1FBRW5CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBOEQ7O2dCQUU1RSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFNUMsSUFBSSxTQUFTLEVBQUU7O29CQUVWLGFBQWEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBRTlDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDdEM7UUFFRixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTyxnREFBZTs7Ozs7SUFBdkIsVUFBd0IsVUFBeUQ7UUFDaEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0YsNkJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7Ozs7O0lBakNBLHdDQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0b3JlczogQXJyYXk8QWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pj4gPSBbXTtcblxuXHRyZWdpc3RlcihzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuXHR9XG5cblx0Y2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+IH0ge1xuXG5cdFx0aWYgKCFhZ2dyZWdhdGVJZCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdGxldCBhZ2dyZWdhdGVzID0ge307XG5cblx0XHR0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+PikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBzdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRcdGxldCBhZ2dyZWdhdGVOYW1lID0gYWdncmVnYXRlLmNvbnN0cnVjdG9yLm5hbWU7XG5cblx0XHRcdFx0YWdncmVnYXRlc1thZ2dyZWdhdGVOYW1lXSA9IGFnZ3JlZ2F0ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9uZUFnZ3JlZ2F0ZXMoYWdncmVnYXRlczogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9KTogeyBba2V5OiBzdHJpbmddOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiB9IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhZ2dyZWdhdGVzKSk7XG5cdH1cbn1cbiJdfQ==