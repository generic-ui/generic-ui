import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricTabItemComponent {
    constructor() {
        this.tab = '';
    }
}
FabricTabItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricTabItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricTabItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: FabricTabItemComponent, selector: "gui-tab-item", inputs: { tab: "tab" }, ngImport: i0, template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricTabItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-tab-item', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { tab: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRhYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9sYXlvdXQvdGFiL3RhYi1pdGVtL2ZhYnJpYy10YWItaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi90YWItaXRlbS9mYWJyaWMtdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTdGLE1BQU0sT0FBTyxzQkFBc0I7SUFObkM7UUFTQyxRQUFHLEdBQVcsRUFBRSxDQUFDO0tBRWpCOzttSEFMWSxzQkFBc0I7dUdBQXRCLHNCQUFzQiw0RUNSbkMsaUdBSUE7MkZESWEsc0JBQXNCO2tCQU5sQyxTQUFTOytCQUNDLGNBQWMsbUJBRVAsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFLckMsR0FBRztzQkFERixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10YWItaXRlbScsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUYWJJdGVtQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR0YWI6IHN0cmluZyA9ICcnO1xuXG59XG4iLCI8ZGl2IFthdHRyLmRhdGEtdGFiXT1cInRhYlwiXG5cdCBjbGFzcz1cImd1aS10YWItaXRlbVwiPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==