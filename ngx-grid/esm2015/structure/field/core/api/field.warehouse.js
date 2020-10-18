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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTTlFLE1BQU0sT0FBTyxjQUFjOzs7O0lBRTFCLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3RFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBTEYsd0JBQXdCOzs7Ozs7O0lBUXBCLGtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4vcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5OiBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uRmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8RmllbGRSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cbn1cbiJdfQ==