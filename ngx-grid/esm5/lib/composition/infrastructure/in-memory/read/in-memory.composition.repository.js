/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        _this.composition$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, CompositionColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, CompositionColumnSetEnabledEvent, CompositionColumnMovedLeftEvent, CompositionColumnMovedRightEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQTRCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQy9ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzVJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ25JLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBR2xJO0lBQ21ELHlEQUFxQjtJQU12RSx1Q0FBb0IsY0FBOEIsRUFDdkMsNkJBQTJEO1FBRHRFLFlBRUMsaUJBQU8sU0F5QlA7UUEzQm1CLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxtQ0FBNkIsR0FBN0IsNkJBQTZCLENBQThCO1FBTHJELGtCQUFZLEdBQUcsSUFBSSxhQUFhLENBQWMsQ0FBQyxDQUFDLENBQUM7UUFFakQsa0JBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTdDLEtBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxzQkFBc0IsRUFDdEIsOEJBQThCLEVBQzlCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQ2hDLG1CQUFBLGdDQUFnQyxFQUFPLENBQ3ZDO2FBQ0EsSUFBSSxDQUNKLFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7O2dCQUV2QixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVc7O2dCQUUvQixXQUFXLEdBQUcsS0FBSSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFM0UsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDBDQUFFOzs7O0lBQUYsVUFBRyxXQUF3QjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ2xCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBekQsQ0FBeUQsRUFBQyxFQUMvRixNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFyQixDQUFxQixFQUFDLENBQzNELENBQUM7SUFDUixDQUFDOztnQkFqREQsVUFBVTs7OztnQkFoQndCLGNBQWM7Z0JBSXhDLDRCQUE0Qjs7SUErRHJDLG9DQUFDO0NBQUEsQUFuREQsQ0FDbUQscUJBQXFCLEdBa0R2RTtTQWxEWSw2QkFBNkI7Ozs7OztJQUV6QyxxREFBa0U7Ozs7O0lBRWxFLHFEQUE4Qzs7Ozs7SUFFbEMsdURBQXNDOzs7OztJQUMvQyxzRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2luaXQvY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZXBvc2l0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENvbXBvc2l0aW9uPigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdENvbXBvc2l0aW9uSW5pdGVkRXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuYWdncmVnYXRlSWQ7XG5cblx0XHRcdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb24kLm5leHQoY29tcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8Q29tcG9zaXRpb24+IHtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKSA9PT0gYWdncmVnYXRlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmlzUmVhZHkoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=