/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
import { CellView } from '../../../domain/column/cell-view';
import { ColumnAlign } from '../../../domain/column/column-align';
import { CellValue } from './cell-value';
export class CellTemplateWithAccessor {
    /**
     * @param {?} template
     * @param {?} editTemplate
     * @param {?} editable
     * @param {?} templateFun
     * @param {?} accessor
     * @param {?} searchAccessor
     * @param {?} width
     * @param {?} columnFieldId
     * @param {?} align
     * @param {?} cellEditingEnabled
     * @param {?} type
     * @param {?} view
     */
    constructor(template, editTemplate, editable, templateFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
    view) {
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.templateFun = templateFun;
        this.accessor = accessor;
        this.searchAccessor = searchAccessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.align = align;
        this.cellEditingEnabled = cellEditingEnabled;
        this.type = type;
        this.view = view;
    }
    /**
     * @return {?}
     */
    isCellEditingEnabled() {
        return this.cellEditingEnabled;
    }
    /**
     * @return {?}
     */
    isBooleanDataType() {
        return this.type === DataType.BOOLEAN;
    }
    /**
     * @return {?}
     */
    isAlignLeft() {
        return this.align === ColumnAlign.LEFT;
    }
    /**
     * @return {?}
     */
    isAlignCenter() {
        return this.align === ColumnAlign.CENTER;
    }
    /**
     * @return {?}
     */
    isAlignRight() {
        return this.align === ColumnAlign.RIGHT;
    }
    // REFACTOR #1581
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    getValue(entity, searchPhrase) {
        /** @type {?} */
        const cellValue = this.findValue(entity, searchPhrase);
        cellValue.value = this.templateFun(cellValue.value);
        return cellValue;
    }
    /**
     * @private
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    findValue(entity, searchPhrase) {
        /** @type {?} */
        const value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return CellValue.text(value);
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return CellValue.text(value);
        }
        if (searchPhrase) {
            /** @type {?} */
            let txt = '' + this.searchAccessor(entity);
            /** @type {?} */
            let lowerCasedText = txt.toLocaleLowerCase();
            /** @type {?} */
            let loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            /** @type {?} */
            let positions = [];
            /** @type {?} */
            let index = 0;
            while (index < loweredSearchPhrase.length) {
                /** @type {?} */
                const found = lowerCasedText.indexOf(loweredSearchPhrase, index);
                if (found >= 0) {
                    positions.push(found);
                    index = found + searchPhrase.length;
                    continue;
                }
                else {
                    index = loweredSearchPhrase.length;
                }
            }
            /** @type {?} */
            const arr = txt.split('');
            positions.forEach((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                for (let i = 0; i < searchPhrase.length; i += 1) {
                    /** @type {?} */
                    let ph;
                    if (i === 0) {
                        ph = `<span class="gui-text-highlight">${arr[pos + i]}`;
                    }
                    else {
                        ph = arr[pos + i];
                    }
                    if (i === searchPhrase.length - 1) {
                        ph += `</span>`;
                    }
                    arr[pos + i] = ph;
                }
            }));
            txt = arr.join('');
            return CellValue.HTML(txt);
        }
        else {
            return CellValue.text(value);
        }
    }
}
if (false) {
    /** @type {?} */
    CellTemplateWithAccessor.prototype.template;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editable;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.templateFun;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.accessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.searchAccessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.width;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.columnFieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.align;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.cellEditingEnabled;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.type;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithAccessor.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUV4RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekMsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLFlBQW1CLFFBQTBCLEVBQ25DLFlBQThCLEVBQzlCLFFBQWlCLEVBQ2pCLFdBQTRCLEVBQzVCLFFBQStCLEVBQy9CLGNBQXFDLEVBQ3JDLEtBQWEsRUFDYixhQUE0QixFQUNsQixLQUFrQixFQUNsQixrQkFBMkIsRUFDM0IsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0I7UUFYakIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVM7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVk7SUFDcEMs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d0JBQ2xDLEVBQUUsSUFBSSxTQUFTLENBQUM7cUJBQ2hCO29CQUVELEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtZQUVGLENBQUMsRUFBQyxDQUFDO1lBRUgsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBRUQ7OztJQTdHWSw0Q0FBaUM7O0lBQzFDLGdEQUFxQzs7SUFDckMsNENBQXdCOztJQUN4QiwrQ0FBbUM7O0lBQ25DLDRDQUFzQzs7SUFDdEMsa0RBQTRDOztJQUM1Qyx5Q0FBb0I7O0lBQ3BCLGlEQUFtQzs7Ozs7SUFDbkMseUNBQW1DOzs7OztJQUNuQyxzREFBNEM7Ozs7O0lBQzVDLHdDQUErQjs7Ozs7SUFDL0Isd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWYWx1ZSB9IGZyb20gJy4vY2VsbC12YWx1ZSc7XG5cblxuZXhwb3J0IGNsYXNzIENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHB1YmxpYyB0ZW1wbGF0ZUZ1bjogKGk6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgYWNjZXNzb3I6IChlbGVtZW50OiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIHNlYXJjaEFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwdWJsaWMgY29sdW1uRmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHkpIHsgLy8gUkVGQUNUT1Jcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9vbGVhbkRhdGFUeXBlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRpc0FsaWduTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxuXG5cdGlzQWxpZ25DZW50ZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkNFTlRFUjtcblx0fVxuXG5cdGlzQWxpZ25SaWdodCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cblxuXHQvLyBSRUZBQ1RPUiAjMTU4MVxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IENlbGxWYWx1ZSB7XG5cblx0XHRjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpbmRWYWx1ZShlbnRpdHksIHNlYXJjaFBocmFzZSk7XG5cblx0XHRjZWxsVmFsdWUudmFsdWUgPSB0aGlzLnRlbXBsYXRlRnVuKGNlbGxWYWx1ZS52YWx1ZSk7XG5cblx0XHRyZXR1cm4gY2VsbFZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kVmFsdWUoZW50aXR5OiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U/OiBzdHJpbmcpOiBDZWxsVmFsdWUge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5hY2Nlc3NvcihlbnRpdHkpO1xuXG5cdFx0aWYgKHRoaXMudHlwZSAhPT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChzZWFyY2hQaHJhc2UpIHtcblxuXHRcdFx0bGV0IHR4dDogc3RyaW5nID0gJycgKyB0aGlzLnNlYXJjaEFjY2Vzc29yKGVudGl0eSksXG5cdFx0XHRcdGxvd2VyQ2FzZWRUZXh0OiBzdHJpbmcgPSB0eHQudG9Mb2NhbGVMb3dlckNhc2UoKSxcblx0XHRcdFx0bG93ZXJlZFNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0XHRsZXQgcG9zaXRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdHdoaWxlIChpbmRleCA8IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoKSB7XG5cblx0XHRcdFx0Y29uc3QgZm91bmQgPSBsb3dlckNhc2VkVGV4dC5pbmRleE9mKGxvd2VyZWRTZWFyY2hQaHJhc2UsIGluZGV4KTtcblxuXHRcdFx0XHRpZiAoZm91bmQgPj0gMCkge1xuXHRcdFx0XHRcdHBvc2l0aW9ucy5wdXNoKGZvdW5kKTtcblx0XHRcdFx0XHRpbmRleCA9IGZvdW5kICsgc2VhcmNoUGhyYXNlLmxlbmd0aDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbmRleCA9IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFyciA9IHR4dC5zcGxpdCgnJyk7XG5cblx0XHRcdHBvc2l0aW9ucy5mb3JFYWNoKChwb3M6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGhyYXNlLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdFx0XHRsZXQgcGg7XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cGggPSBgPHNwYW4gY2xhc3M9XCJndWktdGV4dC1oaWdobGlnaHRcIj4ke2Fycltwb3MgKyBpXX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwaCA9IGFycltwb3MgKyBpXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gc2VhcmNoUGhyYXNlLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdHBoICs9IGA8L3NwYW4+YDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhcnJbcG9zICsgaV0gPSBwaDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0dHh0ID0gYXJyLmpvaW4oJycpO1xuXG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLkhUTUwodHh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIENlbGxWYWx1ZS50ZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxufVxuIl19