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
    function Field(id, accessor, dataType, matchers, aggregationConfig) {
        this.aggregationEnabled = true;
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
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
     * @return {?}
     */
    Field.prototype.getSearchAccessorMethod = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) {
                /** @type {?} */
                var val = _this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) {
                return _this.accessorMethod(entity);
            });
        }
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
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getSortValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        function (matcher) {
            value = matcher(value);
        }));
        return value;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getSearchValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        function (matcher) {
            value = matcher(value);
        }));
        return value;
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
     * @type {?}
     * @private
     */
    Field.prototype.matchers;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUE7Ozs7SUFtQkMsZUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsUUFBdUIsRUFDdkIsaUJBQTJDO1FBWjFDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQWExQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixDQUFBLENBQUM7U0FDL0U7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLFVBQUMsTUFBd0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQSxDQUFDO1NBQy9FO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFNRCxxQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVE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QyxPQUFPLENBQUM7YUFDdEQ7WUFFRCxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFO2dCQUV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFFdEIsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLENBQUM7b0JBQzVDLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7YUFDckQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNyRDtJQUNGLENBQUM7SUFFRixZQUFDO0FBQUQsQ0FBQyxBQTFKRCxJQTBKQzs7Ozs7Ozs7OztJQXhKQSxtQkFBNkI7Ozs7O0lBRzdCLHlCQUF3Qzs7Ozs7SUFFeEMseUJBQW9DOzs7OztJQUVwQywrQkFBbUU7Ozs7O0lBRW5FLG1DQUEyQzs7Ozs7SUFFM0MsNkJBQXNDOzs7OztJQUV0QyxxQ0FBdUQ7Ozs7O0lBRXZELHlCQUF5Qzs7Ozs7SUF1QnpDLDREQUFzRDs7Ozs7SUFFdEQsNkRBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcbmltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVyVHlwZSB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlci50eXBlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvcjogc3RyaW5nIHwgYW55OyAvLyhyYXdEYXRhOiBhbnkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlOiBEYXRhVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yTWV0aG9kOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZUFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnM7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRcdFx0ICBhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYWNjZXNzb3IgPSBhY2Nlc3Nvcjtcblx0XHR0aGlzLmRhdGFUeXBlID0gZGF0YVR5cGU7XG5cdFx0dGhpcy5tYXRjaGVycyA9IG1hdGNoZXJzO1xuXG5cdFx0aWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBlbnRpdHkuZ2V0RGF0YSgpW2FjY2Vzc29yXTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFjY2Vzc29yKGVudGl0eS5nZXREYXRhKCkpO1xuXHRcdH1cblxuXHRcdHRoaXMucG9zc2libGVBZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk7XG5cblx0XHR0aGlzLmFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0Z2V0SWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJZCgpLmdldElkKCk7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVR5cGU7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZDtcblx0fVxuXG5cdGdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cblx0XHRsZXQgbWF0Y2hlcjogKGk6IGFueSkgPT4gYW55O1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobTogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHRtYXRjaGVyID0gbTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKG1hdGNoZXIpIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbCA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0XHRcdFx0cmV0dXJuIG1hdGNoZXIodmFsKTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0fVxuXG5cdGdldFNvcnRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTb3J0TWF0Y2hlcigpXG5cdFx0XHQuaWZQcmVzZW50KChtYXRjaGVyOiBGaWVsZE1hdGNoZXJUeXBlKSA9PiB7XG5cdFx0XHRcdHZhbHVlID0gbWF0Y2hlcih2YWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGdldFNlYXJjaFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpc0FnZ3JlZ2F0aW9uKHR5cGU6IEFnZ3JlZ2F0aW9uVHlwZSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmlzQWdncmVnYXRpb25FbmFibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEodGhpcy5hZ2dyZWdhdGlvbnMgJiB0eXBlKTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZDtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoISFhZ2dyZWdhdGlvbkNvbmZpZyAmJiBPYmplY3Qua2V5cyhhZ2dyZWdhdGlvbkNvbmZpZykubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gISFhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcykge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gMDtcblxuXHRcdFx0XHRhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHQpID0+IHtcblx0XHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyB8PSB0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==