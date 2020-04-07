/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
export class ViewEntity {
    /**
     * @param {?} columnView
     */
    constructor(columnView) {
        this.templateFunction = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value);
        if (typeof columnView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = columnView;
        }
        else {
            this.view = columnView;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV6RixNQUFNLE9BQU8sVUFBVTs7OztJQWdCdEIsWUFBWSxVQUEwQjtRQUZyQixxQkFBZ0I7Ozs7UUFBNkIsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBQztRQUluRixJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7OztJQXRCTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztDQUVEOzs7Ozs7SUF0QkEsMEJBQWdDOzs7OztJQUVoQyxzQ0FBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4vY2VsbC12aWV3JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RW50aXR5IHtcblxuXHRwdWJsaWMgc3RhdGljIGZyb21EYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBWaWV3RW50aXR5IHtcblxuXHRcdGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LkRBVEUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IENlbGxWaWV3O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVGdW5jdGlvbj86IChlbnRpdHk6IGFueSkgPT4gc3RyaW5nID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtblZpZXc6IENlbGxWaWV3IHwgYW55KSB7XG5cblx0XHRpZiAodHlwZW9mIGNvbHVtblZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMudmlldyA9IENlbGxWaWV3LkZVTkNUSU9OO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gY29sdW1uVmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gY29sdW1uVmlldztcblx0XHR9XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uO1xuXHR9XG5cbn1cbiJdfQ==