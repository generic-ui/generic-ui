/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModelRepository } from './read/field.read-model-repository';
var FieldWarehouse = /** @class */ (function () {
    function FieldWarehouse(fieldReadModelRepository) {
        this.fieldReadModelRepository = fieldReadModelRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FieldWarehouse.prototype.onFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.fieldReadModelRepository.on(structureId);
    };
    FieldWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldWarehouse.ctorParameters = function () { return [
        { type: FieldReadModelRepository }
    ]; };
    return FieldWarehouse;
}());
export { FieldWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldWarehouse.prototype.fieldReadModelRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLOUU7SUFHQyx3QkFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxpQ0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBTEYsd0JBQXdCOztJQWdCakMscUJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxjQUFjOzs7Ozs7SUFFZCxrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWVsZC5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeTogRmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZpZWxkcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PEZpZWxkUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXG59XG4iXX0=