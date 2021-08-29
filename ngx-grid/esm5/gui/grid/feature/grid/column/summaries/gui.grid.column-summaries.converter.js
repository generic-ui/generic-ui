/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../structure/summaries/core/domain/summaries.type';
var GuiGridColumnSummariesConverter = /** @class */ (function () {
    function GuiGridColumnSummariesConverter() {
    }
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    GuiGridColumnSummariesConverter.prototype.convert = /**
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
    GuiGridColumnSummariesConverter.prototype.convertSummariesTypes = /**
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
    GuiGridColumnSummariesConverter.prototype.convertSummariesType = /**
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
    return GuiGridColumnSummariesConverter;
}());
export { GuiGridColumnSummariesConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLakc7SUFBQTtJQTZFQSxDQUFDOzs7OztJQTNFQSxpREFBTzs7OztJQUFQLFVBQVEsZUFBbUM7O1lBQ3BDLHFCQUFxQixHQUEwQixFQUFFO1FBRXZELElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDOUUscUJBQXFCLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDeEQ7UUFFRCxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQzVGLHFCQUFxQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTywrREFBcUI7Ozs7O0lBQTdCLFVBQThCLG9CQUFtQztRQUFqRSxpQkFjQzs7WUFaTSxjQUFjLEdBQXlCLEVBQUU7UUFFL0Msb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBWTs7Z0JBRW5DLGFBQWEsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBRXJELElBQUksYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUMxRCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw4REFBb0I7Ozs7O0lBQTVCLFVBQTZCLElBQVk7O1lBRWxDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUVyRCxRQUFRLG9CQUFvQixFQUFFO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssU0FBUztnQkFDYixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFFOUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QjtnQkFDQyxPQUFPLElBQUksQ0FBQztTQUViO0lBQ0YsQ0FBQztJQUVGLHNDQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5cbmltcG9ydCB7IEd1aUNvbHVtblN1bW1hcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2d1aS5ncmlkLmluZGV4JztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB7XG5cblx0Y29udmVydChzdW1tYXJpZXNDb25maWc6IEd1aUNvbHVtblN1bW1hcmllcyk6IENvbHVtblN1bW1hcmllc0NvbmZpZyB7XG5cdFx0Y29uc3QgY29sdW1uU3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcgPSB7fTtcblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuZW5hYmxlZCA9IHN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGVzKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtblN1bW1hcmllc0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGVzKGNvbmZpZ1N1bW1hcmllc1R5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8U3VtbWFyaWVzVHlwZT4ge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZXM6IEFycmF5PFN1bW1hcmllc1R5cGU+ID0gW107XG5cblx0XHRjb25maWdTdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZSA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGUodHlwZSk7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNUeXBlICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRzdW1tYXJpZXNUeXBlcy5wdXNoKHN1bW1hcmllc1R5cGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllc1R5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlOiBzdHJpbmcpOiBTdW1tYXJpZXNUeXBlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRTdW1tYXJpZXNUeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkU3VtbWFyaWVzVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UO1xuXG5cdFx0XHRjYXNlICdkaXN0aW5jdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5BVkVSQUdFO1xuXG5cdFx0XHRjYXNlICdtaW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXG5cdFx0XHRjYXNlICd0cnV0aHknOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRUFSTElFU1Q7XG5cblx0XHRcdGNhc2UgJ2xhdGVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19