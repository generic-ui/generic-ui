/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigQuickFilterCommand } from './structure.set-config-quick-filter.command';
import { StructureConfigQuickFilterSetEvent } from './structure.config-quick-filter-set.event';
var StructureSetConfigQuickFilterCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSetConfigQuickFilterCommandHandler, _super);
    function StructureSetConfigQuickFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureSetConfigQuickFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var quickFiltersConfig = command.getConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setQuickFiltersConfig(quickFiltersConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    };
    StructureSetConfigQuickFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigQuickFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigQuickFilterCommandHandler;
}(CommandHandler));
export { StructureSetConfigQuickFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHL0Y7SUFDaUUsdUVBQWM7SUFFOUUscURBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFEckQsWUFFQyxrQkFBTSxvQ0FBb0MsQ0FBQyxTQUMzQztRQUg0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXJELENBQUM7Ozs7O0lBRUQsNERBQU07Ozs7SUFBTixVQUFPLE9BQTZDOztZQUU3QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O1lBRW5DLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxTQUFTLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7Z0JBRlosb0JBQW9COztJQTZCN0Msa0RBQUM7Q0FBQSxBQXRCRCxDQUNpRSxjQUFjLEdBcUI5RTtTQXJCWSwyQ0FBMkM7Ozs7OztJQUUzQyxtRkFBMkU7Ozs7O0lBQ3BGLDJFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0cXVpY2tGaWx0ZXJzQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQoc3RydWN0dXJlSWQsIHF1aWNrRmlsdGVyc0NvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxufVxuIl19