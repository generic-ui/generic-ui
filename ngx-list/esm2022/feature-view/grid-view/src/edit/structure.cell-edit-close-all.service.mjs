import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructureCellEditCloseAllService {
    closeAll$ = new HermesSubject();
    closeAll() {
        this.closeAll$.next();
    }
    onCloseAll() {
        return this.closeAll$.toObservable();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureCellEditCloseAllService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureCellEditCloseAllService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureCellEditCloseAllService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHckUsTUFBTSxPQUFPLGdDQUFnQztJQUUzQixTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUV2RCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO3dHQVZXLGdDQUFnQzs0R0FBaEMsZ0NBQWdDOzs0RkFBaEMsZ0NBQWdDO2tCQUQ1QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbG9zZUFsbCQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNsb3NlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VBbGwkLm5leHQoKTtcblx0fVxuXG5cdG9uQ2xvc2VBbGwoKTogSGVybWVzT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VBbGwkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=