/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
var StructureEditSourceItemCommandHandler = /** @class */ (function () {
    function StructureEditSourceItemCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureEditSourceItemCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var params = command.getParams();
        structure.editItem(params);
    };
    StructureEditSourceItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditSourceItemCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher }
    ]; };
    return StructureEditSourceItemCommandHandler;
}());
export { StructureEditSourceItemCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUlqRjtJQUdDLCtDQUFvQixtQ0FBK0Q7UUFBL0Qsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUE0QjtJQUNuRixDQUFDOzs7O0lBRUQsMERBQVU7OztJQUFWO1FBQ0MsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCxtRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBdUM7O1lBRW5GLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsK0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUF1Qzs7WUFFL0UsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFbEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFKRiwwQkFBMEI7O0lBNEJuQyw0Q0FBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHFDQUFxQzs7Ozs7O0lBRXJDLG9GQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChhZ2dyZWdhdGVFdmVudHMpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBhcmFtcyA9IGNvbW1hbmQuZ2V0UGFyYW1zKCk7XG5cblx0XHRzdHJ1Y3R1cmUuZWRpdEl0ZW0ocGFyYW1zKTtcblx0fVxuXG59XG4iXX0=