import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import { CellEditorManager } from '../../../core/structure/structure-core/domain/edit/cell-editor.manager';
import * as i0 from "@angular/core";
export class StructureCellEditArchive extends AggregateArchive {
    constructor() {
        super(StructureCellEditArchive.default);
    }
}
StructureCellEditArchive.default = new CellEditorManager({ enabled: false });
StructureCellEditArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureCellEditArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellEditArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7O0FBSTNHLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBbUM7SUFJaEY7UUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7QUFKTSxnQ0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztxSEFGL0Msd0JBQXdCO3lIQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDZWxsRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPENlbGxFZGl0b3JNYW5hZ2VyPiB7XG5cblx0c3RhdGljIGRlZmF1bHQgPSBuZXcgQ2VsbEVkaXRvck1hbmFnZXIoeyBlbmFibGVkOiBmYWxzZSB9KTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUuZGVmYXVsdCk7XG5cdH1cbn1cbiJdfQ==