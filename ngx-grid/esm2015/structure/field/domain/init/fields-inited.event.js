/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FieldsInitedEvent extends DomainEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsV0FBd0I7Ozs7OztJQUU5RCxZQUFZLFdBQXdCLEVBQ2pCLFlBQWdDLEVBQUUsYUFBYTtJQUM5QyxNQUFvQjtRQUN2QyxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFGdEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQWM7SUFFeEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNEOzs7SUFSRyx5Q0FBZ0Q7Ozs7O0lBQ2hELG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmllbGRzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19