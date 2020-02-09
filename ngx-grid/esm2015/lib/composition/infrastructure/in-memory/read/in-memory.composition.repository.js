/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../domain/read/composition.repository';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionInitedEvent } from '../../../domain/command/init/composition-inited.event';
import { CompositionResizeWidthSetEvent } from '../../../domain/command/width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from '../../../domain/command/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../../domain/command/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../../domain/command/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../../domain/command/column/sort/composition-change-sort-status.event';
import { CompositionColumnSetEnabledEvent } from '../../../domain/command/column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from '../../../domain/command/column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from '../../../domain/command/column/move/right/composition.column-moved-right.event';
export class InMemoryCompositionRepository extends CompositionRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryCompositionQueryStore
     */
    constructor(domainEventBus, inMemoryCompositionQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        this.compositionIdToComposition = new Map();
        this.composition$ = new ReplaySubject(1);
        this.unsubscribe$ = new Subject();
        this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, CompositionColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, CompositionColumnSetEnabledEvent, CompositionColumnMovedLeftEvent, CompositionColumnMovedRightEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.aggregateId;
            /** @type {?} */
            const composition = this.inMemoryCompositionQueryStore.getById(aggregateId);
            /** @type {?} */
            const key = composition.getId().toString();
            this.compositionIdToComposition.set(key, composition);
            this.composition$.next(this.compositionIdToComposition);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
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
    InMemoryCompositionRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.inMemoryCompositionQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQTRCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQy9ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzVJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ25JLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBS2xJLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxxQkFBcUI7Ozs7O0lBUXZFLFlBQW9CLGNBQThCLEVBQ3ZDLDZCQUEyRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUZXLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQThCO1FBUHJELCtCQUEwQixHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO1FBRTVELGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQTJCLENBQUMsQ0FBQyxDQUFDO1FBRTlELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU03QyxJQUFJLENBQUMsY0FBYzthQUNqQixPQUFPLENBQ1Asc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsaUNBQWlDLEVBQ2pDLHdCQUF3QixFQUN4QixnQ0FBZ0MsRUFDaEMsK0JBQStCLEVBQy9CLGdDQUFnQyxFQUNoQyxtQkFBQSxnQ0FBZ0MsRUFBTyxDQUN2QzthQUNBLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUM1QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTs7a0JBRTNCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVzs7a0JBRS9CLFdBQVcsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7a0JBQzFFLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBRXJDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsV0FBd0I7UUFFMUIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNsQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsMEJBQW9ELEVBQUUsRUFBRTs7a0JBRXpELEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8sMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLDBCQUFvRCxFQUFFLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FDbEgsQ0FBQztJQUNSLENBQUM7OztZQTNERCxVQUFVOzs7O1lBakJ3QixjQUFjO1lBSXhDLDRCQUE0Qjs7Ozs7OztJQWdCcEMsbUVBQTZFOzs7OztJQUU3RSxxREFBK0U7Ozs7O0lBRS9FLHFEQUE4Qzs7Ozs7SUFFbEMsdURBQXNDOzs7OztJQUMvQyxzRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2luaXQvY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZXBvc2l0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQ29tcG9zaXRpb24+PigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdENvbXBvc2l0aW9uSW5pdGVkRXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuYWdncmVnYXRlSWQ7XG5cblx0XHRcdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpLFxuXHRcdFx0XHRcdGtleSA9IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLnNldChrZXksIGNvbXBvc2l0aW9uKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8Q29tcG9zaXRpb24+IHtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb24+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGFnZ3JlZ2F0ZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uOiBNYXA8c3RyaW5nLCBDb21wb3NpdGlvbj4pID0+IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLmdldChhZ2dyZWdhdGVJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=