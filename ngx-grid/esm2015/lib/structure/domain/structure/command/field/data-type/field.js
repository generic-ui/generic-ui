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
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, dataType, aggregationConfig) {
        this.aggregationEnabled = true;
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
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
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFnQixLQUFLOzs7Ozs7OztJQWlCMUIsWUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsaUJBQTJDO1FBVDFDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVUxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztTQUMvRTthQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQztTQUMvRTtRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUU5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBTUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFxQjtRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDakMsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxpQkFBMEM7UUFFcEUsSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFdkUsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFFdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRXRCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF0R0EsbUJBQTZCOzs7OztJQUc3Qix5QkFBd0M7Ozs7O0lBRXhDLHlCQUFvQzs7Ozs7SUFFcEMsK0JBQW1FOzs7OztJQUVuRSxtQ0FBMkM7Ozs7O0lBRTNDLDZCQUFzQzs7Ozs7SUFFdEMscUNBQXVEOzs7OztJQXFCdkQsNERBQXNEOzs7OztJQUV0RCw2REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvcjogc3RyaW5nIHwgYW55OyAvLyhyYXdEYXRhOiBhbnkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlOiBEYXRhVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yTWV0aG9kOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbkVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NzaWJsZUFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYWNjZXNzb3IgPSBhY2Nlc3Nvcjtcblx0XHR0aGlzLmRhdGFUeXBlID0gZGF0YVR5cGU7XG5cblx0XHRpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGVudGl0eS5nZXREYXRhKClbYWNjZXNzb3JdO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYWNjZXNzb3IoZW50aXR5LmdldERhdGEoKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wb3NzaWJsZUFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTtcblxuXHRcdHRoaXMuYXNzaWduQWdncmVnYXRpb25zKGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlO1xuXG5cdGFic3RyYWN0IGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRnZXRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldEtleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldElkKCkuZ2V0SWQoKTtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhVHlwZTtcblx0fVxuXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3I7XG5cdH1cblxuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kO1xuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHR9XG5cblx0aXNBZ2dyZWdhdGlvbih0eXBlOiBBZ2dyZWdhdGlvblR5cGUpOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5pc0FnZ3JlZ2F0aW9uRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhKHRoaXMuYWdncmVnYXRpb25zICYgdHlwZSk7XG5cdH1cblxuXHRpc0FnZ3JlZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQ7XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuYWdncmVnYXRpb25FbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduQWdncmVnYXRpb25zKGFnZ3JlZ2F0aW9uQ29uZmlnOiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKCEhYWdncmVnYXRpb25Db25maWcgJiYgT2JqZWN0LmtleXMoYWdncmVnYXRpb25Db25maWcpLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZCA9ICEhYWdncmVnYXRpb25Db25maWcuZW5hYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMpIHtcblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IDA7XG5cblx0XHRcdFx0YWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgfD0gdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduRGVmYXVsdEFnZ3JlZ2F0aW9ucygpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=