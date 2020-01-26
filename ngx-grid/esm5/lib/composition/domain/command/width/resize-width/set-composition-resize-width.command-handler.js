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
        var _this = _super.call(this, SetCompositionResizeWidthCommand, CompositionResizeWidthSetEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.columnConverter = columnConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setResizeWidth(enabled);
        this.compositionAggregateRepository.save(composition);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdEY7SUFDNkQsbUVBQWM7SUFFMUUsaURBQTZCLDhCQUE4RCxFQUN2RSxlQUFvQyxFQUNyRCxvQkFBMEM7UUFGN0MsWUFHQyxrQkFBTSxnQ0FBZ0MsRUFDckMsOEJBQThCLEVBQzlCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTjRCLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUscUJBQWUsR0FBZixlQUFlLENBQXFCOztJQUt4RCxDQUFDOzs7OztJQUVELHdEQUFNOzs7O0lBQU4sVUFBTyxPQUF5Qzs7WUFFekMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O1lBRXBCLFdBQVcsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU1RSxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBckJELFVBQVU7Ozs7Z0JBTkYsOEJBQThCO2dCQUM5QixtQkFBbUI7Z0JBSEgsb0JBQW9COztJQThCN0MsOENBQUM7Q0FBQSxBQXRCRCxDQUM2RCxjQUFjLEdBcUIxRTtTQXJCWSx1Q0FBdUM7Ozs7OztJQUV2QyxpRkFBK0U7Ozs7O0lBQ3hGLGtFQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNvbnZlcnRlcjogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQsXG5cdFx0XHRDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0ZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZDtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRSZXNpemVXaWR0aChlbmFibGVkKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoY29tcG9zaXRpb24pO1xuXHR9XG59XG4iXX0=