/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaReadModelRoot } from './schema.read-model-root';
var SchemaReadModelRootConverter = /** @class */ (function () {
    function SchemaReadModelRootConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SchemaReadModelRootConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return new SchemaReadModelRoot(aggregate.getId().toReadModelRootId(), aggregate.getTheme(), aggregate.isVerticalGridEnabled(), aggregate.isHorizontalGridEnabled(), aggregate.getRowColoring());
    };
    SchemaReadModelRootConverter.decorators = [
        { type: Injectable }
    ];
    return SchemaReadModelRootConverter;
}());
export { SchemaReadModelRootConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcvRDtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFYQSw4Q0FBTzs7OztJQUFQLFVBQVEsU0FBMEI7UUFFakMsT0FBTyxJQUFJLG1CQUFtQixDQUM3QixTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFDckMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUNwQixTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFDakMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEVBQ25DLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FDMUIsQ0FBQztJQUNILENBQUM7O2dCQVpELFVBQVU7O0lBY1gsbUNBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlKTogU2NoZW1hUmVhZE1vZGVsUm9vdCB7XG5cblx0XHRyZXR1cm4gbmV3IFNjaGVtYVJlYWRNb2RlbFJvb3QoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKS50b1JlYWRNb2RlbFJvb3RJZCgpLFxuXHRcdFx0YWdncmVnYXRlLmdldFRoZW1lKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNWZXJ0aWNhbEdyaWRFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRSb3dDb2xvcmluZygpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=