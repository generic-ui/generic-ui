/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseField } from './base.field';
/**
 * @abstract
 * @template T
 */
export class Field extends BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     * @param {?=} aggregationConfig
     */
    constructor(id, accessor, dataType, matchers, aggregationConfig) {
        super(id, accessor, dataType, matchers);
        this.aggregationEnabled = true;
        this.possibleAggregations = this.assignPossibleAggregations();
        this.assignAggregations(aggregationConfig);
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
    /**
     * @abstract
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    Field.prototype.search = function (item, searchPhrase) { };
    /**
     * @abstract
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    Field.prototype.sort = function (one, two) { };
    /**
     * @abstract
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    Field.prototype.filter = function (value, filterPhrase) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXpDLE1BQU0sT0FBZ0IsS0FBUyxTQUFRLFNBQVM7Ozs7Ozs7OztJQVEvQyxZQUFzQixFQUFXLEVBQzFCLFFBQWEsRUFDYixRQUFrQixFQUNsQixRQUF1QixFQUN2QixpQkFBMkM7UUFDakQsS0FBSyxDQUFDLEVBQUUsRUFDUCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsQ0FBQyxDQUFDO1FBZEosdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBZ0IxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFZRCxhQUFhLENBQUMsSUFBcUI7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsaUJBQTBDO1FBRXBFLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXZFLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUVELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUV0QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7YUFDckQ7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNyRDtJQUNGLENBQUM7Q0FDRDs7Ozs7O0lBdEVBLG1DQUEyQzs7Ozs7SUFFM0MsNkJBQXNDOzs7OztJQUV0QyxxQ0FBdUQ7Ozs7O0lBaUJ2RCw0REFBc0Q7Ozs7O0lBRXRELDZEQUF1RDs7Ozs7OztJQUV2RCwyREFBdUU7Ozs7Ozs7SUFFdkUsK0NBQXNDOzs7Ozs7O0lBRXRDLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgQmFzZUZpZWxkIH0gZnJvbSAnLi9iYXNlLmZpZWxkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkPFQ+IGV4dGVuZHMgQmFzZUZpZWxkIHtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbnM6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBvc3NpYmxlQWdncmVnYXRpb25zOiBBZ2dyZWdhdGlvblR5cGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRcdFx0ICBhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRcdFx0ICBhZ2dyZWdhdGlvbkNvbmZpZz86IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdGRhdGFUeXBlLFxuXHRcdFx0bWF0Y2hlcnMpO1xuXG5cdFx0dGhpcy5wb3NzaWJsZUFnZ3JlZ2F0aW9ucyA9IHRoaXMuYXNzaWduUG9zc2libGVBZ2dyZWdhdGlvbnMoKTtcblxuXHRcdHRoaXMuYXNzaWduQWdncmVnYXRpb25zKGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFic3RyYWN0IGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlO1xuXG5cdGFic3RyYWN0IGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZTtcblxuXHRhYnN0cmFjdCBzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdGFic3RyYWN0IHNvcnQob25lOiBULCB0d286IFQpOiBudW1iZXI7XG5cblx0YWJzdHJhY3QgZmlsdGVyKHZhbHVlOiBULCBmaWx0ZXJQaHJhc2U6IFQpOiBib29sZWFuO1xuXG5cdGlzQWdncmVnYXRpb24odHlwZTogQWdncmVnYXRpb25UeXBlKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuaXNBZ2dyZWdhdGlvbkVuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISh0aGlzLmFnZ3JlZ2F0aW9ucyAmIHR5cGUpO1xuXHR9XG5cblx0aXNBZ2dyZWdhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRpb25FbmFibGVkO1xuXHR9XG5cblx0c2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkFnZ3JlZ2F0aW9ucyhhZ2dyZWdhdGlvbkNvbmZpZzogQ29sdW1uQWdncmVnYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdGlmICghIWFnZ3JlZ2F0aW9uQ29uZmlnICYmIE9iamVjdC5rZXlzKGFnZ3JlZ2F0aW9uQ29uZmlnKS5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbkVuYWJsZWQgPSAhIWFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzKSB7XG5cblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSAwO1xuXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zIHw9IHQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZ2dyZWdhdGlvbnMgPSB0aGlzLmFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==