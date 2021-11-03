import { SummariesType } from '../../../../../../structure/summaries/core/domain/summaries.type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUtqRyxNQUFNLE9BQU8sK0JBQStCO0lBRTNDLE9BQU8sQ0FBQyxlQUFtQztRQUMxQyxNQUFNLHFCQUFxQixHQUEwQixFQUFFLENBQUM7UUFFeEQsSUFBSSxlQUFlLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxlQUFlLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUM5RSxxQkFBcUIsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztTQUN4RDtRQUVELElBQUksZUFBZSxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDNUYscUJBQXFCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEc7UUFFRCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxvQkFBbUM7UUFFaEUsTUFBTSxjQUFjLEdBQXlCLEVBQUUsQ0FBQztRQUVoRCxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUU3QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEQsSUFBSSxhQUFhLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFELGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDbkM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxJQUFZO1FBRXhDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdEQsUUFBUSxvQkFBb0IsRUFBRTtZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBRTlCLEtBQUssS0FBSztnQkFDVCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFFMUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUU1QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7U0FFYjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5cbmltcG9ydCB7IEd1aUNvbHVtblN1bW1hcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2d1aS5ncmlkLmluZGV4JztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB7XG5cblx0Y29udmVydChzdW1tYXJpZXNDb25maWc6IEd1aUNvbHVtblN1bW1hcmllcyk6IENvbHVtblN1bW1hcmllc0NvbmZpZyB7XG5cdFx0Y29uc3QgY29sdW1uU3VtbWFyaWVzQ29uZmlnOiBDb2x1bW5TdW1tYXJpZXNDb25maWcgPSB7fTtcblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc0NvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuZW5hYmxlZCA9IHN1bW1hcmllc0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtblN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGVzKHN1bW1hcmllc0NvbmZpZy5zdW1tYXJpZXNUeXBlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtblN1bW1hcmllc0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGVzKGNvbmZpZ1N1bW1hcmllc1R5cGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8U3VtbWFyaWVzVHlwZT4ge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZXM6IEFycmF5PFN1bW1hcmllc1R5cGU+ID0gW107XG5cblx0XHRjb25maWdTdW1tYXJpZXNUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0Y29uc3Qgc3VtbWFyaWVzVHlwZSA9IHRoaXMuY29udmVydFN1bW1hcmllc1R5cGUodHlwZSk7XG5cblx0XHRcdGlmIChzdW1tYXJpZXNUeXBlICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzVHlwZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRzdW1tYXJpZXNUeXBlcy5wdXNoKHN1bW1hcmllc1R5cGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllc1R5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3VtbWFyaWVzVHlwZSh0eXBlOiBzdHJpbmcpOiBTdW1tYXJpZXNUeXBlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRTdW1tYXJpZXNUeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkU3VtbWFyaWVzVHlwZSkge1xuXG5cdFx0XHRjYXNlICdjb3VudCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UO1xuXG5cdFx0XHRjYXNlICdkaXN0aW5jdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXG5cdFx0XHRjYXNlICdzdW0nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5TVU07XG5cblx0XHRcdGNhc2UgJ2F2ZXJhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5BVkVSQUdFO1xuXG5cdFx0XHRjYXNlICdtaW4nOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NSU47XG5cblx0XHRcdGNhc2UgJ21heCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1BWDtcblxuXHRcdFx0Y2FzZSAnbWVkaWFuJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXG5cdFx0XHRjYXNlICd0cnV0aHknOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5UUlVUSFk7XG5cblx0XHRcdGNhc2UgJ2ZhbHN5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRkFMU1k7XG5cblx0XHRcdGNhc2UgJ2VhcmxpZXN0Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuRUFSTElFU1Q7XG5cblx0XHRcdGNhc2UgJ2xhdGVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkxBVEVTVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cdH1cblxufVxuIl19