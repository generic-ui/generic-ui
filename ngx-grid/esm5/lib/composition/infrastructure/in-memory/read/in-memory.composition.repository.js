/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../read/composition.read-model-root-repository';
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
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.on = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) {
            /** @type {?} */
            var key = aggregateId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) { return compositionIdToComposition.get(aggregateId.getId()); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdkcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDcEgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0gsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHMUg7SUFDbUQseURBQWtDO0lBTXBGLHVDQUFZLGNBQThCLEVBQy9CLDRCQUEwRDtRQURyRSxZQUVDLGtCQUFNLGNBQWMsQ0FBQyxTQUNyQjtRQUZVLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFMcEQsZ0NBQTBCLEdBQUcsSUFBSSxHQUFHLEVBQW1DLENBQUM7UUFFeEUsa0JBQVksR0FBRyxJQUFJLGFBQWEsQ0FBdUMsQ0FBQyxDQUFDLENBQUM7O0lBSzNGLENBQUM7Ozs7O0lBRUQsMENBQUU7Ozs7SUFBRixVQUFHLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLDBCQUFnRTs7Z0JBRWpFLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8sMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLDBCQUFnRSxJQUFLLE9BQUEsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFuRCxDQUFtRCxFQUFDLENBQzlILENBQUM7SUFDUixDQUFDOzs7OztJQUVTLGlEQUFTOzs7O0lBQW5CO1FBQ0MsT0FBTztZQUNOLHVCQUF1QjtZQUN2Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyx3QkFBd0I7WUFDeEIsZ0NBQWdDO1lBQ2hDLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsbUJBQUEsZ0NBQWdDLEVBQU87U0FDdkMsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVTLGlEQUFTOzs7OztJQUFuQixVQUFvQixLQUFrQjtRQUF0QyxpQkFhQzs7WUFYTSxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTs7WUFFcEMsY0FBYyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTdFLGNBQWMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxXQUFvQzs7Z0JBQ3ZELEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBRTFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXRELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdERELFVBQVU7Ozs7Z0JBaEJ3QixjQUFjO2dCQUl4Qyw0QkFBNEI7O0lBbUVyQyxvQ0FBQztDQUFBLEFBdkRELENBQ21ELGtDQUFrQyxHQXNEcEY7U0F0RFksNkJBQTZCOzs7Ozs7SUFFekMsbUVBQXlGOzs7OztJQUV6RixxREFBMkY7Ozs7O0lBR3hGLHFFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZWFkLXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS9jb21wb3NpdGlvbi1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8UmVhZG9ubHk8Q29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KSA9PiBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5nZXQoYWdncmVnYXRlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdENvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0Q29tcG9zaXRpb24uaWZQcmVzZW50KChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IHtcblx0XHRcdGNvbnN0IGtleSA9IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5zZXQoa2V5LCBjb21wb3NpdGlvbik7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb24kLm5leHQodGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbik7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==