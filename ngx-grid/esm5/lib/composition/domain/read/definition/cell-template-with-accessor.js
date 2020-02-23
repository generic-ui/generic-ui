/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { CellView } from '../../cell-view';
var CellTemplateWithAccessor = /** @class */ (function () {
    function CellTemplateWithAccessor(template, editTemplate, editable, accessor, width, columnFieldId, type, // REFACTOR
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
    CellTemplateWithAccessor.prototype.getValue = /**
     * @param {?} entity
     * @param {?=} searchPhrase
     * @return {?}
     */
    function (entity, searchPhrase) {
        /** @type {?} */
        var value = this.accessor(entity);
        if (this.type !== DataType.STRING) {
            return value;
        }
        if (this.view && this.view.getCellView() === CellView.FUNCTION) {
            return value;
        }
        if (searchPhrase) {
            /** @type {?} */
            var txt = '' + this.accessor(entity);
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
            return txt;
        }
        else {
            return this.accessor(entity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFFQyxrQ0FBbUIsUUFBMEIsRUFDbkMsWUFBOEIsRUFDOUIsUUFBaUIsRUFDakIsUUFBK0IsRUFDL0IsS0FBYSxFQUNiLGFBQTRCLEVBQ2xCLElBQWMsRUFBRSxXQUFXO0lBQzNCLElBQWdCO1FBUGpCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDOzs7Ozs7SUFFRCwyQ0FBUTs7Ozs7SUFBUixVQUFTLE1BQWtCLEVBQUUsWUFBcUI7O1lBRTNDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMvRCxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxZQUFZLEVBQUU7O2dCQUViLEdBQUcsR0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O2dCQUMzQyxjQUFjLEdBQVcsR0FBRyxDQUFDLGlCQUFpQixFQUFFOztnQkFDaEQsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixFQUFFOztnQkFFbkQsU0FBUyxHQUFrQixFQUFFOztnQkFFN0IsS0FBSyxHQUFHLENBQUM7WUFFYixPQUFPLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7O29CQUVwQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7Z0JBRWhFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDZixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7b0JBQ3BDLFNBQVM7aUJBQ1Q7cUJBQU07b0JBQ04sS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztpQkFDbkM7YUFDRDs7Z0JBRUssS0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBRXpCLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFXO2dCQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFFNUMsRUFBRSxTQUFBO29CQUVOLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsd0NBQW9DLEtBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFHLENBQUM7cUJBQ3hEO3lCQUFNO3dCQUNOLEVBQUUsR0FBRyxLQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFFRCxJQUFJLENBQUMsS0FBSyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsRUFBRSxJQUFJLFNBQVMsQ0FBQztxQkFDaEI7b0JBRUQsS0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2xCO1lBRUYsQ0FBQyxFQUFDLENBQUM7WUFFSCxHQUFHLEdBQUcsS0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuQixPQUFPLEdBQUcsQ0FBQztTQUNYO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDOzs7O0lBNUVZLDRDQUFpQzs7SUFDMUMsZ0RBQXFDOztJQUNyQyw0Q0FBd0I7O0lBQ3hCLDRDQUFzQzs7SUFDdEMseUNBQW9COztJQUNwQixpREFBbUM7Ozs7O0lBQ25DLHdDQUErQjs7Ozs7SUFDL0Isd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvY29sdW1uL3ZpZXcuZW50aXR5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0XHRcdHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbixcblx0XHRcdFx0cHVibGljIGFjY2Vzc29yOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG5cdFx0XHRcdHB1YmxpYyB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwdWJsaWMgY29sdW1uRmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBEYXRhVHlwZSwgLy8gUkVGQUNUT1Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3RW50aXR5KSB7IC8vIFJFRkFDVE9SXG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZT86IHN0cmluZyk6IGFueSB8IEhUTUxFbGVtZW50IHtcblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5hY2Nlc3NvcihlbnRpdHkpO1xuXG5cdFx0aWYgKHRoaXMudHlwZSAhPT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcuZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuRlVOQ1RJT04pIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoc2VhcmNoUGhyYXNlKSB7XG5cblx0XHRcdGxldCB0eHQ6IHN0cmluZyA9ICcnICsgdGhpcy5hY2Nlc3NvcihlbnRpdHkpLFxuXHRcdFx0XHRsb3dlckNhc2VkVGV4dDogc3RyaW5nID0gdHh0LnRvTG9jYWxlTG93ZXJDYXNlKCksXG5cdFx0XHRcdGxvd2VyZWRTZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2UudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdFx0bGV0IHBvc2l0aW9uczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHR3aGlsZSAoaW5kZXggPCBsb3dlcmVkU2VhcmNoUGhyYXNlLmxlbmd0aCkge1xuXG5cdFx0XHRcdGNvbnN0IGZvdW5kID0gbG93ZXJDYXNlZFRleHQuaW5kZXhPZihsb3dlcmVkU2VhcmNoUGhyYXNlLCBpbmRleCk7XG5cblx0XHRcdFx0aWYgKGZvdW5kID49IDApIHtcblx0XHRcdFx0XHRwb3NpdGlvbnMucHVzaChmb3VuZCk7XG5cdFx0XHRcdFx0aW5kZXggPSBmb3VuZCArIHNlYXJjaFBocmFzZS5sZW5ndGg7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5kZXggPSBsb3dlcmVkU2VhcmNoUGhyYXNlLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBhcnIgPSB0eHQuc3BsaXQoJycpO1xuXG5cdFx0XHRwb3NpdGlvbnMuZm9yRWFjaCgocG9zOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFBocmFzZS5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRcdFx0bGV0IHBoO1xuXG5cdFx0XHRcdFx0aWYgKGkgPT09IDApIHtcblx0XHRcdFx0XHRcdHBoID0gYDxzcGFuIGNsYXNzPVwiZ3VpLXRleHQtaGlnaGxpZ2h0XCI+JHthcnJbcG9zICsgaV19YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGggPSBhcnJbcG9zICsgaV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGkgPT09IHNlYXJjaFBocmFzZS5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRwaCArPSBgPC9zcGFuPmA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXJyW3BvcyArIGldID0gcGg7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdHR4dCA9IGFyci5qb2luKCcnKTtcblxuXHRcdFx0cmV0dXJuIHR4dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3IoZW50aXR5KTtcblx0XHR9XG5cdH1cblxufVxuIl19