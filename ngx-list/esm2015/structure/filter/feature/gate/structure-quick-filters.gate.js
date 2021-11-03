import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../core/api/structure.command-invoker";
export class StructureQuickFiltersGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('quickFilters', changes)) {
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
        }
    }
}
StructureQuickFiltersGate.ɵfac = function StructureQuickFiltersGate_Factory(t) { return new (t || StructureQuickFiltersGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.StructureCommandInvoker)); };
StructureQuickFiltersGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureQuickFiltersGate, selectors: [["gui-structure", "quickFilters", ""]], inputs: { quickFilters: "quickFilters" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureQuickFiltersGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[quickFilters]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.StructureCommandInvoker }]; }, { quickFilters: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2dhdGUvc3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFTN0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLElBQUk7SUFLbEQsWUFBNkIsV0FBd0IsRUFDakMsdUJBQWdEO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFFcEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUV4RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBRTVDLElBQUksWUFBZ0MsQ0FBQztZQUVyQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLFlBQVksR0FBRztvQkFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQzFCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNqQztZQUVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25GO0lBRUYsQ0FBQzs7a0dBM0JXLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7YUFDdkM7b0dBSUEsWUFBWTtrQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtxdWlja0ZpbHRlcnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUXVpY2tGaWx0ZXJzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncXVpY2tGaWx0ZXJzJywgY2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=