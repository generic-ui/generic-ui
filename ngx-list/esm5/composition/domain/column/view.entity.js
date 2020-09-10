/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../structure/field/domain/core/field/data/data-type';
var ViewEntity = /** @class */ (function () {
    function ViewEntity(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @return {?}
         */
        function (cellValue) { return cellValue; });
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
    ViewEntity.fromDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
        }
    };
    /**
     * @return {?}
     */
    ViewEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    /**
     * @return {?}
     */
    ViewEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.templateFunction;
    };
    return ViewEntity;
}());
export { ViewEntity };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vdmlldy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRXJGO0lBZ0JDLG9CQUFZLFFBQXdCO1FBRm5CLHFCQUFnQjs7OztRQUE2QixVQUFDLFNBQWMsSUFBSyxPQUFBLFNBQVMsRUFBVCxDQUFTLEVBQUM7UUFJM0YsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7U0FDakM7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7SUF0QmEsdUJBQVk7Ozs7SUFBMUIsVUFBMkIsUUFBa0I7UUFFNUMsSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ04sT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7SUFFRixDQUFDOzs7O0lBZ0JELGdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0NBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBRUYsaUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDOzs7Ozs7O0lBdEJBLDBCQUFnQzs7Ozs7SUFFaEMsc0NBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RW50aXR5IHtcblxuXHRwdWJsaWMgc3RhdGljIGZyb21EYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBWaWV3RW50aXR5IHtcblxuXHRcdGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LkRBVEUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVCk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IENlbGxWaWV3O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVGdW5jdGlvbj86IChlbnRpdHk6IGFueSkgPT4gc3RyaW5nID0gKGNlbGxWYWx1ZTogYW55KSA9PiBjZWxsVmFsdWU7XG5cblx0Y29uc3RydWN0b3IoY2VsbFZpZXc6IENlbGxWaWV3IHwgYW55KSB7XG5cblx0XHRpZiAodHlwZW9mIGNlbGxWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBDZWxsVmlldy5GVU5DVElPTjtcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IGNlbGxWaWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBjZWxsVmlldztcblx0XHR9XG5cdH1cblxuXHRnZXRDZWxsVmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldFRlbXBsYXRlRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uO1xuXHR9XG5cbn1cbiJdfQ==