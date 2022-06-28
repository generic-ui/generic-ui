import { CoreContainer, DomainEventBus, hermesDistinctUntilChanged, hermesFilter, hermesMap, HermesReplaySubject, Reactive } from '@generic-ui/hermes';
import { StructureCreatedEvent } from '../../structure-core/core/create/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../core/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../structure-core/persist/api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../core/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../schema/core/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../core/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../source/core/origin/set/origin-set.event';
import { ScrollPositionSetEvent } from '../core/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../core/set-row-height-theme/row-height-set-based-on-theme.event';
import { SearchPhraseSetDomainEvent } from '../../search/core/phrase/set-phrase/search-phrase-set.domain-event';
import { PageChangedEvent } from '../../paging/core/page/page-changed.event';
import { PagingSetEvent } from '../../paging/core/set/paging-set.event';
import { UniqueFilterUnselectedEvent } from '../../filter/core/unique/unselect/unique-filter-unselected.event';
import { AllUniqueFilterUnselectedEvent } from '../../filter/core/unique/unselect-all/all-unique-filter-unselected.event';
import { AllUniqueFilterSelectedEvent } from '../../filter/core/unique/select-all/all-unique-filter-selected.event';
import { UniqueFilterSelectedEvent } from '../../filter/core/unique/select/unique-filter-selected.event';
import { ActiveFiltersSetEvent } from '../../filter/core/active-filters-set.event';
export class VerticalFormationRepository extends Reactive {
    constructor(inMemoryStructureReadStore) {
        super();
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new HermesReplaySubject(1);
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
        this.domainEventBus
            .ofEvents([
            StructureCreatedEvent,
            VerticalScrollEnabledSetEvent,
            OriginSetEvent,
            StructureHeightSetEvent,
            RowHeightSetEvent,
            SchemaThemeSetEvent,
            RowHeightSetBasedOnThemeEvent,
            ScrollPositionSetEvent,
            SearchPhraseSetDomainEvent,
            UniqueFilterUnselectedEvent,
            AllUniqueFilterUnselectedEvent,
            AllUniqueFilterSelectedEvent,
            UniqueFilterSelectedEvent,
            PageChangedEvent,
            PagingSetEvent,
            ActiveFiltersSetEvent
        ])
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            const aggregateId = event.getAggregateId();
            const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((structureReadModelRoot) => {
                const verticalFormation = structureReadModelRoot.getVerticalFormation();
                this.next(aggregateId, verticalFormation);
            });
        });
    }
    onVerticalScrollEnabled(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.isEnabled()), hermesDistinctUntilChanged());
    }
    onRowHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getRowHeight()), hermesDistinctUntilChanged());
    }
    onContainerHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getViewPortHeight()), hermesDistinctUntilChanged());
    }
    onTopMargin(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(hermesMap((v) => v.getTopMargin()), hermesDistinctUntilChanged());
    }
    onVerticalFormation(structureId) {
        return this.verticalFormation$
            .toObservable()
            .pipe(hermesFilter((idToVerticalFormation) => {
            const key = structureId.getId();
            return idToVerticalFormation.has(key);
        }), hermesMap((idToVerticalFormation) => idToVerticalFormation.get(structureId.getId())));
    }
    next(structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    }
}
VerticalFormationRepository.services = [InMemoryStructureReadStore];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlLXJlYWQvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLGFBQWEsRUFFYixjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixTQUFTLEVBRVQsbUJBQW1CLEVBQ25CLFFBQVEsRUFDUixNQUFNLG9CQUFvQixDQUFDO0FBSTVCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEy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QUUsQ0FDNUIsQ0FBQztJQUNSLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxXQUF3QjtRQUVuRCxPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLHFCQUEwRCxFQUFFLEVBQUU7WUFFM0UsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWhDLE9BQU8scUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxDQUFDLHFCQUEwRCxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FDekgsQ0FBQztJQUNSLENBQUM7SUFFTyxJQUFJLENBQUMsV0FBd0IsRUFBRSxpQkFBeUM7UUFDL0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O0FBeERlLG9DQUFRLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29yZUNvbnRhaW5lcixcblx0RG9tYWluRXZlbnQsXG5cdERvbWFpbkV2ZW50QnVzLFxuXHRoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCxcblx0aGVybWVzRmlsdGVyLFxuXHRoZXJtZXNNYXAsXG5cdEhlcm1lc09ic2VydmFibGUsXG5cdEhlcm1lc1JlcGxheVN1YmplY3QsXG5cdFJlYWN0aXZlXG59IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Nb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1jb3JlL2NvcmUvY3JlYXRlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vY29yZS9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9wZXJzaXN0L2FwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi9jb3JlL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vY29yZS9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL29yaWdpbi9zZXQvb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY3JvbGxQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vY29yZS9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uL2NvcmUvc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9zZWFyY2gvY29yZS9waHJhc2Uvc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb3JlL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vcGFnaW5nL2NvcmUvc2V0L3BhZ2luZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL3VuaXF1ZS9zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS91bmlxdWUvc2VsZWN0L3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb24gPSBuZXcgTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25Nb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uTW9kZWw+PigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudEJ1cyk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnRzKFtcblx0XHRcdFx0XHRTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQsXG5cdFx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRcdFx0T3JpZ2luU2V0RXZlbnQsXG5cdFx0XHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRcdFx0U2NoZW1hVGhlbWVTZXRFdmVudCwgLy8gVE9ET1xuXHRcdFx0XHRcdFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50LFxuXHRcdFx0XHRcdFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQsXG5cdFx0XHRcdFx0U2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRcdFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCxcblx0XHRcdFx0XHRBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQsXG5cdFx0XHRcdFx0QWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCxcblx0XHRcdFx0XHRVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0XHRcdFBhZ2VDaGFuZ2VkRXZlbnQsXG5cdFx0XHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRcdFx0QWN0aXZlRmlsdGVyc1NldEV2ZW50XG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgdmVydGljYWxGb3JtYXRpb24gPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRcdFx0XHR0aGlzLm5leHQoYWdncmVnYXRlSWQsIHZlcnRpY2FsRm9ybWF0aW9uKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0luTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlXTtcblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodjogVmVydGljYWxGb3JtYXRpb25Nb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodjogVmVydGljYWxGb3JtYXRpb25Nb2RlbCkgPT4gdi5nZXRSb3dIZWlnaHQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodjogVmVydGljYWxGb3JtYXRpb25Nb2RlbCkgPT4gdi5nZXRWaWV3UG9ydEhlaWdodCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsKSA9PiB2LmdldFRvcE1hcmdpbigpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsPiB7XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBzdHJ1Y3R1cmVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsPikgPT4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24kLm5leHQodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdH1cblxuXG59XG4iXX0=