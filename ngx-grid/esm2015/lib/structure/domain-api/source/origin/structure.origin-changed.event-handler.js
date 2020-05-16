/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
export class StructureOriginChangedEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureSourceOriginRepository) {
        super();
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('OriginSetEvent')) {
            /** @type {?} */
            const origin = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin, event.getAggregateId());
        }
    }
}
StructureOriginChangedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureOriginChangedEventHandler.ctorParameters = () => [
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXZGLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxrQkFBK0M7Ozs7SUFFdEcsWUFBb0IsK0JBQWdFO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRFcsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUVwRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFxQjtRQUUzQixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs7a0JBQ3BDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBRWhDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO0lBQ0YsQ0FBQzs7O1lBZEQsVUFBVTs7OztZQUxGLCtCQUErQjs7Ozs7OztJQVEzQiw2RUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgT3JpZ2luU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBPcmlnaW5TZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ09yaWdpblNldEV2ZW50JykpIHtcblx0XHRcdGNvbnN0IG9yaWdpbiA9IGV2ZW50LmdldE9yaWdpbigpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkuc2V0T3JpZ2luKG9yaWdpbiwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=