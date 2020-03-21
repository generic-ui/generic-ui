/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class Field {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, dataType, matchers, aggregationConfig) {
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
            (entity) => entity.getData()[accessor]);
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => accessor(entity.getData()));
        }
        this.possibleAggregations = this.assignPossibleAggregations();
        this.assignAggregations(aggregationConfig);
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.getId().getId();
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
    /**
     * @return {?}
     */
    getAccessor() {
        return this.accessor;
    }
    /**
     * @return {?}
     */
    getAccessorMethod() {
        return this.accessorMethod;
    }
    /**
     * @return {?}
     */
    getSearchAccessorMethod() {
        /** @type {?} */
        let matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        (m) => {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                /** @type {?} */
                const val = this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                return this.accessorMethod(entity);
            });
        }
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSortValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSearchValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isAggregation(type) {
        if (!this.isAggregationEnabled()) {
            return false;
        }
        return !!(this.aggregations & type);
    }
    /**
     * @return {?}
     */
    isAggregationEnabled() {
        return this.aggregationEnabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setAggregationEnabled(enabled) {
        this.aggregationEnabled = enabled;
    }
    /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    assignAggregations(aggregationConfig) {
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
                (t) => {
                    this.aggregations |= t;
                }));
            }
            else {
                this.aggregations = this.assignDefaultAggregations();
            }
        }
        else {
            this.aggregations = this.assignDefaultAggregations();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsTUFBTSxPQUFnQixLQUFLOzs7Ozs7Ozs7SUFtQjFCLFlBQXNCLEVBQVcsRUFDMUIsUUFBYSxFQUNiLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQ3ZCLGlCQUEyQztRQVoxQyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFhMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7U0FDL0U7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUM7U0FDL0U7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQU1ELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVE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RyxDQUFDLENBQUM7Z0JBRXRCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF4SkEsbUJBQTZCOzs7OztJQUc3Qix5QkFBd0M7Ozs7O0lBRXhDLHlCQUFvQzs7Ozs7SUFFcEMsK0JBQW1FOzs7OztJQUVuRSxtQ0FBMkM7Ozs7O0lBRTNDLDZCQUFzQzs7Ozs7SUFFdEMscUNBQXVEOzs7OztJQUV2RCx5QkFBeUM7Ozs7O0lBdUJ6Qyw0REFBc0Q7Ozs7O0lBRXRELDZEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogRmllbGRJZDtcblxuXHQvLyBUT0RPXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3I6IHN0cmluZyB8IGFueTsgLy8ocmF3RGF0YTogYW55KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhVHlwZTogRGF0YVR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvck1ldGhvZDogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55O1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVBZ2dyZWdhdGlvbnM6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0XHRcdCAgYWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXHRcdHRoaXMubWF0Y2hlcnMgPSBtYXRjaGVycztcblxuXHRcdGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gZW50aXR5LmdldERhdGEoKVthY2Nlc3Nvcl07XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhY2Nlc3NvcihlbnRpdHkuZ2V0RGF0YSgpKTtcblx0XHR9XG5cblx0XHR0aGlzLnBvc3NpYmxlQWdncmVnYXRpb25zID0gdGhpcy5hc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpO1xuXG5cdFx0dGhpcy5hc3NpZ25BZ2dyZWdhdGlvbnMoYWdncmVnYXRpb25Db25maWcpO1xuXHR9XG5cblx0YWJzdHJhY3QgYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0YWJzdHJhY3QgYXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlO1xuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2Q7XG5cdH1cblxuXHRnZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXG5cdFx0bGV0IG1hdGNoZXI6IChpOiBhbnkpID0+IGFueTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG06IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0bWF0Y2hlciA9IG07XG5cdFx0XHR9KTtcblxuXHRcdGlmIChtYXRjaGVyKSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWwgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHRcdHJldHVybiBtYXRjaGVyKHZhbCk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdH1cblxuXHRnZXRTb3J0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cblx0XHR0aGlzLm1hdGNoZXJzXG5cdFx0XHQuZ2V0U29ydE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRnZXRTZWFyY2hWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG1hdGNoZXI6IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0dmFsdWUgPSBtYXRjaGVyKHZhbHVlKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aXNBZ2dyZWdhdGlvbih0eXBlOiBBZ2dyZWdhdGlvblR5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc0FnZ3JlZ2F0aW9uRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuYWdncmVnYXRpb25zICYgdHlwZSk7XG5cdH1cblxuXHRpc0FnZ3JlZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQ7XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduQWdncmVnYXRpb25zKGFnZ3JlZ2F0aW9uQ29uZmlnOiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhYWdncmVnYXRpb25Db25maWcgJiYgT2JqZWN0LmtleXMoYWdncmVnYXRpb25Db25maWcpLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZCA9ICEhYWdncmVnYXRpb25Db25maWcuZW5hYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IDA7XG5cblx0XHRcdFx0YWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=