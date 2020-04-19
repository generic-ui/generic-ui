/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { EditemItemValues } from './editem-item.values';
import { StructureSourceItemEditedEvent } from '../../../domain/source/origin/edit/structure.source-item-edited.event';
var SourceEventService = /** @class */ (function () {
    function SourceEventService(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceEventService.prototype.onSourceEdited = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureSourceItemEditedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var afterItem = event.getAfterItem().getData();
            /** @type {?} */
            var beforeItem = event.getBeforeItem().getData();
            return new EditemItemValues(afterItem, beforeItem);
        })));
    };
    SourceEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceEventService.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SourceEventService;
}());
export { SourceEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceEventService.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc291cmNlL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBR3ZIO0lBR0MsNEJBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSw4QkFBOEIsRUFBTyxDQUNyQzthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBNUQsQ0FBNEQsRUFBQyxFQUN6RyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFxQzs7Z0JBRW5DLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFDL0MsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFN0MsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBUFcsY0FBYzs7SUE4QnBDLHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0Qlksa0JBQWtCOzs7Ozs7SUFFbEIsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxFZGl0ZW1JdGVtVmFsdWVzPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBhZnRlckl0ZW0gPSBldmVudC5nZXRBZnRlckl0ZW0oKS5nZXREYXRhKCksXG5cdFx0XHRcdFx0XHRcdCAgIGJlZm9yZUl0ZW0gPSBldmVudC5nZXRCZWZvcmVJdGVtKCkuZ2V0RGF0YSgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbmV3IEVkaXRlbUl0ZW1WYWx1ZXMoYWZ0ZXJJdGVtLCBiZWZvcmVJdGVtKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=