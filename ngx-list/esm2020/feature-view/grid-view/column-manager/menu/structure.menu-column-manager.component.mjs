import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.column-manager.component";
export class StructureMenuColumnManagerComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
    }
    getSelectorName() {
        return 'gui-structure-menu-column-manager';
    }
}
StructureMenuColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuColumnManagerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureMenuColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureMenuColumnManagerComponent, selector: "div[gui-structure-menu-column-manager]", usesInheritance: true, ngImport: i0, template: "<div gui-structure-column-manager></div>\n", dependencies: [{ kind: "component", type: i1.StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureMenuColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-menu-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div gui-structure-column-manager></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbHVtbi1tYW5hZ2VyL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbHVtbi1tYW5hZ2VyL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7OztBQVF4RixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsYUFBYTtJQUVyRSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG1DQUFtQyxDQUFDO0lBQzVDLENBQUM7O2dJQVJXLG1DQUFtQztvSEFBbkMsbUNBQW1DLHFHQ1ZoRCw0Q0FDQTsyRkRTYSxtQ0FBbUM7a0JBTi9DLFNBQVM7K0JBQ0Msd0NBQXdDLG1CQUVqQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUubWVudS1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyJztcblx0fVxufVxuIiwiPGRpdiBndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyPjwvZGl2PlxuIl19