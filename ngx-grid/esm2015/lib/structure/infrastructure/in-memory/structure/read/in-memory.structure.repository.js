/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/command/search/set-phrase/structure.search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../domain/structure/command/sort/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../../domain/structure/command/vertical-formation/set-row-height/row-height-set.event';
export class InMemoryStructureRepository extends StructureRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super(domainEventBus);
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
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
            StructureInitedEvent,
            SetSourceLoadingEvent,
            SchemaSetEvent,
            SchemaThemeSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent,
            SchemaTopHeaderChangedEvent,
            SchemaBottomHeaderChangedEvent,
            RowColoringSetEvent,
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
            RowHeightSetEvent
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
        const optStructure = this.inMemoryStructureQueryStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            /** @type {?} */
            const key = structure.getId().toString();
            this.structureIdToStructure.set(key, structure);
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
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcmVhZC9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBeUIsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDbEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDNUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDM0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7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QUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQXBFRCxVQUFVOzs7O1lBOUJ3QixjQUFjO1lBSXhDLDBCQUEwQjs7Ozs7OztJQTZCbEMsNkRBQXVFOzs7OztJQUV2RSxpREFBMkU7Ozs7O0lBR3hFLGtFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvaW5pdC9zdHJ1Y3R1cmUtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9sb2FkaW5nL3NldC1zb3VyY2UtbG9hZGluZy5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zZXQvc2NoZW1hLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVG9wSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbHVtbi1oZWFkZXIvdG9wL3NjaGVtYS10b3AtaGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQm90dG9tSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbHVtbi1oZWFkZXIvYm90dG9tL3NjaGVtYS1ib3R0b20taGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9jb2xvcmluZy9zZXQvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEZvcm1hdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3NldC9mb3JtYXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZVJlcG9zaXRvcnkgZXh0ZW5kcyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5U3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmU+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRTZXRTb3VyY2VMb2FkaW5nRXZlbnQsXG5cdFx0XHRTY2hlbWFTZXRFdmVudCxcblx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50LFxuXHRcdFx0U2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRTY2hlbWFCb3R0b21IZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRSb3dDb2xvcmluZ1NldEV2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0Rm9ybWF0aW9uU2V0RXZlbnQsXG5cdFx0XHRTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCxcblx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0U2Nyb2xsUG9zaXRpb25TZXRFdmVudCxcblx0XHRcdFNvcnRUb2dnbGVkRXZlbnQgYXMgYW55LFxuXHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQsXG5cdFx0XHRTb3J0T3JkZXJTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRSb3dIZWlnaHRTZXRFdmVudFxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3VicyhldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVRdWVyeVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHtcblx0XHRcdGNvbnN0IGtleSA9IHN0cnVjdHVyZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5zZXQoa2V5LCBzdHJ1Y3R1cmUpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZSQubmV4dCh0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==