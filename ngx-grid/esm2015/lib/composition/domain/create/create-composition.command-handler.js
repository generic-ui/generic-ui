/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionCreatedEvent } from './composition-created.event';
export class CreateCompositionCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, domainEventPublisher) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.compositionAggregateRepository;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CreateCompositionCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
    }
}
CreateCompositionCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CreateCompositionCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateCompositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQXNELG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNdEUsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFFM0MsWUFBNkIsOEJBQThELEVBQ3ZFLG9CQUEwQztRQURqQyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBK0IsRUFBRSxPQUFpQztRQUNyRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUFqQkQsVUFBVTs7OztZQVBGLDhCQUE4QjtZQUZzQixvQkFBb0I7Ozs7Ozs7SUFZcEUseUVBQStFOzs7OztJQUN4RiwrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnksIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlUmVwb3NpdG9yeSgpOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PENvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5O1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cbn1cbiJdfQ==