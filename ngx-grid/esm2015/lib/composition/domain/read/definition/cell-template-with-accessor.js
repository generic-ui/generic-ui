/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { CellView } from '../../cell-view';
import { ColumnAlign } from '../../column-align';
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
        return this.templateFun(this.findValue(entity, searchPhrase));
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
            return value;
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return value;
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
            return txt;
        }
        else {
            return this.accessor(entity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pELE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7OztJQUVwQyxZQUFtQixRQUEwQixFQUNuQyxZQUE4QixFQUM5QixRQUFpQixFQUNqQixXQUE0QixFQUM1QixRQUErQixFQUMvQixjQUFxQyxFQUNyQyxLQUFhLEVBQ2IsYUFBNEIsRUFDbEIsS0FBa0IsRUFDbEIsa0JBQTJCLEVBQzNCLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCO1FBWGpCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFTO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3BDLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBR0QsUUFBUSxDQUFDLE1BQWtCLEVBQUUsWUFBcUI7UUFFakQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxNQUFrQixFQUFFLFlBQXFCOztjQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDL0QsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksWUFBWSxFQUFFOztnQkFFYixHQUFHLEdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDOztnQkFDakQsY0FBYyxHQUFXLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTs7Z0JBQ2hELG1CQUFtQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTs7Z0JBRW5ELFNBQVMsR0FBa0IsRUFBRTs7Z0JBRTdCLEtBQUssR0FBRyxDQUFDO1lBRWIsT0FBTyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFOztzQkFFcEMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO2dCQUVoRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEIsS0FBSyxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO29CQUNwQyxTQUFTO2lCQUNUO3FCQUFNO29CQUNOLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7aUJBQ25DO2FBQ0Q7O2tCQUVLLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUV6QixTQUFTLENBQUMsT0FBTzs7OztZQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7Z0JBRWpDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O3dCQUU1QyxFQUFFO29CQUVOLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsb0NBQW9DLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDeEQ7eUJBQU07d0JBQ04sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUVELElBQUksQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxFQUFFLElBQUksU0FBUyxDQUFDO3FCQUNoQjtvQkFFRCxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDbEI7WUFFRixDQUFDLEVBQUMsQ0FBQztZQUVILEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRW5CLE9BQU8sR0FBRyxDQUFDO1NBQ1g7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FFRDs7O0lBekdZLDRDQUFpQzs7SUFDMUMsZ0RBQXFDOztJQUNyQyw0Q0FBd0I7O0lBQ3hCLCtDQUFtQzs7SUFDbkMsNENBQXNDOztJQUN0QyxrREFBNEM7O0lBQzVDLHlDQUFvQjs7SUFDcEIsaURBQW1DOzs7OztJQUNuQyx5Q0FBbUM7Ozs7O0lBQ25DLHNEQUE0Qzs7Ozs7SUFDNUMsd0NBQStCOzs7OztJQUMvQix3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuXG5cbmV4cG9ydCBjbGFzcyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRhYmxlOiBib29sZWFuLFxuXHRcdFx0XHRwdWJsaWMgdGVtcGxhdGVGdW46IChpOiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIGFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyBzZWFyY2hBY2Nlc3NvcjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHVibGljIGNvbHVtbkZpZWxkSWQ6IENvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBEYXRhVHlwZSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3RW50aXR5KSB7IC8vIFJFRkFDVE9SXG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc0Jvb2xlYW5EYXRhVHlwZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5CT09MRUFOO1xuXHR9XG5cblx0aXNBbGlnbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cblxuXHRpc0FsaWduQ2VudGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cblxuXHRpc0FsaWduUmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG5cblx0Ly8gUkVGQUNUT1IgIzE1ODFcblx0Z2V0VmFsdWUoZW50aXR5OiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U/OiBzdHJpbmcpOiBhbnkgfCBIVE1MRWxlbWVudCB7XG5cblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bih0aGlzLmZpbmRWYWx1ZShlbnRpdHksIHNlYXJjaFBocmFzZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kVmFsdWUoZW50aXR5OiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U/OiBzdHJpbmcpOiBhbnkgfCBIVE1MRWxlbWVudCB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cblx0XHRpZiAodGhpcy50eXBlICE9PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5nZXRDZWxsVmlldygpID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmIChzZWFyY2hQaHJhc2UpIHtcblxuXHRcdFx0bGV0IHR4dDogc3RyaW5nID0gJycgKyB0aGlzLnNlYXJjaEFjY2Vzc29yKGVudGl0eSksXG5cdFx0XHRcdGxvd2VyQ2FzZWRUZXh0OiBzdHJpbmcgPSB0eHQudG9Mb2NhbGVMb3dlckNhc2UoKSxcblx0XHRcdFx0bG93ZXJlZFNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0XHRsZXQgcG9zaXRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdHdoaWxlIChpbmRleCA8IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoKSB7XG5cblx0XHRcdFx0Y29uc3QgZm91bmQgPSBsb3dlckNhc2VkVGV4dC5pbmRleE9mKGxvd2VyZWRTZWFyY2hQaHJhc2UsIGluZGV4KTtcblxuXHRcdFx0XHRpZiAoZm91bmQgPj0gMCkge1xuXHRcdFx0XHRcdHBvc2l0aW9ucy5wdXNoKGZvdW5kKTtcblx0XHRcdFx0XHRpbmRleCA9IGZvdW5kICsgc2VhcmNoUGhyYXNlLmxlbmd0aDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbmRleCA9IGxvd2VyZWRTZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFyciA9IHR4dC5zcGxpdCgnJyk7XG5cblx0XHRcdHBvc2l0aW9ucy5mb3JFYWNoKChwb3M6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGhyYXNlLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdFx0XHRsZXQgcGg7XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cGggPSBgPHNwYW4gY2xhc3M9XCJndWktdGV4dC1oaWdobGlnaHRcIj4ke2Fycltwb3MgKyBpXX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwaCA9IGFycltwb3MgKyBpXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaSA9PT0gc2VhcmNoUGhyYXNlLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdHBoICs9IGA8L3NwYW4+YDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhcnJbcG9zICsgaV0gPSBwaDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0dHh0ID0gYXJyLmpvaW4oJycpO1xuXG5cdFx0XHRyZXR1cm4gdHh0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hY2Nlc3NvcihlbnRpdHkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=