/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../../../../../lib/structure/domain/structure/command/aggregation/aggregation.type';
var GridColumnAggregationConverter = /** @class */ (function () {
    function GridColumnAggregationConverter() {
    }
    /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convert = /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    function (aggregationConfig) {
        /** @type {?} */
        var columnAggregationConfig = {};
        if (aggregationConfig.enabled !== undefined && aggregationConfig.enabled !== null) {
            columnAggregationConfig.enabled = aggregationConfig.enabled;
        }
        if (aggregationConfig.aggregationTypes !== undefined && aggregationConfig.aggregationTypes !== null) {
            columnAggregationConfig.aggregationTypes = this.convertAggregationTypes(aggregationConfig.aggregationTypes);
        }
        return columnAggregationConfig;
    };
    /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convertAggregationTypes = /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    function (configAggregationTypes) {
        var _this = this;
        /** @type {?} */
        var aggregationTypes = [];
        configAggregationTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var aggregationType = _this.convertAggregationType(type);
            if (aggregationType !== undefined && aggregationType !== null) {
                aggregationTypes.push(aggregationType);
            }
        }));
        return aggregationTypes;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convertAggregationType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredAggregationType = type.toLocaleLowerCase();
        switch (loweredAggregationType) {
            case 'count':
                return AggregationType.COUNT;
            case 'distinct':
                return AggregationType.DISTINCT;
            case 'sum':
                return AggregationType.SUM;
            case 'average':
                return AggregationType.AVERAGE;
            case 'min':
                return AggregationType.MIN;
            case 'max':
                return AggregationType.MAX;
            case 'median':
                return AggregationType.MEDIAN;
            case 'truthy':
                return AggregationType.TRUTHY;
            case 'falsy':
                return AggregationType.FALSY;
            case 'earliest':
                return AggregationType.EARLIEST;
            case 'latest':
                return AggregationType.LATEST;
            default:
                return null;
        }
    };
    return GridColumnAggregationConverter;
}());
export { GridColumnAggregationConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUtySDtJQUFBO0lBNkVBLENBQUM7Ozs7O0lBM0VBLGdEQUFPOzs7O0lBQVAsVUFBUSxpQkFBdUM7O1lBQzFDLHVCQUF1QixHQUE0QixFQUFFO1FBRXpELElBQUksaUJBQWlCLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xGLHVCQUF1QixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7U0FDNUQ7UUFFRCxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDcEcsdUJBQXVCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUc7UUFFRCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLGdFQUF1Qjs7Ozs7SUFBL0IsVUFBZ0Msc0JBQXFDO1FBQXJFLGlCQWNDOztZQVpNLGdCQUFnQixHQUEyQixFQUFFO1FBRW5ELHNCQUFzQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQVk7O2dCQUVyQyxlQUFlLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUV6RCxJQUFJLGVBQWUsS0FBSyxTQUFTLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtnQkFDOUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLCtEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsSUFBWTs7WUFFcEMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXZELFFBQVEsc0JBQXNCLEVBQUU7WUFFL0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQztZQUU5QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBRWpDLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUVoQyxLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDO1lBRTVCLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CLEtBQUssT0FBTztnQkFDWCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFFOUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUVqQyxLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CO2dCQUNDLE9BQU8sSUFBSSxDQUFDO1NBRWI7SUFDRixDQUFDO0lBRUYscUNBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuXG5pbXBvcnQgeyBHdWlDb2x1bW5BZ2dyZWdhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2dyaWQuaW5kZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWdncmVnYXRpb25Db25maWc6IEd1aUNvbHVtbkFnZ3JlZ2F0aW9uKTogQ29sdW1uQWdncmVnYXRpb25Db25maWcge1xuXHRcdGxldCBjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZzogQ29sdW1uQWdncmVnYXRpb25Db25maWcgPSB7fTtcblxuXHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQWdncmVnYXRpb25Db25maWcuZW5hYmxlZCA9IGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzID0gdGhpcy5jb252ZXJ0QWdncmVnYXRpb25UeXBlcyhhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uQWdncmVnYXRpb25Db25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBZ2dyZWdhdGlvblR5cGVzKGNvbmZpZ0FnZ3JlZ2F0aW9uVHlwZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxBZ2dyZWdhdGlvblR5cGU+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uVHlwZXM6IEFycmF5PEFnZ3JlZ2F0aW9uVHlwZT4gPSBbXTtcblxuXHRcdGNvbmZpZ0FnZ3JlZ2F0aW9uVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0aW9uVHlwZSA9IHRoaXMuY29udmVydEFnZ3JlZ2F0aW9uVHlwZSh0eXBlKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uVHlwZSAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRhZ2dyZWdhdGlvblR5cGVzLnB1c2goYWdncmVnYXRpb25UeXBlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhZ2dyZWdhdGlvblR5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWdncmVnYXRpb25UeXBlKHR5cGU6IHN0cmluZyk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkQWdncmVnYXRpb25UeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkQWdncmVnYXRpb25UeXBlKSB7XG5cblx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVDtcblxuXHRcdFx0Y2FzZSAnZGlzdGluY3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLlNVTTtcblxuXHRcdFx0Y2FzZSAnYXZlcmFnZSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQVZFUkFHRTtcblxuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTUFYO1xuXG5cdFx0XHRjYXNlICdtZWRpYW4nOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLk1FRElBTjtcblxuXHRcdFx0Y2FzZSAndHJ1dGh5Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblxuXHRcdFx0Y2FzZSAnZWFybGllc3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkVBUkxJRVNUO1xuXG5cdFx0XHRjYXNlICdsYXRlc3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19