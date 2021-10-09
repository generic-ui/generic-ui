/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingEnabledArchive } from './searching-enabled.archive';
import { ConfigSearchingSetEvent } from '../config/config-searching-set.event';
export class ConfigSearchingSetEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ConfigSearchingSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.structureSearchingRepository.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
ConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: SearchingEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9lbmFibGVkL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFLL0UsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUUxQyxZQUE2Qiw0QkFBcUQ7UUFBckQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUF5QjtJQUNsRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBOEI7UUFFcEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDbEY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQU5GLHVCQUF1Qjs7Ozs7OztJQVNuQixzRUFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3NlYXJjaGluZy1lbmFibGVkLmFyY2hpdmUnO1xuXG5pbXBvcnQgeyBDb25maWdTZWFyY2hpbmdTZXRFdmVudCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnk6IFNlYXJjaGluZ0VuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Q29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuaXNFbmFibGVkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==