import { AggregateArchive, hermesFilter, hermesTake } from '@generic-ui/hermes';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StructureInitialValuesReadyArchive extends AggregateArchive {
    constructor() {
        super(StructureInitialValuesReadyArchive.default);
    }
    on(aggregateId) {
        return super.on(aggregateId)
            .pipe(hermesFilter(v => v));
    }
    once(aggregateId) {
        return this.on(aggregateId)
            .pipe(hermesTake(1));
    }
}
StructureInitialValuesReadyArchive.default = false;
StructureInitialValuesReadyArchive.ɵfac = function StructureInitialValuesReadyArchive_Factory(t) { return new (t || StructureInitialValuesReadyArchive)(); };
StructureInitialValuesReadyArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureInitialValuesReadyArchive, factory: StructureInitialValuesReadyArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureInitialValuesReadyArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsWUFBWSxFQUFvQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsZ0JBQXlCO0lBSWhGO1FBQ0MsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxFQUFFLENBQUMsV0FBd0I7UUFDMUIsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQXdCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDckIsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7QUFsQmUsMENBQU8sR0FBRyxLQUFLLENBQUM7b0hBRnBCLGtDQUFrQzt3RkFBbEMsa0NBQWtDLFdBQWxDLGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBRDlDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlLCBBZ2dyZWdhdGVJZCwgaGVybWVzRmlsdGVyLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPGJvb2xlYW4+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUuZGVmYXVsdCk7XG5cdH1cblxuXHRvbihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub24oYWdncmVnYXRlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNGaWx0ZXIodiA9PiB2KVxuXHRcdFx0XHRcdCk7XG5cdH1cblxuXHRvbmNlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLm9uKGFnZ3JlZ2F0ZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19