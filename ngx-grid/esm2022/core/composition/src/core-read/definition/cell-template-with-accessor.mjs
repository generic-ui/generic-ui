import { DataType } from '../../../../structure/field/src/domain/field/data/data-type';
import { CellView } from '../../domain/column/cell-view';
import { ColumnAlign } from '../../domain/column/column-align';
import { CellValue } from './cell-value';
export class CellTemplateWithAccessor {
    columnConfig;
    columnDefinitionId;
    name;
    editable;
    templateFun;
    formatterFun;
    accessor;
    searchAccessor;
    width;
    columnFieldId;
    align;
    cellEditingEnabled;
    type;
    view;
    constructor(columnConfig, columnDefinitionId, name, 
    // public template: TemplateRef<any> | null = null,
    // public editTemplate: TemplateRef<any> | null = null,
    editable, templateFun, formatterFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
    view) {
        this.columnConfig = columnConfig;
        this.columnDefinitionId = columnDefinitionId;
        this.name = name;
        this.editable = editable;
        this.templateFun = templateFun;
        this.formatterFun = formatterFun;
        this.accessor = accessor;
        this.searchAccessor = searchAccessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.align = align;
        this.cellEditingEnabled = cellEditingEnabled;
        this.type = type;
        this.view = view;
    }
    getDataType() {
        return this.type;
    }
    getCellView() {
        return this.view.getCellView();
    }
    getColumnConfig() {
        return this.columnConfig;
    }
    isCellEditingEnabled() {
        return this.cellEditingEnabled;
    }
    isBooleanDataType() {
        return this.type === DataType.BOOLEAN;
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
    getType() {
        return this.type;
    }
    getView() {
        return this.view;
    }
    getName() {
        return this.name;
    }
    // REFACTOR #1581
    getValue(entity, searchPhrase) {
        const cellValue = this.findValue(entity, searchPhrase);
        cellValue.value = this.templateFun(cellValue.value, entity.getSourceItem());
        if (this.formatterFun) {
            cellValue.value = this.formatterFun(cellValue.value, entity.getSourceItem());
        }
        return cellValue;
    }
    getClasses() {
        return 'gui-cell-highlighted';
    }
    findValue(entity, searchPhrase) {
        const value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return CellValue.text(value);
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return CellValue.text(value);
        }
        if (searchPhrase) {
            let txt = '' + this.searchAccessor(entity);
            const lowerCasedText = txt.toLocaleLowerCase(), loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            const positions = [];
            let index = 0;
            while (index < loweredSearchPhrase.length) {
                const found = lowerCasedText.indexOf(loweredSearchPhrase, index);
                if (found >= 0) {
                    positions.push(found);
                    index = found + searchPhrase.length;
                }
                else {
                    index = loweredSearchPhrase.length;
                }
            }
            const arr = txt.split('');
            positions.forEach((pos) => {
                for (let i = 0; i < searchPhrase.length; i += 1) {
                    let ph;
                    if (i === 0) {
                        ph = `<span class="gui-text-highlight">${arr[pos + i]}`;
                    }
                    else {
                        ph = arr[pos + i];
                    }
                    if (i === searchPhrase.length - 1) {
                        ph += '</span>';
                    }
                    arr[pos + i] = ph;
                }
            });
            txt = arr.join('');
            return CellValue.HTML(txt);
        }
        else {
            return CellValue.text(value);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUt6QyxNQUFNLE9BQU8sd0JBQXdCO0lBRVA7SUFDbkI7SUFDVTtJQUdWO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ1U7SUFDQTtJQUNBO0lBQ0E7SUFmcEIsWUFBNkIsWUFBMEIsRUFDN0Msa0JBQXNDLEVBQzVCLElBQVk7SUFDN0IsbURBQW1EO0lBQ25ELHVEQUF1RDtJQUNoRCxRQUFpQixFQUNqQixXQUEyQyxFQUMzQyxZQUE0QyxFQUM1QyxRQUErQixFQUMvQixjQUFxQyxFQUNyQyxLQUFhLEVBQ2IsYUFBNEIsRUFDbEIsS0FBa0IsRUFDbEIsa0JBQTJCLEVBQzNCLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCO1FBZlAsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBR3RCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWdDO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFnQztRQUM1QyxhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUMv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QUVGLENBQUMsQ0FBQyxDQUFDO1lBRUgsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9pdGVtL2l0ZW0nO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvc3JjL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZhbHVlIH0gZnJvbSAnLi9jZWxsLXZhbHVlJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLWRlZmluaXRpb24taWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRwdWJsaWMgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuXHRcdFx0XHQvLyBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbCxcblx0XHRcdFx0Ly8gcHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsLFxuXHRcdFx0XHRwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHB1YmxpYyB0ZW1wbGF0ZUZ1bjogKHZhbHVlOiBhbnksIGl0ZW06IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgZm9ybWF0dGVyRnVuOiAodmFsdWU6IGFueSwgaXRlbTogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyBhY2Nlc3NvcjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgc2VhcmNoQWNjZXNzb3I6IChlbGVtZW50OiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHB1YmxpYyBjb2x1bW5GaWVsZElkOiBDb2x1bW5GaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsaWduOiBDb2x1bW5BbGlnbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSkgeyAvLyBSRUZBQ1RPUlxuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5nZXRDZWxsVmlldygpO1xuXHR9XG5cblx0Z2V0Q29sdW1uQ29uZmlnKCk6IENvbHVtbkNvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnO1xuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkO1xuXHR9XG5cblx0aXNCb29sZWFuRGF0YVR5cGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdGlzQWxpZ25MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG5cblx0aXNBbGlnbkNlbnRlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXHR9XG5cblx0aXNBbGlnblJpZ2h0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxuXG5cdGdldEFsaWduKCkge1xuXHRcdHJldHVybiB0aGlzLmFsaWduO1xuXHR9XG5cblx0Z2V0VHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0Z2V0VmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHQvLyBSRUZBQ1RPUiAjMTU4MVxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW0sIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IENlbGxWYWx1ZSB7XG5cblx0XHRjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpbmRWYWx1ZShlbnRpdHksIHNlYXJjaFBocmFzZSk7XG5cblx0XHRjZWxsVmFsdWUudmFsdWUgPSB0aGlzLnRlbXBsYXRlRnVuKGNlbGxWYWx1ZS52YWx1ZSwgZW50aXR5LmdldFNvdXJjZUl0ZW0oKSk7XG5cblx0XHRpZiAodGhpcy5mb3JtYXR0ZXJGdW4pIHtcblx0XHRcdGNlbGxWYWx1ZS52YWx1ZSA9IHRoaXMuZm9ybWF0dGVyRnVuKGNlbGxWYWx1ZS52YWx1ZSwgZW50aXR5LmdldFNvdXJjZUl0ZW0oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNlbGxWYWx1ZTtcblx0fVxuXG5cdGdldENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jZWxsLWhpZ2hsaWdodGVkJztcblx0fVxuXG5cdHByaXZhdGUgZmluZFZhbHVlKGVudGl0eTogSXRlbSwgc2VhcmNoUGhyYXNlPzogc3RyaW5nKTogQ2VsbFZhbHVlIHtcblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5hY2Nlc3NvcihlbnRpdHkpO1xuXG5cdFx0aWYgKHRoaXMudHlwZSAhPT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChzZWFyY2hQaHJhc2UpIHtcblxuXHRcdFx0bGV0IHR4dDogc3RyaW5nID0gJycgKyB0aGlzLnNlYXJjaEFjY2Vzc29yKGVudGl0eSk7XG5cdFx0XHRjb25zdCBsb3dlckNhc2VkVGV4dDogc3RyaW5nID0gdHh0LnRvTG9jYWxlTG93ZXJDYXNlKCksXG5cdFx0XHRcdGxvd2VyZWRTZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdFx0Y29uc3QgcG9zaXRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdHdoaWxlIChpbmRleCA8IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoKSB7XG5cblx0XHRcdFx0Y29uc3QgZm91bmQgPSBsb3dlckNhc2VkVGV4dC5pbmRleE9mKGxvd2VyZWRTZWFyY2hQaHJhc2UsIGluZGV4KTtcblxuXHRcdFx0XHRpZiAoZm91bmQgPj0gMCkge1xuXHRcdFx0XHRcdHBvc2l0aW9ucy5wdXNoKGZvdW5kKTtcblx0XHRcdFx0XHRpbmRleCA9IGZvdW5kICsgc2VhcmNoUGhyYXNlLmxlbmd0aDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXJyID0gdHh0LnNwbGl0KCcnKTtcblxuXHRcdFx0cG9zaXRpb25zLmZvckVhY2goKHBvczogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hQaHJhc2UubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0XHRcdGxldCBwaDtcblxuXHRcdFx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwaCA9IGA8c3BhbiBjbGFzcz1cImd1aS10ZXh0LWhpZ2hsaWdodFwiPiR7YXJyW3BvcyArIGldfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBoID0gYXJyW3BvcyArIGldO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpID09PSBzZWFyY2hQaHJhc2UubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGggKz0gJzwvc3Bhbj4nO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFycltwb3MgKyBpXSA9IHBoO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHR0eHQgPSBhcnIuam9pbignJyk7XG5cblx0XHRcdHJldHVybiBDZWxsVmFsdWUuSFRNTCh0eHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=