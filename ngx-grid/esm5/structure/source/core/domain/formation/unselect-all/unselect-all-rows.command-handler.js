/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../core/domain/structure-aggregate.repository';
import { UnselectAllRowsCommand } from './unselect-all-rows.command';
var UnselectAllRowsCommandHandler = /** @class */ (function () {
    function UnselectAllRowsCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    UnselectAllRowsCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return UnselectAllRowsCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    UnselectAllRowsCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.unselectAll();
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    UnselectAllRowsCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    UnselectAllRowsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnselectAllRowsCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return UnselectAllRowsCommandHandler;
}());
export { UnselectAllRowsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnselectAllRowsCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    UnselectAllRowsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRTtJQUdDLHVDQUFvQiw0QkFBMEQsRUFDbkUsb0JBQTBDO1FBRGpDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsa0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCw4Q0FBTTs7Ozs7SUFBTixVQUFPLFNBQTZCLEVBQUUsT0FBK0I7UUFDcEUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELCtDQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUErQjtRQUNyRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQUZDLG9CQUFvQjs7SUEwQjFELG9DQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksNkJBQTZCOzs7Ozs7SUFFN0IscUVBQWtFOzs7OztJQUMzRSw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuL3Vuc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBVbnNlbGVjdEFsbFJvd3NDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxVbnNlbGVjdEFsbFJvd3NDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFVuc2VsZWN0QWxsUm93c0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUudW5zZWxlY3RBbGwoKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19