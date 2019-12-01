/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionEventConverter } from '../composition-event.converter';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
export class CompositionChangeSortStatusCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        super(CompositionChangeSortStatusCommand);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const compositionId = command.getCompositionId();
        /** @type {?} */
        const sortParams = command.getSortParams();
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(compositionId);
        composition.changeSort(sortParams);
        this.compositionAggregateRepository.save(composition);
        /** @type {?} */
        const columns = composition.getColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
}
CompositionChangeSortStatusCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUkxRixNQUFNLE9BQU8seUNBQTBDLFNBQVEsY0FBYzs7Ozs7O0lBRTVFLFlBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEMsRUFDNUMseUJBQW9EO1FBQzlELEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBSGQsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFFL0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMkM7O2NBRTNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O2NBQy9DLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxFQUFFOztjQUUvQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFOUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztjQUVoRCxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRTtRQUV4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7O1lBdkJELFVBQVU7Ozs7WUFORiw4QkFBOEI7WUFGZCxvQkFBb0I7WUFHcEMseUJBQXlCOzs7Ozs7O0lBUXJCLG1GQUErRTs7Ozs7SUFDeEYseUVBQW9EOzs7OztJQUNwRCw4RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRzb3J0UGFyYW1zID0gY29tbWFuZC5nZXRTb3J0UGFyYW1zKCk7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoY29tcG9zaXRpb25JZCk7XG5cblx0XHRjb21wb3NpdGlvbi5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cblx0XHRjb25zdCBjb2x1bW5zID0gY29tcG9zaXRpb24uZ2V0Q29sdW1ucygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudChjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxufVxuIl19