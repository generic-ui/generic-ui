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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQUFBO1FBRWtCLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFpQzFDLENBQUM7Ozs7O0lBL0JBLHlDQUFROzs7O0lBQVIsVUFBUyxLQUFnQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBEQUF5Qjs7OztJQUF6QixVQUEwQixXQUF3QjtRQUVqRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O1lBRUcsVUFBVSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFnQzs7Z0JBRTlDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU1QyxJQUFJLFNBQVMsRUFBRTs7b0JBRVYsYUFBYSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFOUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN0QztRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVPLGdEQUFlOzs7OztJQUF2QixVQUF3QixVQUF3QztRQUMvRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRiw2QkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7Ozs7SUFqQ0Esd0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vYWdncmVnYXRlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdG9yZXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRyZWdpc3RlcihzdG9yZTogQWdncmVnYXRlU3RvcmU8QWdncmVnYXRlPik6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmVzLnB1c2goc3RvcmUpO1xuXHR9XG5cblx0Y2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZSB9IHtcblxuXHRcdGlmICghYWdncmVnYXRlSWQpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRsZXQgYWdncmVnYXRlcyA9IHt9O1xuXG5cdFx0dGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmU6IEFnZ3JlZ2F0ZVN0b3JlPEFnZ3JlZ2F0ZT4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gc3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGUpIHtcblxuXHRcdFx0XHRsZXQgYWdncmVnYXRlTmFtZSA9IGFnZ3JlZ2F0ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0ZXNbYWdncmVnYXRlTmFtZV0gPSBhZ2dyZWdhdGU7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmNsb25lQWdncmVnYXRlcyhhZ2dyZWdhdGVzKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvbmVBZ2dyZWdhdGVzKGFnZ3JlZ2F0ZXM6IHsgW2tleTogc3RyaW5nXTogQWdncmVnYXRlIH0pOiB7IFtrZXk6IHN0cmluZ106IEFnZ3JlZ2F0ZSB9IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhZ2dyZWdhdGVzKSk7XG5cdH1cbn1cbiJdfQ==