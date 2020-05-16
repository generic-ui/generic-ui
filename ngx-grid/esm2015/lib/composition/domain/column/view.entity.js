/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
export class ViewEntity {
    /**
     * @param {?} cellView
     */
    constructor(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @return {?}
         */
        (cellValue) => cellValue);
        if (typeof cellView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = cellView;
        }
        else {
            this.view = cellView;
        }
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    static fromDataType(dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
        }
    }
    /**
     * @return {?}
     */
    getCellView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.templateFunction;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.templateFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUd6RixNQUFNLE9BQU8sVUFBVTs7OztJQWdCdEIsWUFBWSxRQUF3QjtRQUZuQixxQkFBZ0I7Ozs7UUFBNkIsQ0FBQyxTQUFjLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQztRQUkzRixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztTQUNqQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDckI7SUFDRixDQUFDOzs7OztJQXRCTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztDQUVEOzs7Ozs7SUF0QkEsMEJBQWdDOzs7OztJQUVoQyxzQ0FBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdFbnRpdHkge1xuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbURhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFZpZXdFbnRpdHkge1xuXG5cdFx0aWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuREFURSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmlldzogQ2VsbFZpZXc7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZ1bmN0aW9uPzogKGVudGl0eTogYW55KSA9PiBzdHJpbmcgPSAoY2VsbFZhbHVlOiBhbnkpID0+IGNlbGxWYWx1ZTtcblxuXHRjb25zdHJ1Y3RvcihjZWxsVmlldzogQ2VsbFZpZXcgfCBhbnkpIHtcblxuXHRcdGlmICh0eXBlb2YgY2VsbFZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMudmlldyA9IENlbGxWaWV3LkZVTkNUSU9OO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gY2VsbFZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9IGNlbGxWaWV3O1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb247XG5cdH1cblxufVxuIl19