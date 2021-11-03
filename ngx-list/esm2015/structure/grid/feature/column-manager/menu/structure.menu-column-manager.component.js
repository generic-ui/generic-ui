import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.column-manager.component";
const _c0 = ["gui-structure-menu-column-manager", ""];
export class StructureMenuColumnManagerComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
    }
    getSelectorName() {
        return 'gui-structure-menu-column-manager';
    }
}
StructureMenuColumnManagerComponent.ɵfac = function StructureMenuColumnManagerComponent_Factory(t) { return new (t || StructureMenuColumnManagerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureMenuColumnManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureMenuColumnManagerComponent, selectors: [["div", "gui-structure-menu-column-manager", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 0, consts: [["gui-structure-column-manager", ""]], template: function StructureMenuColumnManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, directives: [i1.StructureColumnManagerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureMenuColumnManagerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-menu-column-manager]',
                templateUrl: './structure.menu-column-manager.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFRbkYsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGFBQWE7SUFFckUsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQ0FBbUMsQ0FBQztJQUM1QyxDQUFDOztzSEFSVyxtQ0FBbUM7c0ZBQW5DLG1DQUFtQztRQ1ZoRCx5QkFBd0M7O3VGRFUzQixtQ0FBbUM7Y0FOL0MsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5tZW51LWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXInO1xuXHR9XG59XG4iLCI8ZGl2IGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXI+PC9kaXY+XG4iXX0=