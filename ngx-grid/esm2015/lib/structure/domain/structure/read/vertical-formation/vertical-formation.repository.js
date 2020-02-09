/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../../common/cdk/reactive';
import { StructureInitedEvent } from '../../command/init/structure-inited.event';
import { VerticalScrollEnabledSetEvent } from '../../command/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../../infrastructure/in-memory/structure/read/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../command/vertical-formation/set-row-height/row-height-set.event';
export class VerticalFormationRepository extends Reactive {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        this.verticalFormation = new Map();
        this.verticalFormation$ = new ReplaySubject();
        this.domainEventBus
            .ofEvent(StructureInitedEvent, VerticalScrollEnabledSetEvent, RowHeightSetEvent)
            .pipe(this.takeUntil())
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
            const verticalFormation = structure.getVerticalFormation();
            /** @type {?} */
            const structureId = structure.getId();
            this.next(structureId, verticalFormation);
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
    VerticalFormationRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUdqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUMvSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUl6RyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsUUFBUTs7Ozs7SUFNeEQsWUFBNkIsY0FBOEIsRUFDaEQsMkJBQXVEO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTRCO1FBTGpELHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFzQyxDQUFDO1FBRWxFLHVCQUFrQixHQUFHLElBQUksYUFBYSxFQUEyQyxDQUFDO1FBTWxHLElBQUksQ0FBQyxjQUFjO2FBQ2pCLE9BQU8sQ0FDUCxvQkFBb0IsRUFDcEIsNkJBQTZCLEVBQzdCLGlCQUFpQixDQUNqQjthQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFOztrQkFFM0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXOztrQkFFL0IsU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztrQkFDdEUsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFOztrQkFDcEQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsV0FBd0I7UUFFL0MsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ3RDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxDQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDckQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQXdCO1FBRW5DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQzthQUN0QyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFDLENBQ3hELENBQUM7SUFDUixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxXQUF3QjtRQUVuRCxPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLHFCQUE4RCxFQUFFLEVBQUU7O2tCQUVuRSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUUvQixPQUFPLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxxQkFBOEQsRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQ3ZILENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLFdBQXdCLEVBQUUsaUJBQTZDO1FBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFoRUQsVUFBVTs7OztZQVhXLGNBQWM7WUFPM0IsMEJBQTBCOzs7Ozs7O0lBT2xDLHdEQUFtRjs7Ozs7SUFFbkYseURBQW1HOzs7OztJQUV2RixxREFBK0M7Ozs7O0lBQ3hELGtFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9pbml0L3N0cnVjdHVyZS1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL3JlYWQvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5U3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTdHJ1Y3R1cmVJbml0ZWRFdmVudCxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50XG5cdFx0XHQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKSxcblx0XHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHN0cnVjdHVyZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkID0gc3RydWN0dXJlLmdldElkKCk7XG5cblx0XHRcdFx0dGhpcy5uZXh0KHN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8VmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+IHtcblxuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBzdHJ1Y3R1cmVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiQubmV4dCh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uKTtcblx0fVxuXG5cbn1cbiJdfQ==