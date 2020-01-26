/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionWidthSetEvent } from './composition-width-set.event';
export class SetCompositionWidthCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} columnConverter
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        super(SetCompositionWidthCommand, CompositionWidthSetEvent, domainEventPublisher);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.columnConverter = columnConverter;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.structureId;
        /** @type {?} */
        const width = command.width;
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setWidth(width);
        this.compositionAggregateRepository.save(composition);
    }
}
SetCompositionWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: ColumnEntityFactory },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.columnConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJekUsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGNBQWM7Ozs7OztJQUVwRSxZQUE2Qiw4QkFBOEQsRUFDdkUsZUFBb0MsRUFDckQsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQywwQkFBMEIsRUFDL0Isd0JBQXdCLEVBQ3hCLG9CQUFvQixDQUFDLENBQUM7UUFMSyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtJQUt4RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFtQzs7Y0FFbkMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7O2NBRWhCLFdBQVcsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU1RSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBckJELFVBQVU7Ozs7WUFORiw4QkFBOEI7WUFDOUIsbUJBQW1CO1lBSEgsb0JBQW9COzs7Ozs7O0lBV2hDLDJFQUErRTs7Ozs7SUFDeEYsNERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNvbnZlcnRlcjogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQsXG5cdFx0XHRDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0d2lkdGggPSBjb21tYW5kLndpZHRoO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldFdpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoY29tcG9zaXRpb24pO1xuXHR9XG59XG4iXX0=