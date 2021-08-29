/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../core/domain/structure-aggregate.repository';
import { SelectAllRowsCommand } from './select-all-rows.command';
var SelectAllRowsCommandHandler = /** @class */ (function () {
    function SelectAllRowsCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SelectAllRowsCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SelectAllRowsCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SelectAllRowsCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.selectAll();
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SelectAllRowsCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    SelectAllRowsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectAllRowsCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SelectAllRowsCommandHandler;
}());
export { SelectAllRowsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectAllRowsCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SelectAllRowsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQUdDLHFDQUFvQiw0QkFBMEQsRUFDbkUsb0JBQTBDO1FBRGpDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCw0Q0FBTTs7Ozs7SUFBTixVQUFPLFNBQTZCLEVBQUUsT0FBNkI7UUFDbEUsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELDZDQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUE2QjtRQUNuRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQUZDLG9CQUFvQjs7SUEwQjFELGtDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksMkJBQTJCOzs7Ozs7SUFFM0IsbUVBQWtFOzs7OztJQUMzRSwyREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZWxlY3RBbGxSb3dzQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2VsZWN0QWxsUm93c0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0QWxsUm93c0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNlbGVjdEFsbFJvd3NDb21tYW5kKTogdm9pZCB7XG5cdFx0YWdncmVnYXRlLnNlbGVjdEFsbCgpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19