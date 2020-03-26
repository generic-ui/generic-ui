/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionCreatedEvent } from './composition-created.event';
var CreateCompositionCommandHandler = /** @class */ (function () {
    function CreateCompositionCommandHandler(compositionAggregateRepository, domainEventPublisher) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    CreateCompositionCommandHandler.prototype.getAggregateRepository = /**
     * @return {?}
     */
    function () {
        return this.compositionAggregateRepository;
    };
    /**
     * @return {?}
     */
    CreateCompositionCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CreateCompositionCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CreateCompositionCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new CompositionCreatedEvent(command.getAggregateId()));
    };
    CreateCompositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CreateCompositionCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return CreateCompositionCommandHandler;
}());
export { CreateCompositionCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1jb21wb3NpdGlvbi9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBZ0Qsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUl0RTtJQUdDLHlDQUE2Qiw4QkFBOEQsRUFDdkUsb0JBQTBDO1FBRGpDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsZ0VBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0MsT0FBTyx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCw2REFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQStCLEVBQUUsT0FBaUM7UUFDckYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBTkYsOEJBQThCO2dCQUZnQixvQkFBb0I7O0lBMEIzRSxzQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLCtCQUErQjs7Ozs7O0lBRS9CLHlFQUErRTs7Ozs7SUFDeEYsK0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciwgQWdncmVnYXRlUmVwb3NpdG9yeSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlUmVwb3NpdG9yeSgpOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5O1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cbn1cbiJdfQ==