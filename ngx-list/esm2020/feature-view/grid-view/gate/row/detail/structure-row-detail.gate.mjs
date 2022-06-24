import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../row-detail/structure.row-detail.config-archive";
export class StructureRowDetailGate extends Gate {
    constructor(structureDetailViewConfigArchive) {
        super();
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowDetail', changes)) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
    }
}
StructureRowDetailGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowDetailGate, deps: [{ token: i1.StructureRowDetailConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowDetailGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureRowDetailGate, selector: "gui-structure[rowDetail]", inputs: { rowDetail: "rowDetail" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowDetailGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowDetail]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureRowDetailConfigArchive }]; }, propDecorators: { rowDetail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9nYXRlL3Jvdy9kZXRhaWwvc3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQU94RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSTtJQUsvQyxZQUE2QixnQ0FBaUU7UUFDN0YsS0FBSyxFQUFFLENBQUM7UUFEb0IscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFpQztJQUU5RixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDRixDQUFDOztvSEFkVyxzQkFBc0I7d0dBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDO3NIQUlBLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3dEZXRhaWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuY29uZmlnJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dEZXRhaWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBSb3dEZXRhaWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUm93RGV0YWlsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93RGV0YWlsJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnJvd0RldGFpbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==