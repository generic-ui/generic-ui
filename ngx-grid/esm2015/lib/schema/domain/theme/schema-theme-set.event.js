/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SchemaThemeSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetEvent');
        this.theme = theme;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetEvent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS2pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFxQjs7Ozs7SUFFN0QsWUFBWSxRQUFrQixFQUNWLEtBQWtCO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQURwQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBRXRDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FDRDs7Ozs7O0lBUEcsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4vc2NoZW1hLXRoZW1lJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZTogU2NoZW1hVGhlbWUpIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxufVxuIl19