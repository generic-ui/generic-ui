/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingEnabledArchive } from './searching-enabled.archive';
import { ConfigSearchingSetEvent } from '../config/config-searching-set.event';
var ConfigSearchingSetEventHandler = /** @class */ (function () {
    function ConfigSearchingSetEventHandler(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @return {?}
     */
    ConfigSearchingSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ConfigSearchingSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigSearchingSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.structureSearchingRepository.next(event.getAggregateId(), event.isEnabled());
        }
    };
    ConfigSearchingSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigSearchingSetEventHandler.ctorParameters = function () { return [
        { type: SearchingEnabledArchive }
    ]; };
    return ConfigSearchingSetEventHandler;
}());
export { ConfigSearchingSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9lbmFibGVkL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJL0U7SUFHQyx3Q0FBNkIsNEJBQXFEO1FBQXJELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBeUI7SUFDbEYsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sS0FBOEI7UUFFcEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDbEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFORix1QkFBdUI7O0lBd0JoQyxxQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLDhCQUE4Qjs7Ozs7O0lBRTlCLHNFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vc2VhcmNoaW5nLWVuYWJsZWQuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBDb25maWdTZWFyY2hpbmdTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxDb25maWdTZWFyY2hpbmdTZXRFdmVudD4ge1xuXHRcdHJldHVybiBDb25maWdTZWFyY2hpbmdTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdDb25maWdTZWFyY2hpbmdTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5pc0VuYWJsZWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19