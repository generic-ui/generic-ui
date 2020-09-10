/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../structure/core/domain/summaries/summaries.type';
export class GuiGridColumnSummariesConverter {
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    convert(summariesConfig) {
        /** @type {?} */
        let columnSummariesConfig = {};
        if (summariesConfig.enabled !== undefined && summariesConfig.enabled !== null) {
            columnSummariesConfig.enabled = summariesConfig.enabled;
        }
        if (summariesConfig.summariesTypes !== undefined && summariesConfig.summariesTypes !== null) {
            columnSummariesConfig.summariesTypes = this.convertSummariesTypes(summariesConfig.summariesTypes);
        }
        return columnSummariesConfig;
    }
    /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    convertSummariesTypes(configSummariesTypes) {
        /** @type {?} */
        const summariesTypes = [];
        configSummariesTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const summariesType = this.convertSummariesType(type);
            if (summariesType !== undefined && summariesType !== null) {
                summariesTypes.push(summariesType);
            }
        }));
        return summariesTypes;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertSummariesType(type) {
        /** @type {?} */
        const loweredSummariesType = type.toLocaleLowerCase();
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLakcsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFFM0MsT0FBTyxDQUFDLGVBQW1DOztZQUN0QyxxQkFBcUIsR0FBMEIsRUFBRTtRQUVyRCxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzlFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1RixxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRztRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsb0JBQW1DOztjQUUxRCxjQUFjLEdBQXlCLEVBQUU7UUFFL0Msb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7O2tCQUV2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUVyRCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUQsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsSUFBWTs7Y0FFbEMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXJELFFBQVEsb0JBQW9CLEVBQUU7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUU5QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCO2dCQUNDLE9BQU8sSUFBSSxDQUFDO1NBRWI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcblxuaW1wb3J0IHsgR3VpQ29sdW1uU3VtbWFyaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3VpLmdyaWQuaW5kZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uU3VtbWFyaWVzQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHN1bW1hcmllc0NvbmZpZzogR3VpQ29sdW1uU3VtbWFyaWVzKTogQ29sdW1uU3VtbWFyaWVzQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uU3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcgPSB7fTtcblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuZW5hYmxlZCA9IHN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGVzKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtblN1bW1hcmllc0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGVzKGNvbmZpZ1N1bW1hcmllc1R5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8U3VtbWFyaWVzVHlwZT4ge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZXM6IEFycmF5PFN1bW1hcmllc1R5cGU+ID0gW107XG5cblx0XHRjb25maWdTdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZSA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGUodHlwZSk7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNUeXBlICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRzdW1tYXJpZXNUeXBlcy5wdXNoKHN1bW1hcmllc1R5cGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllc1R5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlOiBzdHJpbmcpOiBTdW1tYXJpZXNUeXBlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRTdW1tYXJpZXNUeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkU3VtbWFyaWVzVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UO1xuXG5cdFx0XHRjYXNlICdkaXN0aW5jdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5BVkVSQUdFO1xuXG5cdFx0XHRjYXNlICdtaW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXG5cdFx0XHRjYXNlICd0cnV0aHknOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRUFSTElFU1Q7XG5cblx0XHRcdGNhc2UgJ2xhdGVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19