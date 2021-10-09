/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, hermesDistinctUntilChanged, hermesFilter, hermesMap, HermesReplaySubject, Reactive } from '@generic-ui/hermes';
import { StructureCreatedEvent } from '../../../core/domain/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../domain/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../core/infrastructure/in-memory/api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../domain/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/core/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../domain/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../../source/core/domain/origin/set-origin/origin-set.event';
import { ScrollPositionSetEvent } from '../domain/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../domain/set-row-height-theme/row-height-set-based-on-theme.event';
import { SearchPhraseSetDomainEvent } from '../../../search/core/domain/phrase/set-phrase/search-phrase-set.domain-event';
import { PageChangedEvent } from '../../../paging/core/domain/page/page-changed.event';
import { PagingSetEvent } from '../../../paging/core/domain/set/paging-set.event';
export class VerticalFormationRepository extends Reactive {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new HermesReplaySubject(1);
        this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)), (/** @type {?} */ (PageChangedEvent)), (/** @type {?} */ (PagingSetEvent)))
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.getAggregateId();
            /** @type {?} */
            const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((/**
             * @param {?} structureReadModelRoot
             * @return {?}
             */
            (structureReadModelRoot) => {
                /** @type {?} */
                const verticalFormation = structureReadModelRoot.getVerticalFormation();
                this.next(aggregateId, verticalFormation);
            }));
        }));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onVerticalScrollEnabled(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.isEnabled())), hermesDistinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getRowHeight())), hermesDistinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onContainerHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getViewPortHeight())), hermesDistinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopMargin(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getTopMargin())), hermesDistinctUntilChanged());
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    onVerticalFormation(structureId) {
        return this.verticalFormation$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        (idToVerticalFormation) => {
            /** @type {?} */
            const key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), hermesMap((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        (idToVerticalFormation) => idToVerticalFormation.get(structureId.getId()))));
    }
    /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    next(structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    }
}
VerticalFormationRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VerticalFormationRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation$;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUVOLGNBQWMsRUFDZCwwQkFBMEIsRUFDMUIsWUFBWSxFQUNaLFNBQVMsRUFFVCxtQkFBbUIsRUFDbkIsUUFBUSxFQUNSLE1BQU0sb0JBQW9CLENBQUM7QUFJNUIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzFILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUlsRixNQUFNLE9BQU8s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QyxLQUFLLEVBQUU7WUFFL0IsT0FBTyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLENBQUMscUJBQThELEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUM3SCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxXQUF3QixFQUFFLGlCQUE2QztRQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBbEdELFVBQVU7Ozs7WUExQlYsY0FBYztZQWFOLDBCQUEwQjs7Ozs7OztJQWdCbEMsd0RBQW1GOzs7OztJQUVuRix5REFBMEc7Ozs7O0lBRTlGLHFEQUErQzs7Ozs7SUFDeEQsaUVBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHREb21haW5FdmVudCxcblx0RG9tYWluRXZlbnRCdXMsXG5cdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkLFxuXHRoZXJtZXNGaWx0ZXIsXG5cdGhlcm1lc01hcCxcblx0SGVybWVzT2JzZXJ2YWJsZSxcblx0SGVybWVzUmVwbGF5U3ViamVjdCxcblx0UmVhY3RpdmVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zZXQtcm93LWhlaWdodC9yb3ctaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uID0gbmV3IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb24kID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFN0cnVjdHVyZUNyZWF0ZWRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0T3JpZ2luU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U2NoZW1hVGhlbWVTZXRFdmVudCBhcyBhbnksIC8vIFRPRE9cblx0XHRcdFx0Um93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRQYWdlQ2hhbmdlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0UGFnaW5nU2V0RXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdG9wdFN0cnVjdHVyZS5pZlByZXNlbnQoKHN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHZlcnRpY2FsRm9ybWF0aW9uID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0XHRcdFx0dGhpcy5uZXh0KGFnZ3JlZ2F0ZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Um93SGVpZ2h0KCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFZpZXdQb3J0SGVpZ2h0KCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFRvcE1hcmdpbigpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24kXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IHN0cnVjdHVyZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvVmVydGljYWxGb3JtYXRpb24uaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIHZlcnRpY2FsRm9ybWF0aW9uKTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJC5uZXh0KHRoaXMudmVydGljYWxGb3JtYXRpb24pO1xuXHR9XG5cblxufVxuIl19