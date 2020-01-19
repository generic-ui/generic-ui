/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        _this.composition$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, CompositionColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, CompositionColumnSetEnabledEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
            .pipe(takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.aggregateId;
            /** @type {?} */
            var composition = _this.inMemoryCompositionQueryStore.getById(aggregateId);
            _this.composition$.next(composition);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
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
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getId().toString() === aggregateId.toString(); })), filter((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isReady(); })));
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
}(CompositionRepository));
export { InMemoryCompositionRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUM5SSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUNySSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3R0FBd0csQ0FBQztBQUMzSixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUMzSSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnR0FBZ0csQ0FBQztBQUdsSjtJQUNtRCx5REFBcUI7SUFNdkUsdUNBQW9CLGNBQThCLEVBQ3ZDLDZCQUEyRDtRQUR0RSxZQUVDLGlCQUFPLFNBdUJQO1FBekJtQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsbUNBQTZCLEdBQTdCLDZCQUE2QixDQUE4QjtRQUxyRCxrQkFBWSxHQUFHLElBQUksYUFBYSxDQUFjLENBQUMsQ0FBQyxDQUFDO1FBRWpELGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU03QyxLQUFJLENBQUMsY0FBYzthQUNqQixPQUFPLENBQ1Asc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsaUNBQWlDLEVBQ2pDLHdCQUF3QixFQUN4QixnQ0FBZ0MsRUFDaEMsbUJBQUEsZ0NBQWdDLEVBQU8sQ0FDdkM7YUFDQSxJQUFJLENBQ0osU0FBUyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjs7Z0JBRXZCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVzs7Z0JBRS9CLFdBQVcsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUUzRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsMENBQUU7Ozs7SUFBRixVQUFHLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF6RCxDQUF5RCxFQUFDLEVBQy9GLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQXJCLENBQXFCLEVBQUMsQ0FDM0QsQ0FBQztJQUNSLENBQUM7O2dCQS9DRCxVQUFVOzs7O2dCQWR3QixjQUFjO2dCQUl4Qyw0QkFBNEI7O0lBMkRyQyxvQ0FBQztDQUFBLEFBakRELENBQ21ELHFCQUFxQixHQWdEdkU7U0FoRFksNkJBQTZCOzs7Ozs7SUFFekMscURBQWtFOzs7OztJQUVsRSxxREFBOEM7Ozs7O0lBRWxDLHVEQUFzQzs7Ozs7SUFDL0Msc0VBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZWFkLXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9pbml0L2NvbXBvc2l0aW9uLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDb21wb3NpdGlvbj4oMSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRDb21wb3NpdGlvbkluaXRlZEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuYWdncmVnYXRlSWQ7XG5cblx0XHRcdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb24kLm5leHQoY29tcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8Q29tcG9zaXRpb24+IHtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKSA9PT0gYWdncmVnYXRlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmlzUmVhZHkoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=