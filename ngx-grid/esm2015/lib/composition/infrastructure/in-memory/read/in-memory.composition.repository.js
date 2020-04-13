/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryCompositionReadStore
     */
    constructor(domainEventBus, inMemoryCompositionReadStore) {
        super(domainEventBus);
        this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
        this.compositionIdToComposition = new Map();
        this.composition$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    on(aggregateId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => compositionIdToComposition.get(aggregateId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
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
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subscribe(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
        optComposition.ifPresent((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => {
            /** @type {?} */
            const key = composition.getId().toString();
            this.compositionIdToComposition.set(key, composition);
            this.composition$.next(this.compositionIdToComposition);
        }));
    }
}
InMemoryCompositionRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryCompositionReadStore }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNwSSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUsxSCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0NBQWtDOzs7OztJQU1wRixZQUFZLGNBQThCLEVBQy9CLDRCQUEwRDtRQUNwRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFEWixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBTHBELCtCQUEwQixHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1FBRXhFLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBSzNGLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLDBCQUFnRSxFQUFFLEVBQUU7O2tCQUVyRSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUUvQixPQUFPLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQywwQkFBZ0UsRUFBRSxFQUFFLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQzlILENBQUM7SUFDUixDQUFDOzs7OztJQUVTLFNBQVM7UUFDbEIsT0FBTztZQUNOLHVCQUF1QjtZQUN2Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyx3QkFBd0I7WUFDeEIsZ0NBQWdDO1lBQ2hDLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsbUJBQUEsZ0NBQWdDLEVBQU87U0FDdkMsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVTLFNBQVMsQ0FBQyxLQUFpQzs7Y0FFOUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7O2NBRXBDLGNBQWMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU3RSxjQUFjLENBQUMsU0FBUzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFOztrQkFDM0QsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFMUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUF0REQsVUFBVTs7OztZQWpCd0IsY0FBYztZQUl4Qyw0QkFBNEI7Ozs7Ozs7SUFnQnBDLG1FQUF5Rjs7Ozs7SUFFekYscURBQTJGOzs7OztJQUd4RixxRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jcmVhdGUvY29tcG9zaXRpb24tY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8UmVhZG9ubHk8Q29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KSA9PiBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5nZXQoYWdncmVnYXRlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdENvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0Q29tcG9zaXRpb24uaWZQcmVzZW50KChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IHtcblx0XHRcdGNvbnN0IGtleSA9IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5zZXQoa2V5LCBjb21wb3NpdGlvbik7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb24kLm5leHQodGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbik7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==