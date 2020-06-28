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
var FormationEventService = /** @class */ (function () {
    function FormationEventService(domainEventBus, sourceWarehouse) {
        this.domainEventBus = domainEventBus;
        this.sourceWarehouse = sourceWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationEventService.prototype.onItemSelected = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var selectedRows = event.getSelectedRows();
            return _this.sourceWarehouse
                .onPreparedEntities(structureId)
                .pipe(take(1), map((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                /** @type {?} */
                var selectedItems = [];
                /** @type {?} */
                var length = items.length;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var item = items[i];
                    if (selectedRows.some((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) { return row === item.getId().toString(); }))) {
                        selectedItems.push(new SelectedRow(item.getData(), i, item.getId()));
                    }
                };
                for (var i = 0; i < length; i += 1) {
                    _loop_1(i);
                }
                return selectedItems;
            })));
        })));
    };
    FormationEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationEventService.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: SourceWarehouse }
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
    FormationEventService.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDO0lBR0MsK0JBQTZCLGNBQThCLEVBQ3ZDLGVBQWdDO1FBRHZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFBdkMsaUJBa0NDO1FBaENBLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1CQUFBLHVCQUF1QixFQUFPLENBQzlCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQ3pHLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQThCOztnQkFFbEMsWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFFNUMsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDeEIsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2lCQUMvQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQThCOztvQkFFOUIsYUFBYSxHQUFHLEVBQUU7O29CQUNyQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07d0NBRWIsQ0FBQzs7d0JBRUwsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRW5CLElBQUksWUFBWSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUEvQixDQUErQixFQUFDLEVBQUU7d0JBQ3hFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNyRTs7Z0JBTkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQzs0QkFBekIsQ0FBQztpQkFPVDtnQkFDRCxPQUFPLGFBQWEsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FDRixDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQXpDRCxVQUFVOzs7O2dCQVRXLGNBQWM7Z0JBSTNCLGVBQWU7O0lBZ0R4Qiw0QkFBQztDQUFBLEFBM0NELElBMkNDO1NBMUNZLHFCQUFxQjs7Ozs7O0lBRXJCLCtDQUErQzs7Ozs7SUFDeEQsZ0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PFNlbGVjdGVkUm93Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5zb3VyY2VXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBsZXQgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlmIChzZWxlY3RlZFJvd3Muc29tZSgocm93OiBzdHJpbmcpID0+IHJvdyA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldERhdGEoKSwgaSwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=