import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../composition/core/api/composition.id";
import * as i2 from "../../../../core/api/structure.id";
import * as i3 from "../../../../source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../sorting/core/api/sorting.command-invoker";
import * as i5 from "@angular/common";
import * as i6 from "../column/select-all/select-all.component";
const _c0 = ["gui-structure-header-groups", "", "groups", "", "checkboxSelection", ""];
function StructureHeaderGroupsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementEnd();
} }
function StructureHeaderGroupsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵstyleProp("width", group_r2.width, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", group_r2.header, " ");
} }
export class StructureHeaderGroupsComponent extends PureComponent {
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
    getSelectorName() {
        return 'gui-structure-header-groups';
    }
}
StructureHeaderGroupsComponent.ɵfac = function StructureHeaderGroupsComponent_Factory(t) { return new (t || StructureHeaderGroupsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CompositionId), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.SortingCommandInvoker)); };
StructureHeaderGroupsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureHeaderGroupsComponent, selectors: [["div", "gui-structure-header-groups", "", "groups", "", "checkboxSelection", ""]], inputs: { groups: "groups", showGroups: "showGroups", checkboxSelection: "checkboxSelection" }, features: [i0.ɵɵProvidersFeature([
            StructureColumnConfigService
        ]), i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 4, "ngIf"], ["class", "gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 3, "width", 4, "ngFor", "ngForOf"], [1, "gui-header-cell", "gui-row-checkbox", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis"], ["gui-select-all", ""], [1, "gui-header-cell", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis"], [1, "gui-header-title"]], template: function StructureHeaderGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureHeaderGroupsComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵtemplate(1, StructureHeaderGroupsComponent_div_1_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.checkboxSelection);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.groups);
    } }, directives: [i5.NgIf, i5.NgForOf, i6.SelectAllComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureHeaderGroupsComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-header-groups][groups][checkboxSelection]',
                templateUrl: './structure-header-groups.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    StructureColumnConfigService
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.FormationCommandInvoker }, { type: i4.SortingCommandInvoker }]; }, { groups: [{
            type: Input
        }], showGroups: [{
            type: Input
        }], checkboxSelection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9ncm91cC9zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2dyb3VwL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUF3QixLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBTTFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7OztJQ1ZuRiw4QkFHNkQ7SUFDNUQseUJBQTBCO0lBQzNCLGlCQUFNOzs7SUFFTiw4QkFJNkQ7SUFFNUQsOEJBQThCO0lBQzdCLFlBQ0Q7SUFBQSxpQkFBTTtJQUNQLGlCQUFNOzs7SUFSSiw2Q0FBOEI7SUFNOUIsZUFDRDtJQURDLGdEQUNEOztBRE9ELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhO0lBYWhFLFlBQTZCLFVBQXNCLEVBQy9CLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixXQUF3QixFQUN4QiwwQkFBbUQsRUFDbkQsd0JBQStDO1FBQ2xFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQVZuRSxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFVeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRztJQUNGLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs0R0E1Q1csOEJBQThCO2lGQUE5Qiw4QkFBOEIsbU9BSi9CO1lBQ1YsNEJBQTRCO1NBQzVCO1FDcEJGLCtFQUtNO1FBRU4sK0VBU007O1FBaEJBLDRDQUF1QjtRQU9OLGVBQVM7UUFBVCxvQ0FBUzs7dUZEZW5CLDhCQUE4QjtjQVQxQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtnQkFDdkUsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1YsNEJBQTRCO2lCQUM1QjthQUNEO29QQUlBLE1BQU07a0JBREwsS0FBSztZQUlOLFVBQVU7a0JBRFQsS0FBSztZQUlOLGlCQUFpQjtrQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2dyb3VwL2dyb3VwJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwc11bZ3JvdXBzXVtjaGVja2JveFNlbGVjdGlvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGdyb3VwczogQXJyYXk8R3JvdXA+O1xuXG5cdEBJbnB1dCgpXG5cdHNob3dHcm91cHM6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlci1ncm91cHMnO1xuXHR9XG5cbn1cbiIsIjxkaXYgKm5nSWY9XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktcm93LWNoZWNrYm94IGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblx0PGRpdiBndWktc2VsZWN0LWFsbD48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0Zvcj1cImxldCBncm91cCBvZiBncm91cHNcIlxuXHQgW3N0eWxlLndpZHRoLnB4XT1cImdyb3VwLndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci10aXRsZVwiPlxuXHRcdHt7Z3JvdXAuaGVhZGVyfX1cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==