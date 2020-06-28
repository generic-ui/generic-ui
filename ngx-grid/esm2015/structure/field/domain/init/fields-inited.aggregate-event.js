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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUEyQjs7Ozs7O0lBRTFFLFlBQVksV0FBd0IsRUFDaEIsWUFBZ0MsRUFBRSxhQUFhO0lBQy9DLE1BQW9CO1FBQ3ZDLEtBQUssQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUY5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUV4QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUVaLE9BQU8sSUFBSSxpQkFBaUIsQ0FDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXJCRyxrREFBaUQ7Ozs7O0lBQ2pELDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4vZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8RmllbGQ+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZHNJbml0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuZmllbGRDb25maWdzLFxuXHRcdFx0dGhpcy5maWVsZHNcblx0XHQpO1xuXHR9XG5cblx0Z2V0RmllbGRDb25maWdzKCk6IEFycmF5PEZpZWxkQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb25maWdzO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=