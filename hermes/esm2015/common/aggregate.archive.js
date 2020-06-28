/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, filter } from 'rxjs/operators';
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
    on(aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(aggregateId.toString());
        })), filter((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value !== undefined)), distinctUntilChanged());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return this.archive.get(aggregateId.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQWMsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUVyRCw0Q0FHQzs7O0lBRkEsNkNBQXlCOztJQUN6Qix1Q0FBUzs7Ozs7O0FBR1YsTUFBTSxPQUFnQixnQkFBb0IsU0FBUSxlQUFlOzs7OztJQU1oRSxZQUFzQixZQUF3QztRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQUxELFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBTXRDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsV0FBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDLEVBQ3pDLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUF3QixFQUFFLEtBQVE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsWUFBd0M7UUFDM0QsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBeENBLG1DQUF1Qzs7Ozs7SUFFdkMsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuL3JlYWN0aXZlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4ge1xuXHRhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQ7XG5cdHZhbHVlOiBUO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlQXJjaGl2ZTxUPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJpdmF0ZSBhcmNoaXZlID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG5cblx0cHJpdmF0ZSBhcmNoaXZlJDogU3ViamVjdDxNYXA8c3RyaW5nLCBUPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaW5pdEFyY2hpdmUoZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpLFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKCh2YWx1ZTogVCkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0bmV4dChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlLnNldChhZ2dyZWdhdGVJZC50b1N0cmluZygpLCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcmNoaXZlKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pOiB2b2lkIHtcblx0XHRpZiAoZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUuc2V0KGRlZmF1bHRWYWx1ZS5hZ2dyZWdhdGVJZC50b1N0cmluZygpLCBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWFwPHN0cmluZywgVD4+KHRoaXMuYXJjaGl2ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBUPj4oMSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==