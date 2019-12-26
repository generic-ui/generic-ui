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
import { ColumnsSetEvent } from '../../../../domain/composition/command/column/set-columns/columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../../../domain/composition/command/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../../../domain/composition/command/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../../../domain/composition/command/sort/composition-change-sort-status.event';
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        _this.composition$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, ColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
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
    InMemoryCompositionRepository.prototype.select = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUM5SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0dBQXdHLENBQUM7QUFDM0osT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDOUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFHcEk7SUFDbUQseURBQXFCO0lBTXZFLHVDQUFvQixjQUE4QixFQUN2Qyw2QkFBMkQ7UUFEdEUsWUFFQyxpQkFBTyxTQXNCUDtRQXhCbUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLG1DQUE2QixHQUE3Qiw2QkFBNkIsQ0FBOEI7UUFMckQsa0JBQVksR0FBRyxJQUFJLGFBQWEsQ0FBYyxDQUFDLENBQUMsQ0FBQztRQUVqRCxrQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNN0MsS0FBSSxDQUFDLGNBQWM7YUFDakIsT0FBTyxDQUNQLHNCQUFzQixFQUN0Qiw4QkFBOEIsRUFDOUIsZUFBZSxFQUNmLGlDQUFpQyxFQUNqQyx3QkFBd0IsRUFDeEIsbUJBQUEsZ0NBQWdDLEVBQU8sQ0FDdkM7YUFDQSxJQUFJLENBQ0osU0FBUyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjs7Z0JBRXZCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVzs7Z0JBRS9CLFdBQVcsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUUzRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsOENBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDbEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF6RCxDQUF5RCxFQUFDLEVBQy9GLE1BQU07Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQXJCLENBQXFCLEVBQUMsQ0FDM0QsQ0FBQztJQUNSLENBQUM7O2dCQTlDRCxVQUFVOzs7O2dCQWJGLGNBQWM7Z0JBSWQsNEJBQTRCOztJQXlEckMsb0NBQUM7Q0FBQSxBQWhERCxDQUNtRCxxQkFBcUIsR0ErQ3ZFO1NBL0NZLDZCQUE2Qjs7Ozs7O0lBRXpDLHFEQUFrRTs7Ozs7SUFFbEUscURBQThDOzs7OztJQUVsQyx1REFBc0M7Ozs7O0lBQy9DLHNFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBEb21haW5FdmVudCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Jbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2luaXQvY29tcG9zaXRpb24taW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvblJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8Q29tcG9zaXRpb24+KDEpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Q29tcG9zaXRpb25Jbml0ZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmFnZ3JlZ2F0ZUlkO1xuXG5cdFx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KGNvbXBvc2l0aW9uKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzZWxlY3QoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0SWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZWFkeSgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==