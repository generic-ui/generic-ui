/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUV4RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekM7SUFFQyxrQ0FBbUIsUUFBMEIsRUFDbkMsWUFBOEIsRUFDOUIsUUFBaUIsRUFDakIsV0FBNEIsRUFDNUIsUUFBK0IsRUFDL0IsY0FBcUMsRUFDckMsS0FBYSxFQUNiLGFBQTRCLEVBQ2xCLEtBQWtCLEVBQ2xCLGtCQUEyQixFQUMzQixJQUFjLEVBQUUsV0FBVztJQUMzQixJQUFnQjtRQVhqQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDOzs7O0lBRUQsdURBQW9COzs7SUFBcEI7UUFD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S0FBSyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsRUFBRSxJQUFJLFNBQVMsQ0FBQztxQkFDaEI7b0JBRUQsS0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2xCO1lBRUYsQ0FBQyxFQUFDLENBQUM7WUFFSCxHQUFHLEdBQUcsS0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNOLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFFRiwrQkFBQztBQUFELENBQUMsQUEvR0QsSUErR0M7Ozs7SUE3R1ksNENBQWlDOztJQUMxQyxnREFBcUM7O0lBQ3JDLDRDQUF3Qjs7SUFDeEIsK0NBQW1DOztJQUNuQyw0Q0FBc0M7O0lBQ3RDLGtEQUE0Qzs7SUFDNUMseUNBQW9COztJQUNwQixpREFBbUM7Ozs7O0lBQ25DLHlDQUFtQzs7Ozs7SUFDbkMsc0RBQTRDOzs7OztJQUM1Qyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuL2NlbGwtdmFsdWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3Ige1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRcdFx0cHVibGljIGVkaXRhYmxlOiBib29sZWFuLFxuXHRcdFx0XHRwdWJsaWMgdGVtcGxhdGVGdW46IChpOiBhbnkpID0+IGFueSxcblx0XHRcdFx0cHVibGljIGFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyBzZWFyY2hBY2Nlc3NvcjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHVibGljIGNvbHVtbkZpZWxkSWQ6IENvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxpZ246IENvbHVtbkFsaWduLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNlbGxFZGl0aW5nRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBEYXRhVHlwZSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3RW50aXR5KSB7IC8vIFJFRkFDVE9SXG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jZWxsRWRpdGluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc0Jvb2xlYW5EYXRhVHlwZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5CT09MRUFOO1xuXHR9XG5cblx0aXNBbGlnbkxlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cblxuXHRpc0FsaWduQ2VudGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cblxuXHRpc0FsaWduUmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09IENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG5cblx0Ly8gUkVGQUNUT1IgIzE1ODFcblx0Z2V0VmFsdWUoZW50aXR5OiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U/OiBzdHJpbmcpOiBDZWxsVmFsdWUge1xuXG5cdFx0Y29uc3QgY2VsbFZhbHVlID0gdGhpcy5maW5kVmFsdWUoZW50aXR5LCBzZWFyY2hQaHJhc2UpO1xuXG5cdFx0Y2VsbFZhbHVlLnZhbHVlID0gdGhpcy50ZW1wbGF0ZUZ1bihjZWxsVmFsdWUudmFsdWUpO1xuXG5cdFx0cmV0dXJuIGNlbGxWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZmluZFZhbHVlKGVudGl0eTogSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlPzogc3RyaW5nKTogQ2VsbFZhbHVlIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3IoZW50aXR5KTtcblxuXHRcdGlmICh0aGlzLnR5cGUgIT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIENlbGxWYWx1ZS50ZXh0KHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5nZXRDZWxsVmlldygpID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIENlbGxWYWx1ZS50ZXh0KHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoc2VhcmNoUGhyYXNlKSB7XG5cblx0XHRcdGxldCB0eHQ6IHN0cmluZyA9ICcnICsgdGhpcy5zZWFyY2hBY2Nlc3NvcihlbnRpdHkpLFxuXHRcdFx0XHRsb3dlckNhc2VkVGV4dDogc3RyaW5nID0gdHh0LnRvTG9jYWxlTG93ZXJDYXNlKCksXG5cdFx0XHRcdGxvd2VyZWRTZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdFx0bGV0IHBvc2l0aW9uczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHR3aGlsZSAoaW5kZXggPCBsb3dlcmVkU2VhcmNoUGhyYXNlLmxlbmd0aCkge1xuXG5cdFx0XHRcdGNvbnN0IGZvdW5kID0gbG93ZXJDYXNlZFRleHQuaW5kZXhPZihsb3dlcmVkU2VhcmNoUGhyYXNlLCBpbmRleCk7XG5cblx0XHRcdFx0aWYgKGZvdW5kID49IDApIHtcblx0XHRcdFx0XHRwb3NpdGlvbnMucHVzaChmb3VuZCk7XG5cdFx0XHRcdFx0aW5kZXggPSBmb3VuZCArIHNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5kZXggPSBsb3dlcmVkU2VhcmNoUGhyYXNlLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBhcnIgPSB0eHQuc3BsaXQoJycpO1xuXG5cdFx0XHRwb3NpdGlvbnMuZm9yRWFjaCgocG9zOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFBocmFzZS5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRcdFx0bGV0IHBoO1xuXG5cdFx0XHRcdFx0aWYgKGkgPT09IDApIHtcblx0XHRcdFx0XHRcdHBoID0gYDxzcGFuIGNsYXNzPVwiZ3VpLXRleHQtaGlnaGxpZ2h0XCI+JHthcnJbcG9zICsgaV19YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGggPSBhcnJbcG9zICsgaV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGkgPT09IHNlYXJjaFBocmFzZS5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRwaCArPSBgPC9zcGFuPmA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXJyW3BvcyArIGldID0gcGg7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdHR4dCA9IGFyci5qb2luKCcnKTtcblxuXHRcdFx0cmV0dXJuIENlbGxWYWx1ZS5IVE1MKHR4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBDZWxsVmFsdWUudGV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==