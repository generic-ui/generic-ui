import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import { CellEditorManager } from '../../../core/structure/core/domain/edit/cell-editor.manager';
import * as i0 from "@angular/core";
export class StructureCellEditArchive extends AggregateArchive {
    constructor() {
        super(StructureCellEditArchive.default);
    }
}
StructureCellEditArchive.default = new CellEditorManager({ enabled: false });
StructureCellEditArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureCellEditArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureCellEditArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureCellEditArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOERBQThELENBQUM7O0FBSWpHLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBbUM7SUFJaEY7UUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7QUFKTSxnQ0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztzSEFGL0Msd0JBQXdCOzBIQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDZWxsRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSBleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8Q2VsbEVkaXRvck1hbmFnZXI+IHtcblxuXHRzdGF0aWMgZGVmYXVsdCA9IG5ldyBDZWxsRWRpdG9yTWFuYWdlcih7IGVuYWJsZWQ6IGZhbHNlIH0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxufVxuIl19