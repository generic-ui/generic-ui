/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../../../../../lib/structure/domain/structure/command/aggregation/aggregation.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUtySCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQUUxQyxPQUFPLENBQUMsaUJBQXVDOztZQUMxQyx1QkFBdUIsR0FBNEIsRUFBRTtRQUV6RCxJQUFJLGlCQUFpQixDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRix1QkFBdUIsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1lBQ3BHLHVCQUF1QixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxzQkFBcUM7O2NBRTlELGdCQUFnQixHQUEyQixFQUFFO1FBRW5ELHNCQUFzQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFOztrQkFFekMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7WUFFekQsSUFBSSxlQUFlLEtBQUssU0FBUyxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0JBQzlELGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN2QztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxJQUFZOztjQUVwQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFdkQsUUFBUSxzQkFBc0IsRUFBRTtZQUUvQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBRTlCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFFakMsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBRWhDLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQztZQUU5QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBRWpDLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuXG5pbXBvcnQgeyBHdWlDb2x1bW5BZ2dyZWdhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2dyaWQuaW5kZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWdncmVnYXRpb25Db25maWc6IEd1aUNvbHVtbkFnZ3JlZ2F0aW9uKTogQ29sdW1uQWdncmVnYXRpb25Db25maWcge1xuXHRcdGxldCBjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZzogQ29sdW1uQWdncmVnYXRpb25Db25maWcgPSB7fTtcblxuXHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQWdncmVnYXRpb25Db25maWcuZW5hYmxlZCA9IGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGFnZ3JlZ2F0aW9uQ29uZmlnLmFnZ3JlZ2F0aW9uVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzID0gdGhpcy5jb252ZXJ0QWdncmVnYXRpb25UeXBlcyhhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uQWdncmVnYXRpb25Db25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBZ2dyZWdhdGlvblR5cGVzKGNvbmZpZ0FnZ3JlZ2F0aW9uVHlwZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxBZ2dyZWdhdGlvblR5cGU+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uVHlwZXM6IEFycmF5PEFnZ3JlZ2F0aW9uVHlwZT4gPSBbXTtcblxuXHRcdGNvbmZpZ0FnZ3JlZ2F0aW9uVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0aW9uVHlwZSA9IHRoaXMuY29udmVydEFnZ3JlZ2F0aW9uVHlwZSh0eXBlKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0aW9uVHlwZSAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRhZ2dyZWdhdGlvblR5cGVzLnB1c2goYWdncmVnYXRpb25UeXBlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhZ2dyZWdhdGlvblR5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWdncmVnYXRpb25UeXBlKHR5cGU6IHN0cmluZyk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkQWdncmVnYXRpb25UeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkQWdncmVnYXRpb25UeXBlKSB7XG5cblx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVDtcblxuXHRcdFx0Y2FzZSAnZGlzdGluY3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLlNVTTtcblxuXHRcdFx0Y2FzZSAnYXZlcmFnZSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQVZFUkFHRTtcblxuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTUFYO1xuXG5cdFx0XHRjYXNlICdtZWRpYW4nOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLk1FRElBTjtcblxuXHRcdFx0Y2FzZSAndHJ1dGh5Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5GQUxTWTtcblxuXHRcdFx0Y2FzZSAnZWFybGllc3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkVBUkxJRVNUO1xuXG5cdFx0XHRjYXNlICdsYXRlc3QnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19