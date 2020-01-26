/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionResizeWidthSetEvent } from './composition-resize-width-set.event';
export class SetCompositionResizeWidthCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} columnConverter
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        super(SetCompositionResizeWidthCommand, CompositionResizeWidthSetEvent, domainEventPublisher);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.columnConverter = columnConverter;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.structureId;
        /** @type {?} */
        const enabled = command.enabled;
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setResizeWidth(enabled);
        this.compositionAggregateRepository.save(composition);
    }
}
SetCompositionResizeWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionResizeWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: ColumnEntityFactory },
    { type: DomainEventPublisher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUl0RixNQUFNLE9BQU8sdUNBQXdDLFNBQVEsY0FBYzs7Ozs7O0lBRTFFLFlBQTZCLDhCQUE4RCxFQUN2RSxlQUFvQyxFQUNyRCxvQkFBMEM7UUFDNUMsS0FBSyxDQUFDLGdDQUFnQyxFQUNyQyw4QkFBOEIsRUFDOUIsb0JBQW9CLENBQUMsQ0FBQztRQUxLLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDdkUsb0JBQWUsR0FBZixlQUFlLENBQXFCO0lBS3hELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXlDOztjQUV6QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O2NBQ3RDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7Y0FFcEIsV0FBVyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTVFLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFyQkQsVUFBVTs7OztZQU5GLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFISCxvQkFBb0I7Ozs7Ozs7SUFXaEMsaUZBQStFOzs7OztJQUN4RixrRUFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Db252ZXJ0ZXI6IENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kLFxuXHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQ7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0UmVzaXplV2lkdGgoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uKTtcblx0fVxufVxuIl19