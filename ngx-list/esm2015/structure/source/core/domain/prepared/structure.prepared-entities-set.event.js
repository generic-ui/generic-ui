/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} preparedItems
     */
    constructor(aggregateId, preparedItems) {
        super(aggregateId, 'StructurePreparedEntitiesSetEvent');
        this.preparedItems = preparedItems;
    }
    /**
     * @return {?}
     */
    getPreparedItems() {
        return this.preparedItems;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixNQUFNLE9BQU8saUNBQWtDLFNBQVEsb0JBQW9COzs7OztJQUUxRSxZQUFZLFdBQXdCLEVBQ2hCLGFBQXNDO1FBQ3pELEtBQUssQ0FBQyxXQUFXLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQURyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7SUFFMUQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBQ0Q7Ozs7OztJQVBHLDBEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHByZXBhcmVkSXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFByZXBhcmVkSXRlbXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkSXRlbXM7XG5cdH1cbn1cbiJdfQ==