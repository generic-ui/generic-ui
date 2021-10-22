/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import { CellView } from '../../domain/column/cell-view';
import { ColumnAlign } from '../../domain/column/column-align';
import { CellValue } from './cell-value';
export class CellTemplateWithAccessor {
    /**
     * @param {?} columnDefinitionId
     * @param {?} template
     * @param {?} editTemplate
     * @param {?} editable
     * @param {?} templateFun
     * @param {?} formatterFun
     * @param {?} accessor
     * @param {?} searchAccessor
     * @param {?} width
     * @param {?} columnFieldId
     * @param {?} align
     * @param {?} cellEditingEnabled
     * @param {?} type
     * @param {?} view
     */
    constructor(columnDefinitionId, template, editTemplate, editable, templateFun, formatterFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
    view) {
        this.columnDefinitionId = columnDefinitionId;
        this.template = template;
        this.editTemplate = editTemplate;
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
        cellValue.value = this.templateFun(cellValue.value, entity.getSourceItem());
        if (this.formatterFun) {
            cellValue.value = this.formatterFun(cellValue.value, entity.getSourceItem());
        }
        return cellValue;
    }
    /**
     * @return {?}
     */
    getClasses() {
        return 'gui-cell-highlighted';
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
            const lowerCasedText = txt.toLocaleLowerCase();
            /** @type {?} */
            const loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            /** @type {?} */
            const positions = [];
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
                        ph += '</span>';
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
    CellTemplateWithAccessor.prototype.columnDefinitionId;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.template;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editable;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.templateFun;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.formatterFun;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7QUFFeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBSXpDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLFlBQW1CLGtCQUFzQyxFQUMvQyxRQUEwQixFQUMxQixZQUE4QixFQUM5QixRQUFpQixFQUNqQixXQUEyQyxFQUMzQyxZQUE0QyxFQUM1QyxRQUErQixFQUMvQixjQUFxQyxFQUNyQyxLQUFhLEVBQ2IsYUFBNEIsRUFDbEIsS0FBa0IsRUFDbEIsa0JBQTJCLEVBQzNCLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCO1FBYmpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0MsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWdDO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFnQztRQUM1QyxhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFTO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3BDLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBR0QsUUFBUSxDQUFDLE1BQWtCLEVBQUUsWUFBcUI7O2NBRTNDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7UUFFdEQsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFFNUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsTUFBa0IsRUFBRSxZQUFxQjs7Y0FFcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2xDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxZQUFZLEVBQUU7O2dCQUViLEdBQUcsR0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7O2tCQUM1QyxjQUFjLEdBQVcsR0FBRyxDQUFDLGlCQUFpQixFQUFFOztrQkFDckQsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixFQUFFOztrQkFFakQsU0FBUyxHQUFrQixFQUFFOztnQkFFL0IsS0FBSyxHQUFHLENBQUM7WUFFYixPQUFPLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7O3NCQUVwQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7Z0JBRWhFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDZixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7b0JBQ3BDLFNBQVM7aUJBQ1Q7cUJBQU07b0JBQ04sS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztpQkFDbkM7YUFDRDs7a0JBRUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBRXpCLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFFakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7d0JBRTVDLEVBQUU7b0JBRU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNaLEVBQUUsR0FBRyxvQ0FBb0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUN4RDt5QkFBTTt3QkFDTixFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBRUQsSUFBSSxDQUFDLEtBQUssWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLEVBQUUsSUFBSSxTQUFTLENBQUM7cUJBQ2hCO29CQUVELEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtZQUVGLENBQUMsRUFBQyxDQUFDO1lBRUgsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBRUQ7OztJQXhIWSxzREFBNkM7O0lBQ3RELDRDQUFpQzs7SUFDakMsZ0RBQXFDOztJQUNyQyw0Q0FBd0I7O0lBQ3hCLCtDQUFrRDs7SUFDbEQsZ0RBQW1EOztJQUNuRCw0Q0FBc0M7O0lBQ3RDLGtEQUE0Qzs7SUFDNUMseUNBQW9COztJQUNwQixpREFBbUM7Ozs7O0lBQ25DLHlDQUFtQzs7Ozs7SUFDbkMsc0RBQTRDOzs7OztJQUM1Qyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWYWx1ZSB9IGZyb20gJy4vY2VsbC12YWx1ZSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsXG5cdFx0XHRcdHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRhYmxlOiBib29sZWFuLFxuXHRcdFx0XHRwdWJsaWMgdGVtcGxhdGVGdW46ICh2YWx1ZTogYW55LCBpdGVtOiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIGZvcm1hdHRlckZ1bjogKHZhbHVlOiBhbnksIGl0ZW06IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgYWNjZXNzb3I6IChlbGVtZW50OiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIHNlYXJjaEFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwdWJsaWMgY29sdW1uRmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHkpIHsgLy8gUkVGQUNUT1Jcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9vbGVhbkRhdGFUeXBlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRpc0FsaWduTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxuXG5cdGlzQWxpZ25DZW50ZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkNFTlRFUjtcblx0fVxuXG5cdGlzQWxpZ25SaWdodCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cblxuXHQvLyBSRUZBQ1RPUiAjMTU4MVxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IENlbGxWYWx1ZSB7XG5cblx0XHRjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmZpbmRWYWx1ZShlbnRpdHksIHNlYXJjaFBocmFzZSk7XG5cblx0XHRjZWxsVmFsdWUudmFsdWUgPSB0aGlzLnRlbXBsYXRlRnVuKGNlbGxWYWx1ZS52YWx1ZSwgZW50aXR5LmdldFNvdXJjZUl0ZW0oKSk7XG5cblx0XHRpZiAodGhpcy5mb3JtYXR0ZXJGdW4pIHtcblx0XHRcdGNlbGxWYWx1ZS52YWx1ZSA9IHRoaXMuZm9ybWF0dGVyRnVuKGNlbGxWYWx1ZS52YWx1ZSwgZW50aXR5LmdldFNvdXJjZUl0ZW0oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNlbGxWYWx1ZTtcblx0fVxuXG5cdGdldENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jZWxsLWhpZ2hsaWdodGVkJztcblx0fVxuXG5cdHByaXZhdGUgZmluZFZhbHVlKGVudGl0eTogSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlPzogc3RyaW5nKTogQ2VsbFZhbHVlIHtcblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5hY2Nlc3NvcihlbnRpdHkpO1xuXG5cdFx0aWYgKHRoaXMudHlwZSAhPT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChzZWFyY2hQaHJhc2UpIHtcblxuXHRcdFx0bGV0IHR4dDogc3RyaW5nID0gJycgKyB0aGlzLnNlYXJjaEFjY2Vzc29yKGVudGl0eSk7XG5cdFx0XHRjb25zdCBsb3dlckNhc2VkVGV4dDogc3RyaW5nID0gdHh0LnRvTG9jYWxlTG93ZXJDYXNlKCksXG5cdFx0XHRcdGxvd2VyZWRTZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdFx0Y29uc3QgcG9zaXRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdHdoaWxlIChpbmRleCA8IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoKSB7XG5cblx0XHRcdFx0Y29uc3QgZm91bmQgPSBsb3dlckNhc2VkVGV4dC5pbmRleE9mKGxvd2VyZWRTZWFyY2hQaHJhc2UsIGluZGV4KTtcblxuXHRcdFx0XHRpZiAoZm91bmQgPj0gMCkge1xuXHRcdFx0XHRcdHBvc2l0aW9ucy5wdXNoKGZvdW5kKTtcblx0XHRcdFx0XHRpbmRleCA9IGZvdW5kICsgc2VhcmNoUGhyYXNlLmxlbmd0aDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbmRleCA9IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFyciA9IHR4dC5zcGxpdCgnJyk7XG5cblx0XHRcdHBvc2l0aW9ucy5mb3JFYWNoKChwb3M6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGhyYXNlLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdFx0XHRsZXQgcGg7XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cGggPSBgPHNwYW4gY2xhc3M9XCJndWktdGV4dC1oaWdobGlnaHRcIj4ke2Fycltwb3MgKyBpXX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwaCA9IGFycltwb3MgKyBpXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gc2VhcmNoUGhyYXNlLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdHBoICs9ICc8L3NwYW4+Jztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhcnJbcG9zICsgaV0gPSBwaDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0dHh0ID0gYXJyLmpvaW4oJycpO1xuXG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLkhUTUwodHh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIENlbGxWYWx1ZS50ZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxufVxuIl19