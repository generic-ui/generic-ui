/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { RowColoringSetEvent } from './row-coloring-set.event';
var SetRowColoringCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetRowColoringCommandHandler, _super);
    function SetRowColoringCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetRowColoringCommand, RowColoringSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var coloring = command.coloring;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setRowColoring(coloring);
        this.structureAggregateRepository.save(structure);
    };
    SetRowColoringCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowColoringCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetRowColoringCommandHandler;
}(CommandHandler));
export { SetRowColoringCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbG9yaW5nL3NldC9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUU1RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcvRDtJQUNrRCx3REFBYztJQUUvRCxzQ0FBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUQ3QyxZQUVDLGtCQUFNLHFCQUFxQixFQUMxQixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQUMsU0FDdEI7UUFMbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFLOUUsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8sT0FBOEI7O1lBRTlCLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUTs7WUFDaEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O1lBQ3ZFLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRS9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFORiw0QkFBNEI7Z0JBRlosb0JBQW9COztJQStCN0MsbUNBQUM7Q0FBQSxBQXZCRCxDQUNrRCxjQUFjLEdBc0IvRDtTQXRCWSw0QkFBNEI7Ozs7OztJQUU1QixvRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRSb3dDb2xvcmluZ0NvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kLFxuXHRcdFx0Um93Q29sb3JpbmdTZXRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRSb3dDb2xvcmluZ0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgY29sb3JpbmcgPSBjb21tYW5kLmNvbG9yaW5nLFxuXHRcdFx0c3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2NoZW1hID0gc3RydWN0dXJlLmdldFNjaGVtYSgpO1xuXG5cdFx0c2NoZW1hLnNldFJvd0NvbG9yaW5nKGNvbG9yaW5nKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdH1cblxufVxuIl19