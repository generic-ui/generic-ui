/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SortOrderSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} directions
     */
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, 'SortOrderSetEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getDirections() {
        return this.directions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsV0FBVzs7Ozs7O0lBRWpELFlBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsVUFBMkQ7UUFDOUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRnJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWlEO0lBRS9FLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztDQUNEOzs7Ozs7SUFaRywwQ0FBNkM7Ozs7O0lBQzdDLHVDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuXG5leHBvcnQgY2xhc3MgU29ydE9yZGVyU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uczogQXJyYXk8eyBmaWVsZElkOiBGaWVsZElkLCBkaXJlY3Rpb246IGJvb2xlYW4gfT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NvcnRPcmRlclNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRnZXREaXJlY3Rpb25zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9ucztcblx0fVxufVxuIl19