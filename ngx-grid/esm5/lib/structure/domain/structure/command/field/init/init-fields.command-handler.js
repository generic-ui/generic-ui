/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { FieldsInitedEvent } from './fields-inited.event';
var InitFieldsCommandHandler = /** @class */ (function () {
    function InitFieldsCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return InitFieldsCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var columns = command.getColumns();
        structure.createFields(columns);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var columns = command.getColumns();
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        /** @type {?} */
        var fields = ((/** @type {?} */ (aggregateEvents[0]))).getFields();
        this.domainEventPublisher.publish(new FieldsInitedEvent(command.getAggregateId(), compositionId, columns, fields));
    };
    InitFieldsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitFieldsCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return InitFieldsCommandHandler;
}());
export { InitFieldsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLMUQ7SUFHQyxrQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUNDLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUEwQjs7WUFFbEUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFFcEMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCxzREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBMEI7O1lBRXRFLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7O1lBQy9DLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUV6QixlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7WUFFdkMsTUFBTSxHQUFHLENBQUMsbUJBQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUE4QixDQUFDLENBQUMsU0FBUyxFQUFFO1FBRTdFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7O2dCQTNCRCxVQUFVOzs7O2dCQVBjLG9CQUFvQjs7SUFxQzdDLCtCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksd0JBQXdCOzs7Ozs7SUFFeEIsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuL2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIEluaXRGaWVsZHNDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxJbml0RmllbGRzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBJbml0RmllbGRzQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogSW5pdEZpZWxkc0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbnMgPSBjb21tYW5kLmdldENvbHVtbnMoKTtcblxuXHRcdHN0cnVjdHVyZS5jcmVhdGVGaWVsZHMoY29sdW1ucyk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBJbml0RmllbGRzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0Y29sdW1ucyA9IGNvbW1hbmQuZ2V0Q29sdW1ucygpO1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gKGFnZ3JlZ2F0ZUV2ZW50c1swXSBhcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCkuZ2V0RmllbGRzKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IEZpZWxkc0luaXRlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgY29tcG9zaXRpb25JZCwgY29sdW1ucywgZmllbGRzKSk7XG5cdH1cblxuXG59XG4iXX0=