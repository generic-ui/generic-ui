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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkLnVpLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEQ7SUFBQTtJQWFBLENBQUM7Ozs7O0lBVkEsa0NBQU87Ozs7SUFBUCxVQUFRLE1BQW9CO1FBQTVCLGlCQUlDO1FBSEEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBWTtZQUM5QixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxxQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBWTtRQUU5QixPQUFPLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Z0JBWkQsVUFBVTs7SUFhWCx1QkFBQztDQUFBLEFBYkQsSUFhQztTQVpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkVWlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBGaWVsZCk6IEZpZWxkUmVhZE1vZGVsIHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRSZWFkTW9kZWwoZmllbGQuZ2V0SWQoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSwgZmllbGQuZ2V0TmFtZSgpKTtcblx0fVxufVxuIl19