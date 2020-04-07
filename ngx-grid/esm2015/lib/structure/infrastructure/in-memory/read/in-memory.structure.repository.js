/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/structure/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../domain/source/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../domain/paging/set/paging-set.event';
import { PrevPageEvent } from '../../../domain/paging/prev-page/prev-page.event';
import { NextPageEvent } from '../../../domain/paging/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../domain/paging/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../domain/formation/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../domain/formation/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../domain/structure/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../domain/structure/sort/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../domain/structure/filter/toggle/structure.filter-toggled.event';
import { StructureSearchPhraseSetDomainEvent } from '../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../domain/structure/sort/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
export class InMemoryStructureRepository extends StructureReadModelRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    onStructure(aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => structureIdToStructure.get(aggregateId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            StructureCreatedEvent,
            SetSourceLoadingEvent,
            PagingSetEvent,
            PrevPageEvent,
            NextPageEvent,
            PagesizeChangedEvent,
            FormationSetEvent,
            SelectedRowToggledEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            StructureFilterToggledEvent,
            StructureSearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subs(event) {
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
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
}
InMemoryStructureRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structureIdToStructure;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0RkFBNEYsQ0FBQztBQUMzSSxPQUFPLEVBQUUs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YXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC9mb3JtYXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NvcnQvdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3Jvdy1oZWlnaHQtc2V0LWJhc2VkLW9uLXRoZW1lLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlOiBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PikgPT4gc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5nZXQoYWdncmVnYXRlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQsXG5cdFx0XHRTZXRTb3VyY2VMb2FkaW5nRXZlbnQsXG5cdFx0XHRQYWdpbmdTZXRFdmVudCxcblx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHROZXh0UGFnZUV2ZW50LFxuXHRcdFx0UGFnZXNpemVDaGFuZ2VkRXZlbnQsXG5cdFx0XHRGb3JtYXRpb25TZXRFdmVudCxcblx0XHRcdFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50LFxuXHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCBhcyBhbnksXG5cdFx0XHRTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQsXG5cdFx0XHRTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50IGFzIGFueSxcblx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudFxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3VicyhldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRTdHJ1Y3R1cmUuaWZQcmVzZW50KChzdHJ1Y3R1cmVSZWFkTW9kZWxSb290OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuc2V0KGtleSwgc3RydWN0dXJlUmVhZE1vZGVsUm9vdCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlJC5uZXh0KHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19