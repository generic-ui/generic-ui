import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import * as i0 from "@angular/core";
export class SchemaVerticalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaVerticalGridSetEvent;
    }
}
SchemaVerticalGridRepository.ɵfac = function SchemaVerticalGridRepository_Factory(t) { return new (t || SchemaVerticalGridRepository)(); };
SchemaVerticalGridRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaVerticalGridRepository, factory: SchemaVerticalGridRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaVerticalGridRepository, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUl2RyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQW9FO0lBRXJIO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7d0dBUlcsNEJBQTRCO2tGQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FEeEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgRXZlbnREcml2ZW5SZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudERyaXZlblJlcG9zaXRvcnk8U2NoZW1hSWQsIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50LCBib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudDtcblx0fVxuXG59XG4iXX0=