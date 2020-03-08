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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFdBQVc7Ozs7Ozs7SUFFakQsWUFBWSxXQUF3QixFQUNqQixhQUE0QixFQUM1QixPQUE0QixFQUFFLGFBQWE7SUFDMUMsTUFBb0I7UUFDdkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBSHRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFFeEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNEOzs7SUFURywwQ0FBNEM7O0lBQzVDLG9DQUE0Qzs7Ozs7SUFDNUMsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZGF0YS10eXBlL2ZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmllbGRzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19