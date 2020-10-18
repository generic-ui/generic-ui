/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
var FilterAddedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterAddedEvent, _super);
    function FilterAddedEvent(aggregateId, fieldId, filterTypeId, value) {
        var _this = _super.call(this, aggregateId, 'FilterAddedEvent') || this;
        _this.fieldId = fieldId;
        _this.filterTypeId = filterTypeId;
        _this.value = value;
        return _this;
    }
    return FilterAddedEvent;
}(StructureDomainEvent));
export { FilterAddedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.filterTypeId;
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR3pGO0lBQXNDLDRDQUFvQjtJQUV6RCwwQkFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixZQUEwQixFQUMxQixLQUFVO1FBSDlCLFlBSUMsa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDLFNBQ3RDO1FBSm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsa0JBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBSyxHQUFMLEtBQUssQ0FBSzs7SUFFOUIsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQVRELENBQXNDLG9CQUFvQixHQVN6RDs7Ozs7OztJQU5HLG1DQUFpQzs7Ozs7SUFDakMsd0NBQTJDOzs7OztJQUMzQyxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJBZGRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBhbnkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpbHRlckFkZGVkRXZlbnQnKTtcblx0fVxuXG59XG4iXX0=