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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSzlFO0lBR0Msd0JBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3RFLENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUxGLHdCQUF3Qjs7SUFnQmpDLHFCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksY0FBYzs7Ozs7O0lBRWQsa0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvZmllbGQucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZFdhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnk6IEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25GaWVsZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxGaWVsZFJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblxufVxuIl19