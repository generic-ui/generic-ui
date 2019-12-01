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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFpQkMsZUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsaUJBQTJDO1FBVDFDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVUxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixDQUFBLENBQUM7U0FDL0U7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLFVBQUMsTUFBd0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQSxDQUFDO1NBQy9FO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFNRCxxQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELHNCQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwyQkFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDJCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCx3QkFBUTs7OztJQUFSLFVBQVMsTUFBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNkJBQWE7Ozs7SUFBYixVQUFjLElBQXFCO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxvQ0FBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscUNBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sa0NBQWtCOzs7OztJQUExQixVQUEyQixpQkFBMEM7UUFBckUsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXZFLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUVELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUV0QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztJQUVGLFlBQUM7QUFBRCxDQUFDLEFBeEdELElBd0dDOzs7Ozs7Ozs7O0lBdEdBLG1CQUE2Qjs7Ozs7SUFHN0IseUJBQXdDOzs7OztJQUV4Qyx5QkFBb0M7Ozs7O0lBRXBDLCtCQUFtRTs7Ozs7SUFFbkUsbUNBQTJDOzs7OztJQUUzQyw2QkFBc0M7Ozs7O0lBRXRDLHFDQUF1RDs7Ozs7SUFxQnZELDREQUFzRDs7Ozs7SUFFdEQsNkRBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogRmllbGRJZDtcblxuXHQvLyBUT0RPXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3I6IHN0cmluZyB8IGFueTsgLy8ocmF3RGF0YTogYW55KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhVHlwZTogRGF0YVR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvck1ldGhvZDogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55O1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVBZ2dyZWdhdGlvbnM6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdFx0XHQgIGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgYWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXG5cdFx0aWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBlbnRpdHkuZ2V0RGF0YSgpW2FjY2Vzc29yXTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFjY2Vzc29yKGVudGl0eS5nZXREYXRhKCkpO1xuXHRcdH1cblxuXHRcdHRoaXMucG9zc2libGVBZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk7XG5cblx0XHR0aGlzLmFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0Z2V0SWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJZCgpLmdldElkKCk7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVR5cGU7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZDtcblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb24odHlwZTogQWdncmVnYXRpb25UeXBlKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuaXNBZ2dyZWdhdGlvbkVuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLmFnZ3JlZ2F0aW9ucyAmIHR5cGUpO1xuXHR9XG5cblx0aXNBZ2dyZWdhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRpb25FbmFibGVkO1xuXHR9XG5cblx0c2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdGlmICghIWFnZ3JlZ2F0aW9uQ29uZmlnICYmIE9iamVjdC5rZXlzKGFnZ3JlZ2F0aW9uQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSAhIWFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSAwO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zIHw9IHQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHR9XG5cdH1cblxufVxuIl19