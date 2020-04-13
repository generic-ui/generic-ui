/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../lib/structure/domain/structure/summaries/summaries.type';
export class GridColumnSummariesConverter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tc3VtbWFyaWVzLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvdWkvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2dyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUsxRyxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUV4QyxPQUFPLENBQUMsZUFBbUM7O1lBQ3RDLHFCQUFxQixHQUEwQixFQUFFO1FBRXJELElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDOUUscUJBQXFCLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDeEQ7UUFFRCxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQzVGLHFCQUFxQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxvQkFBbUM7O2NBRTFELGNBQWMsR0FBeUIsRUFBRTtRQUUvQyxvQkFBb0IsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTs7a0JBRXZDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBRXJELElBQUksYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUMxRCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxJQUFZOztjQUVsQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFckQsUUFBUSxvQkFBb0IsRUFBRTtZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBRTlCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcblxuaW1wb3J0IHsgR3VpQ29sdW1uU3VtbWFyaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3JpZC5pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc3VtbWFyaWVzQ29uZmlnOiBHdWlDb2x1bW5TdW1tYXJpZXMpOiBDb2x1bW5TdW1tYXJpZXNDb25maWcge1xuXHRcdGxldCBjb2x1bW5TdW1tYXJpZXNDb25maWc6IENvbHVtblN1bW1hcmllc0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5lbmFibGVkID0gc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uU3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzID0gdGhpcy5jb252ZXJ0U3VtbWFyaWVzVHlwZXMoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uU3VtbWFyaWVzQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZXMoY29uZmlnU3VtbWFyaWVzVHlwZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxTdW1tYXJpZXNUeXBlPiB7XG5cblx0XHRjb25zdCBzdW1tYXJpZXNUeXBlczogQXJyYXk8U3VtbWFyaWVzVHlwZT4gPSBbXTtcblxuXHRcdGNvbmZpZ1N1bW1hcmllc1R5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRjb25zdCBzdW1tYXJpZXNUeXBlID0gdGhpcy5jb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlKTtcblxuXHRcdFx0aWYgKHN1bW1hcmllc1R5cGUgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNUeXBlICE9PSBudWxsKSB7XG5cdFx0XHRcdHN1bW1hcmllc1R5cGVzLnB1c2goc3VtbWFyaWVzVHlwZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc3VtbWFyaWVzVHlwZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdW1tYXJpZXNUeXBlKHR5cGU6IHN0cmluZyk6IFN1bW1hcmllc1R5cGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFN1bW1hcmllc1R5cGUgPSB0eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRTdW1tYXJpZXNUeXBlKSB7XG5cblx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQ7XG5cblx0XHRcdGNhc2UgJ2Rpc3RpbmN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cblx0XHRcdGNhc2UgJ3N1bSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLlNVTTtcblxuXHRcdFx0Y2FzZSAnYXZlcmFnZSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkFWRVJBR0U7XG5cblx0XHRcdGNhc2UgJ21pbic6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1JTjtcblxuXHRcdFx0Y2FzZSAnbWF4Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUFYO1xuXG5cdFx0XHRjYXNlICdtZWRpYW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NRURJQU47XG5cblx0XHRcdGNhc2UgJ3RydXRoeSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLlRSVVRIWTtcblxuXHRcdFx0Y2FzZSAnZmFsc3knOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5GQUxTWTtcblxuXHRcdFx0Y2FzZSAnZWFybGllc3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5FQVJMSUVTVDtcblxuXHRcdFx0Y2FzZSAnbGF0ZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTEFURVNUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblx0fVxuXG59XG4iXX0=