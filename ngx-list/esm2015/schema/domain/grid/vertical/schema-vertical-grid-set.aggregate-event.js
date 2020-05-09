/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
export class SchemaVerticalGridSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} verticalGrid
     */
    constructor(schemaId, verticalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaVerticalGridSetEvent(this.getAggregateId(), this.verticalGrid);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetAggregateEvent.prototype.verticalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsY0FBd0I7Ozs7O0lBRWhGLFlBQVksUUFBa0IsRUFDVixZQUFxQjtRQUN4QyxLQUFLLENBQUMsUUFBUSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEN0IsaUJBQVksR0FBWixZQUFZLENBQVM7SUFFekMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRixDQUFDO0NBQ0Q7Ozs7OztJQVBHLDJEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHR9XG59XG4iXX0=