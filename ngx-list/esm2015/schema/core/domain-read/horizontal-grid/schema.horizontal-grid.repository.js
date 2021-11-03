import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import * as i0 from "@angular/core";
export class SchemaHorizontalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaHorizontalGridSetEvent;
    }
}
SchemaHorizontalGridRepository.ɵfac = function SchemaHorizontalGridRepository_Factory(t) { return new (t || SchemaHorizontalGridRepository)(); };
SchemaHorizontalGridRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaHorizontalGridRepository, factory: SchemaHorizontalGridRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaHorizontalGridRepository, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9ob3Jpem9udGFsLWdyaWQvc2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDOztBQUk3RyxNQUFNLE9BQU8sOEJBQStCLFNBQVEscUJBQXNFO0lBRXpIO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7NEdBUlcsOEJBQThCO29GQUE5Qiw4QkFBOEIsV0FBOUIsOEJBQThCO3VGQUE5Qiw4QkFBOEI7Y0FEMUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgRXZlbnREcml2ZW5SZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50RHJpdmVuUmVwb3NpdG9yeTxTY2hlbWFJZCwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCwgYm9vbGVhbj4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50O1xuXHR9XG5cbn1cbiJdfQ==