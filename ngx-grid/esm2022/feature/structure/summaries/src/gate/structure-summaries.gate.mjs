import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { ifChanged } from '../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/summaries/src/api/summaries.publisher";
export class StructureSummariesGate extends Gate {
    structureId;
    summariesCommandInvoker;
    summaries;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSummariesGate, deps: [{ token: i1.StructureId }, { token: i2.SummariesPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureSummariesGate, selector: "gui-structure[summaries]", inputs: { summaries: "summaries" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSummariesGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[summaries]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SummariesPublisher }]; }, propDecorators: { summaries: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2dhdGUvc3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUs3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFNekUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLElBQUk7SUFLbEI7SUFDVDtJQUhwQixTQUFTLENBQWtCO0lBRTNCLFlBQTZCLFdBQXdCLEVBQ2pDLHVCQUEyQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQW9CO0lBRS9ELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO3dHQWZXLHNCQUFzQjs0RkFBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDO21JQUlBLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2FwaS9jb25maWcvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN1bW1hcmllc1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvY2hlY2suaW5wdXQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc3VtbWFyaWVzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVN1bW1hcmllc0dhdGU+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5zdW1tYXJpZXMsICgpID0+IHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0Q29uZmlnKHRoaXMuc3VtbWFyaWVzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=