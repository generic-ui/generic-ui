/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
export class FormationEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} sourceWarehouse
     */
    constructor(domainEventBus, sourceWarehouse) {
        super(domainEventBus);
        this.sourceWarehouse = sourceWarehouse;
        this.map = new Map();
        this.s$ = new Subject();
        domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const selectedRows = event.getSelectedRows();
            /** @type {?} */
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedEntities(structureId)
                .pipe(take(1), map((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                /** @type {?} */
                const selectedItems = [];
                /** @type {?} */
                const length = items.length;
                /** @type {?} */
                const itemsMap = new Map();
                for (let i = 0; i < length; i += 1) {
                    itemsMap.set(items[i].getId().toString(), items[i]);
                }
                for (let j = 0; j < selectedRows.length; j += 1) {
                    /** @type {?} */
                    const item = itemsMap.get(selectedRows[j]);
                    selectedItems.push(new SelectedRow(item.getData(), j, item.getId()));
                }
                return {
                    id: structureId,
                    items: selectedItems
                };
            })));
        })))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.map.set(e.id.toString(), e.items);
            this.s$.next(this.map);
        }));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.s$
            .asObservable()
            .pipe(filter((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.has(structureId.toString());
        })), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })));
    }
}
FormationEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: SourceWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationEventRepository.prototype.map;
    /**
     * @type {?}
     * @private
     */
    FormationEventRepository.prototype.s$;
    /**
     * @type {?}
     * @private
     */
    FormationEventRepository.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU01RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBc0Q7Ozs7O0lBTW5HLFlBQVksY0FBOEIsRUFDdEIsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE9BQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTW5DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztrQkFFdEMsWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUU7O2tCQUV0QyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUUxQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUNyQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7OztZQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztzQkFFaEMsYUFBYSxHQUFHLEVBQUU7O3NCQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07O3NCQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7OzBCQUMxQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTtnQkFFRCxPQUFPO29CQUNOLEVBQUUsRUFBRSxXQUFXO29CQUNmLEtBQUssRUFBRSxhQUFhO2lCQUNwQixDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztRQUNSLENBQUMsRUFBQyxDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsRUFBRTthQUNSLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNuQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7WUFsRUQsVUFBVTs7OztZQVZGLGNBQWM7WUFHZCxlQUFlOzs7Ozs7O0lBVXZCLHVDQUFpQzs7Ozs7SUFFakMsc0NBQW9DOzs7OztJQUdqQyxtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcyQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblxuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAgIC5vblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIHRha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0ICAgbWFwKChpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwLnNldChpdGVtc1tpXS5nZXRJZCgpLnRvU3RyaW5nKCksIGl0ZW1zW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3QgaXRlbSA9IGl0ZW1zTWFwLmdldChzZWxlY3RlZFJvd3Nbal0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0RGF0YSgpLCBqLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaWQ6IHN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtczogc2VsZWN0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcC5zZXQoZS5pZC50b1N0cmluZygpLCBlLml0ZW1zKTtcblx0XHRcdFx0dGhpcy5zJC5uZXh0KHRoaXMubWFwKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=