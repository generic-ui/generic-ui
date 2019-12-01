/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { EditemItemValues } from './editem-item.values';
import { StructureSourceItemEditedEvent } from '../../../domain/source/command/origin/edit/structure.source-item-edited.event';
export class SourceEventService {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureSourceItemEditedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === structureId.toString())), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const afterItem = event.getAfterItem().getData();
            /** @type {?} */
            const beforeItem = event.getBeforeItem().getData();
            return new EditemItemValues(afterItem, beforeItem);
        })));
    }
}
SourceEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceEventService.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceEventService.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUkvSCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTlCLFlBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBRTFDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1CQUFBLDhCQUE4QixFQUFPLENBQ3JDO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQ3ZGLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXFDLEVBQUUsRUFBRTs7a0JBRXZDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFOztrQkFDL0MsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFN0MsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7WUFQVyxjQUFjOzs7Ozs7O0lBVXZCLDRDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4vZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0c2VsZWN0U291cmNlRWRpdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8RWRpdGVtSXRlbVZhbHVlcz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3QgYWZ0ZXJJdGVtID0gZXZlbnQuZ2V0QWZ0ZXJJdGVtKCkuZ2V0RGF0YSgpLFxuXHRcdFx0XHRcdFx0XHQgICBiZWZvcmVJdGVtID0gZXZlbnQuZ2V0QmVmb3JlSXRlbSgpLmdldERhdGEoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBFZGl0ZW1JdGVtVmFsdWVzKGFmdGVySXRlbSwgYmVmb3JlSXRlbSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19