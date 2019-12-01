/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../../domain/composition/query/composition.repository';
import { InMemoryCompositionQueryStore } from './in-memory.composition.query-store';
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
        { type: InMemoryCompositionQueryStore }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3F1ZXJ5L2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFFcEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEZBQThGLENBQUM7QUFDOUksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdHQUF3RyxDQUFDO0FBQzNKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQzlILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBR3BJO0lBQ21ELHlEQUFxQjtJQU12RSx1Q0FBb0IsY0FBOEIsRUFDdkMsNkJBQTREO1FBRHZFLFlBRUMsaUJBQU8sU0FzQlA7UUF4Qm1CLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxtQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBTHRELGtCQUFZLEdBQUcsSUFBSSxhQUFhLENBQWMsQ0FBQyxDQUFDLENBQUM7UUFFakQsa0JBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTdDLEtBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxzQkFBc0IsRUFDdEIsOEJBQThCLEVBQzlCLGVBQWUsRUFDZixpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLG1CQUFBLGdDQUFnQyxFQUFPLENBQ3ZDO2FBQ0EsSUFBSSxDQUNKLFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7O2dCQUV2QixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVc7O2dCQUUvQixXQUFXLEdBQUcsS0FBSSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFM0UsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDhDQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUU5QixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ2xCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBekQsQ0FBeUQsRUFBQyxFQUMvRixNQUFNOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFyQixDQUFxQixFQUFDLENBQzNELENBQUM7SUFDUixDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFiRixjQUFjO2dCQUlkLDZCQUE2Qjs7SUF5RHRDLG9DQUFDO0NBQUEsQUFoREQsQ0FDbUQscUJBQXFCLEdBK0N2RTtTQS9DWSw2QkFBNkI7Ozs7OztJQUV6QyxxREFBa0U7Ozs7O0lBRWxFLHFEQUE4Qzs7Ozs7SUFFbEMsdURBQXNDOzs7OztJQUMvQyxzRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRG9tYWluRXZlbnQsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5xdWVyeS1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkluaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvaW5pdC9jb21wb3NpdGlvbi1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDb21wb3NpdGlvbj4oMSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Q29tcG9zaXRpb25Jbml0ZWRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb2x1bW5zU2V0RXZlbnQsXG5cdFx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmFnZ3JlZ2F0ZUlkO1xuXG5cdFx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KGNvbXBvc2l0aW9uKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzZWxlY3QoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0SWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZWFkeSgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==