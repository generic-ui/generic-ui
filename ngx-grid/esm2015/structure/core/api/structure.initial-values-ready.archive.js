/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateArchive, hermesFilter, hermesTake } from '@generic-ui/hermes';
import { Injectable } from '@angular/core';
export class StructureInitialValuesReadyArchive extends AggregateArchive {
    constructor() {
        super(StructureInitialValuesReadyArchive.default);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    on(aggregateId) {
        return super.on(aggregateId)
            .pipe(hermesFilter((/**
         * @param {?} v
         * @return {?}
         */
        v => v)));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    once(aggregateId) {
        return this.on(aggregateId)
            .pipe(hermesTake(1));
    }
}
StructureInitialValuesReadyArchive.default = false;
StructureInitialValuesReadyArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureInitialValuesReadyArchive.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StructureInitialValuesReadyArchive.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFlLFlBQVksRUFBb0IsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsZ0JBQXlCO0lBSWhGO1FBQ0MsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsRUFBRSxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUNwQixDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBd0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNyQixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDOztBQWxCZSwwQ0FBTyxHQUFHLEtBQUssQ0FBQzs7WUFIaEMsVUFBVTs7Ozs7O0lBR1YsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSwgQWdncmVnYXRlSWQsIGhlcm1lc0ZpbHRlciwgSGVybWVzT2JzZXJ2YWJsZSwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxib29sZWFuPiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IGRlZmF1bHQgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLmRlZmF1bHQpO1xuXHR9XG5cblx0b24oYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uKGFnZ3JlZ2F0ZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzRmlsdGVyKHYgPT4gdilcblx0XHRcdFx0XHQpO1xuXHR9XG5cblx0b25jZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbihhZ2dyZWdhdGVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==