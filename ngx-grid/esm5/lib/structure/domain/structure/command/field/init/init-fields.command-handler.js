/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { InitFieldsCommand } from './init-fields.command';
import { FieldsInitedEvent } from './fields-inited.event';
var InitFieldsCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(InitFieldsCommandHandler, _super);
    function InitFieldsCommandHandler(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitFieldsCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var compositionId = command.compositionId;
        /** @type {?} */
        var columns = command.columns;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var fields = structure.createFields(columns);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new FieldsInitedEvent(structureId, compositionId, columns, fields));
    };
    InitFieldsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitFieldsCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitFieldsCommandHandler;
}(CommandHandler));
export { InitFieldsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRDtJQUM4QyxvREFBYztJQUUzRCxrQ0FBNkIsNEJBQTBELEVBQ25FLHlCQUFvRCxFQUM3RCxvQkFBMEM7UUFGckQsWUFHQyxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN4QjtRQUo0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCx5Q0FBTTs7OztJQUFOLFVBQU8sT0FBMEI7O1lBRTFCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhOztZQUNyQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O1lBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBRTlDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQUM1Qix5QkFBeUI7Z0JBSFQsb0JBQW9COztJQWdDN0MsK0JBQUM7Q0FBQSxBQXhCRCxDQUM4QyxjQUFjLEdBdUIzRDtTQXZCWSx3QkFBd0I7Ozs7OztJQUV4QixnRUFBMkU7Ozs7O0lBQ3BGLDZEQUFxRTs7Ozs7SUFDckUsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4vaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4vZmllbGRzLWluaXRlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeTogU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihJbml0RmllbGRzQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogSW5pdEZpZWxkc0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuY29tcG9zaXRpb25JZCxcblx0XHRcdGNvbHVtbnMgPSBjb21tYW5kLmNvbHVtbnM7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSBzdHJ1Y3R1cmUuY3JlYXRlRmllbGRzKGNvbHVtbnMpOyAvLyB0T0RPIGNvbnZlcnQgZG9uJ3QgbGV0IGRhbmRydWZmIGludG8gdGhlIGRvbWFpblxuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgRmllbGRzSW5pdGVkRXZlbnQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMsIGZpZWxkcykpO1xuXHR9XG5cbn1cbiJdfQ==