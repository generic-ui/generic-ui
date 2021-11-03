import { Injectable } from '@angular/core';
import { hermesFilter, hermesMap, HermesReplaySubject } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
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
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "./in-memory-structure.read-store";
export class InMemoryStructureRepository extends StructureReadModelRepository {
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.hermesStructure$ = new HermesReplaySubject(1);
    }
    getStructure(structureId) {
        return this.structureIdToStructure.get(structureId.getId());
    }
    on(structureId) {
        return this.hermesStructure$
            .toObservable()
            .pipe(hermesFilter((structureIdToStructure) => {
            const key = structureId.getId();
            return structureIdToStructure.has(key);
        }), hermesMap((structureIdToStructure) => {
            return structureIdToStructure.get(structureId.getId());
        }));
    }
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
            SortToggledEvent,
            FilterToggledEvent,
            SearchPhraseSetDomainEvent,
            SortOrderSetEvent,
            OriginSetEvent,
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
    subs(event) {
        const aggregateId = event.getAggregateId();
        const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((structureReadModelRoot) => {
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
            this.hermesStructure$.next(this.structureIdToStructure);
        });
    }
}
InMemoryStructureRepository.ɵfac = function InMemoryStructureRepository_Factory(t) { return new (t || InMemoryStructureRepository)(i0.ɵɵinject(i1.DomainEventBus), i0.ɵɵinject(i2.InMemoryStructureReadStore)); };
InMemoryStructureRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InMemoryStructureRepository, factory: InMemoryStructureRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InMemoryStructureRepository, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventBus }, { type: i2.InMemoryStructureReadStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBK0IsWUFBWSxFQUFFLFNBQVMsRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqSSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUc5RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUM1SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUN6SSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDbkcsT0FBTyxFQUFFLGtCQUFr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Q0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFFN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O3NHQTFFVywyQkFBMkI7aUZBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2xvYWRpbmcvc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IEZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi90b2dnbGUvZmlsdGVyLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC9yb3ctaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWRUb1N0cnVjdHVyZSA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzU3RydWN0dXJlJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0Z2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpO1xuXHR9XG5cblx0b24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5oZXJtZXNTdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IHN0cnVjdHVyZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0U2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCBhcyBhbnksXG5cdFx0XHRGaWx0ZXJUb2dnbGVkRXZlbnQsXG5cdFx0XHRTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50IGFzIGFueSxcblx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCxcblx0XHRcdEZpbHRlckFkZGVkRXZlbnQsXG5cdFx0XHRBY3RpdmVGaWx0ZXJzU2V0RXZlbnQsXG5cdFx0XHRVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0QWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCxcblx0XHRcdFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCxcblx0XHRcdEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudFxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3VicyhldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLnNldChrZXksIHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpO1xuXG5cdFx0XHR0aGlzLmhlcm1lc1N0cnVjdHVyZSQubmV4dCh0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==