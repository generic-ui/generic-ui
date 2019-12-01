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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUtySCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQUUxQyxPQUFPLENBQUMsaUJBQXVDOztZQUMxQyx1QkFBdUIsR0FBNEIsRUFBRTtRQUV6RCxJQUFJLGlCQUFpQixDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRix1QkFBdUIsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1lBQ3BHLHVCQUF1QixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxzQkFBcUM7O2NBRTlELGdCQUFnQixHQUEyQixFQUFFO1FBRW5ELHNCQUFzQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFOztrQkFFekMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7WUFFekQsSUFBSSxlQUFlLEtBQUssU0FBUyxJQUFJLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0JBQzlELGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN2QztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxJQUFZOztjQUVwQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFdkQsUUFBUSxzQkFBc0IsRUFBRTtZQUUvQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBRTlCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFFakMsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBRWhDLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUU1QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQztZQUU5QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBRWpDLEtBQUssUUFBUTtnQkFDWixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFFL0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcblxuaW1wb3J0IHsgR3VpQ29sdW1uQWdncmVnYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ncmlkLmluZGV4JztcblxuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0aW9uQ29uZmlnOiBHdWlDb2x1bW5BZ2dyZWdhdGlvbik6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uQWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnID0ge307XG5cblx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQgPSBhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyA9IHRoaXMuY29udmVydEFnZ3JlZ2F0aW9uVHlwZXMoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWdncmVnYXRpb25UeXBlcyhjb25maWdBZ2dyZWdhdGlvblR5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8QWdncmVnYXRpb25UeXBlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGlvblR5cGVzOiBBcnJheTxBZ2dyZWdhdGlvblR5cGU+ID0gW107XG5cblx0XHRjb25maWdBZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGlvblR5cGUgPSB0aGlzLmNvbnZlcnRBZ2dyZWdhdGlvblR5cGUodHlwZSk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvblR5cGUgIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvblR5cGUgIT09IG51bGwpIHtcblx0XHRcdFx0YWdncmVnYXRpb25UeXBlcy5wdXNoKGFnZ3JlZ2F0aW9uVHlwZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYWdncmVnYXRpb25UeXBlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFnZ3JlZ2F0aW9uVHlwZSh0eXBlOiBzdHJpbmcpOiBBZ2dyZWdhdGlvblR5cGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZEFnZ3JlZ2F0aW9uVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZEFnZ3JlZ2F0aW9uVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQ7XG5cblx0XHRcdGNhc2UgJ2Rpc3RpbmN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblxuXHRcdFx0Y2FzZSAnc3VtJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkFWRVJBR0U7XG5cblx0XHRcdGNhc2UgJ21pbic6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTUlOO1xuXG5cdFx0XHRjYXNlICdtYXgnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cblx0XHRcdGNhc2UgJ3RydXRoeSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuVFJVVEhZO1xuXG5cdFx0XHRjYXNlICdmYWxzeSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5FQVJMSUVTVDtcblxuXHRcdFx0Y2FzZSAnbGF0ZXN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5MQVRFU1Q7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==