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
                    let item = itemsMap.get(selectedRows[j]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTTVGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFzRDs7Ozs7SUFNbkcsWUFBWSxjQUE4QixFQUN0QixlQUFnQztRQUNuRCxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFESCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMbkMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBRSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNbkMsY0FBYzthQUNaLE9BQU8sQ0FDUCxtQkFBQSx1QkFBdUIsRUFBTyxDQUM5QjthQUNBLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O2tCQUV0QyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTs7a0JBRXRDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLE9BQU8sSUFBSSxDQUFDLGVBQWU7aUJBQ3JCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDL0IsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O3NCQUVoQyxhQUFhLEdBQUcsRUFBRTs7c0JBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7c0JBQ3JCLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFFckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7d0JBQzVDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO2dCQUVELE9BQU87b0JBQ04sRUFBRSxFQUFFLFdBQVc7b0JBQ2YsS0FBSyxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FDRixDQUFDO1FBQ1IsQ0FBQyxFQUFDLENBQ0Y7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxFQUFFO2FBQ1IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ25CLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNoQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQWxFRCxVQUFVOzs7O1lBVkYsY0FBYztZQUdkLGVBQWU7Ozs7Ozs7SUFVdkIsdUNBQWlDOzs7OztJQUVqQyxzQ0FBb0M7Ozs7O0lBR2pDLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHMkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHN3aXRjaE1hcCgoZXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSBldmVudC5nZXRTZWxlY3RlZFJvd3MoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHQgICB0YWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdCAgIG1hcCgoaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcCA9IG5ldyBNYXAoKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcC5zZXQoaXRlbXNbaV0uZ2V0SWQoKS50b1N0cmluZygpLCBpdGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxldCBpdGVtID0gaXRlbXNNYXAuZ2V0KHNlbGVjdGVkUm93c1tqXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXREYXRhKCksIGosIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpZDogc3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zOiBzZWxlY3RlZEl0ZW1zXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0XHRcdCAgICk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdHRoaXMubWFwLnNldChlLmlkLnRvU3RyaW5nKCksIGUuaXRlbXMpO1xuXHRcdFx0XHR0aGlzLnMkLm5leHQodGhpcy5tYXApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PFNlbGVjdGVkUm93Pj4ge1xuXHRcdHJldHVybiB0aGlzLnMkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmhhcyhzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==