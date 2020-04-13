/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class RowColoringSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} rowColoring
     */
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetEvent.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFxQjs7Ozs7SUFFN0QsWUFBWSxRQUFrQixFQUNWLFdBQThCO1FBQ2pELEtBQUssQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFFbEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztDQUNEOzs7Ozs7SUFQRywwQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cblxuZXhwb3J0IGNsYXNzIFJvd0NvbG9yaW5nU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxufVxuIl19