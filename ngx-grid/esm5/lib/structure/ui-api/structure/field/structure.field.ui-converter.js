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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkU7SUFBQTtJQWFBLENBQUM7Ozs7O0lBVkEsMkNBQU87Ozs7SUFBUCxVQUFRLE1BQXdCO1FBQWhDLGlCQUlDO1FBSEEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBZ0I7WUFDbEMsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sOENBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQWdCO1FBRWxDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBWkQsVUFBVTs7SUFhWCxnQ0FBQztDQUFBLEFBYkQsSUFhQztTQVpZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktbW9kZWwnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pOiBBcnJheTxTdHJ1Y3R1cmVGaWVsZFVpTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydE9uZShmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRPbmUoZmllbGQ6IFR5cGVGaWVsZCk6IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUZpZWxkVWlNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0fVxufVxuIl19