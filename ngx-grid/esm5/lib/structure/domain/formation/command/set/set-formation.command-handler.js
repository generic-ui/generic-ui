/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetFormationCommand } from './set-formation.command';
import { FormationSetEvent } from './formation-set.event';
var SetFormationCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetFormationCommandHandler, _super);
    function SetFormationCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetFormationCommand, FormationSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetFormationCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var rawFormation = (/** @type {?} */ (command.payload));
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        // missing implementation
        this.structureAggregateRepository.save(structure);
    };
    SetFormationCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetFormationCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetFormationCommandHandler;
}(CommandHandler));
export { SetFormationCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetFormationCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWZvcm1hdGlvbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3NldC9zZXQtZm9ybWF0aW9uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUV6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRDtJQUNnRCxzREFBa0M7SUFFakYsb0NBQW9CLDRCQUEwRCxFQUMzRSxvQkFBMEM7UUFEN0MsWUFFQyxrQkFBTSxtQkFBbUIsRUFDeEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTG1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBSzlFLENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLE9BQTRCOztZQUU1QixZQUFZLEdBQUcsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBTzs7WUFDMUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFeEUseUJBQXlCO1FBRXpCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUErQjdDLGlDQUFDO0NBQUEsQUF0QkQsQ0FDZ0QsY0FBYyxHQXFCN0Q7U0FyQlksMEJBQTBCOzs7Ozs7SUFFMUIsa0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTZXRGb3JtYXRpb25Db21tYW5kIH0gZnJvbSAnLi9zZXQtZm9ybWF0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0RXZlbnQgfSBmcm9tICcuL2Zvcm1hdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldEZvcm1hdGlvbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRGb3JtYXRpb25Db21tYW5kLFxuXHRcdFx0Rm9ybWF0aW9uU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Rm9ybWF0aW9uQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCByYXdGb3JtYXRpb24gPSBjb21tYW5kLnBheWxvYWQgYXMgYW55LFxuXHRcdFx0c3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0Ly8gbWlzc2luZyBpbXBsZW1lbnRhdGlvblxuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0fVxuXG59XG4iXX0=