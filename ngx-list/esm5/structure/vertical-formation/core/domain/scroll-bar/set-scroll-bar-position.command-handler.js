/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
var SetScrollBarPositionCommandHandler = /** @class */ (function () {
    function SetScrollBarPositionCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetScrollBarPositionCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetScrollBarPositionCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetScrollBarPositionCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetScrollBarPositionCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var index = command.getPosition();
        structure.scrollToIndex(index);
    };
    SetScrollBarPositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetScrollBarPositionCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetScrollBarPositionCommandHandler;
}());
export { SetScrollBarPositionCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollBarPositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUloRjtJQUdDLDRDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsdURBQVU7OztJQUFWO1FBQ0MsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxnRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBb0M7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELDREQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBb0M7O1lBRTVFLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBRW5DLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBTDJCLG9CQUFvQjs7SUEwQjFELHlDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksa0NBQWtDOzs7Ozs7SUFFbEMsa0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IGNvbW1hbmQuZ2V0UG9zaXRpb24oKTtcblxuXHRcdHN0cnVjdHVyZS5zY3JvbGxUb0luZGV4KGluZGV4KTtcblx0fVxuXG59XG4iXX0=