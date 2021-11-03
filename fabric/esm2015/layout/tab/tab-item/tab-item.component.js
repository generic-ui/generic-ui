import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class TabItemComponent {
}
TabItemComponent.ɵfac = function TabItemComponent_Factory(t) { return new (t || TabItemComponent)(); };
TabItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabItemComponent, selectors: [["gui-tab-item"]], inputs: { tab: "tab" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "gui-tab-item"]], template: function TabItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("data-tab", ctx.tab);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabItemComponent, [{
        type: Component,
        args: [{
                selector: 'gui-tab-item',
                templateUrl: './tab-item.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { tab: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2xheW91dC90YWIvdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2xheW91dC90YWIvdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVE3RixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO21FQUFoQixnQkFBZ0I7O1FDUjdCLDhCQUN1QjtRQUN0QixrQkFBeUI7UUFDMUIsaUJBQU07O1FBSEQsbUNBQXFCOzt1RkRRYixnQkFBZ0I7Y0FONUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Z0JBR0EsR0FBRztrQkFERixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10YWItaXRlbScsXG5cdHRlbXBsYXRlVXJsOiAnLi90YWItaXRlbS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYkl0ZW1Db21wb25lbnQge1xuXHRASW5wdXQoKVxuXHR0YWI6IHN0cmluZztcbn1cbiIsIjxkaXYgW2F0dHIuZGF0YS10YWJdPVwidGFiXCJcblx0IGNsYXNzPVwiZ3VpLXRhYi1pdGVtXCI+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19