import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../header/menu/config/structure.column-menu-config.archive";
export class StructureColumnMenuGate extends Gate {
    constructor(structureColumnMenuConfigArchive) {
        super();
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('columnMenu', changes)) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
    }
}
StructureColumnMenuGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnMenuGate, deps: [{ token: i1.StructureColumnMenuConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureColumnMenuGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureColumnMenuGate, selector: "gui-structure[columnMenu]", inputs: { columnMenu: "columnMenu" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnMenuGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[columnMenu]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureColumnMenuConfigArchive }]; }, propDecorators: { columnMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1tZW51LmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9nYXRlL2NvbHVtbi9tZW51L3N0cnVjdHVyZS1jb2x1bW4tbWVudS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBTTlFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJO0lBS2hELFlBQTZCLGdDQUFrRTtRQUM5RixLQUFLLEVBQUUsQ0FBQztRQURvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBRS9GLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMkM7UUFFdEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7O3FIQWRXLHVCQUF1Qjt5R0FBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtpQkFDckM7dUhBSUEsVUFBVTtzQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2NvbmZpZy9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtjb2x1bW5NZW51XSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVDb2x1bW5NZW51R2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY29sdW1uTWVudScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cdH1cblxufVxuIl19