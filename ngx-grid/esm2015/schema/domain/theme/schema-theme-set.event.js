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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLakQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQXFCOzs7OztJQUU3RCxZQUFZLFFBQWtCLEVBQ1YsS0FBa0I7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRHBCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFFdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUNEOzs7Ozs7SUFQRyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hVGhlbWVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogU2NoZW1hVGhlbWUge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lO1xuXHR9XG59XG4iXX0=