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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFnQixLQUFLOzs7Ozs7OztJQWlCMUIsWUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsaUJBQTJDO1FBVDFDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVUxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztTQUMvRTthQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQztTQUMvRTtRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUU5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBTUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFxQjtRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDakMsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxpQkFBMEM7UUFFcEUsSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFdkUsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFFdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRXRCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JEO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF0R0EsbUJBQTZCOzs7OztJQUc3Qix5QkFBd0M7Ozs7O0lBRXhDLHlCQUFvQzs7Ozs7SUFFcEMsK0JBQW1FOzs7OztJQUVuRSxtQ0FBMkM7Ozs7O0lBRTNDLDZCQUFzQzs7Ozs7SUFFdEMscUNBQXVEOzs7OztJQXFCdkQsNERBQXNEOzs7OztJQUV0RCw2REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogRmllbGRJZDtcblxuXHQvLyBUT0RPXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3I6IHN0cmluZyB8IGFueTsgLy8ocmF3RGF0YTogYW55KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhVHlwZTogRGF0YVR5cGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvck1ldGhvZDogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55O1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uczogQWdncmVnYXRpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zc2libGVBZ2dyZWdhdGlvbnM6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdFx0XHQgIGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgYWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXG5cdFx0aWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBlbnRpdHkuZ2V0RGF0YSgpW2FjY2Vzc29yXTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFjY2Vzc29yKGVudGl0eS5nZXREYXRhKCkpO1xuXHRcdH1cblxuXHRcdHRoaXMucG9zc2libGVBZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk7XG5cblx0XHR0aGlzLmFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZyk7XG5cdH1cblxuXHRhYnN0cmFjdCBhc3NpZ25EZWZhdWx0QWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBhc3NpZ25Qb3NzaWJsZUFnZ3JlZ2F0aW9ucygpOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0Z2V0SWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJZCgpLmdldElkKCk7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVR5cGU7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZDtcblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0fVxuXG5cdGlzQWdncmVnYXRpb24odHlwZTogQWdncmVnYXRpb25UeXBlKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuaXNBZ2dyZWdhdGlvbkVuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLmFnZ3JlZ2F0aW9ucyAmIHR5cGUpO1xuXHR9XG5cblx0aXNBZ2dyZWdhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRpb25FbmFibGVkO1xuXHR9XG5cblx0c2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdGlmICghIWFnZ3JlZ2F0aW9uQ29uZmlnICYmIE9iamVjdC5rZXlzKGFnZ3JlZ2F0aW9uQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSAhIWFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSAwO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zIHw9IHQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHR9XG5cdH1cblxufVxuIl19