/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructurePreparedEntitiesSetEvent } from '../../domain/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
export class StructurePreparedItemsEventHandler {
    /**
     * @param {?} structurePreparedItemsRepository
     */
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            /** @type {?} */
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.setItems(preparedItems, event.getAggregateId());
        }
    }
}
StructurePreparedItemsEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePreparedItemsEventHandler.ctorParameters = () => [
    { type: StructurePreparedItemsRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUt6RixNQUFNLE9BQU8sa0NBQWtDOzs7O0lBRTlDLFlBQW9CLGdDQUFrRTtRQUFsRSxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBQ3RGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxpQ0FBaUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsRUFBRTs7a0JBRXZELGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFFOUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOzs7WUFuQkQsVUFBVTs7OztZQUpGLGdDQUFnQzs7Ozs7OztJQU81Qiw4RUFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBwcmVwYXJlZEl0ZW1zID0gZXZlbnQuZ2V0UHJlcGFyZWRJdGVtcygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LnNldEl0ZW1zKHByZXBhcmVkSXRlbXMsIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=