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
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetBasedOnThemeEvent(command.getAggregateId()));
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var theme = command.getTheme();
        structure.setTheme(theme);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHdEY7SUFHQyxnREFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELDJEQUFVOzs7SUFBVjtRQUNDLE9BQU8sK0JBQStCLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsb0VBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXdDO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7OztJQUVELGdFQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBd0M7O1lBRWhGLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRWhDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBUGMsb0JBQW9COztJQTRCN0MsNkNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxzQ0FBc0M7Ozs7OztJQUV0QyxzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4vcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHRoZW1lID0gY29tbWFuZC5nZXRUaGVtZSgpO1xuXG5cdFx0c3RydWN0dXJlLnNldFRoZW1lKHRoZW1lKTtcblx0fVxuXG59XG4iXX0=