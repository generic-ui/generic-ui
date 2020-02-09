/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelService } from '../structure/structure-read-model.service';
import { SelectedRowToggledEvent } from '../../domain/formation/command/toggle/selected-row-toggled.event';
var FormationEventService = /** @class */ (function () {
    function FormationEventService(domainEventBus, structureQueryService) {
        this.domainEventBus = domainEventBus;
        this.structureQueryService = structureQueryService;
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
            .ofEvent(SelectedRowToggledEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.structureQueryService
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
        { type: StructureReadModelService }
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
    FormationEventService.prototype.structureQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBSzNHO0lBR0MsK0JBQTZCLGNBQThCLEVBQ3ZDLHFCQUFnRDtRQUR2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEyQjtJQUNwRSxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUF2QyxpQkFtQkM7UUFqQkEsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsdUJBQXVCLENBQ3ZCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBdkQsQ0FBdUQsRUFBQyxFQUN2RixTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUU1QixPQUFPLEtBQUksQ0FBQyxxQkFBcUI7aUJBQzlCLFdBQVcsQ0FBQyxXQUFXLENBQUM7aUJBQ3hCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7OztZQUFDLFVBQUMsR0FBYyxJQUFLLE9BQUEsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQXpCLENBQXlCLEVBQUMsRUFDbEQsR0FBRzs7OztZQUFDLFVBQUMsUUFBMkIsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQWIsQ0FBYSxFQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FDeEUsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkExQkQsVUFBVTs7OztnQkFUVyxjQUFjO2dCQUUzQix5QkFBeUI7O0lBbUNsQyw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLHFCQUFxQjs7Ozs7O0lBRXJCLCtDQUErQzs7Ozs7SUFDeEQsc0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29tbWFuZC90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblN0cnVjdHVyZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHN0cjogU3RydWN0dXJlKSA9PiBzdHIuZ2V0U2VsZWN0ZWRFbnRpdGllcygpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4gZW50aXRpZXMubWFwKGVudCA9PiBlbnQuZ2V0RGF0YSgpKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==