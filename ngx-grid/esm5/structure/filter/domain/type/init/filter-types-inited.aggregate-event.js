/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { FilterTypesInitedEvent } from './filter-types-inited.event';
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
}(AggregateEvent));
export { FilterTypesInitedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypesInitedAggregateEvent.prototype.filterTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZXMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdyRTtJQUFxRCwyREFBMkI7SUFFL0UseUNBQVksV0FBd0IsRUFDaEIsV0FBb0Q7UUFEeEUsWUFFQyxrQkFBTSxXQUFXLEVBQUUsaUNBQWlDLENBQUMsU0FDckQ7UUFGbUIsaUJBQVcsR0FBWCxXQUFXLENBQXlDOztJQUV4RSxDQUFDOzs7O0lBRUQsdURBQWE7OztJQUFiO1FBRUMsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsd0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFDRixzQ0FBQztBQUFELENBQUMsQUFsQkQsQ0FBcUQsY0FBYyxHQWtCbEU7Ozs7Ozs7SUFmRyxzREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZXNJbml0ZWRFdmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlczogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdGaWx0ZXJUeXBlc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0XHRyZXR1cm4gbmV3IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLmZpbHRlclR5cGVzXG5cdFx0KTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGVzKCk6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZXM7XG5cdH1cbn1cbiJdfQ==