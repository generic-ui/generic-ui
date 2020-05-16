/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/domain/structure/field/data-type/data-type';
import { CellView } from '../../../domain/column/cell-view';
import { ColumnAlign } from '../../../domain/column/column-align';
import { CellValue } from './cell-value';
var CellTemplateWithAccessor = /** @class */ (function () {
    function CellTemplateWithAccessor(template, editTemplate, editable, templateFun, accessor, searchAccessor, width, columnFieldId, align, cellEditingEnabled, type, // REFACTOR
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
    CellTemplateWithAccessor.prototype.isCellEditingEnabled = /**
     * @return {?}
     */
    function () {
        return this.cellEditingEnabled;
    };
    /**
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.isBooleanDataType = /**
     * @return {?}
     */
    function () {
        return this.type === DataType.BOOLEAN;
    };
    /**
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.isAlignLeft = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.LEFT;
    };
    /**
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.isAlignCenter = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.CENTER;
    };
    /**
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.isAlignRight = /**
     * @return {?}
     */
    function () {
        return this.align === ColumnAlign.RIGHT;
    };
    // REFACTOR #1581
    // REFACTOR #1581
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.getValue = 
    // REFACTOR #1581
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    function (entity, searchPhrase) {
        /** @type {?} */
        var cellValue = this.findValue(entity, searchPhrase);
        cellValue.value = this.templateFun(cellValue.value);
        return cellValue;
    };
    /**
     * @private
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    CellTemplateWithAccessor.prototype.findValue = /**
     * @private
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    function (entity, searchPhrase) {
        /** @type {?} */
        var value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return CellValue.text(value);
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return CellValue.text(value);
        }
        if (searchPhrase) {
            /** @type {?} */
            var txt = '' + this.searchAccessor(entity);
            /** @type {?} */
            var lowerCasedText = txt.toLocaleLowerCase();
            /** @type {?} */
            var loweredSearchPhrase = searchPhrase.toLocaleLowerCase();
            /** @type {?} */
            var positions = [];
            /** @type {?} */
            var index = 0;
            while (index < loweredSearchPhrase.length) {
                /** @type {?} */
                var found = lowerCasedText.indexOf(loweredSearchPhrase, index);
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
            var arr_1 = txt.split('');
            positions.forEach((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) {
                for (var i = 0; i < searchPhrase.length; i += 1) {
                    /** @type {?} */
                    var ph = void 0;
                    if (i === 0) {
                        ph = "<span class=\"gui-text-highlight\">" + arr_1[pos + i];
                    }
                    else {
                        ph = arr_1[pos + i];
                    }
                    if (i === searchPhrase.length - 1) {
                        ph += "</span>";
                    }
                    arr_1[pos + i] = ph;
                }
            }));
            txt = arr_1.join('');
            return CellValue.HTML(txt);
        }
        else {
            return CellValue.text(value);
        }
    };
    return CellTemplateWithAccessor;
}());
export { CellTemplateWithAccessor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDO0lBRUMsa0NBQW1CLFFBQTBCLEVBQ25DLFlBQThCLEVBQzlCLFFBQWlCLEVBQ2pCLFdBQTRCLEVBQzVCLFFBQStCLEVBQy9CLGNBQXFDLEVBQ3JDLEtBQWEsRUFDYixhQUE0QixFQUNsQixLQUFrQixFQUNsQixrQkFBMkIsRUFDM0IsSUFBYyxFQUFFLFdBQVc7SUFDM0IsSUFBZ0I7UUFYakIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVM7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVk7SUFDcEMsQ0FBQzs7OztJQUVELHVEQUFvQjs7O0lBQXBC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QUFDLEtBQUssWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLEVBQUUsSUFBSSxTQUFTLENBQUM7cUJBQ2hCO29CQUVELEtBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtZQUVGLENBQUMsRUFBQyxDQUFDO1lBRUgsR0FBRyxHQUFHLEtBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBL0dELElBK0dDOzs7O0lBN0dZLDRDQUFpQzs7SUFDMUMsZ0RBQXFDOztJQUNyQyw0Q0FBd0I7O0lBQ3hCLCtDQUFtQzs7SUFDbkMsNENBQXNDOztJQUN0QyxrREFBNEM7O0lBQzVDLHlDQUFvQjs7SUFDcEIsaURBQW1DOzs7OztJQUNuQyx5Q0FBbUM7Ozs7O0lBQ25DLHNEQUE0Qzs7Ozs7SUFDNUMsd0NBQStCOzs7OztJQUMvQix3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZhbHVlIH0gZnJvbSAnLi9jZWxsLXZhbHVlJztcblxuXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbixcblx0XHRcdFx0cHVibGljIHRlbXBsYXRlRnVuOiAoaTogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyBhY2Nlc3NvcjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgc2VhcmNoQWNjZXNzb3I6IChlbGVtZW50OiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHB1YmxpYyBjb2x1bW5GaWVsZElkOiBDb2x1bW5GaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsaWduOiBDb2x1bW5BbGlnbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSkgeyAvLyBSRUZBQ1RPUlxuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkO1xuXHR9XG5cblx0aXNCb29sZWFuRGF0YVR5cGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdGlzQWxpZ25MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG5cblx0aXNBbGlnbkNlbnRlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXHR9XG5cblx0aXNBbGlnblJpZ2h0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxuXG5cdC8vIFJFRkFDVE9SICMxNTgxXG5cdGdldFZhbHVlKGVudGl0eTogSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlPzogc3RyaW5nKTogQ2VsbFZhbHVlIHtcblxuXHRcdGNvbnN0IGNlbGxWYWx1ZSA9IHRoaXMuZmluZFZhbHVlKGVudGl0eSwgc2VhcmNoUGhyYXNlKTtcblxuXHRcdGNlbGxWYWx1ZS52YWx1ZSA9IHRoaXMudGVtcGxhdGVGdW4oY2VsbFZhbHVlLnZhbHVlKTtcblxuXHRcdHJldHVybiBjZWxsVmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IENlbGxWYWx1ZSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cblx0XHRpZiAodGhpcy50eXBlICE9PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiBDZWxsVmFsdWUudGV4dCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuRlVOQ1RJT04pIHtcblx0XHRcdHJldHVybiBDZWxsVmFsdWUudGV4dCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaFBocmFzZSkge1xuXG5cdFx0XHRsZXQgdHh0OiBzdHJpbmcgPSAnJyArIHRoaXMuc2VhcmNoQWNjZXNzb3IoZW50aXR5KSxcblx0XHRcdFx0bG93ZXJDYXNlZFRleHQ6IHN0cmluZyA9IHR4dC50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuXHRcdFx0XHRsb3dlcmVkU2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRcdGxldCBwb3NpdGlvbnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0d2hpbGUgKGluZGV4IDwgbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGgpIHtcblxuXHRcdFx0XHRjb25zdCBmb3VuZCA9IGxvd2VyQ2FzZWRUZXh0LmluZGV4T2YobG93ZXJlZFNlYXJjaFBocmFzZSwgaW5kZXgpO1xuXG5cdFx0XHRcdGlmIChmb3VuZCA+PSAwKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25zLnB1c2goZm91bmQpO1xuXHRcdFx0XHRcdGluZGV4ID0gZm91bmQgKyBzZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXJyID0gdHh0LnNwbGl0KCcnKTtcblxuXHRcdFx0cG9zaXRpb25zLmZvckVhY2goKHBvczogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hQaHJhc2UubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0XHRcdGxldCBwaDtcblxuXHRcdFx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwaCA9IGA8c3BhbiBjbGFzcz1cImd1aS10ZXh0LWhpZ2hsaWdodFwiPiR7YXJyW3BvcyArIGldfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBoID0gYXJyW3BvcyArIGldO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpID09PSBzZWFyY2hQaHJhc2UubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGggKz0gYDwvc3Bhbj5gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFycltwb3MgKyBpXSA9IHBoO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHR0eHQgPSBhcnIuam9pbignJyk7XG5cblx0XHRcdHJldHVybiBDZWxsVmFsdWUuSFRNTCh0eHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQ2VsbFZhbHVlLnRleHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=