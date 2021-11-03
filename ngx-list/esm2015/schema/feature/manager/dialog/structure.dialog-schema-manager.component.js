import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.schema-manger.component";
const _c0 = ["gui-schema-manager-dialog", ""];
export class StructureDialogSchemaManagerComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-pr-10');
    }
    getSelectorName() {
        return 'gui-schema-manager-dialog';
    }
}
StructureDialogSchemaManagerComponent.ɵfac = function StructureDialogSchemaManagerComponent_Factory(t) { return new (t || StructureDialogSchemaManagerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureDialogSchemaManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureDialogSchemaManagerComponent, selectors: [["div", "gui-schema-manager-dialog", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 0, consts: [["gui-structure-schema-manager", ""]], template: function StructureDialogSchemaManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, directives: [i1.StructureSchemaMangerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureDialogSchemaManagerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-schema-manager-dialog]',
                template: `
		<div gui-structure-schema-manager></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7O0FBV2hGLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxhQUFhO0lBRXZFLFlBQVksS0FBaUI7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7OzBIQVRXLHFDQUFxQzt3RkFBckMscUNBQXFDO1FBTGhELHlCQUF3Qzs7dUZBSzdCLHFDQUFxQztjQVJqRCxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFOztFQUVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zY2hlbWEtbWFuYWdlci1kaWFsb2ddJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXI+PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHItMTAnKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zY2hlbWEtbWFuYWdlci1kaWFsb2cnO1xuXHR9XG59XG4iXX0=