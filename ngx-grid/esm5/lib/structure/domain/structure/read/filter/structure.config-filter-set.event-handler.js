/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../command/filter/config/structure.config-filter-set.event';
var StructureConfigFilterSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigFilterSetEventHandler, _super);
    function StructureConfigFilterSetEventHandler(structureFilterRepository) {
        var _this = _super.call(this) || this;
        _this.structureFilterRepository = structureFilterRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureFilterRepository }
    ]; };
    return StructureConfigFilterSetEventHandler;
}(DomainEventHandler));
export { StructureConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHOUc7SUFDMEQsZ0VBQWtCO0lBRTNFLDhDQUFvQix5QkFBb0Q7UUFBeEUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7O0lBRXhFLENBQUM7Ozs7O0lBRUQscURBQU07Ozs7SUFBTixVQUFPLEtBQW9DO1FBRTFDLElBQUksS0FBSyxZQUFZLDZCQUE2QixFQUFFO1lBQ25ELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO0lBRUYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFKRix5QkFBeUI7O0lBbUJsQywyQ0FBQztDQUFBLEFBZkQsQ0FDMEQsa0JBQWtCLEdBYzNFO1NBZFksb0NBQW9DOzs7Ozs7SUFFcEMseUVBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkuc2V0RW5hYmxlZChldmVudC5nZXRFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==