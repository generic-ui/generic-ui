/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
        var _this = _super.call(this, domainEventBus) || this;
        _this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
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
            CompositionInitedEvent,
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
        var optComposition = this.inMemoryCompositionQueryStore.getById(aggregateId);
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
}(CompositionRepository));
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
    InMemoryCompositionRepository.prototype.inMemoryCompositionQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDL0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDL0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDNUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDL0gsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFHbEk7SUFDbUQseURBQXFCO0lBTXZFLHVDQUFZLGNBQThCLEVBQy9CLDZCQUEyRDtRQUR0RSxZQUVDLGtCQUFNLGNBQWMsQ0FBQyxTQUNyQjtRQUZVLG1DQUE2QixHQUE3Qiw2QkFBNkIsQ0FBOEI7UUFMckQsZ0NBQTBCLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFFNUQsa0JBQVksR0FBRyxJQUFJLGFBQWEsQ0FBMkIsQ0FBQyxDQUFDLENBQUM7O0lBSy9FLENBQUM7Ozs7O0lBRUQsMENBQUU7Ozs7SUFBRixVQUFHLFdBQXdCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLDBCQUFvRDs7Z0JBRXJELEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8sMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLDBCQUFvRCxJQUFLLE9BQUEsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFuRCxDQUFtRCxFQUFDLENBQ2xILENBQUM7SUFDUixDQUFDOzs7OztJQUVTLGlEQUFTOzs7O0lBQW5CO1FBQ0MsT0FBTztZQUNOLHNCQUFzQjtZQUN0Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyx3QkFBd0I7WUFDeEIsZ0NBQWdDO1lBQ2hDLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsbUJBQUEsZ0NBQWdDLEVBQU87U0FDdkMsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVTLGlEQUFTOzs7OztJQUFuQixVQUFvQixLQUFrQjtRQUF0QyxpQkFhQzs7WUFYTSxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTs7WUFFcEMsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTlFLGNBQWMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxXQUF3Qjs7Z0JBQzNDLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBRTFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXRELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdERELFVBQVU7Ozs7Z0JBaEJ3QixjQUFjO2dCQUl4Qyw0QkFBNEI7O0lBbUVyQyxvQ0FBQztDQUFBLEFBdkRELENBQ21ELHFCQUFxQixHQXNEdkU7U0F0RFksNkJBQTZCOzs7Ozs7SUFFekMsbUVBQTZFOzs7OztJQUU3RSxxREFBK0U7Ozs7O0lBRzVFLHNFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2luaXQvY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQ29tcG9zaXRpb24+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvbihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFJlYWRvbmx5PENvbXBvc2l0aW9uPj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uOiBNYXA8c3RyaW5nLCBDb21wb3NpdGlvbj4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uPikgPT4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q29tcG9zaXRpb25Jbml0ZWRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdENvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdENvbXBvc2l0aW9uLmlmUHJlc2VudCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBrZXkgPSBjb21wb3NpdGlvbi5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uc2V0KGtleSwgY29tcG9zaXRpb24pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24pO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=