/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUkzRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsa0JBQWtCOzs7O0lBRXpFLFlBQW9CLCtCQUFnRTtRQUNuRixLQUFLLEVBQUUsQ0FBQztRQURXLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFFcEYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBcUI7UUFFM0IsSUFBSSxLQUFLLFlBQVksY0FBYyxFQUFFOztrQkFDOUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFFaEMsSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDL0U7SUFFRixDQUFDOzs7WUFmRCxVQUFVOzs7O1lBSkYsK0JBQStCOzs7Ozs7O0lBTzNCLDZFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBPcmlnaW5TZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgT3JpZ2luU2V0RXZlbnQpIHtcblx0XHRcdGNvbnN0IG9yaWdpbiA9IGV2ZW50LmdldE9yaWdpbigpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkuc2V0T3JpZ2luKG9yaWdpbiwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==