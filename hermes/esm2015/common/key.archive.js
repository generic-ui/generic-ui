/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
import { Optional } from './optional';
import { hermesFilter } from './stream/operator/hermes.filter';
import { hermesMap } from './stream/operator/hermes.map';
import { hermesDistinctUntilChanged } from './stream/operator/hermes.distinct-until-changed';
import { HermesArchiveSubject } from './stream/observable/hermes.archive-subject';
import { hermesTake } from './stream/operator/hermes.take';
/**
 * @abstract
 * @template K, T
 */
export class KeyArchive extends ReactiveService {
    /**
     * @protected
     * @param {?=} defaultValue
     */
    constructor(defaultValue) {
        super();
        this.archive = new KeyMap();
        this.defaultValue = Optional.empty();
        this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            this.defaultValue = Optional.of(defaultValue);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    on(key) {
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter((/**
         * @return {?}
         */
        () => this.isNotStopped())), hermesMap((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(key);
        })), hermesFilter((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.isPresent())), hermesMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value.getValueOrNullOrThrowError())), hermesDistinctUntilChanged(), this.hermesTakeUntil());
    }
    /**
     * @param {?} key
     * @return {?}
     */
    once(key) {
        return this.on(key)
            .pipe(hermesTake(1));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    next(key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    tryToInitDefault(key) {
        this.defaultValue
            .ifPresent((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!this.archive.has(key)) {
                this.next(key, value);
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.archive$;
    /**
     * @type {?}
     * @private
     */
    KeyArchive.prototype.defaultValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24va2V5LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFJM0QsTUFBTSxPQUFnQixVQUE2QixTQUFRLGVBQWU7Ozs7O0lBUXpFLFlBQXNCLFlBQWdCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBUFEsWUFBTyxHQUFHLElBQUksTUFBTSxFQUFRLENBQUM7UUFJdEMsaUJBQVksR0FBZ0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFMUMsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsR0FBTTtRQUVSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxFQUN2QyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxFQUNGLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQyxFQUN2RCxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxFQUNyRSwwQkFBMEIsRUFBRSxFQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFNO1FBRVYsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNiLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQU07UUFFVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBTSxFQUFFLEtBQVE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFNO1FBQzlCLElBQUksQ0FBQyxZQUFZO2FBQ2YsU0FBUzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUVGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUVEOzs7Ozs7SUFqRUEsNkJBQThDOzs7OztJQUU5Qyw4QkFBOEQ7Ozs7O0lBRTlELGtDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0aXZlU2VydmljZSB9IGZyb20gJy4vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBLZXlNYXAgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleS1tYXAnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL29wdGlvbmFsJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgaGVybWVzTWFwIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLm1hcCc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5kaXN0aW5jdC11bnRpbC1jaGFuZ2VkJztcbmltcG9ydCB7IEhlcm1lc0FyY2hpdmVTdWJqZWN0IH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuYXJjaGl2ZS1zdWJqZWN0JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IGhlcm1lc1Rha2UgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZSc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtleUFyY2hpdmU8SyBleHRlbmRzIEtleSwgVD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSA9IG5ldyBLZXlNYXA8SywgVD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUkOiBIZXJtZXNBcmNoaXZlU3ViamVjdDxLZXlNYXA8SywgVD4+O1xuXG5cdHByaXZhdGUgZGVmYXVsdFZhbHVlOiBPcHRpb25hbDxUPiA9IE9wdGlvbmFsLmVtcHR5KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IFQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5hcmNoaXZlJCA9IEhlcm1lc0FyY2hpdmVTdWJqZWN0Lm9mKCk7XG5cblx0XHRpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IE9wdGlvbmFsLm9mKGRlZmF1bHRWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0b24oa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0XHR0aGlzLnRyeVRvSW5pdERlZmF1bHQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKCkgPT4gdGhpcy5pc05vdFN0b3BwZWQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IEtleU1hcDxLLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuaXNQcmVzZW50KCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdCAgIHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uY2Uoa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbihrZXkpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdGdldChrZXk6IEspOiBPcHRpb25hbDxUPiB7XG5cblx0XHR0aGlzLnRyeVRvSW5pdERlZmF1bHQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUuZ2V0KGtleSk7XG5cdH1cblxuXHRuZXh0KGtleTogSywgdmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0cHJpdmF0ZSB0cnlUb0luaXREZWZhdWx0KGtleTogSyk6IHZvaWQge1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlXG5cdFx0XHQuaWZQcmVzZW50KCh2YWx1ZSkgPT4ge1xuXG5cdFx0XHRcdGlmICghdGhpcy5hcmNoaXZlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==