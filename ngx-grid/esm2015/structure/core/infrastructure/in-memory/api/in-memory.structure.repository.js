/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, hermesFilter, hermesMap, HermesReplaySubject } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../../source/core/domain/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../../paging/core/domain/set/paging-set.event';
import { PrevPageEvent } from '../../../../paging/core/domain/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../paging/core/domain/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../paging/core/domain/change-pagesize/pagesize-changed.event';
import { SelectionEnabledSetEvent } from '../../../../source/core/domain/formation/set-enabled/selection-enabled-set.event';
import { VerticalScrollEnabledSetEvent } from '../../../../vertical-formation/core/domain/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../../vertical-formation/core/domain/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../sorting/core/domain/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../source/core/domain/origin/set-origin/origin-set.event';
import { FilterToggledEvent } from '../../../../filter/core/domain/toggle/filter-toggled.event';
import { SearchPhraseSetDomainEvent } from '../../../../search/core/domain/phrase/set-phrase/search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../sorting/core/domain/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../../vertical-formation/core/domain/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../../vertical-formation/core/domain/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../../vertical-formation/core/domain/set-row-height-theme/row-height-set-based-on-theme.event';
import { FilterAddedEvent } from '../../../../filter/core/domain/core/add/filter-added.event';
import { ActiveFiltersSetEvent } from '../../../../filter/core/domain/core/active-filters-set.event';
import { UniqueFilterSelectedEvent } from '../../../../filter/core/domain/unique/select/unique-filter-selected.event';
import { AllUniqueFilterSelectedEvent } from '../../../../filter/core/domain/unique/select-all/all-unique-filter-selected.event';
import { UniqueFilterUnselectedEvent } from '../../../../filter/core/domain/unique/unselect/unique-filter-unselected.event';
import { AllUniqueFilterUnselectedEvent } from '../../../../filter/core/domain/unique/unselect-all/all-unique-filter-unselected.event';
export class InMemoryStructureRepository extends StructureReadModelRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.hermesStructure$ = new HermesReplaySubject(1);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    getStructure(structureId) {
        return this.structureIdToStructure.get(structureId.getId());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    on(structureId) {
        return this.hermesStructure$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            /** @type {?} */
            const key = structureId.getId();
            return structureIdToStructure.has(key);
        })), hermesMap((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            return structureIdToStructure.get(structureId.getId());
        })));
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
            SelectionEnabledSetEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            FilterToggledEvent,
            SearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent,
            FilterAddedEvent,
            ActiveFiltersSetEvent,
            UniqueFilterSelectedEvent,
            AllUniqueFilterSelectedEvent,
            UniqueFilterUnselectedEvent,
            AllUniqueFilterUnselectedEvent
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
            this.hermesStructure$.next(this.structureIdToStructure);
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
    InMemoryStructureRepository.prototype.hermesStructure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQWUsY0FBYyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFOUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDNUgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDekksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDOUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1F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QUcsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBM0VELFVBQVU7Ozs7WUEvQlcsY0FBYztZQUkzQiwwQkFBMEI7Ozs7Ozs7SUE4QmxDLDZEQUFvRjs7Ozs7SUFFcEYsdURBQW9HOzs7OztJQUdqRyxpRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzLCBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzUmVwbGF5U3ViamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vc2V0L3BhZ2luZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NlbGVjdGlvbi1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3RvZ2dsZS9maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3Jvdy1oZWlnaHQtc2V0LWJhc2VkLW9uLXRoZW1lLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJBZGRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vY29yZS9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0L3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNTdHJ1Y3R1cmUkID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRnZXRTdHJ1Y3R1cmUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblxuXHRcdHJldHVybiB0aGlzLmhlcm1lc1N0cnVjdHVyZSRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gc3RydWN0dXJlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlOiBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQsXG5cdFx0XHRTZXRTb3VyY2VMb2FkaW5nRXZlbnQsXG5cdFx0XHRQYWdpbmdTZXRFdmVudCxcblx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHROZXh0UGFnZUV2ZW50LFxuXHRcdFx0UGFnZXNpemVDaGFuZ2VkRXZlbnQsXG5cdFx0XHRTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCxcblx0XHRcdFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQsXG5cdFx0XHRTb3J0VG9nZ2xlZEV2ZW50IGFzIGFueSxcblx0XHRcdEZpbHRlclRvZ2dsZWRFdmVudCxcblx0XHRcdFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50LFxuXHRcdFx0U29ydE9yZGVyU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0T3JpZ2luU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCxcblx0XHRcdFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50LFxuXHRcdFx0RmlsdGVyQWRkZWRFdmVudCxcblx0XHRcdEFjdGl2ZUZpbHRlcnNTZXRFdmVudCxcblx0XHRcdFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQsXG5cdFx0XHRBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0VW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50LFxuXHRcdFx0QWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdWJzKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRTdHJ1Y3R1cmUuaWZQcmVzZW50KChzdHJ1Y3R1cmVSZWFkTW9kZWxSb290OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuc2V0KGtleSwgc3RydWN0dXJlUmVhZE1vZGVsUm9vdCk7XG5cblx0XHRcdHRoaXMuaGVybWVzU3RydWN0dXJlJC5uZXh0KHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19