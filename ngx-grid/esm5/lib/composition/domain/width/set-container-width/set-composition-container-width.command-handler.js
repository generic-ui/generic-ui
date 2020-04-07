/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
var SetCompositionContainerWidthCommandHandler = /** @class */ (function () {
    function SetCompositionContainerWidthCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetCompositionContainerWidthCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.publishAggregateEvents((/** @type {?} */ (aggregate.getEvents())));
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var width = command.getWidth();
        composition.setContainerWidth(width);
    };
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.publishAggregateEvents = /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    function (aggregateEvents) {
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    };
    SetCompositionContainerWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionContainerWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return SetCompositionContainerWidthCommandHandler;
}());
export { SetCompositionContainerWidthCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetCompositionContainerWidthCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtDLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFLaEc7SUFHQyxvREFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFGbEMsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDL0QsQ0FBQzs7OztJQUVELCtEQUFVOzs7SUFBVjtRQUNDLE9BQU8sbUNBQW1DLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRUQsd0VBQW1COzs7OztJQUFuQixVQUFvQixTQUErQixFQUFFLE9BQTRDO1FBQ2hHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBQSxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQXdDLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7Ozs7SUFFRCxvRUFBZTs7Ozs7SUFBZixVQUFnQixXQUFpQyxFQUFFLE9BQTRDOztZQUV4RixLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUVoQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sMkVBQXNCOzs7OztJQUE5QixVQUErQixlQUFxRDs7WUFFN0UsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBRTVFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0JBUEYsOEJBQThCO2dCQUZFLG9CQUFvQjtnQkFHcEQseUJBQXlCOztJQW9DbEMsaURBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSwwQ0FBMEM7Ozs7OztJQUUxQyxvRkFBK0U7Ozs7O0lBQ3hGLDBFQUFvRDs7Ozs7SUFDcEQsK0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmV2ZW50LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhhZ2dyZWdhdGUuZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+KTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCB3aWR0aCA9IGNvbW1hbmQuZ2V0V2lkdGgoKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhhZ2dyZWdhdGVFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlRXZlbnRzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHR9XG5cbn1cbiJdfQ==