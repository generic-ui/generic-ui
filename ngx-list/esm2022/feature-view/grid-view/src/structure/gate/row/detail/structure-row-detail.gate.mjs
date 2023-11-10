import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../row-detail/structure.row-detail.config-archive";
export class StructureRowDetailGate extends Gate {
    structureDetailViewConfigArchive;
    rowDetail;
    constructor(structureDetailViewConfigArchive) {
        super();
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowDetail', changes)) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowDetailGate, deps: [{ token: i1.StructureRowDetailConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureRowDetailGate, selector: "gui-structure[rowDetail]", inputs: { rowDetail: "rowDetail" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowDetailGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowDetail]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureRowDetailConfigArchive }]; }, propDecorators: { rowDetail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlL2dhdGUvcm93L2RldGFpbC9zdHJ1Y3R1cmUtcm93LWRldGFpbC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBTzlFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJO0lBS2xCO0lBRjdCLFNBQVMsQ0FBa0I7SUFFM0IsWUFBNkIsZ0NBQWlFO1FBQzdGLEtBQUssRUFBRSxDQUFDO1FBRG9CLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBaUM7SUFFOUYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUVyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0YsQ0FBQzt3R0FkVyxzQkFBc0I7NEZBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQztzSEFJQSxTQUFTO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcm93LWRldGFpbC9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbcm93RGV0YWlsXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHJvd0RldGFpbDogUm93RGV0YWlsQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0RldGFpbEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd0RldGFpbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLm5leHQodGhpcy5yb3dEZXRhaWwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=