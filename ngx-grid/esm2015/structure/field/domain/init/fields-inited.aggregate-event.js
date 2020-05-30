/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { FieldsInitedEvent } from './fields-inited.event';
export class FieldsInitedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} fieldConfigs
     * @param {?} fields
     */
    constructor(structureId, fieldConfigs, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    }
    /**
     * @return {?}
     */
    getFieldConfigs() {
        return this.fieldConfigs;
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUEyQjs7Ozs7O0lBRTFFLFlBQVksV0FBd0IsRUFDaEIsWUFBZ0MsRUFBRSxhQUFhO0lBQy9DLE1BQXdCO1FBQzNDLEtBQUssQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUY5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFFNUMsQ0FBQzs7OztJQUVELGFBQWE7UUFFWixPQUFPLElBQUksaUJBQWlCLENBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNEOzs7Ozs7SUFyQkcsa0RBQWlEOzs7OztJQUNqRCw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4vZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRzSW5pdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLmZpZWxkQ29uZmlncyxcblx0XHRcdHRoaXMuZmllbGRzXG5cdFx0KTtcblx0fVxuXG5cdGdldEZpZWxkQ29uZmlncygpOiBBcnJheTxGaWVsZENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkQ29uZmlncztcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxUeXBlRmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==