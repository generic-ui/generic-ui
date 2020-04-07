/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPcEQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQTJCOzs7Ozs7SUFFMUUsWUFBWSxXQUF3QixFQUNoQixPQUE0QixFQUFFLGFBQWE7SUFDM0MsTUFBd0I7UUFDM0MsS0FBSyxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRjlCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBWkcsNkNBQTZDOzs7OztJQUM3Qyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxUeXBlRmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==