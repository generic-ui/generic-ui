/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { CellView } from '../../cell-view';
export class CellTemplateWithAccessor {
    /**
     * @param {?} template
     * @param {?} editTemplate
     * @param {?} editable
     * @param {?} accessor
     * @param {?} width
     * @param {?} columnFieldId
     * @param {?} type
     * @param {?} view
     */
    constructor(template, editTemplate, editable, accessor, width, columnFieldId, type, // REFACTOR
    view) {
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.accessor = accessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
        this.type = type;
        this.view = view;
    }
    /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    getValue(entity, searchPhrase) {
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
            let txt = '' + this.accessor(entity);
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
    CellTemplateWithAccessor.prototype.accessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.width;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.columnFieldId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7Ozs7SUFFcEMsWUFBbUIsUUFBMEIsRUFDbkMsWUFBOEIsRUFDOUIsUUFBaUIsRUFDakIsUUFBK0IsRUFDL0IsS0FBYSxFQUNiLGFBQTRCLEVBQ2xCLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCO1FBUGpCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBa0IsRUFBRSxZQUFxQjs7Y0FFM0MsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFlBQVksRUFBRTs7Z0JBRWIsR0FBRyxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Z0JBQzNDLGNBQWMsR0FBVyxHQUFHLENBQUMsaUJBQWlCLEVBQUU7O2dCQUNoRCxtQkFBbUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLEVBQUU7O2dCQUVuRCxTQUFTLEdBQWtCLEVBQUU7O2dCQUU3QixLQUFLLEdBQUcsQ0FBQztZQUViLE9BQU8sS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRTs7c0JBRXBDLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQztnQkFFaEUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RCLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztvQkFDcEMsU0FBUztpQkFDVDtxQkFBTTtvQkFDTixLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO2lCQUNuQzthQUNEOztrQkFFSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFFekIsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO2dCQUVqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFFNUMsRUFBRTtvQkFFTixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ1osRUFBRSxHQUFHLG9DQUFvQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ3hEO3lCQUFNO3dCQUNOLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFFRCxJQUFJLENBQUMsS0FBSyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsRUFBRSxJQUFJLFNBQVMsQ0FBQztxQkFDaEI7b0JBRUQsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2xCO1lBRUYsQ0FBQyxFQUFDLENBQUM7WUFFSCxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuQixPQUFPLEdBQUcsQ0FBQztTQUNYO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBRUQ7OztJQTVFWSw0Q0FBaUM7O0lBQzFDLGdEQUFxQzs7SUFDckMsNENBQXdCOztJQUN4Qiw0Q0FBc0M7O0lBQ3RDLHlDQUFvQjs7SUFDcEIsaURBQW1DOzs7OztJQUNuQyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL2NvbHVtbi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdFx0XHRwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4sXG5cdFx0XHRcdHB1YmxpYyBhY2Nlc3NvcjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuXHRcdFx0XHRwdWJsaWMgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHVibGljIGNvbHVtbkZpZWxkSWQ6IENvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogRGF0YVR5cGUsIC8vIFJFRkFDVE9SXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlld0VudGl0eSkgeyAvLyBSRUZBQ1RPUlxuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U/OiBzdHJpbmcpOiBhbnkgfCBIVE1MRWxlbWVudCB7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3IoZW50aXR5KTtcblxuXHRcdGlmICh0aGlzLnR5cGUgIT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkZVTkNUSU9OKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaFBocmFzZSkge1xuXG5cdFx0XHRsZXQgdHh0OiBzdHJpbmcgPSAnJyArIHRoaXMuYWNjZXNzb3IoZW50aXR5KSxcblx0XHRcdFx0bG93ZXJDYXNlZFRleHQ6IHN0cmluZyA9IHR4dC50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuXHRcdFx0XHRsb3dlcmVkU2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRcdGxldCBwb3NpdGlvbnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0d2hpbGUgKGluZGV4IDwgbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGgpIHtcblxuXHRcdFx0XHRjb25zdCBmb3VuZCA9IGxvd2VyQ2FzZWRUZXh0LmluZGV4T2YobG93ZXJlZFNlYXJjaFBocmFzZSwgaW5kZXgpO1xuXG5cdFx0XHRcdGlmIChmb3VuZCA+PSAwKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25zLnB1c2goZm91bmQpO1xuXHRcdFx0XHRcdGluZGV4ID0gZm91bmQgKyBzZWFyY2hQaHJhc2UubGVuZ3RoO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gbG93ZXJlZFNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXJyID0gdHh0LnNwbGl0KCcnKTtcblxuXHRcdFx0cG9zaXRpb25zLmZvckVhY2goKHBvczogbnVtYmVyKSA9PiB7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hQaHJhc2UubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0XHRcdGxldCBwaDtcblxuXHRcdFx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwaCA9IGA8c3BhbiBjbGFzcz1cImd1aS10ZXh0LWhpZ2hsaWdodFwiPiR7YXJyW3BvcyArIGldfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBoID0gYXJyW3BvcyArIGldO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpID09PSBzZWFyY2hQaHJhc2UubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGggKz0gYDwvc3Bhbj5gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFycltwb3MgKyBpXSA9IHBoO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHR0eHQgPSBhcnIuam9pbignJyk7XG5cblx0XHRcdHJldHVybiB0eHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==