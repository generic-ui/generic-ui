/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
import { FieldsInitedEvent } from '../../../domain/structure/command/field/init/fields-inited.event';
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
        if (event instanceof FieldsInitedEvent) {
            /** @type {?} */
            const fields = this.structureFieldUiConverter.convert(event.getFields());
            this.structureFieldsRepository.set(event.getAggregateId(), fields);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFJckcsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGtCQUFrQjs7Ozs7SUFFeEUsWUFBb0IseUJBQWtELEVBQzNELHlCQUFvRDtRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUZXLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBeUI7UUFDM0QsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUUvRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUU5QixJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7a0JBRWpDLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV4RSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRTtJQUVGLENBQUM7OztZQWpCRCxVQUFVOzs7O1lBTEYsdUJBQXVCO1lBQ3ZCLHlCQUF5Qjs7Ozs7OztJQU9yQixzRUFBMEQ7Ozs7O0lBQ25FLHNFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXI6IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRmllbGRzSW5pdGVkRXZlbnQpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnkuc2V0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGZpZWxkcyk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19