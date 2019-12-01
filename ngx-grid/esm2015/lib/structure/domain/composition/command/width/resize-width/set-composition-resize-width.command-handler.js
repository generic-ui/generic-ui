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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdEYsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLGNBQWM7Ozs7OztJQUUxRSxZQUE2Qiw4QkFBOEQsRUFDdkUsZUFBb0MsRUFDckQsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFDckMsOEJBQThCLEVBQzlCLG9CQUFvQixDQUFDLENBQUM7UUFMSyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtJQUt4RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUF5Qzs7Y0FFekMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O2NBRXBCLFdBQVcsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU1RSxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBckJELFVBQVU7Ozs7WUFORiw4QkFBOEI7WUFDOUIsbUJBQW1CO1lBSEgsb0JBQW9COzs7Ozs7O0lBV2hDLGlGQUErRTs7Ozs7SUFDeEYsa0VBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQ29udmVydGVyOiBDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCxcblx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRlbmFibGVkID0gY29tbWFuZC5lbmFibGVkO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldFJlc2l6ZVdpZHRoKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cdH1cbn1cbiJdfQ==