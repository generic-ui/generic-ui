/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureSearchPhraseSetDomainEvent } from '../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
import { StructureSearchPhraseRepository } from '../../../read/structure/searching/phrase/structure.search-phrase.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gtZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDM0ksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFJOUgsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFFdkMsWUFBNkIsY0FBOEIsRUFDdkMsK0JBQWdFO1FBRHZELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQ3BGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCO1FBRXRDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1DQUFtQyxDQUNuQzthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQzVGLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVoQyxPQUFPLElBQUksQ0FBQywrQkFBK0I7aUJBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUM7aUJBQ3JCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7WUF4QkQsVUFBVTs7OztZQVBXLGNBQWM7WUFJM0IsK0JBQStCOzs7Ozs7O0lBTTNCLHFEQUErQzs7Ozs7SUFDeEQsc0VBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5XG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBocmFzZShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==