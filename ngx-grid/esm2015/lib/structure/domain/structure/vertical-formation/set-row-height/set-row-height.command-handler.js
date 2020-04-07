/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightCommand } from './set-row-height.command';
import { RowHeightSetEvent } from './row-height-set.event';
export class SetRowHeightCommandHandler {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return SetRowHeightCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetEvent(command.getAggregateId()));
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const rowHeight = command.getRowHeight();
        /** @type {?} */
        const formation = structure.getVerticalFormation();
        formation.setRowHeight(rowHeight);
    }
}
SetRowHeightCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowHeightCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJM0QsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUV0QyxZQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUE0QjtRQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBNkIsRUFBRSxPQUE0Qjs7Y0FFcEUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7O2NBRWxDLFNBQVMsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFbEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFyQkQsVUFBVTs7OztZQVBjLG9CQUFvQjs7Ozs7OztJQVVoQywwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmQgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4vcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Um93SGVpZ2h0Q29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Um93SGVpZ2h0Q29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRSb3dIZWlnaHRDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93SGVpZ2h0Q29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUm93SGVpZ2h0U2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0hlaWdodENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHJvd0hlaWdodCA9IGNvbW1hbmQuZ2V0Um93SGVpZ2h0KCk7XG5cblx0XHRjb25zdCBmb3JtYXRpb24gPSBzdHJ1Y3R1cmUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdGZvcm1hdGlvbi5zZXRSb3dIZWlnaHQocm93SGVpZ2h0KTtcblx0fVxuXG59XG4iXX0=