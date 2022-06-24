import { SortOrder } from '../../domain/column/sort/sort-order';
import { ColumnAlign } from '../../domain/column/column-align';
// Basically header template
export class CellTemplateWithContext {
    constructor(viewTemplate, editTemplate, 
    // public editContext: any,
    context, width, fieldId, columnDefinitionId, sortStatus, enabled, cssClasses, styles, sortable, align) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9ELDRCQUE0QjtBQUM1QixNQUFNLE9BQU8sdUJBQXVCO0lBRW5DLFlBQW1CLFlBQThCLEVBQ3ZDLFlBQThCO0lBQ3JDLDJCQUEyQjtJQUNwQixPQUFvQixFQUNwQixLQUFhLEVBQ0gsT0FBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFVBQWtCLEVBQ2xCLE1BQWMsRUFDZCxRQUFpQixFQUNqQixLQUFrQjtRQVpuQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBRTlCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNILFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3RDLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuXG4vLyBCYXNpY2FsbHkgaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdC8vIHB1YmxpYyBlZGl0Q29udGV4dDogYW55LFxuXHRcdFx0XHRwdWJsaWMgY29udGV4dDogQ2VsbENvbnRleHQsXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydFN0YXR1czogU29ydE9yZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY3NzQ2xhc3Nlczogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlczogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRhYmxlOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsaWduOiBDb2x1bW5BbGlnbikge1xuXHR9XG5cblx0Z2V0Q29sdW1uRGVmaW5pdGlvbklkKCk6IENvbHVtbkRlZmluaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uRGVmaW5pdGlvbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRnZXRDc3NDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3Nlcztcblx0fVxuXG5cdGdldFN0eWxlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnN0eWxlcztcblx0fVxuXG5cdGlzU29ydEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGFibGU7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuTk9ORTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNBbGlnbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cblxuXHRpc0FsaWduQ2VudGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cblxuXHRpc0FsaWduUmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG5cbn1cbiJdfQ==