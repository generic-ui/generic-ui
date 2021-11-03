import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-column-config-column-hide", ""];
export class StructureColumnConfigColumnHideComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
        this.columnHidden = new EventEmitter();
    }
    hideColumn() {
        this.columnHidden.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-hide';
    }
}
StructureColumnConfigColumnHideComponent.ɵfac = function StructureColumnConfigColumnHideComponent_Factory(t) { return new (t || StructureColumnConfigColumnHideComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureColumnConfigColumnHideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnConfigColumnHideComponent, selectors: [["div", "gui-structure-column-config-column-hide", ""]], inputs: { column: "column" }, outputs: { columnHidden: "columnHidden" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 3, consts: [[1, "gui-header-menu-item", 3, "click"]], template: function StructureColumnConfigColumnHideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function StructureColumnConfigColumnHideComponent_Template_div_click_0_listener() { return ctx.hideColumn(); });
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "guiTranslate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "headerMenuMainTabHideColumn"), "\n");
    } }, pipes: [i1.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnConfigColumnHideComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-column-config-column-hide]',
                templateUrl: './structure.column-config-column-hide.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { column: [{
            type: Input
        }], columnHidden: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7O0FBU3pGLE1BQU0sT0FBTyx3Q0FBeUMsU0FBUSxhQUFhO0lBUTFFLFlBQVksS0FBaUI7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSGQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBSXhDLENBQUM7SUFFRCxVQUFVO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlDQUF5QyxDQUFDO0lBQ2xELENBQUM7O2dJQWxCVyx3Q0FBd0M7MkZBQXhDLHdDQUF3QztRQ1pyRCw4QkFDK0I7UUFEMUIsa0hBQVMsZ0JBQVksSUFBQztRQUUxQixZQUNEOztRQUFBLGlCQUFNOztRQURMLGVBQ0Q7UUFEQyxxRkFDRDs7dUZEU2Esd0NBQXdDO2NBTnBELFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsOENBQThDO2dCQUN4RCxXQUFXLEVBQUUsc0RBQXNEO2dCQUNuRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsTUFBTTtrQkFETCxLQUFLO1lBSU4sWUFBWTtrQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdGhpZGVDb2x1bW4oKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5IaWRkZW4uZW1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlJztcblx0fVxuXG59XG4iLCI8ZGl2IChjbGljayk9XCJoaWRlQ29sdW1uKClcIlxuXHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPlxuXHR7eydoZWFkZXJNZW51TWFpblRhYkhpZGVDb2x1bW4nIHwgZ3VpVHJhbnNsYXRlfX1cbjwvZGl2PlxuIl19