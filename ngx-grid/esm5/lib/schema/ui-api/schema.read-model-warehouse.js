/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { SchemaReadModelRootRepository } from '../read/schema.read-model-root-repository';
import { schemaGlobalId } from './schema.global-id';
var SchemaReadModelWarehouse = /** @class */ (function () {
    function SchemaReadModelWarehouse(schemaReadModelRootRepository) {
        this.schemaReadModelRootRepository = schemaReadModelRootRepository;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaReadModelWarehouse.prototype.onSingleTheme = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaReadModelRootRepository
            .on(schemaId)
            .pipe(take(1), map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getTheme();
        })));
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaReadModelWarehouse.prototype.onCssClasses = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaReadModelRootRepository
            .on(schemaId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getCssClasses();
        })));
    };
    SchemaReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaReadModelWarehouse.ctorParameters = function () { return [
        { type: SchemaReadModelRootRepository }
    ]; };
    return SchemaReadModelWarehouse;
}());
export { SchemaReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelWarehouse.prototype.schemaReadModelRootRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL3VpLWFwaS9zY2hlbWEucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPcEQ7SUFHQyxrQ0FBb0IsNkJBQTREO1FBQTVELGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBK0I7SUFDaEYsQ0FBQzs7Ozs7SUFFRCxnREFBYTs7OztJQUFiLFVBQWMsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDN0QsT0FBTyxJQUFJLENBQUMsNkJBQTZCO2FBQ25DLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDWixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTJCO1lBQy9CLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUM1RCxPQUFPLElBQUksQ0FBQyw2QkFBNkI7YUFDbkMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNaLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxNQUEyQjtZQUMvQixPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBUkYsNkJBQTZCOztJQW1DdEMsK0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSx3QkFBd0I7Ozs7OztJQUV4QixpRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuL3NjaGVtYS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5OiBTY2hlbWFSZWFkTW9kZWxSb290UmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TaW5nbGVUaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpLFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hOiBTY2hlbWFSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldFRoZW1lKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ3NzQ2xhc3NlcyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRDc3NDbGFzc2VzKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=