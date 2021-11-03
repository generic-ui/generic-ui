import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import { UniqueValuesReadModel } from './unique-values.read-model';
import * as i0 from "@angular/core";
export class UniqueValuesArchive extends AggregateArchive {
    constructor() {
        super(UniqueValuesArchive.default);
    }
}
UniqueValuesArchive.default = new UniqueValuesReadModel(new Map());
UniqueValuesArchive.ɵfac = function UniqueValuesArchive_Factory(t) { return new (t || UniqueValuesArchive)(); };
UniqueValuesArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UniqueValuesArchive, factory: UniqueValuesArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueValuesArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHbkUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUF1QztJQUkvRTtRQUNDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOztBQUplLDJCQUFPLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7c0ZBRm5ELG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVzQXJjaGl2ZSBleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8VW5pcXVlVmFsdWVzUmVhZE1vZGVsPiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IGRlZmF1bHQgPSBuZXcgVW5pcXVlVmFsdWVzUmVhZE1vZGVsKG5ldyBNYXAoKSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoVW5pcXVlVmFsdWVzQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxuXG59XG4iXX0=