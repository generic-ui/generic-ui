/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
var CompositionChangeSortStatusCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusCommandHandler, _super);
    function CompositionChangeSortStatusCommandHandler(compositionAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, CompositionChangeSortStatusCommand, null, null, compositionAggregateRepository) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var sortParams = command.getSortParams();
        composition.changeSort(sortParams);
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var compositionId = command.getAggregateId();
        /** @type {?} */
        var columns = composition.getActiveColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    };
    CompositionChangeSortStatusCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return CompositionChangeSortStatusCommandHandler;
}(CommandHandler));
export { CompositionChangeSortStatusCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBVyxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUkxRjtJQUMrRCxxRUFBb0M7SUFFbEcsbURBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEM7UUFEdkQsWUFFQyxrQkFBTSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixDQUFDLFNBQ3JGO1FBSDRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFdkQsQ0FBQzs7Ozs7O0lBRUQsbUVBQWU7Ozs7O0lBQWYsVUFBZ0IsV0FBaUMsRUFBRSxPQUEyQzs7WUFFdkYsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFFMUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCx1RUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFdBQWlDLEVBQUUsT0FBZ0I7O1lBRWhFLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztZQUM3QyxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBRXpDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFORiw4QkFBOEI7Z0JBRkwsb0JBQW9COztJQStCdEQsZ0RBQUM7Q0FBQSxBQXZCRCxDQUMrRCxjQUFjLEdBc0I1RTtTQXRCWSx5Q0FBeUM7Ozs7OztJQUV6QyxtRkFBK0U7Ozs7O0lBQ3hGLHlFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCwgbnVsbCwgbnVsbCwgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5KTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNvcnRQYXJhbXMgPSBjb21tYW5kLmdldFNvcnRQYXJhbXMoKTtcblxuXHRcdGNvbXBvc2l0aW9uLmNoYW5nZVNvcnQoc29ydFBhcmFtcyk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGNvbHVtbnMgPSBjb21wb3NpdGlvbi5nZXRBY3RpdmVDb2x1bW5zKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50KGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMpKTtcblx0fVxuXG59XG4iXX0=