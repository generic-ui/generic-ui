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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3RGO0lBQzZELG1FQUFjO0lBRTFFLGlEQUE2Qiw4QkFBOEQsRUFDdkUsZUFBb0MsRUFDckQsb0JBQTBDO1FBRjdDLFlBR0Msa0JBQU0sZ0NBQWdDLEVBQ3JDLDhCQUE4QixFQUM5QixvQkFBb0IsQ0FBQyxTQUN0QjtRQU40QixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLHFCQUFlLEdBQWYsZUFBZSxDQUFxQjs7SUFLeEQsQ0FBQzs7Ozs7SUFFRCx3REFBTTs7OztJQUFOLFVBQU8sT0FBeUM7O1lBRXpDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPOztZQUVwQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQU5GLDhCQUE4QjtnQkFDOUIsbUJBQW1CO2dCQUhILG9CQUFvQjs7SUE4QjdDLDhDQUFDO0NBQUEsQUF0QkQsQ0FDNkQsY0FBYyxHQXFCMUU7U0FyQlksdUNBQXVDOzs7Ozs7SUFFdkMsaUZBQStFOzs7OztJQUN4RixrRUFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Db252ZXJ0ZXI6IENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kLFxuXHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQ7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0UmVzaXplV2lkdGgoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uKTtcblx0fVxufVxuIl19