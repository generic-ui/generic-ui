/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureWarehouse } from '../structure.warehouse';
import { SelectedRowToggledEvent } from '../../domain/formation/toggle/selected-row-toggled.event';
var FormationEventService = /** @class */ (function () {
    function FormationEventService(domainEventBus, structureWarehouse) {
        this.domainEventBus = domainEventBus;
        this.structureWarehouse = structureWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationEventService.prototype.onItemSelected = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowToggledEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.structureWarehouse
                .onStructure(structureId)
                .pipe(take(1), map((/**
             * @param {?} str
             * @return {?}
             */
            function (str) { return str.getSelectedEntities(); })), map((/**
             * @param {?} entities
             * @return {?}
             */
            function (entities) { return entities.map((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) { return ent.getData(); })); })));
        })));
    };
    FormationEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationEventService.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: StructureWarehouse }
    ]; };
    return FormationEventService;
}());
export { FormationEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.structureWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUtuRztJQUdDLCtCQUE2QixjQUE4QixFQUN2QyxrQkFBc0M7UUFEN0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFBdkMsaUJBbUJDO1FBakJBLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1CQUFBLHVCQUF1QixFQUFPLENBQzlCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQ3pHLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRXpDLE9BQU8sS0FBSSxDQUFDLGtCQUFrQjtpQkFDM0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztpQkFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsVUFBQyxHQUEyQixJQUFLLE9BQUEsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQXpCLENBQXlCLEVBQUMsRUFDL0QsR0FBRzs7OztZQUFDLFVBQUMsUUFBMkIsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQWIsQ0FBYSxFQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FDeEUsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkExQkQsVUFBVTs7OztnQkFUVyxjQUFjO2dCQUUzQixrQkFBa0I7O0lBbUMzQiw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLHFCQUFxQjs7Ozs7O0lBRXJCLCtDQUErQzs7Ozs7SUFDeEQsbURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3RvZ2dsZS9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSkge1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnN0cnVjdHVyZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0ci5nZXRTZWxlY3RlZEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiBlbnRpdGllcy5tYXAoZW50ID0+IGVudC5nZXREYXRhKCkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19