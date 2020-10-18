/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class FieldsInitedEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} fieldConfigs
     * @param {?} fields
     */
    constructor(aggregateId, fieldConfigs, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.fieldConfigs = fieldConfigs;
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
    FieldsInitedEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHdEYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG9CQUFvQjs7Ozs7O0lBRTFELFlBQVksV0FBd0IsRUFDakIsWUFBZ0MsRUFBRSxhQUFhO0lBQzlDLE1BQW9CO1FBQ3ZDLEtBQUssQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUZ0QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUV4QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0Q7OztJQVJHLHlDQUFnRDs7Ozs7SUFDaEQsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmllbGRzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19