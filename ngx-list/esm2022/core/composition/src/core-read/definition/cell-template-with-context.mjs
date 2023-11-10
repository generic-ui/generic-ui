import { SortOrder } from '../../domain/column/sort/sort-order';
import { ColumnAlign } from '../../domain/column/column-align';
// Basically header template
export class CellTemplateWithContext {
    header;
    dataType;
    context;
    width;
    fieldId;
    columnDefinitionId;
    sortStatus;
    enabled;
    cssClasses;
    styles;
    sortable;
    align;
    constructor(
    // public viewTemplate: TemplateRef<any> | null = null,
    // 		public editTemplate: TemplateRef<any> | null = null,
    // public editContext: any,
    header, dataType, context, width, fieldId, columnDefinitionId, sortStatus, enabled, cssClasses, styles, sortable, align) {
        this.header = header;
        this.dataType = dataType;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.columnDefinitionId = columnDefinitionId;
        this.sortStatus = sortStatus;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.styles = styles;
        this.sortable = sortable;
        this.align = align;
    }
    getHeader() {
        return this.header;
    }
    getDataType() {
        return this.dataType;
    }
    getColumnDefinitionId() {
        return this.columnDefinitionId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getSortStatus() {
        return this.sortStatus;
    }
    getCssClasses() {
        return this.cssClasses;
    }
    getStyles() {
        return this.styles;
    }
    isSortEnabled() {
        return this.sortable;
    }
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    isNoSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    isEnabled() {
        return this.enabled;
    }
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
    getAlign() {
        return this.align;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHL0QsNEJBQTRCO0FBQzVCLE1BQU0sT0FBTyx1QkFBdUI7SUFNMUI7SUFDQTtJQUNEO0lBQ0E7SUFDVTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBZmxCO0lBQ0MsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUN6RCwyQkFBMkI7SUFDbkIsTUFBVyxFQUNYLFFBQWEsRUFDZCxPQUFvQixFQUNwQixLQUFhLEVBQ0gsT0FBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFVBQWtCLEVBQ2xCLE1BQWMsRUFDZCxRQUFpQixFQUNqQixLQUFrQjtRQVgzQixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNILFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3BDLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuLy8gQmFzaWNhbGx5IGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNsYXNzIENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHQvLyBwdWJsaWMgdmlld1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGwsXG5cdFx0Ly8gXHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbCxcblx0XHQvLyBwdWJsaWMgZWRpdENvbnRleHQ6IGFueSxcblx0XHRwcml2YXRlIGhlYWRlcjogYW55LFxuXHRcdHByaXZhdGUgZGF0YVR5cGU6IGFueSxcblx0XHRwdWJsaWMgY29udGV4dDogQ2VsbENvbnRleHQsXG5cdFx0cHVibGljIHdpZHRoOiBudW1iZXIsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0U3RhdHVzOiBTb3J0T3JkZXIsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY3NzQ2xhc3Nlczogc3RyaW5nLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVzOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0YWJsZTogYm9vbGVhbixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFsaWduOiBDb2x1bW5BbGlnbikge1xuXHR9XG5cblx0Z2V0SGVhZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cblx0Z2V0Q29sdW1uRGVmaW5pdGlvbklkKCk6IENvbHVtbkRlZmluaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRGVmaW5pdGlvbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRnZXRDc3NDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3Nlcztcblx0fVxuXG5cdGdldFN0eWxlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnN0eWxlcztcblx0fVxuXG5cdGlzU29ydEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGFibGU7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuTk9ORTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNBbGlnbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cblxuXHRpc0FsaWduQ2VudGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cblxuXHRpc0FsaWduUmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG5cblx0Z2V0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduO1xuXHR9XG5cbn1cbiJdfQ==