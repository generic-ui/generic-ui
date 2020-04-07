/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../../../../../../lib/structure/domain/structure/aggregation/aggregation.type';
export class GridColumnAggregationConverter {
    /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    convert(aggregationConfig) {
        /** @type {?} */
        let columnAggregationConfig = {};
        if (aggregationConfig.enabled !== undefined && aggregationConfig.enabled !== null) {
            columnAggregationConfig.enabled = aggregationConfig.enabled;
        }
        if (aggregationConfig.aggregationTypes !== undefined && aggregationConfig.aggregationTypes !== null) {
            columnAggregationConfig.aggregationTypes = this.convertAggregationTypes(aggregationConfig.aggregationTypes);
        }
        return columnAggregationConfig;
    }
    /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    convertAggregationTypes(configAggregationTypes) {
        /** @type {?} */
        const aggregationTypes = [];
        configAggregationTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const aggregationType = this.convertAggregationType(type);
            if (aggregationType !== undefined && aggregationType !== null) {
                aggregationTypes.push(aggregationType);
            }
        }));
        return aggregationTypes;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertAggregationType(type) {
        /** @type {?} */
        const loweredAggregationType = type.toLocaleLowerCase();
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9hZ2dyZWdhdGlvbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUtoSCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQUUxQyxPQUFPLENBQUMsaUJBQXVDOztZQUMxQyx1QkFBdUIsR0FBNEIsRUFBRTtRQUV6RCxJQUFJLGlCQUFpQixDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRix1QkFBdUIsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1lBQ3BHLHVCQUF1QixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxzQkFBcUM7O2NBRTlELGdCQUFnQixHQUEyQixFQUFFO1FBRW5ELHNCQUFzQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFOztrQkFFekMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7WUFFekQsSUFBSSxlQUFlLEtBQUssU0FBUyxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0JBQzlELGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN2QztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxJQUFZOztjQUVwQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFdkQsUUFBUSxzQkFBc0IsRUFBRTtZQUUvQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBRTlCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFFakMsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBRWhDLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQztZQUU5QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBRWpDLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5cbmltcG9ydCB7IEd1aUNvbHVtbkFnZ3JlZ2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3JpZC5pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5BZ2dyZWdhdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGlvbkNvbmZpZzogR3VpQ29sdW1uQWdncmVnYXRpb24pOiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyB7XG5cdFx0bGV0IGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnOiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkID0gYWdncmVnYXRpb25Db25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMgPSB0aGlzLmNvbnZlcnRBZ2dyZWdhdGlvblR5cGVzKGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFnZ3JlZ2F0aW9uVHlwZXMoY29uZmlnQWdncmVnYXRpb25UeXBlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PEFnZ3JlZ2F0aW9uVHlwZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRpb25UeXBlczogQXJyYXk8QWdncmVnYXRpb25UeXBlPiA9IFtdO1xuXG5cdFx0Y29uZmlnQWdncmVnYXRpb25UeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRpb25UeXBlID0gdGhpcy5jb252ZXJ0QWdncmVnYXRpb25UeXBlKHR5cGUpO1xuXG5cdFx0XHRpZiAoYWdncmVnYXRpb25UeXBlICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb25UeXBlICE9PSBudWxsKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0aW9uVHlwZXMucHVzaChhZ2dyZWdhdGlvblR5cGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9uVHlwZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBZ2dyZWdhdGlvblR5cGUodHlwZTogc3RyaW5nKTogQWdncmVnYXRpb25UeXBlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRBZ2dyZWdhdGlvblR5cGUgPSB0eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRBZ2dyZWdhdGlvblR5cGUpIHtcblxuXHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UO1xuXG5cdFx0XHRjYXNlICdkaXN0aW5jdCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cblx0XHRcdGNhc2UgJ3N1bSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuU1VNO1xuXG5cdFx0XHRjYXNlICdhdmVyYWdlJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFO1xuXG5cdFx0XHRjYXNlICdtaW4nOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLk1JTjtcblxuXHRcdFx0Y2FzZSAnbWF4Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5NQVg7XG5cblx0XHRcdGNhc2UgJ21lZGlhbic6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTUVESUFOO1xuXG5cdFx0XHRjYXNlICd0cnV0aHknOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLlRSVVRIWTtcblxuXHRcdFx0Y2FzZSAnZmFsc3knOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkZBTFNZO1xuXG5cdFx0XHRjYXNlICdlYXJsaWVzdCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuRUFSTElFU1Q7XG5cblx0XHRcdGNhc2UgJ2xhdGVzdCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTEFURVNUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblx0fVxuXG59XG4iXX0=