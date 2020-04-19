/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/domain/structure/field/data-type/data-type';
import { CellView } from '../../../domain/column/cell-view';
import { ColumnAlign } from '../../../domain/column/column-align';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRTVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHbEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLFlBQW1CLFFBQTBCLEVBQ25DLFlBQThCLEVBQzlCLFFBQWlCLEVBQ2pCLFdBQTRCLEVBQzVCLFFBQStCLEVBQy9CLGNBQXFDLEVBQ3JDLEtBQWEsRUFDYixhQUE0QixFQUNsQixLQUFrQixFQUNsQixrQkFBMkIsRUFDM0IsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0I7UUFYakIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVM7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVk7SUFDcEMsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUks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LENBQUM7WUFFbkIsT0FBTyxHQUFHLENBQUM7U0FDWDthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUVEOzs7SUF6R1ksNENBQWlDOztJQUMxQyxnREFBcUM7O0lBQ3JDLDRDQUF3Qjs7SUFDeEIsK0NBQW1DOztJQUNuQyw0Q0FBc0M7O0lBQ3RDLGtEQUE0Qzs7SUFDNUMseUNBQW9COztJQUNwQixpREFBbUM7Ozs7O0lBQ25DLHlDQUFtQzs7Ozs7SUFDbkMsc0RBQTRDOzs7OztJQUM1Qyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5cblxuZXhwb3J0IGNsYXNzIENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHB1YmxpYyB0ZW1wbGF0ZUZ1bjogKGk6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgYWNjZXNzb3I6IChlbGVtZW50OiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIHNlYXJjaEFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwdWJsaWMgY29sdW1uRmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGlnbjogQ29sdW1uQWxpZ24sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXRpbmdFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IERhdGFUeXBlLCAvLyBSRUZBQ1RPUlxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXdFbnRpdHkpIHsgLy8gUkVGQUNUT1Jcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0aW5nRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9vbGVhbkRhdGFUeXBlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRpc0FsaWduTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxuXG5cdGlzQWxpZ25DZW50ZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkNFTlRFUjtcblx0fVxuXG5cdGlzQWxpZ25SaWdodCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cblxuXHQvLyBSRUZBQ1RPUiAjMTU4MVxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IGFueSB8IEhUTUxFbGVtZW50IHtcblxuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuKHRoaXMuZmluZFZhbHVlKGVudGl0eSwgc2VhcmNoUGhyYXNlKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IGFueSB8IEhUTUxFbGVtZW50IHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3IoZW50aXR5KTtcblxuXHRcdGlmICh0aGlzLnR5cGUgIT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaFBocmFzZSkge1xuXG5cdFx0XHRsZXQgdHh0OiBzdHJpbmcgPSAnJyArIHRoaXMuc2VhcmNoQWNjZXNzb3IoZW50aXR5KSxcblx0XHRcdFx0bG93ZXJDYXNlZFRleHQ6IHN0cmluZyA9IHR4dC50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuXHRcdFx0XHRsb3dlcmVkU2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRcdGxldCBwb3NpdGlvbnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0d2hpbGUgKGluZGV4IDwgbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGgpIHtcblxuXHRcdFx0XHRjb25zdCBmb3VuZCA9IGxvd2VyQ2FzZWRUZXh0LmluZGV4T2YobG93ZXJlZFNlYXJjaFBocmFzZSwgaW5kZXgpO1xuXG5cdFx0XHRcdGlmIChmb3VuZCA+PSAwKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25zLnB1c2goZm91bmQpO1xuXHRcdFx0XHRcdGluZGV4ID0gZm91bmQgKyBzZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXJyID0gdHh0LnNwbGl0KCcnKTtcblxuXHRcdFx0cG9zaXRpb25zLmZvckVhY2goKHBvczogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hQaHJhc2UubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0XHRcdGxldCBwaDtcblxuXHRcdFx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwaCA9IGA8c3BhbiBjbGFzcz1cImd1aS10ZXh0LWhpZ2hsaWdodFwiPiR7YXJyW3BvcyArIGldfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBoID0gYXJyW3BvcyArIGldO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpID09PSBzZWFyY2hQaHJhc2UubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGggKz0gYDwvc3Bhbj5gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFycltwb3MgKyBpXSA9IHBoO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHR0eHQgPSBhcnIuam9pbignJyk7XG5cblx0XHRcdHJldHVybiB0eHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==