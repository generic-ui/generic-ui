/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
var FormationEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(FormationEventRepository, _super);
    function FormationEventRepository(domainEventBus, sourceWarehouse) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.sourceWarehouse = sourceWarehouse;
        _this.map = new Map();
        _this.subject$ = new HermesSubject();
        domainEventBus
            .ofEvent((/** @type {?} */ (SelectedRowChangedEvent)))
            .pipe(hermesSwitchMap((/**
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
                .pipe(hermesTake(1), hermesMap((/**
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
        function (e) {
            _this.map.set(e.id.toString(), e.items);
            _this.subject$.next(_this.map);
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
        return this.subject$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.has(structureId.toString());
        })), hermesMap((/**
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
    FormationEventRepository.prototype.subject$;
    /**
     * @type {?}
     * @private
     */
    FormationEventRepository.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVKLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFLNUY7SUFDOEMsb0RBQXNEO0lBTW5HLGtDQUFZLGNBQThCLEVBQ3RCLGVBQWdDO1FBRHBELFlBRUMsa0JBQU0sY0FBYyxDQUFDLFNBMkNyQjtRQTVDbUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGNBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osZUFBZTs7OztRQUFDLFVBQUMsS0FBOEI7O2dCQUV4QyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTs7Z0JBQ3RDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLE9BQU8sS0FBSSxDQUFDLGVBQWU7aUJBQ3JCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDL0IsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDYixTQUFTOzs7O1lBQUMsVUFBQyxLQUE4Qjs7b0JBRWxDLGFBQWEsR0FBRyxFQUFFOztvQkFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNOztvQkFDckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUE0QjtnQkFFL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7d0JBQzFDLElBQUksR0FBcUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMzRTtnQkFFRCxPQUFPO29CQUNOLEVBQUUsRUFBRSxXQUFXO29CQUNmLEtBQUssRUFBRSxhQUFhO2lCQUNwQixDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztRQUNSLENBQUMsRUFBQyxDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLEdBQVE7WUFDckIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQVE7WUFDbEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkFqRUQsVUFBVTs7OztnQkFWRixjQUFjO2dCQUdkLGVBQWU7O0lBMEV4QiwrQkFBQztDQUFBLEFBbkVELENBQzhDLGVBQWUsR0FrRTVEO1NBbEVZLHdCQUF3Qjs7Ozs7O0lBRXBDLHVDQUFpQzs7Ozs7SUFFakMsNENBQWdEOzs7OztJQUc3QyxtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnksIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNTd2l0Y2hNYXAsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJqZWN0JCA9IG5ldyBIZXJtZXNTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gZXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cdFx0XHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAgIC5vblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzTWFwKChpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwID0gbmV3IE1hcDxzdHJpbmcsIE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAuc2V0KGl0ZW1zW2ldLmdldElkKCkudG9TdHJpbmcoKSwgaXRlbXNbaV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGVjdGVkUm93cy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gaXRlbXNNYXAuZ2V0KHNlbGVjdGVkUm93c1tqXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXRTb3VyY2VJdGVtKCksIGosIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpZDogc3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zOiBzZWxlY3RlZEl0ZW1zXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0XHRcdCAgICk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdHRoaXMubWFwLnNldChlLmlkLnRvU3RyaW5nKCksIGUuaXRlbXMpO1xuXHRcdFx0XHR0aGlzLnN1YmplY3QkLm5leHQodGhpcy5tYXApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8U2VsZWN0ZWRSb3c+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuaGFzKHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19