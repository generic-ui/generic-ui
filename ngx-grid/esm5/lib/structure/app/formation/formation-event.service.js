/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureQueryService } from '../structure/structure-query.service';
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
    FormationEventService.prototype.selectItemSelected = /**
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
                .select(structureId)
                .pipe(map((/**
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
        { type: StructureQueryService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLM0c7SUFHQywrQkFBNkIsY0FBOEIsRUFDaEQscUJBQTRDO1FBRDFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ3ZELENBQUM7Ozs7O0lBRUQsa0RBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXdCO1FBQTNDLGlCQWtCQztRQWhCQSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCx1QkFBdUIsQ0FDdkI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF2RCxDQUF1RCxFQUFDLEVBQ3ZGLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTVCLE9BQU8sS0FBSSxDQUFDLHFCQUFxQjtpQkFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztpQkFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLEdBQWMsSUFBSyxPQUFBLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUF6QixDQUF5QixFQUFDLEVBQ2xELEdBQUc7Ozs7WUFBQyxVQUFDLFFBQXVCLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFiLENBQWEsRUFBQyxFQUFsQyxDQUFrQyxFQUFDLENBQ3BFLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBVFcsY0FBYztnQkFFM0IscUJBQXFCOztJQWtDOUIsNEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSxxQkFBcUI7Ozs7OztJQUVyQiwrQ0FBK0M7Ozs7O0lBQ3hELHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvdG9nZ2xlL3NlbGVjdGVkLXJvdy10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVRdWVyeVNlcnZpY2U6IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSkge1xuXHR9XG5cblx0c2VsZWN0SXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChzdHI6IFN0cnVjdHVyZSkgPT4gc3RyLmdldFNlbGVjdGVkRW50aXRpZXMoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChlbnRpdGllczogQXJyYXk8RW50aXR5PikgPT4gZW50aXRpZXMubWFwKGVudCA9PiBlbnQuZ2V0RGF0YSgpKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==