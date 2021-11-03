import { Injectable } from '@angular/core';
import { SourceManager } from './source.manager';
import * as i0 from "@angular/core";
import * as i1 from "../formation/core/formation.manager-factory";
export class SourceManagerFactory {
    constructor(formationManagerFactory) {
        this.formationManagerFactory = formationManagerFactory;
    }
    createDefault() {
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
    create() {
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
}
SourceManagerFactory.ɵfac = function SourceManagerFactory_Factory(t) { return new (t || SourceManagerFactory)(i0.ɵɵinject(i1.FormationManagerFactory)); };
SourceManagerFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SourceManagerFactory, factory: SourceManagerFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceManagerFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.FormationManagerFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLFlBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQzdFLENBQUM7SUFFRCxhQUFhO1FBRVosTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWpELE9BQU8sSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU07UUFDTCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFakQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzt3RkFoQlcsb0JBQW9COzBFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5OiBGb3JtYXRpb25NYW5hZ2VyRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlRGVmYXVsdCgpOiBTb3VyY2VNYW5hZ2VyIHtcblxuXHRcdGNvbnN0IGZtID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdHJldHVybiBuZXcgU291cmNlTWFuYWdlcihmbSk7XG5cdH1cblxuXHRjcmVhdGUoKTogU291cmNlTWFuYWdlciB7XG5cdFx0Y29uc3QgZm0gPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBTb3VyY2VNYW5hZ2VyKGZtKTtcblx0fVxuXG59XG4iXX0=