/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../../domain/structure/filter/quick/structure.config-quick-filter-set.event';
export class StructureConfigQuickFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureQuickFilterRepository) {
        super();
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigQuickFilterSetEvent) {
            this.structureQuickFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigQuickFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigQuickFilterSetEventHandler.ctorParameters = () => [
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBS3BJLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxrQkFBK0I7Ozs7SUFFN0YsWUFBb0IsOEJBQThEO1FBQ2pGLEtBQUssRUFBRSxDQUFDO1FBRFcsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztJQUVsRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF5QztRQUUvQyxJQUFJLEtBQUssWUFBWSxrQ0FBa0MsRUFBRTtZQUN4RCxJQUFJLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMzRjtJQUVGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFMRiw4QkFBOEI7Ozs7Ozs7SUFRMUIsbUZBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2svc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=