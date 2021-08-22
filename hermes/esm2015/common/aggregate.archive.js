/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
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
        this.archive = new KeyMap();
        this.initArchive(defaultValue);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    on(aggregateId) {
        return this.archive$
            .asObservable()
            .pipe(filter((/**
         * @return {?}
         */
        () => this.isNotStopped())), map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(aggregateId);
        })), filter((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.isPresent())), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.getValueOrNullOrThrowError())), distinctUntilChanged(), this.takeUntil());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return this.archive.get(aggregateId);
    }
    /**
     * @param {?} aggregateId
     * @param {?} value
     * @return {?}
     */
    next(aggregateId, value) {
        this.archive.set(aggregateId, value);
        this.archive$.next(this.archive);
    }
    /**
     * @private
     * @param {?=} defaultValue
     * @return {?}
     */
    initArchive(defaultValue) {
        if (defaultValue) {
            this.archive.set(defaultValue.aggregateId, defaultValue.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vYWdncmVnYXRlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQWMsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFHL0MsNENBR0M7OztJQUZBLDZDQUF5Qjs7SUFDekIsdUNBQVM7Ozs7OztBQUdWLE1BQU0sT0FBZ0IsZ0JBQW9CLFNBQVEsZUFBZTs7Ozs7SUFNaEUsWUFBc0IsWUFBd0M7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFMRCxZQUFPLEdBQUcsSUFBSSxNQUFNLEVBQWtCLENBQUM7UUFNOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxXQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxFQUNqQyxHQUFHOzs7O1FBQUMsQ0FBQyxHQUEyQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQyxFQUNqRCxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxFQUMvRCxvQkFBb0IsRUFBRSxFQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUF3QixFQUFFLEtBQVE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsWUFBd0M7UUFDM0QsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUF5QixDQUFDLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBMUNBLG1DQUErQzs7Ozs7SUFFL0Msb0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuL3JlYWN0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5TWFwIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9rZXktbWFwJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9vcHRpb25hbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEFnZ3JlZ2F0ZVZhbHVlczxUPiB7XG5cdGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZDtcblx0dmFsdWU6IFQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVBcmNoaXZlPFQ+IGV4dGVuZHMgUmVhY3RpdmVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGFyY2hpdmUgPSBuZXcgS2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPigpO1xuXG5cdHByaXZhdGUgYXJjaGl2ZSQ6IFN1YmplY3Q8S2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8VD4pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaW5pdEFyY2hpdmUoZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdG9uKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc05vdFN0b3BwZWQoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IEtleU1hcDxBZ2dyZWdhdGVJZCwgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuaXNQcmVzZW50KCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZS5nZXQoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0bmV4dChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlLnNldChhZ2dyZWdhdGVJZCwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXJjaGl2ZShkZWZhdWx0VmFsdWU/OiBEZWZhdWx0QWdncmVnYXRlVmFsdWVzPFQ+KTogdm9pZCB7XG5cdFx0aWYgKGRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlLnNldChkZWZhdWx0VmFsdWUuYWdncmVnYXRlSWQsIGRlZmF1bHRWYWx1ZS52YWx1ZSk7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxLZXlNYXA8QWdncmVnYXRlSWQsIFQ+Pih0aGlzLmFyY2hpdmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3Q8S2V5TWFwPEFnZ3JlZ2F0ZUlkLCBUPj4oMSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==