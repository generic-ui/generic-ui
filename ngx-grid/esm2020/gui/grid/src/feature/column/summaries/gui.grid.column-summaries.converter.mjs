import { SummariesType } from '../../../../../../core/structure/summaries/src/domain/summaries.type';
export class GuiGridColumnSummariesConverter {
    convert(summariesConfig) {
        const columnSummariesConfig = {};
        if (summariesConfig.enabled !== undefined && summariesConfig.enabled !== null) {
            columnSummariesConfig.enabled = summariesConfig.enabled;
        }
        if (summariesConfig.summariesTypes !== undefined && summariesConfig.summariesTypes !== null) {
            columnSummariesConfig.summariesTypes = this.convertSummariesTypes(summariesConfig.summariesTypes);
        }
        return columnSummariesConfig;
    }
    convertSummariesTypes(configSummariesTypes) {
        const summariesTypes = [];
        configSummariesTypes.forEach((type) => {
            const summariesType = this.convertSummariesType(type);
            if (summariesType !== undefined && summariesType !== null) {
                summariesTypes.push(summariesType);
            }
        });
        return summariesTypes;
    }
    convertSummariesType(type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL3NyYy9mZWF0dXJlL2NvbHVtbi9zdW1tYXJpZXMvZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBS3JHLE1BQU0sT0FBTywrQkFBK0I7SUFFM0MsT0FBTyxDQUFDLGVBQW1DO1FBQzFDLE1BQU0scUJBQXFCLEdBQTBCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzlFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUM1RixxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRztRQUVELE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztJQUVPLHFCQUFxQixDQUFDLG9CQUFtQztRQUVoRSxNQUFNLGNBQWMsR0FBeUIsRUFBRSxDQUFDO1FBRWhELG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBRTdDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0RCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDMUQsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUVPLG9CQUFvQixDQUFDLElBQVk7UUFFeEMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RCxRQUFRLG9CQUFvQixFQUFFO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssU0FBUztnQkFDYixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFFOUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QjtnQkFDQyxPQUFPLElBQUksQ0FBQztTQUViO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuXG5pbXBvcnQgeyBHdWlDb2x1bW5TdW1tYXJpZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ndWkuZ3JpZC5pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc3VtbWFyaWVzQ29uZmlnOiBHdWlDb2x1bW5TdW1tYXJpZXMpOiBDb2x1bW5TdW1tYXJpZXNDb25maWcge1xuXHRcdGNvbnN0IGNvbHVtblN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnID0ge307XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uU3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgPSBzdW1tYXJpZXNDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlcyhzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5TdW1tYXJpZXNDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdW1tYXJpZXNUeXBlcyhjb25maWdTdW1tYXJpZXNUeXBlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PFN1bW1hcmllc1R5cGU+IHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1R5cGVzOiBBcnJheTxTdW1tYXJpZXNUeXBlPiA9IFtdO1xuXG5cdFx0Y29uZmlnU3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdGNvbnN0IHN1bW1hcmllc1R5cGUgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlKHR5cGUpO1xuXG5cdFx0XHRpZiAoc3VtbWFyaWVzVHlwZSAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc1R5cGUgIT09IG51bGwpIHtcblx0XHRcdFx0c3VtbWFyaWVzVHlwZXMucHVzaChzdW1tYXJpZXNUeXBlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzdW1tYXJpZXNUeXBlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGUodHlwZTogc3RyaW5nKTogU3VtbWFyaWVzVHlwZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkU3VtbWFyaWVzVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFN1bW1hcmllc1R5cGUpIHtcblxuXHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVDtcblxuXHRcdFx0Y2FzZSAnZGlzdGluY3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblxuXHRcdFx0Y2FzZSAnc3VtJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuU1VNO1xuXG5cdFx0XHRjYXNlICdhdmVyYWdlJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQVZFUkFHRTtcblxuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUlOO1xuXG5cdFx0XHRjYXNlICdtYXgnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NQVg7XG5cblx0XHRcdGNhc2UgJ21lZGlhbic6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1FRElBTjtcblxuXHRcdFx0Y2FzZSAndHJ1dGh5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuVFJVVEhZO1xuXG5cdFx0XHRjYXNlICdmYWxzeSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkZBTFNZO1xuXG5cdFx0XHRjYXNlICdlYXJsaWVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkVBUkxJRVNUO1xuXG5cdFx0XHRjYXNlICdsYXRlc3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5MQVRFU1Q7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==