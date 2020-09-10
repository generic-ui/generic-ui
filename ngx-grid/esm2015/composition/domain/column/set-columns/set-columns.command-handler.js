/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetColumnsCommand } from './set-columns.command';
export class SetColumnsCommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetColumnsCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
        /** @type {?} */
        const setColumnsParams = command.getParams();
        aggregate.setColumns(setColumnsParams);
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
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetColumnsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetColumnsCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQXdELG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBRXBDLFlBQTZCLDhCQUE4RCxFQUN2RSxvQkFBMEMsRUFDMUMseUJBQW9EO1FBRjNDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3hFLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUErQixFQUFFLE9BQWdCO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUErQixFQUFFLE9BQTBCOztjQUVwRSxnQkFBZ0IsR0FBd0IsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVqRSxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUFpQyxFQUFFLE9BQWdCOztjQUVsRSxNQUFNLEdBQUcsbUJBQUEsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUF3Qzs7Y0FFeEUsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBOUJELFVBQVU7Ozs7WUFURiw4QkFBOEI7WUFGd0Isb0JBQW9CO1lBRzFFLHlCQUF5Qjs7Ozs7OztJQVdyQixrRUFBK0U7Ozs7O0lBQ3hGLHdEQUEyRDs7Ozs7SUFDM0QsNkRBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBTZXRDb2x1bW5zQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbHVtbnMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbHVtbnNDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb2x1bW5zQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb2x1bW5zQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbHVtbnNDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZXRDb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gY29tbWFuZC5nZXRQYXJhbXMoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5zZXRDb2x1bW5zKHNldENvbHVtbnNQYXJhbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gY29tcG9zaXRpb24uZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+O1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoZXZlbnRzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHR9XG59XG4iXX0=