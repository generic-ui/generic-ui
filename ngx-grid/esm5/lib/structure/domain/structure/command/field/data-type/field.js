/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Field = /** @class */ (function () {
    function Field(id, accessor, dataType, aggregationConfig) {
        this.aggregationEnabled = true;
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return entity.getData()[accessor]; });
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return accessor(entity.getData()); });
        }
        this.possibleAggregations = this.assignPossibleAggregations();
        this.assignAggregations(aggregationConfig);
    }
    /**
     * @return {?}
     */
    Field.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Field.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.getId().getId();
    };
    /**
     * @return {?}
     */
    Field.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    /**
     * @return {?}
     */
    Field.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    Field.prototype.getAccessorMethod = /**
     * @return {?}
     */
    function () {
        return this.accessorMethod;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessorMethod(entity);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isAggregation = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (!this.isAggregationEnabled()) {
            return false;
        }
        return !!(this.aggregations & type);
    };
    /**
     * @return {?}
     */
    Field.prototype.isAggregationEnabled = /**
     * @return {?}
     */
    function () {
        return this.aggregationEnabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    Field.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.aggregationEnabled = enabled;
    };
    /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    Field.prototype.assignAggregations = /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    function (aggregationConfig) {
        var _this = this;
        if (!!aggregationConfig && Object.keys(aggregationConfig).length !== 0) {
            if (aggregationConfig.enabled) {
                this.aggregationEnabled = !!aggregationConfig.enabled;
            }
            if (aggregationConfig.aggregationTypes) {
                this.aggregations = 0;
                aggregationConfig.aggregationTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    _this.aggregations |= t;
                }));
            }
            else {
                this.aggregations = this.assignDefaultAggregations();
            }
        }
        else {
            this.aggregations = this.assignDefaultAggregations();
        }
    };
    return Field;
}());
/**
 * @abstract
 */
export { Field };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregationEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleAggregations;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultAggregations = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleAggregations = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFpQkMsZUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsaUJBQTJDO1FBVDFDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVUxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixDQUFBLENBQUM7U0FDL0U7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLFVBQUMsTUFBd0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQSxDQUFDO1NBQy9FO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFNRCxxQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELHNCQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwyQkFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDJCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCx3QkFBUTs7OztJQUFSLFVBQVMsTUFBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNkJBQWE7Ozs7SUFBYixVQUFjLElBQXFCO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxvQ0FBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscUNBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sa0NBQWtCOzs7OztJQUExQixVQUEyQixpQkFBMEM7UUFBckUsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXZFLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUVELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUV0QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztJQUVGLFlBQUM7QUFBRCxDQUFDLEFBeEdELElBd0dDOzs7Ozs7Ozs7O0lBdEdBLG1CQUE2Qjs7Ozs7SUFHN0IseUJBQXdDOzs7OztJQUV4Qyx5QkFBb0M7Ozs7O0lBRXBDLCtCQUFtRTs7Ozs7SUFFbkUsbUNBQTJDOzs7OztJQUUzQyw2QkFBc0M7Ozs7O0lBRXRDLHFDQUF1RDs7Ozs7SUFxQnZELDREQUFzRDs7Ozs7SUFFdEQsNkRBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmllbGQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IEZpZWxkSWQ7XG5cblx0Ly8gVE9ET1xuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yOiBzdHJpbmcgfCBhbnk7IC8vKHJhd0RhdGE6IGFueSkgPT4gYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGU6IERhdGFUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3JNZXRob2Q6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueTtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbnM6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlQWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRcdFx0ICBhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIGFnZ3JlZ2F0aW9uQ29uZmlnPzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5hY2Nlc3NvciA9IGFjY2Vzc29yO1xuXHRcdHRoaXMuZGF0YVR5cGUgPSBkYXRhVHlwZTtcblxuXHRcdGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gZW50aXR5LmdldERhdGEoKVthY2Nlc3Nvcl07XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhY2Nlc3NvcihlbnRpdHkuZ2V0RGF0YSgpKTtcblx0XHR9XG5cblx0XHR0aGlzLnBvc3NpYmxlQWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpO1xuXG5cdFx0dGhpcy5hc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YWJzdHJhY3QgYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlO1xuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2Q7XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdH1cblxuXHRpc0FnZ3JlZ2F0aW9uKHR5cGU6IEFnZ3JlZ2F0aW9uVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzQWdncmVnYXRpb25FbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5hZ2dyZWdhdGlvbnMgJiB0eXBlKTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZDtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFhZ2dyZWdhdGlvbkNvbmZpZyAmJiBPYmplY3Qua2V5cyhhZ2dyZWdhdGlvbkNvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gISFhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gMDtcblxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHQpID0+IHtcblx0XHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==