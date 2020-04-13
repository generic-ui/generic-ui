/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { FieldsInitedEvent } from './fields-inited.event';
export class FieldsInitedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} columns
     * @param {?} fields
     */
    constructor(structureId, columns, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.columns = columns;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        throw new Error('COMPOSITION ID IS MISSING');
        return new FieldsInitedEvent(this.getAggregateId(), null, this.columns, this.fields);
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
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
    FieldsInitedAggregateEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFLakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQTJCOzs7Ozs7SUFFMUUsWUFBWSxXQUF3QixFQUNoQixPQUE0QixFQUFFLGFBQWE7SUFDM0MsTUFBd0I7UUFDM0MsS0FBSyxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRjlCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTVDLENBQUM7Ozs7SUFFRCxhQUFhO1FBRVosTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sSUFBSSxpQkFBaUIsQ0FDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXhCRyw2Q0FBNkM7Ozs7O0lBQzdDLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4vZmllbGRzLWluaXRlZC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRcdHRocm93IG5ldyBFcnJvcignQ09NUE9TSVRJT04gSUQgSVMgTUlTU0lORycpO1xuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZHNJbml0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdG51bGwsXG5cdFx0XHR0aGlzLmNvbHVtbnMsXG5cdFx0XHR0aGlzLmZpZWxkc1xuXHRcdCk7XG5cdH1cblxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8VHlwZUZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=