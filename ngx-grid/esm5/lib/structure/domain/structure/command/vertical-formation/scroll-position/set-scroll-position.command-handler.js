/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { ScrollPositionSetEvent } from './scroll-position-set.event';
var SetScrollPositionCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetScrollPositionCommandHandler, _super);
    function SetScrollPositionCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetScrollPositionCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetScrollPositionCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var position = command.position;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setScrollPosition(position);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(structureId));
    };
    SetScrollPositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetScrollPositionCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetScrollPositionCommandHandler;
}(CommandHandler));
export { SetScrollPositionCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollPositionCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetScrollPositionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckU7SUFDcUQsMkRBQWM7SUFFbEUseUNBQTZCLDRCQUEwRCxFQUMxRSxvQkFBMEM7UUFEdkQsWUFFQyxrQkFBTSx3QkFBd0IsQ0FBQyxTQUMvQjtRQUg0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzFFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXZELENBQUM7Ozs7O0lBRUQsZ0RBQU07Ozs7SUFBTixVQUFPLE9BQWlDOztZQUVqQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUTs7WUFFdEIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQU5GLDRCQUE0QjtnQkFEWixvQkFBb0I7O0lBNkI3QyxzQ0FBQztDQUFBLEFBdEJELENBQ3FELGNBQWMsR0FxQmxFO1NBckJZLCtCQUErQjs7Ozs7O0lBRS9CLHVFQUEyRTs7Ozs7SUFDcEYsK0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0cG9zaXRpb24gPSBjb21tYW5kLnBvc2l0aW9uO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0c3RydWN0dXJlLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=