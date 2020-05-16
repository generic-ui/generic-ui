/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { EditemItemValues } from './editem-item.values';
import { StructureSourceItemEditedEvent } from '../../../domain/source/origin/edit/structure.source-item-edited.event';
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
    onSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureSourceItemEditedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2UvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFJdkgsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixZQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsOEJBQThCLEVBQU8sQ0FDckM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN6RyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFxQyxFQUFFLEVBQUU7O2tCQUV2QyxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRTs7a0JBQy9DLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFO1lBRTdDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBUFcsY0FBYzs7Ozs7OztJQVV2Qiw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuL2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VFdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdH1cblxuXHRvblNvdXJjZUVkaXRlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEVkaXRlbUl0ZW1WYWx1ZXM+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGFmdGVySXRlbSA9IGV2ZW50LmdldEFmdGVySXRlbSgpLmdldERhdGEoKSxcblx0XHRcdFx0XHRcdFx0ICAgYmVmb3JlSXRlbSA9IGV2ZW50LmdldEJlZm9yZUl0ZW0oKS5nZXREYXRhKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgRWRpdGVtSXRlbVZhbHVlcyhhZnRlckl0ZW0sIGJlZm9yZUl0ZW0pO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==