/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEventBus, hermesFilter, hermesMap } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
import { Injectable } from '@angular/core';
var CompositionDomainEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainEventRepository, _super);
    function CompositionDomainEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainEventRepository.prototype.onColumnsChanged = /**
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
    CompositionDomainEventRepository.prototype.onContainerWidthChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), hermesFilter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionDomainEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDomainEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionDomainEventRepository;
}(CompositionEventRepository));
export { CompositionDomainEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFDc0QsNERBQTBCO0lBRS9FLDBDQUFZLGNBQThCO2VBQ3pDLGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDJEQUFnQjs7OztJQUFoQixVQUFpQixhQUF5QztRQUV6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxrRUFBdUI7Ozs7SUFBdkIsVUFBd0IsYUFBeUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQzthQUMvRCxJQUFJLENBQ0osU0FBUzs7OztRQUFDLFVBQUMsS0FBd0M7WUFDbEQsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsWUFBWTs7OztRQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FDeEMsQ0FBQztJQUNSLENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQVBGLGNBQWM7O0lBOEJ2Qix1Q0FBQztDQUFBLEFBdkJELENBQ3NELDBCQUEwQixHQXNCL0U7U0F0QlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQ+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGV2ZW50LmdldFBheWxvYWQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHdpZHRoOiBudW1iZXIpID0+ICEhd2lkdGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19