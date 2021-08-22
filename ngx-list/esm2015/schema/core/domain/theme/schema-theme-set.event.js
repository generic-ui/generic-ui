/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaDomainEvent } from '../schema.domain-event';
export class SchemaThemeSetEvent extends SchemaDomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, theme, 'SchemaThemeSetEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBaUI7Ozs7O0lBRXpELFlBQVksUUFBa0IsRUFDVixLQUFrQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRDNCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFFdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUNEOzs7Ozs7SUFQRyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluRXZlbnQgfSBmcm9tICcuLi9zY2hlbWEuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0RXZlbnQgZXh0ZW5kcyBTY2hlbWFEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCB0aGVtZSwgJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxufVxuIl19