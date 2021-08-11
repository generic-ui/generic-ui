/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { StructureCreatedEvent } from '../../../core/domain/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../domain/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../core/infrastructure/in-memory/api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../domain/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/core/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../domain/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../../source/core/domain/origin/set-origin/origin-set.event';
import { ScrollPositionSetEvent } from '../domain/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../domain/set-row-height-theme/row-height-set-based-on-theme.event';
import { SearchPhraseSetDomainEvent } from '../../../search/core/domain/set-phrase/search-phrase-set.domain-event';
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
        this.verticalFormation$ = new ReplaySubject();
        this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)), (/** @type {?} */ (PageChangedEvent)), (/** @type {?} */ (PagingSetEvent)))
            .pipe(this.takeUntil())
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
                /** @type {?} */
                const structureReadModelRootId = structureReadModelRoot.getId();
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
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.isEnabled())), distinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getRowHeight())), distinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onContainerHeight(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getViewPortHeight())), distinctUntilChanged());
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopMargin(structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.getTopMargin())), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    onVerticalFormation(structureId) {
        return this.verticalFormation$
            .asObservable()
            .pipe(filter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        (idToVerticalFormation) => {
            /** @type {?} */
            const key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ25ILE9BQU8s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d0I7UUFFbkQsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2FBQ3hCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxxQkFBOEQsRUFBRSxFQUFFOztrQkFFbkUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFFL0IsT0FBTyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMscUJBQThELEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUN2SCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxXQUF3QixFQUFFLGlCQUE2QztRQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBakdELFVBQVU7Ozs7WUFwQlcsY0FBYztZQU8zQiwwQkFBMEI7Ozs7Ozs7SUFnQmxDLHdEQUFtRjs7Ozs7SUFFbkYseURBQW1HOzs7OztJQUV2RixxREFBK0M7Ozs7O0lBQ3hELGlFQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uID0gbmV3IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+PigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50IGFzIGFueSwgLy8gVE9ET1xuXHRcdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCBhcyBhbnksXG5cdFx0XHRcdFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCBhcyBhbnksXG5cdFx0XHRcdFBhZ2VDaGFuZ2VkRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRQYWdpbmdTZXRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgdmVydGljYWxGb3JtYXRpb24gPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldFZlcnRpY2FsRm9ybWF0aW9uKCksXG5cdFx0XHRcdFx0XHRzdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCk7XG5cblx0XHRcdFx0XHR0aGlzLm5leHQoYWdncmVnYXRlSWQsIHZlcnRpY2FsRm9ybWF0aW9uKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXHR9XG5cblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmlzRW5hYmxlZCgpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRSb3dIZWlnaHQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Vmlld1BvcnRIZWlnaHQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0VG9wTWFyZ2luKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPiB7XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gc3RydWN0dXJlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiBpZFRvVmVydGljYWxGb3JtYXRpb24uZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24kLm5leHQodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdH1cblxuXG59XG4iXX0=