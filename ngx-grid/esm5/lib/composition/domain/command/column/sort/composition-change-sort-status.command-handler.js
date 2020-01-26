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
        var _this = _super.call(this, CompositionChangeSortStatusCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var sortParams = command.getSortParams();
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(compositionId);
        /** @type {?} */
        var aggregateEvent = composition.changeSort(sortParams);
        this.compositionAggregateRepository.save(composition);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHMUY7SUFDK0QscUVBQWM7SUFFNUUsbURBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEM7UUFEdkQsWUFFQyxrQkFBTSxrQ0FBa0MsQ0FBQyxTQUN6QztRQUg0QixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXZELENBQUM7Ozs7O0lBRUQsMERBQU07Ozs7SUFBTixVQUFPLE9BQTJDOztZQUUzQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFOztZQUMvQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRTs7WUFFL0IsV0FBVyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDOztZQUV4RSxjQUFjLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFFekQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFFaEQsT0FBTyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtRQUU5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsOEJBQThCO2dCQUZkLG9CQUFvQjs7SUFnQzdDLGdEQUFDO0NBQUEsQUF4QkQsQ0FDK0QsY0FBYyxHQXVCNUU7U0F2QlkseUNBQXlDOzs7Ozs7SUFFekMsbUZBQStFOzs7OztJQUN4Rix5RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0c29ydFBhcmFtcyA9IGNvbW1hbmQuZ2V0U29ydFBhcmFtcygpO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKGNvbXBvc2l0aW9uSWQpO1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnQgPSBjb21wb3NpdGlvbi5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cblx0XHRjb25zdCBjb2x1bW5zID0gY29tcG9zaXRpb24uZ2V0QWN0aXZlQ29sdW1ucygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudChjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxufVxuIl19