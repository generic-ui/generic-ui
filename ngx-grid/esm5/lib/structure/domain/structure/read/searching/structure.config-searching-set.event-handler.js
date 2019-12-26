/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../command/search/config/structure.config-searching-set.event';
var StructureConfigSearchingSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigSearchingSetEventHandler, _super);
    function StructureConfigSearchingSetEventHandler(structureSearchingRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchingRepository = structureSearchingRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigSearchingSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigSearchingSetEvent) {
            this.structureSearchingRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigSearchingSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigSearchingSetEventHandler.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureConfigSearchingSetEventHandler;
}(DomainEventHandler));
export { StructureConfigSearchingSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFHcEg7SUFDNkQsbUVBQWtCO0lBRTlFLGlEQUFvQiw0QkFBMEQ7UUFBOUUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBRTlFLENBQUM7Ozs7O0lBRUQsd0RBQU07Ozs7SUFBTixVQUFPLEtBQXVDO1FBRTdDLElBQUksS0FBSyxZQUFZLGdDQUFnQyxFQUFFO1lBQ3RELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3pGO0lBRUYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBb0JyQyw4Q0FBQztDQUFBLEFBZkQsQ0FDNkQsa0JBQWtCLEdBYzlFO1NBZFksdUNBQXVDOzs7Ozs7SUFFdkMsK0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvc2VhcmNoL2NvbmZpZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=