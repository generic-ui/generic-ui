/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../lib/structure/domain/structure/summaries/summaries.type';
var GridColumnSummariesConverter = /** @class */ (function () {
    function GridColumnSummariesConverter() {
    }
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    GridColumnSummariesConverter.prototype.convert = /**
     * @param {?} summariesConfig
     * @return {?}
     */
    function (summariesConfig) {
        /** @type {?} */
        var columnSummariesConfig = {};
        if (summariesConfig.enabled !== undefined && summariesConfig.enabled !== null) {
            columnSummariesConfig.enabled = summariesConfig.enabled;
        }
        if (summariesConfig.summariesTypes !== undefined && summariesConfig.summariesTypes !== null) {
            columnSummariesConfig.summariesTypes = this.convertSummariesTypes(summariesConfig.summariesTypes);
        }
        return columnSummariesConfig;
    };
    /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    GridColumnSummariesConverter.prototype.convertSummariesTypes = /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    function (configSummariesTypes) {
        var _this = this;
        /** @type {?} */
        var summariesTypes = [];
        configSummariesTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var summariesType = _this.convertSummariesType(type);
            if (summariesType !== undefined && summariesType !== null) {
                summariesTypes.push(summariesType);
            }
        }));
        return summariesTypes;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GridColumnSummariesConverter.prototype.convertSummariesType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredSummariesType = type.toLocaleLowerCase();
        switch (loweredSummariesType) {
            case 'count':
                return SummariesType.COUNT;
            case 'distinct':
                return SummariesType.DISTINCT;
            case 'sum':
                return SummariesType.SUM;
            case 'average':
                return SummariesType.AVERAGE;
            case 'min':
                return SummariesType.MIN;
            case 'max':
                return SummariesType.MAX;
            case 'median':
                return SummariesType.MEDIAN;
            case 'truthy':
                return SummariesType.TRUTHY;
            case 'falsy':
                return SummariesType.FALSY;
            case 'earliest':
                return SummariesType.EARLIEST;
            case 'latest':
                return SummariesType.LATEST;
            default:
                return null;
        }
    };
    return GridColumnSummariesConverter;
}());
export { GridColumnSummariesConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9zdW1tYXJpZXMvZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBSzFHO0lBQUE7SUE2RUEsQ0FBQzs7Ozs7SUEzRUEsOENBQU87Ozs7SUFBUCxVQUFRLGVBQW1DOztZQUN0QyxxQkFBcUIsR0FBMEIsRUFBRTtRQUVyRCxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzlFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1RixxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRztRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sNERBQXFCOzs7OztJQUE3QixVQUE4QixvQkFBbUM7UUFBakUsaUJBY0M7O1lBWk0sY0FBYyxHQUF5QixFQUFFO1FBRS9DLG9CQUFvQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQVk7O2dCQUVuQyxhQUFhLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUVyRCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUQsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sMkRBQW9COzs7OztJQUE1QixVQUE2QixJQUFZOztZQUVsQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFckQsUUFBUSxvQkFBb0IsRUFBRTtZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBRTlCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7SUFFRixtQ0FBQztBQUFELENBQUMsQUE3RUQsSUE2RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMudHlwZSc7XG5cbmltcG9ydCB7IEd1aUNvbHVtblN1bW1hcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dyaWQuaW5kZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHN1bW1hcmllc0NvbmZpZzogR3VpQ29sdW1uU3VtbWFyaWVzKTogQ29sdW1uU3VtbWFyaWVzQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uU3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcgPSB7fTtcblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuZW5hYmxlZCA9IHN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGVzKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtblN1bW1hcmllc0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGVzKGNvbmZpZ1N1bW1hcmllc1R5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8U3VtbWFyaWVzVHlwZT4ge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZXM6IEFycmF5PFN1bW1hcmllc1R5cGU+ID0gW107XG5cblx0XHRjb25maWdTdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZSA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGUodHlwZSk7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNUeXBlICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRzdW1tYXJpZXNUeXBlcy5wdXNoKHN1bW1hcmllc1R5cGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllc1R5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlOiBzdHJpbmcpOiBTdW1tYXJpZXNUeXBlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRTdW1tYXJpZXNUeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkU3VtbWFyaWVzVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UO1xuXG5cdFx0XHRjYXNlICdkaXN0aW5jdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5BVkVSQUdFO1xuXG5cdFx0XHRjYXNlICdtaW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXG5cdFx0XHRjYXNlICd0cnV0aHknOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRUFSTElFU1Q7XG5cblx0XHRcdGNhc2UgJ2xhdGVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19