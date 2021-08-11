/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/set-phrase/search-phrase-set.domain-event';
export class SearchEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchPhrase(structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isInitial() === false)), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getPhrase())), filter((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => phrase !== null)));
    }
}
SearchEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBS2pHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFzRDs7OztJQUVoRyxZQUFZLGNBQThCO1FBQ3pDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFxQztRQUVuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDO2FBQ3RELElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFpQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssS0FBSyxFQUFDLEVBQzFFLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWlDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQyxFQUM3RCxNQUFNOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUMsQ0FDM0MsQ0FBQztJQUNSLENBQUM7OztZQWZELFVBQVU7Ozs7WUFQRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHN0cnVjdHVyZUlkLCBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpID0+IGV2ZW50LmlzSW5pdGlhbCgpID09PSBmYWxzZSksXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpID0+IGV2ZW50LmdldFBocmFzZSgpKSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHBocmFzZTogc3RyaW5nKSA9PiBwaHJhc2UgIT09IG51bGwpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==