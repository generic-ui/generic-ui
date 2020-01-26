/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
export class CompositionMoveRightColumnCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        super(CompositionMoveRightColumnCommand);
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
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const columnId = command.getColumnId();
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.moveRight(columnId);
        this.compositionAggregateRepository.save(composition);
        this.publishEvents(composition, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionMoveRightColumnCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionMoveRightColumnCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveRightColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBMkIsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRXBILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzVGLE1BQU0sT0FBTyx3Q0FBeUMsU0FBUSxjQUFjOzs7Ozs7SUFFM0UsWUFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFDOUQsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFIYixtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUUvRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUEwQzs7Y0FFMUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O2NBQzNDLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBaUMsRUFBRSxPQUFnQjs7Y0FFbEUsTUFBTSxHQUFHLG1CQUFBLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBeUI7O2NBRXpELFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVuRSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFMRiw4QkFBOEI7WUFGVyxvQkFBb0I7WUFHN0QseUJBQXlCOzs7Ozs7O0lBT3JCLGtGQUErRTs7Ozs7SUFDeEYsd0VBQW9EOzs7OztJQUNwRCw2RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi1ldmVudC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb2x1bW5JZCA9IGNvbW1hbmQuZ2V0Q29sdW1uSWQoKTtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb21wb3NpdGlvbi5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb24sIGNvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gY29tcG9zaXRpb24uZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ+O1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoZXZlbnRzKTtcblxuXHRcdGlmIChkb21haW5FdmVudHMgJiYgZG9tYWluRXZlbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHRcdH1cblx0fVxufVxuIl19