/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
var SetOriginCommandHandler = /** @class */ (function () {
    function SetOriginCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetOriginCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetOriginCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.handle = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var items = command.getItems();
        structure.setOrigin(items);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    SetOriginCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetOriginCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher }
    ]; };
    return SetOriginCommandHandler;
}());
export { SetOriginCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7SUFHQyxpQ0FBb0IsbUNBQStEO1FBQS9ELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7SUFDbkYsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsd0NBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQXlCOztZQUV4RCxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUVoQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELHlDQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUF5Qjs7WUFFekQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFORiwwQkFBMEI7O0lBOEJuQyw4QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHVCQUF1Qjs7Ozs7O0lBRXZCLHNFQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IFNldE9yaWdpbkNvbW1hbmQgfSBmcm9tICcuL3NldC1vcmlnaW4uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRPcmlnaW5Db21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0T3JpZ2luQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRPcmlnaW5Db21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRPcmlnaW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtcyA9IGNvbW1hbmQuZ2V0SXRlbXMoKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRPcmlnaW4oaXRlbXMpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0T3JpZ2luQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cdH1cblxufVxuIl19