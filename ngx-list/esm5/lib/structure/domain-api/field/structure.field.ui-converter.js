/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiModel } from './structure.field.ui-model';
var StructureFieldUiConverter = /** @class */ (function () {
    function StructureFieldUiConverter() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    StructureFieldUiConverter.prototype.convert = /**
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
    StructureFieldUiConverter.prototype.convertOne = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    };
    StructureFieldUiConverter.decorators = [
        { type: Injectable }
    ];
    return StructureFieldUiConverter;
}());
export { StructureFieldUiConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkU7SUFBQTtJQWFBLENBQUM7Ozs7O0lBVkEsMkNBQU87Ozs7SUFBUCxVQUFRLE1BQXdCO1FBQWhDLGlCQUlDO1FBSEEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBZ0I7WUFDbEMsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sOENBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQWdCO1FBRWxDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBWkQsVUFBVTs7SUFhWCxnQ0FBQztDQUFBLEFBYkQsSUFhQztTQVpZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktbW9kZWwnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KTogQXJyYXk8U3RydWN0dXJlRmllbGRVaU1vZGVsPiB7XG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBUeXBlRmllbGQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBUeXBlRmllbGQpOiBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwge1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwoZmllbGQuZ2V0SWQoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdH1cbn1cbiJdfQ==