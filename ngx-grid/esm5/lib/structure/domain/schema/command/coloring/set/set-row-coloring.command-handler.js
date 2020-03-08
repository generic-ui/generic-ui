/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { RowColoringSetEvent } from './row-coloring-set.event';
var SetRowColoringCommandHandler = /** @class */ (function () {
    function SetRowColoringCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetRowColoringCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        // missing implementation
        /** @type {?} */
        var schema = structure.getSchema();
        /** @type {?} */
        var coloring = command.getColoring();
        schema.setRowColoring(coloring);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new RowColoringSetEvent(command.getAggregateId()));
    };
    SetRowColoringCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowColoringCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetRowColoringCommandHandler;
}());
export { SetRowColoringCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbG9yaW5nL3NldC9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQTJCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJL0Q7SUFHQyxzQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELGlEQUFVOzs7SUFBVjtRQUNDLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsc0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUE4Qjs7O1lBR3RFLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUNuQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUVqQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELDBEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUFnQjtRQUNsRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFQdUIsb0JBQW9COztJQThCdEQsbUNBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSw0QkFBNEI7Ozs7OztJQUU1Qiw0REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFJvd0NvbG9yaW5nQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Um93Q29sb3JpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFJvd0NvbG9yaW5nQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93Q29sb3JpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHQvLyBtaXNzaW5nIGltcGxlbWVudGF0aW9uXG5cdFx0Y29uc3Qgc2NoZW1hID0gc3RydWN0dXJlLmdldFNjaGVtYSgpLFxuXHRcdFx0Y29sb3JpbmcgPSBjb21tYW5kLmdldENvbG9yaW5nKCk7XG5cblx0XHRzY2hlbWEuc2V0Um93Q29sb3JpbmcoY29sb3JpbmcpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUm93Q29sb3JpbmdTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=