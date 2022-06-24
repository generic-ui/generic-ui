import { Directive, Input } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import { ifChanged } from '../../../common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/summaries/api/summaries.publisher";
export class StructureSummariesGate extends Gate {
    constructor(structureId, summariesCommandInvoker) {
        super();
        this.structureId = structureId;
        this.summariesCommandInvoker = summariesCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.summaries, () => {
            this.summariesCommandInvoker.setConfig(this.summaries, this.structureId);
        });
    }
}
StructureSummariesGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSummariesGate, deps: [{ token: i1.StructureId }, { token: i2.SummariesPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSummariesGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureSummariesGate, selector: "gui-structure[summaries]", inputs: { summaries: "summaries" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSummariesGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[summaries]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SummariesPublisher }]; }, propDecorators: { summaries: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQU10RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSTtJQUsvQyxZQUE2QixXQUF3QixFQUNqQyx1QkFBMkM7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFvQjtJQUUvRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7b0hBZlcsc0JBQXNCO3dHQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQzttSUFJQSxTQUFTO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2FwaS9jb25maWcvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN1bW1hcmllc1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9hcGkvc3VtbWFyaWVzLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc3VtbWFyaWVzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVN1bW1hcmllc0dhdGU+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5zdW1tYXJpZXMsICgpID0+IHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0Q29uZmlnKHRoaXMuc3VtbWFyaWVzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=