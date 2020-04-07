/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../../domain/structure/filter/config/structure.config-filter-set.event';
export class StructureConfigFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureFilterRepository
     */
    constructor(structureFilterRepository) {
        super();
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigFilterSetEventHandler.ctorParameters = () => [
    { type: StructureFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBSTFILE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxrQkFBa0I7Ozs7SUFFM0UsWUFBb0IseUJBQW9EO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBRFcsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUV4RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFvQztRQUUxQyxJQUFJLEtBQUssWUFBWSw2QkFBNkIsRUFBRTtZQUNuRCxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFKRix5QkFBeUI7Ozs7Ozs7SUFPckIseUVBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkuc2V0RW5hYmxlZChldmVudC5nZXRFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==