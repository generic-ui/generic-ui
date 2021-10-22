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
        (value) => value.getValueOrNullOrThrowError())), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
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
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    equals(a, b) {
        return a === b;
    }
    /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    createDefaultValue(defaultValue) {
        return defaultValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24va2V5LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFJM0QsTUFBTSxPQUFnQixVQUE2QixTQUFRLGVBQWU7Ozs7O0lBUXpFLFlBQXNCLFlBQWdCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBUFEsWUFBTyxHQUFHLElBQUksTUFBTSxFQUFRLENBQUM7UUFJdEMsaUJBQVksR0FBZ0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFMUMsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsR0FBTTtRQUVSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxFQUN2QyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxFQUNGLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQyxFQUN2RCxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxFQUNyRSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3ZDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQU07UUFFVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2IsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBTTtRQUVULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7SUFFUyxNQUFNLENBQUMsQ0FBSSxFQUFFLENBQUk7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVTLGtCQUFrQixDQUFDLFlBQWU7UUFDM0MsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBTTtRQUM5QixJQUFJLENBQUMsWUFBWTthQUNmLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFFRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRDs7Ozs7O0lBekVBLDZCQUE4Qzs7Ozs7SUFFOUMsOEJBQThEOzs7OztJQUU5RCxrQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuL3JlYWN0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5TWFwIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9rZXktbWFwJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi9vcHRpb25hbCc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IGhlcm1lc01hcCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5tYXAnO1xuaW1wb3J0IHsgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZGlzdGluY3QtdW50aWwtY2hhbmdlZCc7XG5pbXBvcnQgeyBIZXJtZXNBcmNoaXZlU3ViamVjdCB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLmFyY2hpdmUtc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBoZXJtZXNUYWtlIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRha2UnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9rZXknO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLZXlBcmNoaXZlPEsgZXh0ZW5kcyBLZXksIFQ+IGV4dGVuZHMgUmVhY3RpdmVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUgPSBuZXcgS2V5TWFwPEssIFQ+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhcmNoaXZlJDogSGVybWVzQXJjaGl2ZVN1YmplY3Q8S2V5TWFwPEssIFQ+PjtcblxuXHRwcml2YXRlIGRlZmF1bHRWYWx1ZTogT3B0aW9uYWw8VD4gPSBPcHRpb25hbC5lbXB0eSgpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWU/OiBUKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuYXJjaGl2ZSQgPSBIZXJtZXNBcmNoaXZlU3ViamVjdC5vZigpO1xuXG5cdFx0aWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBPcHRpb25hbC5vZihkZWZhdWx0VmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG9uKGtleTogSyk6IEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdFx0dGhpcy50cnlUb0luaXREZWZhdWx0KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlJFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKCgpID0+IHRoaXMuaXNOb3RTdG9wcGVkKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgobWFwOiBLZXlNYXA8SywgVD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKCh2YWx1ZTogT3B0aW9uYWw8VD4pID0+IHZhbHVlLmlzUHJlc2VudCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQodGhpcy5lcXVhbHMpLFxuXHRcdFx0XHRcdCAgIHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uY2Uoa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbihrZXkpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdGdldChrZXk6IEspOiBPcHRpb25hbDxUPiB7XG5cblx0XHR0aGlzLnRyeVRvSW5pdERlZmF1bHQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUuZ2V0KGtleSk7XG5cdH1cblxuXHRuZXh0KGtleTogSywgdmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdHRoaXMuYXJjaGl2ZSQubmV4dCh0aGlzLmFyY2hpdmUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGVxdWFscyhhOiBULCBiOiBUKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGEgPT09IGI7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIHRyeVRvSW5pdERlZmF1bHQoa2V5OiBLKTogdm9pZCB7XG5cdFx0dGhpcy5kZWZhdWx0VmFsdWVcblx0XHRcdC5pZlByZXNlbnQoKHZhbHVlKSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmFyY2hpdmUuaGFzKGtleSkpIHtcblx0XHRcdFx0XHR0aGlzLm5leHQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19