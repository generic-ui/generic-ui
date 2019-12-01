/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { SelectedRowToggledEvent } from './selected-row-toggled.event';
var ToggleSelectedRowCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleSelectedRowCommandHandler, _super);
    function ToggleSelectedRowCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ToggleSelectedRowCommand, SelectedRowToggledEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ToggleSelectedRowCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var selectedRow = command.selectedRow;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error("There is no aggregate 'Structure' for aggregateId: " + structureId);
            return;
        }
        /** @type {?} */
        var formation = structure.getFormation();
        formation.toggleRow(selectedRow);
        this.structureAggregateRepository.save(structure);
    };
    ToggleSelectedRowCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSelectedRowCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSelectedRowCommandHandler;
}(CommandHandler));
export { ToggleSelectedRowCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd2RTtJQUNxRCwyREFBYztJQUVsRSx5Q0FBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUQ3QyxZQUVDLGtCQUFNLHdCQUF3QixFQUM3Qix1QkFBdUIsRUFDdkIsb0JBQW9CLENBQUMsU0FDdEI7UUFMbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFLOUUsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sT0FBaUM7O1lBRWpDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFeEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXNELFdBQWEsQ0FBQyxDQUFDO1lBQ25GLE9BQU87U0FDUDs7WUFFSyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTtRQUUxQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBM0JELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQURaLG9CQUFvQjs7SUFtQzdDLHNDQUFDO0NBQUEsQUE3QkQsQ0FDcUQsY0FBYyxHQTRCbEU7U0E1QlksK0JBQStCOzs7Ozs7SUFFL0IsdUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQsXG5cdFx0XHRTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRSb3cgPSBjb21tYW5kLnNlbGVjdGVkUm93LFxuXHRcdFx0c3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0aWYgKCFzdHJ1Y3R1cmUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFRoZXJlIGlzIG5vIGFnZ3JlZ2F0ZSAnU3RydWN0dXJlJyBmb3IgYWdncmVnYXRlSWQ6ICR7c3RydWN0dXJlSWR9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybWF0aW9uID0gc3RydWN0dXJlLmdldEZvcm1hdGlvbigpO1xuXG5cdFx0Zm9ybWF0aW9uLnRvZ2dsZVJvdyhzZWxlY3RlZFJvdyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==