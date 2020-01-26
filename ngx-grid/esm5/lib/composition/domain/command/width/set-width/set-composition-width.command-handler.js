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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3pFO0lBQ3VELDZEQUFjO0lBRXBFLDJDQUE2Qiw4QkFBOEQsRUFDdkUsZUFBb0MsRUFDckQsb0JBQTBDO1FBRjdDLFlBR0Msa0JBQU0sMEJBQTBCLEVBQy9CLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FBQyxTQUN0QjtRQU40QixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLHFCQUFlLEdBQWYsZUFBZSxDQUFxQjs7SUFLeEQsQ0FBQzs7Ozs7SUFFRCxrREFBTTs7OztJQUFOLFVBQU8sT0FBbUM7O1lBRW5DLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUVoQixXQUFXLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQU5GLDhCQUE4QjtnQkFDOUIsbUJBQW1CO2dCQUhILG9CQUFvQjs7SUE4QjdDLHdDQUFDO0NBQUEsQUF0QkQsQ0FDdUQsY0FBYyxHQXFCcEU7U0FyQlksaUNBQWlDOzs7Ozs7SUFFakMsMkVBQStFOzs7OztJQUN4Riw0REFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQ29udmVydGVyOiBDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCxcblx0XHRcdENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHR3aWR0aCA9IGNvbW1hbmQud2lkdGg7XG5cblx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0V2lkdGgod2lkdGgpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cdH1cbn1cbiJdfQ==