import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../core/composition/src/domain/column/sort/sort-order';
import { PureComponent } from '../../../../../feature/common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/composition/src/api/global/composition.id";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../core/structure/sorting/src/api/sorting.publisher";
import * as i5 from "@angular/common";
import * as i6 from "../../../../../feature/structure/formation/src/select-all/select-all.component";
export class StructureHeaderGroupsComponent extends PureComponent {
    elementRef;
    injector;
    changeDetectorRef;
    compositionId;
    structureId;
    formationCommandDispatcher;
    sortingCommandDispatcher;
    groups;
    showGroups;
    checkboxSelection = false;
    globalSearching = false;
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureHeaderGroupsComponent, deps: [{ token: i0.ElementRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }, { token: i1.CompositionId }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.SortingPublisher }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureHeaderGroupsComponent, selector: "div[gui-structure-header-groups][groups][checkboxSelection]", inputs: { groups: "groups", showGroups: "showGroups", checkboxSelection: "checkboxSelection" }, providers: [
            StructureColumnConfigService
        ], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div *ngFor=\"let group of groups\"\n\t [style.width.px]=\"group.width\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t{{group.header}}\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.SelectAllComponent, selector: "div[gui-select-all]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureHeaderGroupsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header-groups][groups][checkboxSelection]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureColumnConfigService
                    ], template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div *ngFor=\"let group of groups\"\n\t [style.width.px]=\"group.width\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t{{group.header}}\n\t</div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.SortingPublisher }], propDecorators: { groups: [{
                type: Input
            }], showGroups: [{
                type: Input
            }], checkboxSelection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvZ3JvdXAvc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvZ3JvdXAvc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXdCLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0SSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFNOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7Ozs7OztBQVkzRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsYUFBYTtJQWFuQztJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQWhCcEIsTUFBTSxDQUFlO0lBR3JCLFVBQVUsQ0FBVTtJQUdwQixpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFFbkMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUV4QixZQUE2QixVQUFzQixFQUMvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsMEJBQThDLEVBQzlDLHdCQUEwQztRQUM3RCxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW9CO1FBQzlDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBa0I7SUFFOUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRztJQUNGLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDO3VHQTVDVyw4QkFBOEI7MkZBQTlCLDhCQUE4QixzTEFKL0I7WUFDViw0QkFBNEI7U0FDNUIsaURDcEJGLHFuQkFpQkE7OzJGREthLDhCQUE4QjtrQkFUMUMsU0FBUzsrQkFDQyw2REFBNkQsbUJBRXRELHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsNEJBQTRCO3FCQUM1Qjs0UEFLRCxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGlCQUFpQjtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvY29yZS1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWhlYWRlci1ncm91cHNdW2dyb3Vwc11bY2hlY2tib3hTZWxlY3Rpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRncm91cHM6IEFycmF5PEdyb3VwPjtcblxuXHRASW5wdXQoKVxuXHRzaG93R3JvdXBzOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Z2xvYmFsU2VhcmNoaW5nID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlci1ncm91cHMnO1xuXHR9XG5cbn1cbiIsIjxkaXYgKm5nSWY9XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktcm93LWNoZWNrYm94IGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblx0PGRpdiBndWktc2VsZWN0LWFsbD48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0Zvcj1cImxldCBncm91cCBvZiBncm91cHNcIlxuXHQgW3N0eWxlLndpZHRoLnB4XT1cImdyb3VwLndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci10aXRsZVwiPlxuXHRcdHt7Z3JvdXAuaGVhZGVyfX1cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==