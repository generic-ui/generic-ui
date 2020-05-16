/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
export class StructureFieldsInitedEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureFieldsRepository
     * @param {?} structureFieldUiConverter
     */
    constructor(structureFieldsRepository, structureFieldUiConverter) {
        super();
        this.structureFieldsRepository = structureFieldsRepository;
        this.structureFieldUiConverter = structureFieldUiConverter;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            /** @type {?} */
            const fields = this.structureFieldUiConverter.convert(event.getFields());
            this.structureFieldsRepository.next(event.getAggregateId(), fields);
        }
    }
}
StructureFieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFieldsInitedEventHandler.ctorParameters = () => [
    { type: StructureFieldUiArchive },
    { type: StructureFieldUiConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldUiConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNM0UsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGtCQUFrRDs7Ozs7SUFFeEcsWUFBb0IseUJBQWtELEVBQzNELHlCQUFvRDtRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUZXLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBeUI7UUFDM0QsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUUvRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUU5QixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTs7a0JBRXZDLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV4RSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7OztZQWpCRCxVQUFVOzs7O1lBTkYsdUJBQXVCO1lBQ3ZCLHlCQUF5Qjs7Ozs7OztJQVFyQixzRUFBMEQ7Ozs7O0lBQ25FLHNFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyOiBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuc3RydWN0dXJlRmllbGRVaUNvbnZlcnRlci5jb252ZXJ0KGV2ZW50LmdldEZpZWxkcygpKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGaWVsZHNSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZmllbGRzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=