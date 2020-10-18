/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
export class ViewEntity {
    /**
     * @param {?} cellView
     */
    constructor(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @param {?} item
         * @return {?}
         */
        (cellValue, item) => cellValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7QUFFeEYsTUFBTSxPQUFPLFVBQVU7Ozs7SUFnQnRCLFlBQVksUUFBd0I7UUFGbkIscUJBQWdCOzs7OztRQUF3QyxDQUFDLFNBQWMsRUFBRSxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQztRQUlqSCxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztTQUNqQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDckI7SUFDRixDQUFDOzs7OztJQXRCTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztDQUVEOzs7Ozs7SUF0QkEsMEJBQWdDOzs7OztJQUVoQyxzQ0FBa0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdFbnRpdHkge1xuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbURhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFZpZXdFbnRpdHkge1xuXG5cdFx0aWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuREFURSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmlldzogQ2VsbFZpZXc7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZ1bmN0aW9uPzogKGVudGl0eTogYW55LCBpdGVtOiBhbnkpID0+IHN0cmluZyA9IChjZWxsVmFsdWU6IGFueSwgaXRlbTogYW55KSA9PiBjZWxsVmFsdWU7XG5cblx0Y29uc3RydWN0b3IoY2VsbFZpZXc6IENlbGxWaWV3IHwgYW55KSB7XG5cblx0XHRpZiAodHlwZW9mIGNlbGxWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBDZWxsVmlldy5GVU5DVElPTjtcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IGNlbGxWaWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBjZWxsVmlldztcblx0XHR9XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uO1xuXHR9XG5cbn1cbiJdfQ==