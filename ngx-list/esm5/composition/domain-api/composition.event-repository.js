/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
var CompositionEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionEventRepository, _super);
    function CompositionEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
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
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
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
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(map((/**
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
}(EventRepository));
export { CompositionEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDeEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFJOUg7SUFDZ0Qsc0RBQTBEO0lBRXpHLG9DQUFZLGNBQThCO2VBQ3pDLGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixhQUF5QztRQUV6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCw0REFBdUI7Ozs7SUFBdkIsVUFBd0IsYUFBeUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQzthQUMvRCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsS0FBd0M7WUFDNUMsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQVJGLGNBQWM7O0lBK0J2QixpQ0FBQztDQUFBLEFBdkJELENBQ2dELGVBQWUsR0FzQjlEO1NBdEJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCwgQ29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KGNvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50KTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBldmVudC5nZXRQYXlsb2FkKCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKCh3aWR0aDogbnVtYmVyKSA9PiAhIXdpZHRoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==