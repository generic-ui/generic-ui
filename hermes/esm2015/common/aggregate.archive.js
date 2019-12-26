/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ReactiveService } from './reactive.service';
/**
 * @record
 * @template T
 */
export function DefaultAggregateValues() { }
if (false) {
    /** @type {?} */
    DefaultAggregateValues.prototype.aggregateId;
    /** @type {?} */
    DefaultAggregateValues.prototype.value;
}
/**
 * @abstract
 * @template T
 */
export class AggregateArchive extends ReactiveService {
    /**
     * @protected
     * @param {?=} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.archive = new Map();
        this.initArchive(defaultValue);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    when(aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(aggregateId.toString());
        })), distinctUntilChanged());
    }
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    next(aggregateId, value) {
        this.archive.set(aggregateId.toString(), value);
        this.archive$.next(this.archive);
    }
    /**
     * @private
     * @param {?=} defaultValue
     * @return {?}
     */
    initArchive(defaultValue) {
        if (defaultValue) {
            this.archive.set(defaultValue.aggregateId.toString(), defaultValue.value);
            this.archive$ = new BehaviorSubject(this.archive);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    AggregateArchive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQWMsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRXJELDRDQUdDOzs7SUFGQSw2Q0FBeUI7O0lBQ3pCLHVDQUFTOzs7Ozs7QUFHVixNQUFNLE9BQWdCLGdCQUFvQixTQUFRLGVBQWU7Ozs7O0lBTWhFLFlBQXNCLFlBQXdDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBTEQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFNdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxXQUF3QjtRQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUF3QixFQUFFLEtBQVE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsWUFBd0M7UUFDM0QsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBbENBLG1DQUF1Qzs7Ozs7SUFFdkMsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdGl2ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+IHtcblx0YWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkO1xuXHR2YWx1ZTogVDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUFyY2hpdmU8VD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgYXJjaGl2ZSA9IG5ldyBNYXA8c3RyaW5nLCBUPigpO1xuXG5cdHByaXZhdGUgYXJjaGl2ZSQ6IFN1YmplY3Q8TWFwPHN0cmluZywgVD4+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWU/OiBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmluaXRBcmNoaXZlKGRlZmF1bHRWYWx1ZSk7XG5cdH1cblxuXHR3aGVuKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG5leHQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXJjaGl2ZShkZWZhdWx0VmFsdWU/OiBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+KTogdm9pZCB7XG5cdFx0aWYgKGRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlLnNldChkZWZhdWx0VmFsdWUuYWdncmVnYXRlSWQudG9TdHJpbmcoKSwgZGVmYXVsdFZhbHVlLnZhbHVlKTtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1hcDxzdHJpbmcsIFQ+Pih0aGlzLmFyY2hpdmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVD4+KDEpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=