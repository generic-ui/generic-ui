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
    CreateCompositionCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CreateCompositionCommand;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBbUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUt0RTtJQUdDLHlDQUE2Qiw4QkFBOEQsRUFDdkUsb0JBQTBDO1FBRGpDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0MsT0FBTyx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsZ0VBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCw2REFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQStCLEVBQUUsT0FBaUM7UUFDckYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBUEYsOEJBQThCO2dCQUZtQyxvQkFBb0I7O0lBMkI5RixzQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLCtCQUErQjs7Ozs7O0lBRS9CLHlFQUErRTs7Ozs7SUFDeEYsK0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5LCBDb21tYW5kVHlwZSwgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vY29tcG9zaXRpb24uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmQ7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVSZXBvc2l0b3J5KCk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cbn1cbiJdfQ==