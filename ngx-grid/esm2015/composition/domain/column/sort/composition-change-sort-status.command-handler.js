/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
export class CompositionChangeSortStatusCommandHandler {
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
        return CompositionChangeSortStatusCommand;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(composition, command) {
        /** @type {?} */
        const compositionId = command.getAggregateId();
        /** @type {?} */
        const columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    handleAggregate(composition, command) {
        /** @type {?} */
        const sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    }
}
CompositionChangeSortStatusCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionChangeSortStatusCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSzFGLE1BQU0sT0FBTyx5Q0FBeUM7Ozs7SUFFckQsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLGtDQUFrQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFdBQWlDLEVBQUUsT0FBMkM7O2NBRTNGLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztjQUM3QyxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBRXpDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBaUMsRUFBRSxPQUEyQzs7Y0FFdkYsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFFMUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF2QkQsVUFBVTs7OztZQU4yQixvQkFBb0I7Ozs7Ozs7SUFTN0MseUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPENvbXBvc2l0aW9uQWdncmVnYXRlLCBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb2x1bW5zID0gY29tcG9zaXRpb24uZ2V0QWN0aXZlQ29sdW1ucygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudChjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzb3J0UGFyYW1zID0gY29tbWFuZC5nZXRTb3J0UGFyYW1zKCk7XG5cblx0XHRjb21wb3NpdGlvbi5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpO1xuXHR9XG5cbn1cbiJdfQ==