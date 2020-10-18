/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../domain-read/composition.read-model-root-repository';
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
     * @param {?} compositionId
     * @return {?}
     */
    on(compositionId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => {
            /** @type {?} */
            const key = compositionId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        (compositionIdToComposition) => compositionIdToComposition.get(compositionId.getId()))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRWpILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBSzFILE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQ0FBa0M7Ozs7O0lBTXBGLFlBQVksY0FBOEIsRUFDL0IsNEJBQTBEO1FBQ3BFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQURaLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFMcEQsK0JBQTBCLEdBQUcsSUFBSSxHQUFHLEVBQW1DLENBQUM7UUFFeEUsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBdUMsQ0FBQyxDQUFDLENBQUM7SUFLM0YsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsYUFBNEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNsQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsMEJBQWdFLEVBQUUsRUFBRTs7a0JBRXJFLEdBQUcsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBRWpDLE9BQU8sMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLDBCQUFnRSxFQUFFLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FDaEksQ0FBQztJQUNSLENBQUM7Ozs7O0lBRVMsU0FBUztRQUNsQixPQUFPO1lBQ04sdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5QiwwQkFBMEI7WUFDMUIsaUNBQWlDO1lBQ2pDLHdCQUF3QjtZQUN4QixnQ0FBZ0M7WUFDaEMsK0JBQStCO1lBQy9CLGdDQUFnQztZQUNoQyxtQkFBQSxnQ0FBZ0MsRUFBTztTQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsU0FBUyxDQUFDLEtBQWlDOztjQUU5QyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTs7Y0FFcEMsY0FBYyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTdFLGNBQWMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUU7O2tCQUMzRCxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUUxQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQXRERCxVQUFVOzs7O1lBakJXLGNBQWM7WUFJM0IsNEJBQTRCOzs7Ozs7O0lBZ0JwQyxtRUFBeUY7Ozs7O0lBRXpGLHFEQUEyRjs7Ozs7SUFHeEYscUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZWFkLXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS9jb21wb3NpdGlvbi1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24gPSBuZXcgTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8UmVhZG9ubHk8Q29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBjb21wb3NpdGlvbklkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uOiBNYXA8c3RyaW5nLCBDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4pID0+IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLmdldChjb21wb3NpdGlvbklkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q29tcG9zaXRpb25DcmVhdGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgYXMgYW55XG5cdFx0XTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdWJzY3JpYmUoZXZlbnQ6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRDb21wb3NpdGlvbiA9IHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdENvbXBvc2l0aW9uLmlmUHJlc2VudCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiB7XG5cdFx0XHRjb25zdCBrZXkgPSBjb21wb3NpdGlvbi5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uc2V0KGtleSwgY29tcG9zaXRpb24pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24pO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=