/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
export class FormationEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} sourceWarehouse
     */
    constructor(domainEventBus, sourceWarehouse) {
        this.domainEventBus = domainEventBus;
        this.sourceWarehouse = sourceWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const selectedRows = event.getSelectedRows();
            return this.sourceWarehouse
                .onPreparedEntities(structureId)
                .pipe(take(1), map((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                /** @type {?} */
                let selectedItems = [];
                /** @type {?} */
                let length = items.length;
                for (let i = 0; i < length; i += 1) {
                    /** @type {?} */
                    let item = items[i];
                    if (selectedRows.some((/**
                     * @param {?} row
                     * @return {?}
                     */
                    (row) => row === item.getId().toString()))) {
                        selectedItems.push(new SelectedRow(item.getData(), i, item.getId()));
                    }
                }
                return selectedItems;
            })));
        })));
    }
}
FormationEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: SourceWarehouse }
];
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
    FormationEventService.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWpDLFlBQTZCLGNBQThCLEVBQ3ZDLGVBQWdDO1FBRHZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN6RyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O2tCQUV0QyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUU1QyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUN4QixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7OztZQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztvQkFFbEMsYUFBYSxHQUFHLEVBQUU7O29CQUNyQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07Z0JBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7d0JBRS9CLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVuQixJQUFJLFlBQVksQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUU7d0JBQ3hFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNyRTtpQkFDRDtnQkFDRCxPQUFPLGFBQWEsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FDRixDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXpDRCxVQUFVOzs7O1lBVFcsY0FBYztZQUkzQixlQUFlOzs7Ozs7O0lBUVgsK0NBQStDOzs7OztJQUN4RCxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8U2VsZWN0ZWRSb3c+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gZXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnNvdXJjZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGxldCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGxldCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaWYgKHNlbGVjdGVkUm93cy5zb21lKChyb3c6IHN0cmluZykgPT4gcm93ID09PSBpdGVtLmdldElkKCkudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0RGF0YSgpLCBpLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHNlbGVjdGVkSXRlbXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==