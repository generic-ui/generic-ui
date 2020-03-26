/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
import { StructureSearchPhraseSetDomainEvent } from '../../../command/search/set-phrase/structure.search-phrase-set.domain-event';
var StructureSearchPhraseSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchPhraseSetEventHandler, _super);
    function StructureSearchPhraseSetEventHandler(structureSearchPhraseRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureSearchPhraseSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureSearchPhraseSetDomainEvent) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    };
    StructureSearchPhraseSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchPhraseSetEventHandler.ctorParameters = function () { return [
        { type: StructureSearchPhraseRepository }
    ]; };
    return StructureSearchPhraseSetEventHandler;
}(DomainEventHandler));
export { StructureSearchPhraseSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBR2xJO0lBQzBELGdFQUFrQjtJQUUzRSw4Q0FBb0IsK0JBQWdFO1FBQXBGLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDOztJQUVwRixDQUFDOzs7OztJQUVELHFEQUFNOzs7O0lBQU4sVUFBTyxLQUEwQztRQUVoRCxJQUFJLEtBQUssWUFBWSxtQ0FBbUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMxRjtJQUVGLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBSkYsK0JBQStCOztJQW1CeEMsMkNBQUM7Q0FBQSxBQWZELENBQzBELGtCQUFrQixHQWMzRTtTQWRZLG9DQUFvQzs7Ozs7O0lBRXBDLCtFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnNlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1hbmQvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkuc2V0UGhyYXNlKGV2ZW50LmdldFBocmFzZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=