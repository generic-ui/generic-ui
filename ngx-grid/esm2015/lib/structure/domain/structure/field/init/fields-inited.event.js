/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FieldsInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} columns
     * @param {?} fields
     */
    constructor(aggregateId, compositionId, columns, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.compositionId = compositionId;
        this.columns = columns;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
}
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.compositionId;
    /** @type {?} */
    FieldsInitedEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUWpELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxXQUFXOzs7Ozs7O0lBRWpELFlBQVksV0FBd0IsRUFDakIsYUFBNEIsRUFDNUIsT0FBNEIsRUFBRSxhQUFhO0lBQzFDLE1BQXdCO1FBQzNDLEtBQUssQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUh0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUU1QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0Q7OztJQVRHLDBDQUE0Qzs7SUFDNUMsb0NBQTRDOzs7OztJQUM1QyxtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpZWxkc0luaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8VHlwZUZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=