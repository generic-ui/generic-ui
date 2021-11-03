import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import { FilterTypeMap } from './filter-type-map';
import * as i0 from "@angular/core";
export class FilterTypeArchive extends AggregateArchive {
    constructor() {
        super(FilterTypeArchive.default);
    }
}
FilterTypeArchive.default = new FilterTypeMap(new Map());
FilterTypeArchive.ɵfac = function FilterTypeArchive_Factory(t) { return new (t || FilterTypeArchive)(); };
FilterTypeArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterTypeArchive, factory: FilterTypeArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterTypeArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBR2xELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBK0I7SUFJckU7UUFDQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7QUFKZSx5QkFBTyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztrRkFGM0MsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuL2ZpbHRlci10eXBlLW1hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlQXJjaGl2ZSBleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8RmlsdGVyVHlwZU1hcD4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBkZWZhdWx0ID0gbmV3IEZpbHRlclR5cGVNYXAobmV3IE1hcCgpKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihGaWx0ZXJUeXBlQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxuXG59XG4iXX0=