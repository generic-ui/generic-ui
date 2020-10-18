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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLakcsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFFM0MsT0FBTyxDQUFDLGVBQW1DOztZQUN0QyxxQkFBcUIsR0FBMEIsRUFBRTtRQUVyRCxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzlFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1RixxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRztRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsb0JBQW1DOztjQUUxRCxjQUFjLEdBQXlCLEVBQUU7UUFFL0Msb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7O2tCQUV2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUVyRCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUQsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsSUFBWTs7Y0FFbEMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXJELFFBQVEsb0JBQW9CLEVBQUU7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUU5QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCO2dCQUNDLE9BQU8sSUFBSSxDQUFDO1NBRWI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuXG5pbXBvcnQgeyBHdWlDb2x1bW5TdW1tYXJpZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ndWkuZ3JpZC5pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc3VtbWFyaWVzQ29uZmlnOiBHdWlDb2x1bW5TdW1tYXJpZXMpOiBDb2x1bW5TdW1tYXJpZXNDb25maWcge1xuXHRcdGxldCBjb2x1bW5TdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5lbmFibGVkID0gc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uU3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzID0gdGhpcy5jb252ZXJ0U3VtbWFyaWVzVHlwZXMoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uU3VtbWFyaWVzQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZXMoY29uZmlnU3VtbWFyaWVzVHlwZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxTdW1tYXJpZXNUeXBlPiB7XG5cblx0XHRjb25zdCBzdW1tYXJpZXNUeXBlczogQXJyYXk8U3VtbWFyaWVzVHlwZT4gPSBbXTtcblxuXHRcdGNvbmZpZ1N1bW1hcmllc1R5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRjb25zdCBzdW1tYXJpZXNUeXBlID0gdGhpcy5jb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlKTtcblxuXHRcdFx0aWYgKHN1bW1hcmllc1R5cGUgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNUeXBlICE9PSBudWxsKSB7XG5cdFx0XHRcdHN1bW1hcmllc1R5cGVzLnB1c2goc3VtbWFyaWVzVHlwZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc3VtbWFyaWVzVHlwZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdW1tYXJpZXNUeXBlKHR5cGU6IHN0cmluZyk6IFN1bW1hcmllc1R5cGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFN1bW1hcmllc1R5cGUgPSB0eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRTdW1tYXJpZXNUeXBlKSB7XG5cblx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQ7XG5cblx0XHRcdGNhc2UgJ2Rpc3RpbmN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cblx0XHRcdGNhc2UgJ3N1bSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLlNVTTtcblxuXHRcdFx0Y2FzZSAnYXZlcmFnZSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkFWRVJBR0U7XG5cblx0XHRcdGNhc2UgJ21pbic6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1JTjtcblxuXHRcdFx0Y2FzZSAnbWF4Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUFYO1xuXG5cdFx0XHRjYXNlICdtZWRpYW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NRURJQU47XG5cblx0XHRcdGNhc2UgJ3RydXRoeSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLlRSVVRIWTtcblxuXHRcdFx0Y2FzZSAnZmFsc3knOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5GQUxTWTtcblxuXHRcdFx0Y2FzZSAnZWFybGllc3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5FQVJMSUVTVDtcblxuXHRcdFx0Y2FzZSAnbGF0ZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTEFURVNUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblx0fVxuXG59XG4iXX0=