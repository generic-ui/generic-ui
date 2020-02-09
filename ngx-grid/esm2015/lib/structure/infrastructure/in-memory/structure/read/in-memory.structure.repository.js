/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/read/structure.repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureInitedEvent } from '../../../../domain/structure/command/init/structure-inited.event';
import { SetSourceLoadingEvent } from '../../../../domain/source/command/loading/set-source-loading.event';
import { SchemaSetEvent } from '../../../../domain/schema/command/set/schema-set.event';
import { SchemaThemeSetEvent } from '../../../../domain/schema/command/theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from '../../../../domain/schema/command/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../../../domain/schema/command/grid/vertical/schema-vertical-grid-set.event';
import { SchemaTopHeaderChangedEvent } from '../../../../domain/schema/command/column-header/top/schema-top-header-changed.event';
import { SchemaBottomHeaderChangedEvent } from '../../../../domain/schema/command/column-header/bottom/schema-bottom-header-changed.event';
import { RowColoringSetEvent } from '../../../../domain/schema/command/coloring/set/row-coloring-set.event';
import { PagingSetEvent } from '../../../../domain/paging/command/set/paging-set.event';
import { PrevPageEvent } from '../../../../domain/paging/command/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../domain/paging/command/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../domain/paging/command/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../../domain/formation/command/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../../domain/formation/command/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../../domain/structure/command/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../../domain/structure/command/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../domain/structure/command/sort/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../domain/source/command/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../../domain/structure/command/filter/toggle/structure.filter-toggled.event';
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/command/search/set/structure.search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../domain/structure/command/sort/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../../domain/structure/command/vertical-formation/set-row-height/row-height-set.event';
export class InMemoryStructureRepository extends StructureRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
        this.unsubscribe$ = new Subject();
        this.domainEventBus
            .ofEvent(StructureInitedEvent, SetSourceLoadingEvent, SchemaSetEvent, SchemaThemeSetEvent, SchemaHorizontalGridSetEvent, SchemaVerticalGridSetEvent, SchemaTopHeaderChangedEvent, SchemaBottomHeaderChangedEvent, RowColoringSetEvent, PagingSetEvent, PrevPageEvent, NextPageEvent, PagesizeChangedEvent, FormationSetEvent, SelectedRowToggledEvent, VerticalScrollEnabledSetEvent, ScrollPositionSetEvent, (/** @type {?} */ (SortToggledEvent)), StructureFilterToggledEvent, StructureSearchPhraseSetDomainEvent, (/** @type {?} */ (SortOrderSetEvent)), (/** @type {?} */ (OriginSetEvent)), RowHeightSetEvent)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.aggregateId;
            /** @type {?} */
            const structure = this.inMemoryStructureQueryStore.getById(aggregateId);
            /** @type {?} */
            const key = structure.getId().toString();
            this.structureIdToStructure.set(key, structure);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
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
    InMemoryStructureRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcmVhZC9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDbEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDNUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDM0ksT0FBTyxFQUFFLG1CQUFtQixFQUFF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TyxJQUFJLENBQUMsVUFBVTthQUNoQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsc0JBQThDLEVBQUUsRUFBRTs7a0JBRW5ELEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8sc0JBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLHNCQUE4QyxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FDeEcsQ0FBQztJQUNSLENBQUM7OztZQXZFRCxVQUFVOzs7O1lBOUJ3QixjQUFjO1lBSXhDLDBCQUEwQjs7Ozs7OztJQTZCbEMsNkRBQXVFOzs7OztJQUV2RSxpREFBMkU7Ozs7O0lBRTNFLG1EQUE4Qzs7Ozs7SUFFbEMscURBQXNDOzs7OztJQUMvQyxrRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L3N0cnVjdHVyZS1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL2xvYWRpbmcvc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL3NldC9zY2hlbWEtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci90b3Avc2NoZW1hLXRvcC1oZWFkZXItY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFCb3R0b21IZWFkZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci9ib3R0b20vc2NoZW1hLWJvdHRvbS1oZWFkZXItY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbG9yaW5nL3NldC9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvc2V0L2Zvcm1hdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvdG9nZ2xlL3NlbGVjdGVkLXJvdy10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUuZmlsdGVyLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBTdHJ1Y3R1cmU+PigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVRdWVyeVN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRcdFNldFNvdXJjZUxvYWRpbmdFdmVudCxcblx0XHRcdFx0U2NoZW1hU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50LFxuXHRcdFx0XHRTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRcdFNjaGVtYUJvdHRvbUhlYWRlckNoYW5nZWRFdmVudCxcblx0XHRcdFx0Um93Q29sb3JpbmdTZXRFdmVudCxcblx0XHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdE5leHRQYWdlRXZlbnQsXG5cdFx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0XHRGb3JtYXRpb25TZXRFdmVudCxcblx0XHRcdFx0U2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQsXG5cdFx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0XHRTb3J0VG9nZ2xlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0XHRTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFx0U29ydE9yZGVyU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50XG5cdFx0XHQpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKSxcblx0XHRcdFx0XHRrZXkgPSBzdHJ1Y3R1cmUuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5zZXQoa2V5LCBzdHJ1Y3R1cmUpO1xuXG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlJC5uZXh0KHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmU+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==