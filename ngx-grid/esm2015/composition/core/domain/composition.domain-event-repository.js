/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEventBus, hermesFilter, hermesMap } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
import { Injectable } from '@angular/core';
export class CompositionDomainEventRepository extends CompositionEventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onColumnsChanged(compositionId) {
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidthChanged(compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.getPayload();
        })), hermesFilter((/**
         * @param {?} width
         * @return {?}
         */
        (width) => !!width)));
    }
}
CompositionDomainEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDomainEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCOzs7O0lBRS9FLFlBQVksY0FBOEI7UUFDekMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsYUFBeUM7UUFFekQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsYUFBeUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQzthQUMvRCxJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsS0FBd0MsRUFBRSxFQUFFO1lBQ3RELE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUNGLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUN4QyxDQUFDO0lBQ1IsQ0FBQzs7O1lBckJELFVBQVU7Ozs7WUFQRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQ+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGV2ZW50LmdldFBheWxvYWQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHdpZHRoOiBudW1iZXIpID0+ICEhd2lkdGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19