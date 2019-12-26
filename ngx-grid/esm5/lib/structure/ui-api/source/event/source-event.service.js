/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { EditemItemValues } from './editem-item.values';
import { StructureSourceItemEditedEvent } from '../../../domain/source/command/origin/edit/structure.source-item-edited.event';
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
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUcvSDtJQUdDLDRCQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsOEJBQThCLEVBQU8sQ0FDckM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF2RCxDQUF1RCxFQUFDLEVBQ3ZGLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQXFDOztnQkFFbkMsU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUMvQyxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUU3QyxPQUFPLElBQUksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkF0QkQsVUFBVTs7OztnQkFQVyxjQUFjOztJQThCcEMseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxrQkFBa0I7Ozs7OztJQUVsQiw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuL2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUV2ZW50U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdG9uU291cmNlRWRpdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8RWRpdGVtSXRlbVZhbHVlcz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3QgYWZ0ZXJJdGVtID0gZXZlbnQuZ2V0QWZ0ZXJJdGVtKCkuZ2V0RGF0YSgpLFxuXHRcdFx0XHRcdFx0XHQgICBiZWZvcmVJdGVtID0gZXZlbnQuZ2V0QmVmb3JlSXRlbSgpLmdldERhdGEoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBFZGl0ZW1JdGVtVmFsdWVzKGFmdGVySXRlbSwgYmVmb3JlSXRlbSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19