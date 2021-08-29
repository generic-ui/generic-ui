/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../structure/summaries/core/domain/summaries.type';
export class GuiGridColumnSummariesConverter {
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    convert(summariesConfig) {
        /** @type {?} */
        const columnSummariesConfig = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLakcsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFFM0MsT0FBTyxDQUFDLGVBQW1DOztjQUNwQyxxQkFBcUIsR0FBMEIsRUFBRTtRQUV2RCxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzlFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1RixxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRztRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsb0JBQW1DOztjQUUxRCxjQUFjLEdBQXlCLEVBQUU7UUFFL0Msb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7O2tCQUV2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUVyRCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUQsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsSUFBWTs7Y0FFbEMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXJELFFBQVEsb0JBQW9CLEVBQUU7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUU5QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCO2dCQUNDLE9BQU8sSUFBSSxDQUFDO1NBRWI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuXG5pbXBvcnQgeyBHdWlDb2x1bW5TdW1tYXJpZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ndWkuZ3JpZC5pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc3VtbWFyaWVzQ29uZmlnOiBHdWlDb2x1bW5TdW1tYXJpZXMpOiBDb2x1bW5TdW1tYXJpZXNDb25maWcge1xuXHRcdGNvbnN0IGNvbHVtblN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnID0ge307XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uU3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgPSBzdW1tYXJpZXNDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlcyhzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5TdW1tYXJpZXNDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdW1tYXJpZXNUeXBlcyhjb25maWdTdW1tYXJpZXNUeXBlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PFN1bW1hcmllc1R5cGU+IHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1R5cGVzOiBBcnJheTxTdW1tYXJpZXNUeXBlPiA9IFtdO1xuXG5cdFx0Y29uZmlnU3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdGNvbnN0IHN1bW1hcmllc1R5cGUgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlKHR5cGUpO1xuXG5cdFx0XHRpZiAoc3VtbWFyaWVzVHlwZSAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc1R5cGUgIT09IG51bGwpIHtcblx0XHRcdFx0c3VtbWFyaWVzVHlwZXMucHVzaChzdW1tYXJpZXNUeXBlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzdW1tYXJpZXNUeXBlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGUodHlwZTogc3RyaW5nKTogU3VtbWFyaWVzVHlwZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkU3VtbWFyaWVzVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFN1bW1hcmllc1R5cGUpIHtcblxuXHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVDtcblxuXHRcdFx0Y2FzZSAnZGlzdGluY3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblxuXHRcdFx0Y2FzZSAnc3VtJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuU1VNO1xuXG5cdFx0XHRjYXNlICdhdmVyYWdlJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQVZFUkFHRTtcblxuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUlOO1xuXG5cdFx0XHRjYXNlICdtYXgnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NQVg7XG5cblx0XHRcdGNhc2UgJ21lZGlhbic6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1FRElBTjtcblxuXHRcdFx0Y2FzZSAndHJ1dGh5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuVFJVVEhZO1xuXG5cdFx0XHRjYXNlICdmYWxzeSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkZBTFNZO1xuXG5cdFx0XHRjYXNlICdlYXJsaWVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkVBUkxJRVNUO1xuXG5cdFx0XHRjYXNlICdsYXRlc3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5MQVRFU1Q7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==