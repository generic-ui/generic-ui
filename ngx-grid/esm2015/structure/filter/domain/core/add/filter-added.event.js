/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FilterAddedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     */
    constructor(aggregateId, fieldId, filterTypeId, value) {
        super(aggregateId, 'FilterAddedEvent');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsV0FBd0I7Ozs7Ozs7SUFFN0QsWUFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixZQUEwQixFQUMxQixLQUFVO1FBQzdCLEtBQUssQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUhwQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQUs7SUFFOUIsQ0FBQztDQUVEOzs7Ozs7SUFORyxtQ0FBaUM7Ozs7O0lBQ2pDLHdDQUEyQzs7Ozs7SUFDM0MsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckFkZGVkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBhbnkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpbHRlckFkZGVkRXZlbnQnKTtcblx0fVxuXG59XG4iXX0=