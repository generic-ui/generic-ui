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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUs1RjtJQUM4QyxvREFBc0Q7SUFNbkcsa0NBQVksY0FBOEIsRUFDdEIsZUFBZ0M7UUFEcEQsWUFFQyxrQkFBTSxjQUFjLENBQUMsU0E0Q3JCO1FBN0NtQixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMbkMsU0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsUUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNbkMsY0FBYzthQUNaLE9BQU8sQ0FDUCxtQkFBQSx1QkFBdUIsRUFBTyxDQUM5QjthQUNBLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsVUFBQyxLQUE4Qjs7Z0JBRWxDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFOztnQkFFdEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFFMUMsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDckIsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2lCQUMvQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQThCOztvQkFFNUIsYUFBYSxHQUFHLEVBQUU7O29CQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07O29CQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O3dCQUM1QyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNyRTtnQkFFRCxPQUFPO29CQUNOLEVBQUUsRUFBRSxXQUFXO29CQUNmLEtBQUssRUFBRSxhQUFhO2lCQUNwQixDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztRQUNSLENBQUMsRUFBQyxDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxFQUFFO2FBQ1IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEdBQVE7WUFDZixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBUTtZQUNaLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBbEVELFVBQVU7Ozs7Z0JBVkYsY0FBYztnQkFHZCxlQUFlOztJQTJFeEIsK0JBQUM7Q0FBQSxBQXBFRCxDQUM4QyxlQUFlLEdBbUU1RDtTQW5FWSx3QkFBd0I7Ozs7OztJQUVwQyx1Q0FBaUM7Ozs7O0lBRWpDLHNDQUFvQzs7Ozs7SUFHakMsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcyQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblxuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0XHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAgIC5vblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIHRha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0ICAgbWFwKChpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwLnNldChpdGVtc1tpXS5nZXRJZCgpLnRvU3RyaW5nKCksIGl0ZW1zW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGV0IGl0ZW0gPSBpdGVtc01hcC5nZXQoc2VsZWN0ZWRSb3dzW2pdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldERhdGEoKSwgaiwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGlkOiBzdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXM6IHNlbGVjdGVkSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0dGhpcy5tYXAuc2V0KGUuaWQudG9TdHJpbmcoKSwgZS5pdGVtcyk7XG5cdFx0XHRcdHRoaXMucyQubmV4dCh0aGlzLm1hcCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8U2VsZWN0ZWRSb3c+PiB7XG5cdFx0cmV0dXJuIHRoaXMucyRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuaGFzKHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19