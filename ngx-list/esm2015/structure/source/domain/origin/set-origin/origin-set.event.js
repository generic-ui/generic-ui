/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class OriginSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} origin
     */
    constructor(aggregateId, origin) {
        super(aggregateId, 'OriginSetEvent');
        this.origin = origin;
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OriginSetEvent.prototype.origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBd0I7Ozs7O0lBRTNELFlBQVksV0FBd0IsRUFDaEIsTUFBK0I7UUFDbEQsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRGxCLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBRW5ELENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBUEcsZ0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgT3JpZ2luU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdPcmlnaW5TZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cbn1cbiJdfQ==