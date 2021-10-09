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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU01RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBc0Q7Ozs7O0lBTW5HLFlBQVksY0FBOEIsRUFDdEIsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osZUFBZTs7OztRQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztrQkFFNUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUU7O2tCQUN0QyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUUxQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUNyQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2IsU0FBUzs7OztZQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztzQkFFdEMsYUFBYSxHQUFHLEVBQUU7O3NCQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07O3NCQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7OzBCQUMxQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTtnQkFFRCxPQUFPO29CQUNOLEVBQUUsRUFBRSxXQUFXO29CQUNmLEtBQUssRUFBRSxhQUFhO2lCQUNwQixDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztRQUNSLENBQUMsRUFBQyxDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7WUFqRUQsVUFBVTs7OztZQVZGLGNBQWM7WUFHZCxlQUFlOzs7Ozs7O0lBVXZCLHVDQUFpQzs7Ozs7SUFFakMsNENBQWdEOzs7OztJQUc3QyxtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnksIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNTd2l0Y2hNYXAsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJqZWN0JCA9IG5ldyBIZXJtZXNTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gZXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cdFx0XHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAgIC5vblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzTWFwKChpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwLnNldChpdGVtc1tpXS5nZXRJZCgpLnRvU3RyaW5nKCksIGl0ZW1zW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3QgaXRlbSA9IGl0ZW1zTWFwLmdldChzZWxlY3RlZFJvd3Nbal0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0RGF0YSgpLCBqLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaWQ6IHN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtczogc2VsZWN0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcC5zZXQoZS5pZC50b1N0cmluZygpLCBlLml0ZW1zKTtcblx0XHRcdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHRoaXMubWFwKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PFNlbGVjdGVkUm93Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmhhcyhzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==