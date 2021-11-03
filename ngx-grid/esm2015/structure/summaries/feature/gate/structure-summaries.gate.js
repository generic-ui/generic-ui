import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/summaries.command-invoker";
export class StructureSummariesGate extends Gate {
    constructor(structureId, summariesCommandInvoker) {
        super();
        this.structureId = structureId;
        this.summariesCommandInvoker = summariesCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('summaries', changes)) {
            this.summariesCommandInvoker.setConfig(this.summaries, this.structureId);
        }
    }
}
StructureSummariesGate.ɵfac = function StructureSummariesGate_Factory(t) { return new (t || StructureSummariesGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SummariesCommandInvoker)); };
StructureSummariesGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureSummariesGate, selectors: [["gui-structure", "summaries", ""]], inputs: { summaries: "summaries" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSummariesGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[summaries]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SummariesCommandInvoker }]; }, { summaries: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBVTdELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJO0lBSy9DLFlBQTZCLFdBQXdCLEVBQ2pDLHVCQUFnRDtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRXBFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pFO0lBRUYsQ0FBQzs7NEZBaEJXLHNCQUFzQjt5RUFBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7b0dBSUEsU0FBUztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc3VtbWFyaWVzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlU3VtbWFyaWVzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc3VtbWFyaWVzJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0Q29uZmlnKHRoaXMuc3VtbWFyaWVzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=