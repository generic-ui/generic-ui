/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
var FormationEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(FormationEventRepository, _super);
    function FormationEventRepository(domainEventBus, sourceWarehouse) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.sourceWarehouse = sourceWarehouse;
        _this.map = new Map();
        _this.s$ = new Subject();
        domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var selectedRows = event.getSelectedRows();
            /** @type {?} */
            var structureId = event.getAggregateId();
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
                /** @type {?} */
                var itemsMap = new Map();
                for (var i = 0; i < length; i += 1) {
                    itemsMap.set(items[i].getId().toString(), items[i]);
                }
                for (var j = 0; j < selectedRows.length; j += 1) {
                    /** @type {?} */
                    var item = itemsMap.get(selectedRows[j]);
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
        function (e) {
            _this.map.set(e.id.toString(), e.items);
            _this.s$.next(_this.map);
        }));
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationEventRepository.prototype.onItemSelected = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.s$
            .asObservable()
            .pipe(filter((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.has(structureId.toString());
        })), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })));
    };
    FormationEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: SourceWarehouse }
    ]; };
    return FormationEventRepository;
}(EventRepository));
export { FormationEventRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFLNUY7SUFDOEMsb0RBQXNEO0lBTW5HLGtDQUFZLGNBQThCLEVBQ3RCLGVBQWdDO1FBRHBELFlBRUMsa0JBQU0sY0FBYyxDQUFDLFNBNENyQjtRQTdDbUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLFFBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTW5DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osU0FBUzs7OztRQUFDLFVBQUMsS0FBOEI7O2dCQUVsQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTs7Z0JBRXRDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLE9BQU8sS0FBSSxDQUFDLGVBQWU7aUJBQ3JCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDL0IsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsVUFBQyxLQUE4Qjs7b0JBRTVCLGFBQWEsR0FBRyxFQUFFOztvQkFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNOztvQkFDckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFO2dCQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFDNUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckU7Z0JBRUQsT0FBTztvQkFDTixFQUFFLEVBQUUsV0FBVztvQkFDZixLQUFLLEVBQUUsYUFBYTtpQkFDcEIsQ0FBQztZQUNILENBQUMsRUFBQyxDQUNGLENBQUM7UUFDUixDQUFDLEVBQUMsQ0FDRjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUM7WUFDWixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsRUFBRTthQUNSLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ2YsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQVE7WUFDWixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQWxFRCxVQUFVOzs7O2dCQVZGLGNBQWM7Z0JBR2QsZUFBZTs7SUEyRXhCLCtCQUFDO0NBQUEsQUFwRUQsQ0FDOEMsZUFBZSxHQW1FNUQ7U0FuRVksd0JBQXdCOzs7Ozs7SUFFcEMsdUNBQWlDOzs7OztJQUVqQyxzQ0FBb0M7Ozs7O0lBR2pDLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRzd2l0Y2hNYXAoKGV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gZXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0ICAgLm9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0ICAgdGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHQgICBtYXAoKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAuc2V0KGl0ZW1zW2ldLmdldElkKCkudG9TdHJpbmcoKSwgaXRlbXNbaV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGVjdGVkUm93cy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZXQgaXRlbSA9IGl0ZW1zTWFwLmdldChzZWxlY3RlZFJvd3Nbal0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0RGF0YSgpLCBqLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaWQ6IHN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtczogc2VsZWN0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcC5zZXQoZS5pZC50b1N0cmluZygpLCBlLml0ZW1zKTtcblx0XHRcdFx0dGhpcy5zJC5uZXh0KHRoaXMubWFwKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=