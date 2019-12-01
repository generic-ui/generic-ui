/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../command/search/config/structure.config-searching-set.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zZWFyY2hpbmcvc3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFJcEgsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLGtCQUFrQjs7OztJQUU5RSxZQUFvQiw0QkFBMEQ7UUFDN0UsS0FBSyxFQUFFLENBQUM7UUFEVyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBRTlFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXVDO1FBRTdDLElBQUksS0FBSyxZQUFZLGdDQUFnQyxFQUFFO1lBQ3RELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3pGO0lBRUYsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQUxGLDRCQUE0Qjs7Ozs7OztJQVF4QiwrRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9zZWFyY2gvY29uZmlnL3N0cnVjdHVyZS5jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkuc2V0RW5hYmxlZChldmVudC5nZXRFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==