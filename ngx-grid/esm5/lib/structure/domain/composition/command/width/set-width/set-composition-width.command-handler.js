/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionWidthSetEvent } from './composition-width-set.event';
var SetCompositionWidthCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetCompositionWidthCommandHandler, _super);
    function SetCompositionWidthCommandHandler(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        var _this = _super.call(this, SetCompositionWidthCommand, CompositionWidthSetEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.columnConverter = columnConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetCompositionWidthCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var width = command.width;
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setWidth(width);
        this.compositionAggregateRepository.save(composition);
    };
    SetCompositionWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: ColumnEntityFactory },
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionWidthCommandHandler;
}(CommandHandler));
export { SetCompositionWidthCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RTtJQUN1RCw2REFBYztJQUVwRSwyQ0FBNkIsOEJBQThELEVBQ3ZFLGVBQW9DLEVBQ3JELG9CQUEwQztRQUY3QyxZQUdDLGtCQUFNLDBCQUEwQixFQUMvQix3QkFBd0IsRUFDeEIsb0JBQW9CLENBQUMsU0FDdEI7UUFONEIsb0NBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUN2RSxxQkFBZSxHQUFmLGVBQWUsQ0FBcUI7O0lBS3hELENBQUM7Ozs7O0lBRUQsa0RBQU07Ozs7SUFBTixVQUFPLE9BQW1DOztZQUVuQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7WUFFaEIsV0FBVyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTVFLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFORiw4QkFBOEI7Z0JBQzlCLG1CQUFtQjtnQkFISCxvQkFBb0I7O0lBOEI3Qyx3Q0FBQztDQUFBLEFBdEJELENBQ3VELGNBQWMsR0FxQnBFO1NBckJZLGlDQUFpQzs7Ozs7O0lBRWpDLDJFQUErRTs7Ozs7SUFDeEYsNERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkNvbnZlcnRlcjogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQsXG5cdFx0XHRDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0d2lkdGggPSBjb21tYW5kLndpZHRoO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldFdpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoY29tcG9zaXRpb24pO1xuXHR9XG59XG4iXX0=