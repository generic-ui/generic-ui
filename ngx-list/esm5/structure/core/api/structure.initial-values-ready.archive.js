/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateArchive, hermesFilter, hermesTake } from '@generic-ui/hermes';
import { Injectable } from '@angular/core';
var StructureInitialValuesReadyArchive = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInitialValuesReadyArchive, _super);
    function StructureInitialValuesReadyArchive() {
        return _super.call(this, StructureInitialValuesReadyArchive.default) || this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    StructureInitialValuesReadyArchive.prototype.on = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return _super.prototype.on.call(this, aggregateId)
            .pipe(hermesFilter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v; })));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    StructureInitialValuesReadyArchive.prototype.once = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.on(aggregateId)
            .pipe(hermesTake(1));
    };
    StructureInitialValuesReadyArchive.default = false;
    StructureInitialValuesReadyArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureInitialValuesReadyArchive.ctorParameters = function () { return []; };
    return StructureInitialValuesReadyArchive;
}(AggregateArchive));
export { StructureInitialValuesReadyArchive };
if (false) {
    /** @type {?} */
    StructureInitialValuesReadyArchive.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZSxZQUFZLEVBQW9CLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFDd0QsOERBQXlCO0lBSWhGO2VBQ0Msa0JBQU0sa0NBQWtDLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsK0NBQUU7Ozs7SUFBRixVQUFHLFdBQXdCO1FBQzFCLE9BQU8saUJBQU0sRUFBRSxZQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBQyxDQUNwQixDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxpREFBSTs7OztJQUFKLFVBQUssV0FBd0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDO0lBbEJlLDBDQUFPLEdBQUcsS0FBSyxDQUFDOztnQkFIaEMsVUFBVTs7OztJQXVCWCx5Q0FBQztDQUFBLEFBdkJELENBQ3dELGdCQUFnQixHQXNCdkU7U0F0Qlksa0NBQWtDOzs7SUFFOUMsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSwgQWdncmVnYXRlSWQsIGhlcm1lc0ZpbHRlciwgSGVybWVzT2JzZXJ2YWJsZSwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxib29sZWFuPiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IGRlZmF1bHQgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLmRlZmF1bHQpO1xuXHR9XG5cblx0b24oYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uKGFnZ3JlZ2F0ZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzRmlsdGVyKHYgPT4gdilcblx0XHRcdFx0XHQpO1xuXHR9XG5cblx0b25jZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbihhZ2dyZWdhdGVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==