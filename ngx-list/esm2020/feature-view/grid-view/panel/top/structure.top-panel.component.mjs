import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../feature/structure/search/search.component";
export class StructureTopPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.addClassToHost('gui-p-6');
        this.addClassToHost('gui-border-b');
        this.addClassToHost('gui-border-b-solid');
    }
    getSelectorName() {
        return 'gui-structure-top-panel';
    }
}
StructureTopPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureTopPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureTopPanelComponent, selector: "div[gui-structure-top-panel]", usesInheritance: true, ngImport: i0, template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>

		<!--		<div gui-filter-menu-trigger></div>-->

	`, isInline: true, dependencies: [{ kind: "component", type: i1.SearchComponent, selector: "div[gui-search-bar]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-top-panel]',
                    template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>

		<!--		<div gui-filter-menu-trigger></div>-->

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7O0FBZTFGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFjO0lBRTdELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQjtRQUN4QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFGVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR2hFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzt1SEFaVywwQkFBMEI7MkdBQTFCLDBCQUEwQiwyRkFYNUI7Ozs7Ozs7RUFPVDsyRkFJVywwQkFBMEI7a0JBYnRDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFOzs7Ozs7O0VBT1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtdG9wLXBhbmVsXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGd1aS1zZWFyY2gtYmFyXG5cdFx0XHQgY2xhc3M9XCJndWktZmxleCBndWktaXRlbXMtY2VudGVyIGd1aS1oLWZ1bGwgZ3VpLXctMy81IGd1aS1tci1hdXRvXCI+PC9kaXY+XG5cblx0XHQ8IS0tXHRcdDxkaXYgZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+PC9kaXY+LS0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtNicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ib3JkZXItYicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ib3JkZXItYi1zb2xpZCcpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS10b3AtcGFuZWwnO1xuXHR9XG5cbn1cbiJdfQ==