/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
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
        this.subject$ = new HermesSubject();
        domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(hermesSwitchMap((/**
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
                .pipe(hermesTake(1), hermesMap((/**
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
                    selectedItems.push(new SelectedRow(item.getSourceItem(), j, item.getId()));
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
            this.subject$.next(this.map);
        }));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.subject$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.has(structureId.toString());
        })), hermesMap((/**
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
    FormationEventRepository.prototype.subject$;
    /**
     * @type {?}
     * @private
     */
    FormationEventRepository.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU01RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBc0Q7Ozs7O0lBTW5HLFlBQVksY0FBOEIsRUFDdEIsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osZUFBZTs7OztRQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztrQkFFNUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUU7O2tCQUN0QyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUUxQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUNyQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2IsU0FBUzs7OztZQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztzQkFFdEMsYUFBYSxHQUFHLEVBQUU7O3NCQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07O3NCQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQTRCO2dCQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzswQkFDMUMsSUFBSSxHQUFxQixRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2dCQUVELE9BQU87b0JBQ04sRUFBRSxFQUFFLFdBQVc7b0JBQ2YsS0FBSyxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FDRixDQUFDO1FBQ1IsQ0FBQyxFQUFDLENBQ0Y7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQWpFRCxVQUFVOzs7O1lBVkYsY0FBYztZQUdkLGVBQWU7Ozs7Ozs7SUFVdkIsdUNBQWlDOzs7OztJQUVqQyw0Q0FBZ0Q7Ozs7O0lBRzdDLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1N3aXRjaE1hcCwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YmplY3QkID0gbmV3IEhlcm1lc1N1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgoZXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSBldmVudC5nZXRTZWxlY3RlZFJvd3MoKTtcblx0XHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0ICAgLm9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAgPSBuZXcgTWFwPHN0cmluZywgT3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcC5zZXQoaXRlbXNbaV0uZ2V0SWQoKS50b1N0cmluZygpLCBpdGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSBpdGVtc01hcC5nZXQoc2VsZWN0ZWRSb3dzW2pdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldFNvdXJjZUl0ZW0oKSwgaiwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGlkOiBzdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXM6IHNlbGVjdGVkSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0dGhpcy5tYXAuc2V0KGUuaWQudG9TdHJpbmcoKSwgZS5pdGVtcyk7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCQubmV4dCh0aGlzLm1hcCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=