/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDL0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDL0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDNUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDL0gsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFJbEksTUFBTSxPQUFPLDZCQUE4QixTQUFRLHFCQUFxQjs7Ozs7SUFNdkUsWUFBb0IsY0FBOEIsRUFDdkMsNkJBQTJEO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBRlcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBOEI7UUFMckQsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBYyxDQUFDLENBQUMsQ0FBQztRQUVqRCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNN0MsSUFBSSxDQUFDLGNBQWM7YUFDakIsT0FBTyxDQUNQLHNCQUFzQixFQUN0Qiw4QkFBOEIsRUFDOUIsMEJBQTBCLEVBQzFCLGlDQUFpQyxFQUNqQyx3QkFBd0IsRUFDeEIsZ0NBQWdDLEVBQ2hDLCtCQUErQixFQUMvQixnQ0FBZ0MsRUFDaEMsbUJBQUEsZ0NBQWdDLEVBQU8sQ0FDdkM7YUFDQSxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7O2tCQUUzQixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVc7O2tCQUUvQixXQUFXLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxXQUF3QjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ2xCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQy9GLE1BQU07Ozs7UUFBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUMzRCxDQUFDO0lBQ1IsQ0FBQzs7O1lBakRELFVBQVU7Ozs7WUFoQndCLGNBQWM7WUFJeEMsNEJBQTRCOzs7Ozs7O0lBZXBDLHFEQUFrRTs7Ozs7SUFFbEUscURBQThDOzs7OztJQUVsQyx1REFBc0M7Ozs7O0lBQy9DLHNFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL2NvbXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkluaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvaW5pdC9jb21wb3NpdGlvbi1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvblJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8Q29tcG9zaXRpb24+KDEpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Q29tcG9zaXRpb25Jbml0ZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBjb21wb3NpdGlvbiA9IHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdFx0dGhpcy5jb21wb3NpdGlvbiQubmV4dChjb21wb3NpdGlvbik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b24oYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0SWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZWFkeSgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==