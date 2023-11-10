import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { ifChanged } from '../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/structure-core/src/api/structure.publisher";
export class StructureQuickFiltersGate extends Gate {
    structureId;
    structureCommandInvoker;
    quickFilters;
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.quickFilters, () => {
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandInvoker.setQuickFiltersConfig(quickFilters, this.structureId);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureQuickFiltersGate, deps: [{ token: i1.StructureId }, { token: i2.StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureQuickFiltersGate, selector: "gui-structure[quickFilters]", inputs: { quickFilters: "quickFilters" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureQuickFiltersGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[quickFilters]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.StructurePublisher }]; }, propDecorators: { quickFilters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9nYXRlL3N0cnVjdHVyZS1xdWljay1maWx0ZXJzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUt6RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsSUFBSTtJQUtyQjtJQUNUO0lBSHBCLFlBQVksQ0FBK0I7SUFFM0MsWUFBNkIsV0FBd0IsRUFDakMsdUJBQTJDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBb0I7SUFFL0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUV4RCxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFFcEMsSUFBSSxZQUFnQyxDQUFDO1lBRXJDLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDM0MsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDMUIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO3dHQTNCVyx5QkFBeUI7NEZBQXpCLHlCQUF5Qjs7NEZBQXpCLHlCQUF5QjtrQkFIckMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO2lCQUN2QzttSUFJQSxZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvcXVpY2stZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtxdWlja0ZpbHRlcnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVF1aWNrRmlsdGVyc0dhdGU+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5xdWlja0ZpbHRlcnMsICgpID0+IHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==