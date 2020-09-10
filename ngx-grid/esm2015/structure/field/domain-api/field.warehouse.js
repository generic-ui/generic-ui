/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModelRepository } from './read/field.read-model-repository';
export class FieldWarehouse {
    /**
     * @param {?} fieldReadModelRepository
     */
    constructor(fieldReadModelRepository) {
        this.fieldReadModelRepository = fieldReadModelRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFields(structureId) {
        return this.fieldReadModelRepository.on(structureId);
    }
}
FieldWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldWarehouse.ctorParameters = () => [
    { type: FieldReadModelRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldWarehouse.prototype.fieldReadModelRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNOUUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFFMUIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQVJELFVBQVU7Ozs7WUFMRix3QkFBd0I7Ozs7Ozs7SUFRcEIsa0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvZmllbGQucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZFdhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnk6IEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25GaWVsZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxGaWVsZFJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblxufVxuIl19