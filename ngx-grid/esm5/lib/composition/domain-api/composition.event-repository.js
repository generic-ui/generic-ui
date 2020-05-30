/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
var CompositionEventRepository = /** @class */ (function () {
    function CompositionEventRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (CompositionColumnsSetEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === compositionId.toString(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (CompositionContainerWidthSetEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().equals(compositionId); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventRepository;
}());
export { CompositionEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUc5SDtJQUdDLG9DQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxxREFBZ0I7Ozs7SUFBaEIsVUFBaUIsYUFBNEI7UUFFNUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsMEJBQTBCLEVBQU8sQ0FDakM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQTlELENBQThELEVBQUMsQ0FDN0csQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNERBQXVCOzs7O0lBQXZCLFVBQXdCLGFBQTRCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1CQUFBLGlDQUFpQyxFQUFPLENBQ3hDO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWlDLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLEVBQzNGLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQXdDO1lBQzVDLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFDLENBQ2xDLENBQUM7SUFDUixDQUFDOztnQkE3QkQsVUFBVTs7OztnQkFQVyxjQUFjOztJQXNDcEMsaUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSwwQkFBMEI7Ozs7OztJQUUxQixvREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gY29tcG9zaXRpb25JZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhjb21wb3NpdGlvbklkKSksXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0UGF5bG9hZCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigod2lkdGg6IG51bWJlcikgPT4gISF3aWR0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=