/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
import { SummariesManager } from '../../../domain/summaries/summaries.manager';
export class StructureSummariesRepository extends Reactive {
    constructor() {
        super();
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    init(structureId) {
        this.setEnabled(SummariesManager.DEFAULT_ENABLED, structureId);
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setEnabled(enabled, structureId) {
        this.next(enabled, structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSummariesEnabled(structureId) {
        return this.enabled$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    next(enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    }
}
StructureSummariesRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4tYXBpL3N1bW1hcmllcy9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFJL0UsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7SUFNekQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUxELFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7SUFJN0QsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBd0I7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLENBQUMsR0FBeUIsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBbkNELFVBQVU7Ozs7Ozs7OztJQUdWLCtDQUE2Qzs7Ozs7SUFFN0MsZ0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3VtbWFyaWVzL3N1bW1hcmllcy5tYW5hZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRwcml2YXRlIGVuYWJsZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRFbmFibGVkKFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVELCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChlbmFibGVkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuZW5hYmxlZCQubmV4dCh0aGlzLmVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==