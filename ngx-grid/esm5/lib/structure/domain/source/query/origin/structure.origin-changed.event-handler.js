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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9xdWVyeS9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUlsRjtJQUN3RCw4REFBa0I7SUFFekUsNENBQW9CLCtCQUFnRTtRQUFwRixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFcEYsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8sS0FBcUI7UUFFM0IsSUFBSSxLQUFLLFlBQVksY0FBYyxFQUFFOztnQkFDOUIsUUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFFaEMsSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxRQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDL0U7SUFFRixDQUFDOztnQkFmRCxVQUFVOzs7O2dCQUxGLCtCQUErQjs7SUFxQnhDLHlDQUFDO0NBQUEsQUFoQkQsQ0FDd0Qsa0JBQWtCLEdBZXpFO1NBZlksa0NBQWtDOzs7Ozs7SUFFbEMsNkVBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogT3JpZ2luU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE9yaWdpblNldEV2ZW50KSB7XG5cdFx0XHRjb25zdCBvcmlnaW4gPSBldmVudC5nZXRPcmlnaW4oKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5LnNldE9yaWdpbihvcmlnaW4sIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=