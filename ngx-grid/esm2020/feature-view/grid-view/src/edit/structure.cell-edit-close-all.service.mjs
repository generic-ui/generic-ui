import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new HermesSubject();
    }
    closeAll() {
        this.closeAll$.next();
    }
    onCloseAll() {
        return this.closeAll$.toObservable();
    }
}
StructureCellEditCloseAllService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureCellEditCloseAllService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditCloseAllService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureCellEditCloseAllService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureCellEditCloseAllService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHckUsTUFBTSxPQUFPLGdDQUFnQztJQUQ3QztRQUdrQixjQUFTLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztLQVN2RDtJQVBBLFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7OzZIQVZXLGdDQUFnQztpSUFBaEMsZ0NBQWdDOzJGQUFoQyxnQ0FBZ0M7a0JBRDVDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsb3NlQWxsJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y2xvc2VBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZUFsbCQubmV4dCgpO1xuXHR9XG5cblx0b25DbG9zZUFsbCgpOiBIZXJtZXNPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jbG9zZUFsbCQudG9PYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==