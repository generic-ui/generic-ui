/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModel } from './field.read-model';
var FieldUiConverter = /** @class */ (function () {
    function FieldUiConverter() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldUiConverter.prototype.convert = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return _this.convertOne(field);
        }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldUiConverter.prototype.convertOne = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new FieldReadModel(field.getId(), field.getDataType(), field.getName());
    };
    FieldUiConverter.decorators = [
        { type: Injectable }
    ];
    return FieldUiConverter;
}());
export { FieldUiConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBEO0lBQUE7SUFhQSxDQUFDOzs7OztJQVZBLGtDQUFPOzs7O0lBQVAsVUFBUSxNQUFvQjtRQUE1QixpQkFJQztRQUhBLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQVk7WUFDOUIsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scUNBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQVk7UUFFOUIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQVpELFVBQVU7O0lBYVgsdUJBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydE9uZShmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRPbmUoZmllbGQ6IEZpZWxkKTogRmllbGRSZWFkTW9kZWwge1xuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZFJlYWRNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpLCBmaWVsZC5nZXROYW1lKCkpO1xuXHR9XG59XG4iXX0=