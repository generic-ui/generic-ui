import { Injectable } from '@angular/core';
import { Reactive } from './reactive';
import * as i0 from "@angular/core";
export class ReactiveService extends Reactive {
    constructor() {
        super();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
}
ReactiveService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ReactiveService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReactiveService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vcmVhY3RpdmUvcmVhY3RpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR3RDLE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxRQUFRO0lBRXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRVEsV0FBVztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs2R0FSb0IsZUFBZTtpSEFBZixlQUFlOzRGQUFmLGVBQWU7a0JBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG59XG4iXX0=