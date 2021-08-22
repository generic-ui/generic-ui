/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var AllFiltersRemovedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(AllFiltersRemovedAggregateEvent, _super);
    function AllFiltersRemovedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'FilterAddedEvent') || this;
    }
    /**
     * @return {?}
     */
    AllFiltersRemovedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new ActiveFiltersSetEvent(this.getAggregateId(), []);
    };
    return AllFiltersRemovedAggregateEvent;
}(StructureAggregateEvent));
export { AllFiltersRemovedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWZpbHRlcnMtcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vY29yZS9yZW1vdmUtYWxsL2FsbC1maWx0ZXJzLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHL0Y7SUFBcUQsMkRBQXVCO0lBRTNFLHlDQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsdURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHFCQUFxQixDQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLEVBQUUsQ0FDRixDQUFDO0lBQ0gsQ0FBQztJQUVGLHNDQUFDO0FBQUQsQ0FBQyxBQWJELENBQXFELHVCQUF1QixHQWEzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWx0ZXJBZGRlZEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRbXVxuXHRcdCk7XG5cdH1cblxufVxuIl19