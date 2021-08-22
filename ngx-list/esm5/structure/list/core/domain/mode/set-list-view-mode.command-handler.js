/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
var SetListViewModeCommandHandler = /** @class */ (function () {
    function SetListViewModeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetListViewModeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetListViewModeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetListViewModeCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    SetListViewModeCommandHandler.prototype.handle = /**
     * @param {?} listViewAggregate
     * @param {?} command
     * @return {?}
     */
    function (listViewAggregate, command) {
        /** @type {?} */
        var mode = command.getMode();
        listViewAggregate.setMode(mode);
    };
    SetListViewModeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetListViewModeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetListViewModeCommandHandler;
}());
export { SetListViewModeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetListViewModeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt0RTtJQUdDLHVDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsa0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwrQ0FBTzs7Ozs7SUFBUCxVQUFRLFNBQTRCLEVBQUUsT0FBd0I7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELDhDQUFNOzs7OztJQUFOLFVBQU8saUJBQW9DLEVBQUUsT0FBK0I7O1lBRXJFLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFO1FBRTlCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQTRCMUQsb0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSw2QkFBNkI7Ozs7OztJQUU3Qiw2REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRMaXN0Vmlld01vZGVDb21tYW5kIH0gZnJvbSAnLi9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4uL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kIH0gZnJvbSAnLi4vbGlzdC12aWV3LmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPExpc3RWaWV3QWdncmVnYXRlLCBTZXRMaXN0Vmlld01vZGVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0TGlzdFZpZXdNb2RlQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRMaXN0Vmlld01vZGVDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBMaXN0Vmlld0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGUobGlzdFZpZXdBZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBTZXRMaXN0Vmlld01vZGVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBtb2RlID0gY29tbWFuZC5nZXRNb2RlKCk7XG5cblx0XHRsaXN0Vmlld0FnZ3JlZ2F0ZS5zZXRNb2RlKG1vZGUpO1xuXHR9XG5cbn1cbiJdfQ==