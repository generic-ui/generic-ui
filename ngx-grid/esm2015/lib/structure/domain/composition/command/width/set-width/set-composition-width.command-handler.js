/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionWidthSetEvent } from './composition-width-set.event';
export class SetCompositionWidthCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} columnConverter
     * @param {?} domainEventPublisher
     */
    constructor(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        super(SetCompositionWidthCommand, CompositionWidthSetEvent, domainEventPublisher);
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
        const width = command.width;
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setWidth(width);
        this.compositionAggregateRepository.save(composition);
    }
}
SetCompositionWidthCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetCompositionWidthCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: ColumnEntityFactory },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.columnConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSXpFLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxjQUFjOzs7Ozs7SUFFcEUsWUFBNkIsOEJBQThELEVBQ3ZFLGVBQW9DLEVBQ3JELG9CQUEwQztRQUM1QyxLQUFLLENBQUMsMEJBQTBCLEVBQy9CLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FBQyxDQUFDO1FBTEssbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUN2RSxvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7SUFLeEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBbUM7O2NBRW5DLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztjQUVoQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXJCRCxVQUFVOzs7O1lBTkYsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUhILG9CQUFvQjs7Ozs7OztJQVdoQywyRUFBK0U7Ozs7O0lBQ3hGLDREQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5Db252ZXJ0ZXI6IENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kLFxuXHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdHdpZHRoID0gY29tbWFuZC53aWR0aDtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRXaWR0aCh3aWR0aCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uKTtcblx0fVxufVxuIl19