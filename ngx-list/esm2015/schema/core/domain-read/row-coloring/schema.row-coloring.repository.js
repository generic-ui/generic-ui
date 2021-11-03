import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
import * as i0 from "@angular/core";
export class SchemaRowColoringRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return RowColoringSetEvent;
    }
}
SchemaRowColoringRepository.ɵfac = function SchemaRowColoringRepository_Factory(t) { return new (t || SchemaRowColoringRepository)(); };
SchemaRowColoringRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaRowColoringRepository, factory: SchemaRowColoringRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaRowColoringRepository, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQUd2RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXVFO0lBRXZIO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7c0dBUlcsMkJBQTJCO2lGQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgRXZlbnREcml2ZW5SZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50RHJpdmVuUmVwb3NpdG9yeTxTY2hlbWFJZCwgUm93Q29sb3JpbmdTZXRFdmVudCwgU2NoZW1hUm93Q29sb3Jpbmc+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFJvd0NvbG9yaW5nU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gUm93Q29sb3JpbmdTZXRFdmVudDtcblx0fVxuXG59XG4iXX0=