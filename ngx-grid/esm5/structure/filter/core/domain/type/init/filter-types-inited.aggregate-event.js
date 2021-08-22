/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FilterTypesInitedEvent } from './filter-types-inited.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var FilterTypesInitedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterTypesInitedAggregateEvent, _super);
    function FilterTypesInitedAggregateEvent(structureId, filterTypes) {
        var _this = _super.call(this, structureId, 'FilterTypesInitedAggregateEvent') || this;
        _this.filterTypes = filterTypes;
        return _this;
    }
    /**
     * @return {?}
     */
    FilterTypesInitedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new FilterTypesInitedEvent(this.getAggregateId(), this.filterTypes);
    };
    /**
     * @return {?}
     */
    FilterTypesInitedAggregateEvent.prototype.getFilterTypes = /**
     * @return {?}
     */
    function () {
        return this.filterTypes;
    };
    return FilterTypesInitedAggregateEvent;
}(StructureAggregateEvent));
export { FilterTypesInitedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypesInitedAggregateEvent.prototype.filterTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHL0Y7SUFBcUQsMkRBQXVCO0lBRTNFLHlDQUFZLFdBQXdCLEVBQ2hCLFdBQW9EO1FBRHhFLFlBRUMsa0JBQU0sV0FBVyxFQUFFLGlDQUFpQyxDQUFDLFNBQ3JEO1FBRm1CLGlCQUFXLEdBQVgsV0FBVyxDQUF5Qzs7SUFFeEUsQ0FBQzs7OztJQUVELHVEQUFhOzs7SUFBYjtRQUVDLE9BQU8sSUFBSSxzQkFBc0IsQ0FDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsV0FBVyxDQUNoQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELHdEQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBQ0Ysc0NBQUM7QUFBRCxDQUFDLEFBbEJELENBQXFELHVCQUF1QixHQWtCM0U7Ozs7Ozs7SUFmRyxzREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZXM6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+Pikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdFx0cmV0dXJuIG5ldyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5maWx0ZXJUeXBlc1xuXHRcdCk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVzO1xuXHR9XG59XG4iXX0=