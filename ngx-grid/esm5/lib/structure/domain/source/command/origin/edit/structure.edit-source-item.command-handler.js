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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHcEc7SUFDMkQsaUVBQWM7SUFFeEUsK0NBQW9CLDRCQUEwRCxFQUNuRSxvQkFBMEMsRUFDMUMsbUNBQXdFO1FBRm5GLFlBR0Msa0JBQU0sOEJBQThCLENBQUMsU0FDckM7UUFKbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7O0lBRW5GLENBQUM7Ozs7O0lBRUQsc0RBQU07Ozs7SUFBTixVQUFPLE9BQXVDOztZQUV2QyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7WUFDM0MsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O1lBRXZCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRWxELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFKRiw0QkFBNEI7Z0JBSFosb0JBQW9CO2dCQUlwQyxtQ0FBbUM7O0lBMEI1Qyw0Q0FBQztDQUFBLEFBdkJELENBQzJELGNBQWMsR0FzQnhFO1NBdEJZLHFDQUFxQzs7Ozs7O0lBRXJDLDZFQUFrRTs7Ozs7SUFDM0UscUVBQWtEOzs7OztJQUNsRCxvRkFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRwYXJhbXMgPSBjb21tYW5kLmdldFBhcmFtcygpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gc3RydWN0dXJlLmVkaXRJdGVtKHBhcmFtcyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cdH1cblxufVxuIl19