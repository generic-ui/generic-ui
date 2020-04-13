/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureSearchPhraseSetDomainEvent } from '../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
import { StructureSearchPhraseRepository } from '../../read/structure/searching/phrase/structure.search-phrase.repository';
export class StructureSearchEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureSearchPhraseRepository
     */
    constructor(domainEventBus, structureSearchPhraseRepository) {
        this.domainEventBus = domainEventBus;
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchPhrase(structureId) {
        return this.domainEventBus
            .ofEvent(StructureSearchPhraseSetDomainEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureSearchPhraseRepository
                .onPhrase(structureId)
                .pipe(take(1));
        })));
    }
}
StructureSearchEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: StructureSearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructureSearchEventService.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUN4SSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUkzSCxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUV2QyxZQUE2QixjQUE4QixFQUN2QywrQkFBZ0U7UUFEdkQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFDcEYsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUNBQW1DLENBQ25DO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDekcsU0FBUzs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBRTdDLE9BQU8sSUFBSSxDQUFDLCtCQUErQjtpQkFDeEMsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXhCRCxVQUFVOzs7O1lBUFcsY0FBYztZQUkzQiwrQkFBK0I7Ozs7Ozs7SUFNM0IscURBQStDOzs7OztJQUN4RCxzRUFBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QaHJhc2Uoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=