/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive';
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
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)))
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
        (v) => v.getRowHeight())));
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
        (v) => v.getViewPortHeight())));
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
        (v) => v.getTopMargin())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBSW5ILE1BQU0sT0FBTywyQkFBNEIsU0FBUSxRQUFROzs7OztJQU14RCxZQUE2QixjQUE4QixFQUNoRCwwQkFBc0Q7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFGb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2hELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFMaEQsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQXNDLENBQUM7UUFFbEUsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQTJDLENBQUM7UUFNbEcsSUFBSSxDQUFDLGNBQWM7YUFDakIsT0FBTyxDQUNQLG1CQUFBLHFCQUFxQixFQUFPLEVBQzVCLG1CQUFBLDZCQUE2QixFQUFPLEVBQ3BDLG1CQUFBLGNBQWMsRUFBTyxFQUNyQixtQkFBQSx1QkFBdUIsRUFBTyxFQUM5QixtQkFBQSxpQkFBaUIsRUFBTyxFQUN4QixtQkFBQSxtQkFBbUIsRUFBTyxFQUMxQixtQkFBQSw2QkFBNkIsRUFBTyxFQUNwQyxtQkFBQSxzQkFBc0IsRUFBTyxFQUM3QixtQkFBQSwwQkFBMEIsRUFBTyxDQUNqQzthQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFOztrQkFFeEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7O2tCQUVwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFekUsWUFBWSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLHNCQUE4QyxFQUFFLEVBQUU7O3NCQUVuRSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxvQkFBb0IsRUFBRTs7c0JBQ3RFLHdCQUF3QixHQUFHLHNCQUFzQixDQUFDLEtBQUssRUFBRTtnQkFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUVKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxXQUF3QjtRQUUvQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDdEMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLENBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxFQUNyRCxvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFFbkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ3RDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxDQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FDeEQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBd0I7UUFFekMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ3RDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxDQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxDQUM3RCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFFbkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ3RDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxDQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FDeEQsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFdBQXdCO1FBRW5ELE9BQU8sSUFBSSxDQUFDLGtCQUFrQjthQUN4QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMscUJBQThELEVBQUUsRUFBRTs7a0JBRW5FLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8scUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLHFCQUE4RCxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FDdkgsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTyxJQUFJLENBQUMsV0FBd0IsRUFBRSxpQkFBNkM7UUFDbkYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTVGRCxVQUFVOzs7O1lBbEJXLGNBQWM7WUFPM0IsMEJBQTBCOzs7Ozs7O0lBY2xDLHdEQUFtRjs7Ozs7SUFFbkYseURBQW1HOzs7OztJQUV2RixxREFBK0M7Ozs7O0lBQ3hELGlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9kb21haW4tcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFN0cnVjdHVyZUNyZWF0ZWRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0T3JpZ2luU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U2NoZW1hVGhlbWVTZXRFdmVudCBhcyBhbnksIC8vIFRPRE9cblx0XHRcdFx0Um93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgYXMgYW55XG5cdFx0XHQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdG9wdFN0cnVjdHVyZS5pZlByZXNlbnQoKHN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHZlcnRpY2FsRm9ybWF0aW9uID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLFxuXHRcdFx0XHRcdFx0c3RydWN0dXJlUmVhZE1vZGVsUm9vdElkID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0dGhpcy5uZXh0KGFnZ3JlZ2F0ZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Um93SGVpZ2h0KCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRWaWV3UG9ydEhlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0VG9wTWFyZ2luKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb24kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IHN0cnVjdHVyZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvVmVydGljYWxGb3JtYXRpb24uaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIHZlcnRpY2FsRm9ybWF0aW9uKTtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJC5uZXh0KHRoaXMudmVydGljYWxGb3JtYXRpb24pO1xuXHR9XG5cblxufVxuIl19