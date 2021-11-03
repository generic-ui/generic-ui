import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import { GroupCollection } from '../../api/group/group.collection';
import * as i0 from "@angular/core";
export class CompositionGroupArchive extends AggregateArchive {
    constructor() {
        super(CompositionGroupArchive.default);
    }
}
CompositionGroupArchive.default = new GroupCollection([], false);
CompositionGroupArchive.ɵfac = function CompositionGroupArchive_Factory(t) { return new (t || CompositionGroupArchive)(); };
CompositionGroupArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CompositionGroupArchive, factory: CompositionGroupArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionGroupArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZ3JvdXAuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi1ncm91cC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUluRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWlDO0lBSTdFO1FBQ0MsS0FBSyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0FBSmUsK0JBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7OEZBRjdDLHVCQUF1Qjs2RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBHcm91cENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxHcm91cENvbGxlY3Rpb24+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdCA9IG5ldyBHcm91cENvbGxlY3Rpb24oW10sIGZhbHNlKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxuXG59XG4iXX0=