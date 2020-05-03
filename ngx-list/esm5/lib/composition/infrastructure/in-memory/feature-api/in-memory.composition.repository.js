/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../feature-api/read/composition.read-model-root-repository';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionCreatedEvent } from '../../../domain/create/composition-created.event';
import { CompositionResizeWidthSetEvent } from '../../../domain/width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from '../../../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../../domain/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../../domain/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../../domain/column/sort/composition-change-sort-status.event';
import { CompositionColumnSetEnabledEvent } from '../../../domain/column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from '../../../domain/column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from '../../../domain/column/move/right/composition.column-moved-right.event';
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionReadStore) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
        _this.compositionIdToComposition = new Map();
        _this.composition$ = new ReplaySubject(1);
        return _this;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.on = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) {
            /** @type {?} */
            var key = compositionId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) { return compositionIdToComposition.get(compositionId.getId()); })));
    };
    /**
     * @protected
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.forEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        return [
            CompositionCreatedEvent,
            CompositionResizeWidthSetEvent,
            CompositionColumnsSetEvent,
            CompositionContainerWidthSetEvent,
            CompositionWidthSetEvent,
            CompositionColumnSetEnabledEvent,
            CompositionColumnMovedLeftEvent,
            CompositionColumnMovedRightEvent,
            (/** @type {?} */ (CompositionChangeSortStatusEvent))
        ];
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.subscribe = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var aggregateId = event.getAggregateId();
        /** @type {?} */
        var optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
        optComposition.ifPresent((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) {
            /** @type {?} */
            var key = composition.getId().toString();
            _this.compositionIdToComposition.set(key, composition);
            _this.composition$.next(_this.compositionIdToComposition);
        }));
    };
    InMemoryCompositionRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryCompositionReadStore }
    ]; };
    return InMemoryCompositionRepository;
}(CompositionReadModelRootRepository));
export { InMemoryCompositionRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.compositionIdToComposition;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.composition$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.inMemoryCompositionReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZmVhdHVyZS1hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQTRCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRXRILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBSTFIO0lBQ21ELHlEQUFrQztJQU1wRix1Q0FBWSxjQUE4QixFQUMvQiw0QkFBMEQ7UUFEckUsWUFFQyxrQkFBTSxjQUFjLENBQUMsU0FDckI7UUFGVSxrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBTHBELGdDQUEwQixHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1FBRXhFLGtCQUFZLEdBQUcsSUFBSSxhQUFhLENBQXVDLENBQUMsQ0FBQyxDQUFDOztJQUszRixDQUFDOzs7OztJQUVELDBDQUFFOzs7O0lBQUYsVUFBRyxhQUE0QjtRQUU5QixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ2xCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQywwQkFBZ0U7O2dCQUVqRSxHQUFHLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRTtZQUVqQyxPQUFPLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQywwQkFBZ0UsSUFBSyxPQUFBLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBckQsQ0FBcUQsRUFBQyxDQUNoSSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFUyxpREFBUzs7OztJQUFuQjtRQUNDLE9BQU87WUFDTix1QkFBdUI7WUFDdkIsOEJBQThCO1lBQzlCLDBCQUEwQjtZQUMxQixpQ0FBaUM7WUFDakMsd0JBQXdCO1lBQ3hCLGdDQUFnQztZQUNoQywrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBQ2hDLG1CQUFBLGdDQUFnQyxFQUFPO1NBQ3ZDLENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFUyxpREFBUzs7Ozs7SUFBbkIsVUFBb0IsS0FBaUM7UUFBckQsaUJBYUM7O1lBWE0sV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7O1lBRXBDLGNBQWMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU3RSxjQUFjLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsV0FBb0M7O2dCQUN2RCxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUUxQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV0RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXRERCxVQUFVOzs7O2dCQWpCd0IsY0FBYztnQkFJeEMsNEJBQTRCOztJQW9FckMsb0NBQUM7Q0FBQSxBQXZERCxDQUNtRCxrQ0FBa0MsR0FzRHBGO1NBdERZLDZCQUE2Qjs7Ozs7O0lBRXpDLG1FQUF5Rjs7Ozs7SUFFekYscURBQTJGOzs7OztJQUd4RixxRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jcmVhdGUvY29tcG9zaXRpb24tY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPFJlYWRvbmx5PENvbXBvc2l0aW9uUmVhZE1vZGVSb290Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uOiBNYXA8c3RyaW5nLCBDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gY29tcG9zaXRpb25JZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KSA9PiBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5nZXQoY29tcG9zaXRpb25JZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByb3RlY3RlZCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGFzIGFueVxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3Vic2NyaWJlKGV2ZW50OiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0Q29tcG9zaXRpb24gPSB0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRDb21wb3NpdGlvbi5pZlByZXNlbnQoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4ge1xuXHRcdFx0Y29uc3Qga2V5ID0gY29tcG9zaXRpb24uZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLnNldChrZXksIGNvbXBvc2l0aW9uKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbiQubmV4dCh0aGlzLmNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uKTtcblx0XHR9KTtcblx0fVxufVxuIl19