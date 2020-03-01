/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
var StructureEditSourceItemCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureEditSourceItemCommandHandler, _super);
    function StructureEditSourceItemCommandHandler(structureAggregateRepository, domainEventPublisher, structureSourceDomainEventPublisher) {
        var _this = _super.call(this, StructureEditSourceItemCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.getAggregateId();
        /** @type {?} */
        var params = command.getParams();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var aggregateEvents = structure.editItem(params);
        this.structureAggregateRepository.save(structure);
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    StructureEditSourceItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditSourceItemCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher },
        { type: StructureSourceDomainEventPublisher }
    ]; };
    return StructureEditSourceItemCommandHandler;
}(CommandHandler));
export { StructureEditSourceItemCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJcEc7SUFDMkQsaUVBQWtDO0lBRTVGLCtDQUFvQiw0QkFBMEQsRUFDbkUsb0JBQTBDLEVBQzFDLG1DQUF3RTtRQUZuRixZQUdDLGtCQUFNLDhCQUE4QixDQUFDLFNBQ3JDO1FBSm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDOztJQUVuRixDQUFDOzs7OztJQUVELHNEQUFNOzs7O0lBQU4sVUFBTyxPQUF1Qzs7WUFFdkMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBQzNDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUV2QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O1lBRWxFLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUVsRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBckJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQUhaLG9CQUFvQjtnQkFJcEMsbUNBQW1DOztJQTJCNUMsNENBQUM7Q0FBQSxBQXZCRCxDQUMyRCxjQUFjLEdBc0J4RTtTQXRCWSxxQ0FBcUM7Ozs7OztJQUVyQyw2RUFBa0U7Ozs7O0lBQzNFLHFFQUFrRDs7Ozs7SUFDbEQsb0ZBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHBhcmFtcyA9IGNvbW1hbmQuZ2V0UGFyYW1zKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBzdHJ1Y3R1cmUuZWRpdEl0ZW0ocGFyYW1zKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=