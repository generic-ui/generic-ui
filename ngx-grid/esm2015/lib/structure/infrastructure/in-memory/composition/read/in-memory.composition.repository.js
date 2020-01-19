/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../../domain/composition/read/composition.repository';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionInitedEvent } from '../../../../domain/composition/command/init/composition-inited.event';
import { CompositionResizeWidthSetEvent } from '../../../../domain/composition/command/width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from '../../../../domain/composition/command/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../../../domain/composition/command/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../../../domain/composition/command/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../../../domain/composition/command/column/sort/composition-change-sort-status.event';
import { CompositionColumnSetEnabledEvent } from '../../../../domain/composition/command/column/set-enabled/composition.column-set-enabled.event';
export class InMemoryCompositionRepository extends CompositionRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryCompositionQueryStore
     */
    constructor(domainEventBus, inMemoryCompositionQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        this.composition$ = new ReplaySubject(1);
        this.unsubscribe$ = new Subject();
        this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, CompositionColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, CompositionColumnSetEnabledEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
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
            this.composition$.next(composition);
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
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getId().toString() === aggregateId.toString())), filter((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isReady())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQTRCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRW5HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhGQUE4RixDQUFDO0FBQzlJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdHQUF3RyxDQUFDO0FBQzNKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQzlILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzNJLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdHQUFnRyxDQUFDO0FBSWxKLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxxQkFBcUI7Ozs7O0lBTXZFLFlBQW9CLGNBQThCLEVBQ3ZDLDZCQUEyRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUZXLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQThCO1FBTHJELGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQWMsQ0FBQyxDQUFDLENBQUM7UUFFakQsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTdDLElBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxzQkFBc0IsRUFDdEIsOEJBQThCLEVBQzlCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLGdDQUFnQyxFQUNoQyxtQkFBQSxnQ0FBZ0MsRUFBTyxDQUN2QzthQUNBLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUM1QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTs7a0JBRTNCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVzs7a0JBRS9CLFdBQVcsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUUzRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDL0YsTUFBTTs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQzNELENBQUM7SUFDUixDQUFDOzs7WUEvQ0QsVUFBVTs7OztZQWR3QixjQUFjO1lBSXhDLDRCQUE0Qjs7Ozs7OztJQWFwQyxxREFBa0U7Ozs7O0lBRWxFLHFEQUE4Qzs7Ozs7SUFFbEMsdURBQXNDOzs7OztJQUMvQyxzRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2luaXQvY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZXBvc2l0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENvbXBvc2l0aW9uPigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdENvbXBvc2l0aW9uSW5pdGVkRXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdFx0dGhpcy5jb21wb3NpdGlvbiQubmV4dChjb21wb3NpdGlvbik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b24oYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0SWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZWFkeSgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==