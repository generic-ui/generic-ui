/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Schema } from './query/schema';
import { SchemaColumnHeader } from './query/schema-column-header';
var SchemaConverter = /** @class */ (function () {
    function SchemaConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SchemaConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var columnHeader = aggregate.getColumnHeader();
        return new Schema(aggregate.getWidth(), aggregate.getHeight(), aggregate.getContainerHeight(), aggregate.isVerticalGridEnabled(), aggregate.isHorizontalGridEnabled(), aggregate.getTheme(), this.convertColumnHeader(columnHeader), aggregate.getRowColoring());
    };
    /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    SchemaConverter.prototype.convertColumnHeader = /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    function (columnHeader) {
        return new SchemaColumnHeader(columnHeader.isHeaderOnTop(), columnHeader.isHeaderOnBottom());
    };
    SchemaConverter.decorators = [
        { type: Injectable }
    ];
    return SchemaConverter;
}());
export { SchemaConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL3NjaGVtYS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR2xFO0lBQUE7SUF1QkEsQ0FBQzs7Ozs7SUFwQkEsaUNBQU87Ozs7SUFBUCxVQUFRLFNBQTBCOztZQUUzQixZQUFZLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTtRQUVoRCxPQUFPLElBQUksTUFBTSxDQUNoQixTQUFTLENBQUMsUUFBUSxFQUFFLEVBQ3BCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFDckIsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQzlCLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUNqQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3RDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FDMUIsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLDZDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsWUFBZ0M7UUFDM0QsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O2dCQXJCRCxVQUFVOztJQXVCWCxzQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3F1ZXJ5L3NjaGVtYSc7XG5pbXBvcnQgeyBDb2x1bW5IZWFkZXJFbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuL3F1ZXJ5L3NjaGVtYS1jb2x1bW4taGVhZGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlKTogU2NoZW1hIHtcblxuXHRcdGNvbnN0IGNvbHVtbkhlYWRlciA9IGFnZ3JlZ2F0ZS5nZXRDb2x1bW5IZWFkZXIoKTtcblxuXHRcdHJldHVybiBuZXcgU2NoZW1hKFxuXHRcdFx0YWdncmVnYXRlLmdldFdpZHRoKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SGVpZ2h0KCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0Q29udGFpbmVySGVpZ2h0KCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNWZXJ0aWNhbEdyaWRFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRUaGVtZSgpLFxuXHRcdFx0dGhpcy5jb252ZXJ0Q29sdW1uSGVhZGVyKGNvbHVtbkhlYWRlciksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0Um93Q29sb3JpbmcoKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5IZWFkZXIoY29sdW1uSGVhZGVyOiBDb2x1bW5IZWFkZXJFbnRpdHkpOiBTY2hlbWFDb2x1bW5IZWFkZXIge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ29sdW1uSGVhZGVyKGNvbHVtbkhlYWRlci5pc0hlYWRlck9uVG9wKCksIGNvbHVtbkhlYWRlci5pc0hlYWRlck9uQm90dG9tKCkpO1xuXHR9XG5cbn1cbiJdfQ==