/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureCreatedEvent } from '../../../domain/structure/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../infrastructure/in-memory/read/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
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
            .ofEvent(StructureCreatedEvent, VerticalScrollEnabledSetEvent, (/** @type {?} */ (OriginSetEvent)), StructureHeightSetEvent, RowHeightSetEvent, SchemaThemeSetEvent, RowHeightSetBasedOnThemeEvent)
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
        (v) => v.isEnabled())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRGQUE0RixDQUFDO0FBQzNJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBRXJILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhGQUE4RixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQWEzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUl0SixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsUUFBUTs7Ozs7SUFNeEQsWUFBNkIsY0FBOEIsRUFDaEQsMEJBQXNEO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBRm9CLG1CQUFjLEdB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LHlEQUFtRzs7Ozs7SUFFdkYscURBQStDOzs7OztJQUN4RCxpRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3JlYWQvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC9mb3JtYXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NvcnQvdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFN0cnVjdHVyZUNyZWF0ZWRFdmVudCxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50LFxuXHRcdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudFxuXHRcdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdG9wdFN0cnVjdHVyZS5pZlByZXNlbnQoKHN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHZlcnRpY2FsRm9ybWF0aW9uID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLFxuXHRcdFx0XHRcdFx0c3RydWN0dXJlUmVhZE1vZGVsUm9vdElkID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0dGhpcy5uZXh0KGFnZ3JlZ2F0ZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Vmlld1BvcnRIZWlnaHQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPiB7XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gc3RydWN0dXJlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiBpZFRvVmVydGljYWxGb3JtYXRpb24uZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24kLm5leHQodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdH1cblxuXG59XG4iXX0=