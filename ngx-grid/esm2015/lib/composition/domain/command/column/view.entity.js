/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFFcEcsTUFBTSxPQUFPLFVBQVU7Ozs7SUFnQnRCLFlBQVksVUFBMEI7UUFGckIscUJBQWdCOzs7O1FBQTZCLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUM7UUFJbkYsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7U0FDbkM7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7Ozs7SUF0Qk0sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFrQjtRQUU1QyxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNwQztJQUVGLENBQUM7Ozs7SUFnQkQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FFRDs7Ozs7O0lBdEJBLDBCQUFnQzs7Ozs7SUFFaEMsc0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld0VudGl0eSB7XG5cblx0cHVibGljIHN0YXRpYyBmcm9tRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVmlld0VudGl0eSB7XG5cblx0XHRpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5EQVRFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LlRFWFQpXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IENlbGxWaWV3O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVGdW5jdGlvbj86IChlbnRpdHk6IGFueSkgPT4gc3RyaW5nID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbHVtblZpZXc6IENlbGxWaWV3IHwgYW55KSB7XG5cblx0XHRpZiAodHlwZW9mIGNvbHVtblZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMudmlldyA9IENlbGxWaWV3LkZVTkNUSU9OO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gY29sdW1uVmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gY29sdW1uVmlldztcblx0XHR9XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uO1xuXHR9XG5cbn1cbiJdfQ==