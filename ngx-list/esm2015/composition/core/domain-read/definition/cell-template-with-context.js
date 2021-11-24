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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9ELDRCQUE0QjtBQUM1QixNQUFNLE9BQU8sdUJBQXVCO0lBRW5DLFlBQW1CLFlBQThCLEVBQ3ZDLFlBQThCO0lBQ3JDLDJCQUEyQjtJQUNwQixPQUFvQixFQUNwQixLQUFhLEVBQ0gsT0FBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFVBQWtCLEVBQ2xCLE1BQWMsRUFDZCxRQUFpQixFQUNqQixLQUFrQjtRQVpuQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBRTlCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNILFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3RDLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuL2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5cbi8vIEJhc2ljYWxseSBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjbGFzcyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0Ly8gcHVibGljIGVkaXRDb250ZXh0OiBhbnksXG5cdFx0XHRcdHB1YmxpYyBjb250ZXh0OiBDZWxsQ29udGV4dCxcblx0XHRcdFx0cHVibGljIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0U3RhdHVzOiBTb3J0T3JkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjc3NDbGFzc2VzOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVzOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduKSB7XG5cdH1cblxuXHRnZXRDb2x1bW5EZWZpbml0aW9uSWQoKTogQ29sdW1uRGVmaW5pdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5EZWZpbml0aW9uSWQ7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRTb3J0U3RhdHVzKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cztcblx0fVxuXG5cdGdldENzc0NsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzc2VzO1xuXHR9XG5cblx0Z2V0U3R5bGVzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc3R5bGVzO1xuXHR9XG5cblx0aXNTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0YWJsZTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuREVTQztcblx0fVxuXG5cdGlzTm9Tb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0FsaWduTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxuXG5cdGlzQWxpZ25DZW50ZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkNFTlRFUjtcblx0fVxuXG5cdGlzQWxpZ25SaWdodCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cblxufVxuIl19