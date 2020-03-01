/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionResizeWidthSetEvent } from './composition-resize-width-set.event';
var SetCompositionResizeWidthCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetCompositionResizeWidthCommandHandler, _super);
    function SetCompositionResizeWidthCommandHandler(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        var _this = _super.call(this, SetCompositionResizeWidthCommand, null, null, compositionAggregateRepository) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.columnConverter = columnConverter;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var enabled = command.getEnabled();
        composition.setResizeWidth(enabled);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
    };
    SetCompositionResizeWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionResizeWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: ColumnEntityFactory },
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionResizeWidthCommandHandler;
}(CommandHandler));
export { SetCompositionResizeWidthCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.columnConverter;
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUl0RjtJQUM2RCxtRUFBb0M7SUFFaEcsaURBQTZCLDhCQUE4RCxFQUN2RSxlQUFvQyxFQUNwQyxvQkFBMEM7UUFGOUQsWUFHQyxrQkFBTSxnQ0FBZ0MsRUFDckMsSUFBSSxFQUNKLElBQUksRUFDSiw4QkFBOEIsQ0FBQyxTQUNoQztRQVA0QixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLHFCQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUNwQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUs5RCxDQUFDOzs7Ozs7SUFFRCxpRUFBZTs7Ozs7SUFBZixVQUFnQixXQUFpQyxFQUFFLE9BQXlDOztZQUVyRixPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUVwQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELHFFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBK0IsRUFBRSxPQUF5QztRQUM3RixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksOEJBQThCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFQRiw4QkFBOEI7Z0JBQzlCLG1CQUFtQjtnQkFISCxvQkFBb0I7O0lBZ0M3Qyw4Q0FBQztDQUFBLEFBdkJELENBQzZELGNBQWMsR0FzQjFFO1NBdEJZLHVDQUF1Qzs7Ozs7O0lBRXZDLGlGQUErRTs7Ozs7SUFDeEYsa0VBQXFEOzs7OztJQUNyRCx1RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNvbnZlcnRlcjogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0Y29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5KTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5nZXRFbmFibGVkKCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRSZXNpemVXaWR0aChlbmFibGVkKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=