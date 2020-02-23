/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../../command/search/config/structure.config-searching-set.event';
export class StructureConfigSearchingSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        super();
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigSearchingSetEvent) {
            this.structureSearchingRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: StructureSearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9lbmFibGVkL3N0cnVjdHVyZS5jb25maWctc2VhcmNoaW5nLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBSXZILE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSxrQkFBa0I7Ozs7SUFFOUUsWUFBb0IsNEJBQTBEO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBRFcsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUU5RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF1QztRQUU3QyxJQUFJLEtBQUssWUFBWSxnQ0FBZ0MsRUFBRTtZQUN0RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN6RjtJQUVGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFMRiw0QkFBNEI7Ozs7Ozs7SUFReEIsK0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1hbmQvc2VhcmNoL2NvbmZpZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=