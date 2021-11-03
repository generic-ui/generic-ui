import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import * as i0 from "@angular/core";
export class SchemaThemeRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaThemeSetEvent;
    }
}
SchemaThemeRepository.ɵfac = function SchemaThemeRepository_Factory(t) { return new (t || SchemaThemeRepository)(); };
SchemaThemeRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaThemeRepository, factory: SchemaThemeRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaThemeRepository, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUdoRixNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQWlFO0lBRTNHO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7MEZBUlcscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBFdmVudERyaXZlblJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnREcml2ZW5SZXBvc2l0b3J5PFNjaGVtYUlkLCBTY2hlbWFUaGVtZVNldEV2ZW50LCBTY2hlbWFUaGVtZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2NoZW1hVGhlbWVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFUaGVtZVNldEV2ZW50O1xuXHR9XG5cbn1cbiJdfQ==