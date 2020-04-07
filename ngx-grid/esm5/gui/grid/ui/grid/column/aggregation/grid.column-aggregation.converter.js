/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregationType } from '../../../../../../lib/structure/domain/structure/aggregation/aggregation.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWdncmVnYXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9hZ2dyZWdhdGlvbi9ncmlkLmNvbHVtbi1hZ2dyZWdhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUtoSDtJQUFBO0lBNkVBLENBQUM7Ozs7O0lBM0VBLGdEQUFPOzs7O0lBQVAsVUFBUSxpQkFBdUM7O1lBQzFDLHVCQUF1QixHQUE0QixFQUFFO1FBRXpELElBQUksaUJBQWlCLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xGLHVCQUF1QixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7U0FDNUQ7UUFFRCxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDcEcsdUJBQXVCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUc7UUFFRCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLGdFQUF1Qjs7Ozs7SUFBL0IsVUFBZ0Msc0JBQXFDO1FBQXJFLGlCQWNDOztZQVpNLGdCQUFnQixHQUEyQixFQUFFO1FBRW5ELHNCQUFzQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQVk7O2dCQUVyQyxlQUFlLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUV6RCxJQUFJLGVBQWUsS0FBSyxTQUFTLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtnQkFDOUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLCtEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsSUFBWTs7WUFFcEMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXZELFFBQVEsc0JBQXNCLEVBQUU7WUFFL0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQztZQUU5QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBRWpDLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUVoQyxLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDO1lBRTVCLEtBQUssS0FBSztnQkFDVCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUM7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CLEtBQUssT0FBTztnQkFDWCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFFOUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUVqQyxLQUFLLFFBQVE7Z0JBQ1osT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBRS9CO2dCQUNDLE9BQU8sSUFBSSxDQUFDO1NBRWI7SUFDRixDQUFDO0lBRUYscUNBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWdncmVnYXRpb24uY29uZmlnJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi50eXBlJztcblxuaW1wb3J0IHsgR3VpQ29sdW1uQWdncmVnYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ncmlkLmluZGV4JztcblxuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0aW9uQ29uZmlnOiBHdWlDb2x1bW5BZ2dyZWdhdGlvbik6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uQWdncmVnYXRpb25Db25maWc6IENvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnID0ge307XG5cblx0XHRpZiAoYWdncmVnYXRpb25Db25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnLmVuYWJsZWQgPSBhZ2dyZWdhdGlvbkNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChhZ2dyZWdhdGlvbkNvbmZpZy5hZ2dyZWdhdGlvblR5cGVzICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyA9IHRoaXMuY29udmVydEFnZ3JlZ2F0aW9uVHlwZXMoYWdncmVnYXRpb25Db25maWcuYWdncmVnYXRpb25UeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkFnZ3JlZ2F0aW9uQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWdncmVnYXRpb25UeXBlcyhjb25maWdBZ2dyZWdhdGlvblR5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8QWdncmVnYXRpb25UeXBlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGlvblR5cGVzOiBBcnJheTxBZ2dyZWdhdGlvblR5cGU+ID0gW107XG5cblx0XHRjb25maWdBZ2dyZWdhdGlvblR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGlvblR5cGUgPSB0aGlzLmNvbnZlcnRBZ2dyZWdhdGlvblR5cGUodHlwZSk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGlvblR5cGUgIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvblR5cGUgIT09IG51bGwpIHtcblx0XHRcdFx0YWdncmVnYXRpb25UeXBlcy5wdXNoKGFnZ3JlZ2F0aW9uVHlwZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYWdncmVnYXRpb25UeXBlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFnZ3JlZ2F0aW9uVHlwZSh0eXBlOiBzdHJpbmcpOiBBZ2dyZWdhdGlvblR5cGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZEFnZ3JlZ2F0aW9uVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZEFnZ3JlZ2F0aW9uVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuQ09VTlQ7XG5cblx0XHRcdGNhc2UgJ2Rpc3RpbmN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblxuXHRcdFx0Y2FzZSAnc3VtJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLkFWRVJBR0U7XG5cblx0XHRcdGNhc2UgJ21pbic6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuTUlOO1xuXG5cdFx0XHRjYXNlICdtYXgnOlxuXHRcdFx0XHRyZXR1cm4gQWdncmVnYXRpb25UeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5NRURJQU47XG5cblx0XHRcdGNhc2UgJ3RydXRoeSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuVFJVVEhZO1xuXG5cdFx0XHRjYXNlICdmYWxzeSc6XG5cdFx0XHRcdHJldHVybiBBZ2dyZWdhdGlvblR5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5FQVJMSUVTVDtcblxuXHRcdFx0Y2FzZSAnbGF0ZXN0Jzpcblx0XHRcdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5MQVRFU1Q7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==