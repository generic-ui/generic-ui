/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../command/origin/set-origin/origin-set.event';
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
        if (event instanceof OriginSetEvent) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9yZWFkL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJbEYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQjs7OztJQUV6RSxZQUFvQiwrQkFBZ0U7UUFDbkYsS0FBSyxFQUFFLENBQUM7UUFEVyxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBRXBGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXFCO1FBRTNCLElBQUksS0FBSyxZQUFZLGNBQWMsRUFBRTs7a0JBQzlCLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBRWhDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO0lBRUYsQ0FBQzs7O1lBZkQsVUFBVTs7OztZQUpGLCtCQUErQjs7Ozs7OztJQU8zQiw2RUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogT3JpZ2luU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE9yaWdpblNldEV2ZW50KSB7XG5cdFx0XHRjb25zdCBvcmlnaW4gPSBldmVudC5nZXRPcmlnaW4oKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5LnNldE9yaWdpbihvcmlnaW4sIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=