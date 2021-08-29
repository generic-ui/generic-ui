/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightBasedOnThemeCommand } from './set-row-height-based-on-theme.command';
import { RowHeightSetBasedOnThemeEvent } from './row-height-set-based-on-theme.event';
var SetRowHeightBasedOnThemeCommandHandler = /** @class */ (function () {
    function SetRowHeightBasedOnThemeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetRowHeightBasedOnThemeCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.handle = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var theme = command.getTheme();
        structure.setTheme(theme);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetBasedOnThemeEvent(command.getAggregateId()));
    };
    SetRowHeightBasedOnThemeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowHeightBasedOnThemeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetRowHeightBasedOnThemeCommandHandler;
}());
export { SetRowHeightBasedOnThemeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHdEY7SUFHQyxnREFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELDJEQUFVOzs7SUFBVjtRQUNDLE9BQU8sK0JBQStCLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsdURBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQXdDOztZQUV2RSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUVoQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELHdEQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUF3QztRQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQTRCMUQsNkNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxzQ0FBc0M7Ozs7OztJQUV0QyxzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIH0gZnJvbSAnLi9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuL3Jvdy1oZWlnaHQtc2V0LWJhc2VkLW9uLXRoZW1lLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHRoZW1lID0gY29tbWFuZC5nZXRUaGVtZSgpO1xuXG5cdFx0c3RydWN0dXJlLnNldFRoZW1lKHRoZW1lKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cbn1cbiJdfQ==