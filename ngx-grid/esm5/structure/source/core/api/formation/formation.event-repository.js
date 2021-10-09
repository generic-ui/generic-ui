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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVKLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFLNUY7SUFDOEMsb0RBQXNEO0lBTW5HLGtDQUFZLGNBQThCLEVBQ3RCLGVBQWdDO1FBRHBELFlBRUMsa0JBQU0sY0FBYyxDQUFDLFNBMkNyQjtRQTVDbUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFNBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGNBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLGNBQWM7YUFDWixPQUFPLENBQ1AsbUJBQUEsdUJBQXVCLEVBQU8sQ0FDOUI7YUFDQSxJQUFJLENBQ0osZUFBZTs7OztRQUFDLFVBQUMsS0FBOEI7O2dCQUV4QyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTs7Z0JBQ3RDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLE9BQU8sS0FBSSxDQUFDLGVBQWU7aUJBQ3JCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDL0IsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDYixTQUFTOzs7O1lBQUMsVUFBQyxLQUE4Qjs7b0JBRWxDLGFBQWEsR0FBRyxFQUFFOztvQkFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNOztvQkFDckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFO2dCQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFDMUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckU7Z0JBRUQsT0FBTztvQkFDTixFQUFFLEVBQUUsV0FBVztvQkFDZixLQUFLLEVBQUUsYUFBYTtpQkFDcEIsQ0FBQztZQUNILENBQUMsRUFBQyxDQUNGLENBQUM7UUFDUixDQUFDLEVBQUMsQ0FDRjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUM7WUFDWixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBakVELFVBQVU7Ozs7Z0JBVkYsY0FBYztnQkFHZCxlQUFlOztJQTBFeEIsK0JBQUM7Q0FBQSxBQW5FRCxDQUM4QyxlQUFlLEdBa0U1RDtTQWxFWSx3QkFBd0I7Ozs7OztJQUVwQyx1Q0FBaUM7Ozs7O0lBRWpDLDRDQUFnRDs7Ozs7SUFHN0MsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5LCBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzU3dpdGNoTWFwLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViamVjdCQgPSBuZXcgSGVybWVzU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblxuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzU3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXHRcdFx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcCA9IG5ldyBNYXAoKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcC5zZXQoaXRlbXNbaV0uZ2V0SWQoKS50b1N0cmluZygpLCBpdGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGl0ZW0gPSBpdGVtc01hcC5nZXQoc2VsZWN0ZWRSb3dzW2pdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldERhdGEoKSwgaiwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGlkOiBzdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXM6IHNlbGVjdGVkSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0dGhpcy5tYXAuc2V0KGUuaWQudG9TdHJpbmcoKSwgZS5pdGVtcyk7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCQubmV4dCh0aGlzLm1hcCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=