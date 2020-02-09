/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../command/origin/set-origin/origin-set.event';
var StructureOriginChangedEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureOriginChangedEventHandler, _super);
    function StructureOriginChangedEventHandler(structureSourceOriginRepository) {
        var _this = _super.call(this) || this;
        _this.structureSourceOriginRepository = structureSourceOriginRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureOriginChangedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof OriginSetEvent) {
            /** @type {?} */
            var origin_1 = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin_1, event.getAggregateId());
        }
    };
    StructureOriginChangedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureOriginChangedEventHandler.ctorParameters = function () { return [
        { type: StructureSourceOriginRepository }
    ]; };
    return StructureOriginChangedEventHandler;
}(DomainEventHandler));
export { StructureOriginChangedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9yZWFkL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xGO0lBQ3dELDhEQUFrQjtJQUV6RSw0Q0FBb0IsK0JBQWdFO1FBQXBGLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDOztJQUVwRixDQUFDOzs7OztJQUVELG1EQUFNOzs7O0lBQU4sVUFBTyxLQUFxQjtRQUUzQixJQUFJLEtBQUssWUFBWSxjQUFjLEVBQUU7O2dCQUM5QixRQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUVoQyxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLFFBQU0sRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMvRTtJQUVGLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBSkYsK0JBQStCOztJQW9CeEMseUNBQUM7Q0FBQSxBQWhCRCxDQUN3RCxrQkFBa0IsR0FlekU7U0FmWSxrQ0FBa0M7Ozs7OztJQUVsQyw2RUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogT3JpZ2luU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE9yaWdpblNldEV2ZW50KSB7XG5cdFx0XHRjb25zdCBvcmlnaW4gPSBldmVudC5nZXRPcmlnaW4oKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5LnNldE9yaWdpbihvcmlnaW4sIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=