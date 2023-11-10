import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RowSelectionType } from '../../../../core/structure/formation/src/api/row-selected/row-selection';
import { GuiState } from '../../../../feature/gui-angular/state/gui.state';
import { hermesMap } from '@generic-ui/hermes';
import { GuiComponent } from '../../../../feature/common/component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../feature/gui-angular/state/gui.state";
import * as i2 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../core/composition/src/api/global/composition.id";
import * as i4 from "../../../../core/structure/filter/src/api/filter.warehouse";
import * as i5 from "../../../../core/structure/formation/src/api/formation.warehouse";
import * as i6 from "../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i7 from "../../../../feature/composition/src/column/composition.template-warehouse";
import * as i8 from "../../../../core/composition/src/api/composition.warehouse";
import * as i9 from "@angular/common";
import * as i10 from "../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i11 from "../../../../feature/gui-angular/template/style/gui.style.directive";
import * as i12 from "./column/structure-header-columns.component";
import * as i13 from "./group/structure-header-groups.component";
import * as i14 from "./filters/structure-header-filters.component";
export class StructureHeaderComponent extends GuiComponent {
    elementRef;
    state;
    structureId;
    compositionId;
    filterWarehouse;
    formationWarehouse;
    structureVerticalFormationWarehouse;
    compositionTemplateWarehouse;
    compositionWarehouse;
    // @ts-ignore
    state$ = this.state.select();
    // @ts-ignore
    width$ = this.compositionWarehouse.onContainerWidth(this.compositionId)
        .pipe(hermesMap(width => {
        return {
            width
        };
    }));
    // @ts-ignore
    filterHeaderHeight$ = this.structureVerticalFormationWarehouse.onRowHeight(this.structureId)
        .pipe(hermesMap((rowHeight) => {
        const headerHeight = +(rowHeight) + 2;
        return {
            height: headerHeight
        };
    }));
    constructor(elementRef, state, structureId, compositionId, filterWarehouse, formationWarehouse, structureVerticalFormationWarehouse, compositionTemplateWarehouse, compositionWarehouse) {
        super(elementRef);
        this.elementRef = elementRef;
        this.state = state;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionTemplateWarehouse = compositionTemplateWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.state.setValue({
            headerColumns: [],
            filterRowEnabled: false,
            showGroups: false
        });
        this.state.connect('showSelection', this.selectShowSelection());
        this.state.connect('headerColumns', this.compositionTemplateWarehouse.onHeaderCols(this.compositionId));
        this.state.connect('filterRowEnabled', this.filterWarehouse.onFilteringEnabled(this.structureId));
        this.state.connect('showGroups', this.selectShowGroups());
        this.state.connect('groups', this.selectGroups());
    }
    getSelectorName() {
        return 'gui-structure-header';
    }
    selectGroups() {
        return this.compositionWarehouse
            .onGroups(this.compositionId)
            .pipe(hermesMap((collection) => collection.getGroups()));
    }
    selectShowGroups() {
        return this.compositionWarehouse
            .onGroups(this.compositionId)
            .pipe(hermesMap((collection) => collection.isVisible()));
    }
    selectShowSelection() {
        return this.formationWarehouse
            .onType(this.structureId)
            .pipe(hermesMap((type) => {
            return type === RowSelectionType.CHECKBOX || type === RowSelectionType.RADIO;
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderComponent, deps: [{ token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.StructureId }, { token: i3.CompositionId }, { token: i4.FilterWarehouse }, { token: i5.FormationWarehouse }, { token: i6.VerticalFormationWarehouse }, { token: i7.CompositionTemplateWarehouse }, { token: i8.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureHeaderComponent, selector: "div[gui-structure-header]", providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\t<div *ngIf=\"localState.showGroups\"\n\t\t [checkboxSelection]=\"localState.showSelection\"\n\t\t [groups]=\"localState.groups\"\n\t\t class=\"gui-header\"\n\t\t gui-structure-header-groups>\n\t</div>\n</ng-container>\n\n<div *guiLet=\"state$; let localState\"\n\t [columns]=\"localState.headerColumns\"\n\t [guiStyle]=\"width$\"\n\t [showSelection]=\"localState.showSelection\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<ng-container *guiLet=\"state$; let localState\">\n\t<div *ngIf=\"localState.filterRowEnabled\"\n\t\t [columns]=\"localState.headerColumns\"\n\t\t [guiStyle]=\"filterHeaderHeight$\"\n\t\t class=\"gui-header\"\n\t\t gui-structure-header-filters>\n\t</div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i10.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "directive", type: i11.GuiStyleDirective, selector: "[guiStyle]", inputs: ["guiStyle"] }, { kind: "component", type: i12.StructureHeaderColumnsComponent, selector: "div[gui-structure-header-columns][columns]", inputs: ["columns", "showSelection"] }, { kind: "component", type: i13.StructureHeaderGroupsComponent, selector: "div[gui-structure-header-groups][groups][checkboxSelection]", inputs: ["groups", "showGroups", "checkboxSelection"] }, { kind: "component", type: i14.StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: ["columns"], outputs: ["closed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\t<div *ngIf=\"localState.showGroups\"\n\t\t [checkboxSelection]=\"localState.showSelection\"\n\t\t [groups]=\"localState.groups\"\n\t\t class=\"gui-header\"\n\t\t gui-structure-header-groups>\n\t</div>\n</ng-container>\n\n<div *guiLet=\"state$; let localState\"\n\t [columns]=\"localState.headerColumns\"\n\t [guiStyle]=\"width$\"\n\t [showSelection]=\"localState.showSelection\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<ng-container *guiLet=\"state$; let localState\">\n\t<div *ngIf=\"localState.filterRowEnabled\"\n\t\t [columns]=\"localState.headerColumns\"\n\t\t [guiStyle]=\"filterHeaderHeight$\"\n\t\t class=\"gui-header\"\n\t\t gui-structure-header-filters>\n\t</div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.StructureId }, { type: i3.CompositionId }, { type: i4.FilterWarehouse }, { type: i5.FormationWarehouse }, { type: i6.VerticalFormationWarehouse }, { type: i7.CompositionTemplateWarehouse }, { type: i8.CompositionWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQU8zRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxZQUFZO0lBNEI1QjtJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFsQ3BCLGFBQWE7SUFDSixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV0QyxhQUFhO0lBQ0osTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3hFLElBQUksQ0FDSixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsT0FBTztZQUNOLEtBQUs7U0FDTCxDQUFDO0lBQ0gsQ0FBQyxDQUFD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QUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzt3R0FoRlcsd0JBQXdCOzRGQUF4Qix3QkFBd0Isb0RBSnpCO1lBQ1YsUUFBUTtTQUNSLGlEQ3JDRix5d0JBeUJBOzs0RkRjYSx3QkFBd0I7a0JBVHBDLFNBQVM7K0JBQ0MsMkJBQTJCLG1CQUVwQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBHcm91cENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbXBvc2l0aW9uLnRlbXBsYXRlLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUubW9kZWwnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvc3RhdGUvZ3VpLnN0YXRlJztcbmltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudFN0YXRlIHtcblxuXHRoZWFkZXJDb2x1bW5zOiBSZWFkb25seUFycmF5PENvbXBvc2l0aW9uVGVtcGxhdGVNb2RlbD47XG5cblx0ZmlsdGVyUm93RW5hYmxlZDogYm9vbGVhbjtcblxuXHRncm91cHM6IEFycmF5PEdyb3VwPjtcblxuXHRzaG93R3JvdXBzOiBib29sZWFuO1xuXG5cdHNob3dTZWxlY3Rpb246IGJvb2xlYW47XG5cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaGVhZGVyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN0YXRlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgR3VpQ29tcG9uZW50IHtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJlYWRvbmx5IHN0YXRlJCA9IHRoaXMuc3RhdGUuc2VsZWN0KCk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZWFkb25seSB3aWR0aCQgPSB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uQ29udGFpbmVyV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAod2lkdGggPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgd2lkdGhcblx0XHRcdFx0XHRcdFx0XHQgIH07XG5cdFx0XHRcdFx0XHRcdCAgfSlcblx0XHRcdFx0XHRcdCAgKTtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJlYWRvbmx5IGZpbHRlckhlYWRlckhlaWdodCQgPSB0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzTWFwKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gKyhyb3dIZWlnaHQpICsgMjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBoZWlnaHQ6IGhlYWRlckhlaWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQgICApO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogR3VpU3RhdGU8U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50U3RhdGU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlOiBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdGF0ZS5zZXRWYWx1ZSh7XG5cdFx0XHRoZWFkZXJDb2x1bW5zOiBbXSxcblx0XHRcdGZpbHRlclJvd0VuYWJsZWQ6IGZhbHNlLFxuXHRcdFx0c2hvd0dyb3VwczogZmFsc2Vcblx0XHR9KTtcblxuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc2hvd1NlbGVjdGlvbicsIHRoaXMuc2VsZWN0U2hvd1NlbGVjdGlvbigpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2hlYWRlckNvbHVtbnMnLCB0aGlzLmNvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2Uub25IZWFkZXJDb2xzKHRoaXMuY29tcG9zaXRpb25JZCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnZmlsdGVyUm93RW5hYmxlZCcsIHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzaG93R3JvdXBzJywgdGhpcy5zZWxlY3RTaG93R3JvdXBzKCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnZ3JvdXBzJywgdGhpcy5zZWxlY3RHcm91cHMoKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlcic7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEdyb3VwcygpOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PEdyb3VwPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vbkdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29sbGVjdGlvbjogR3JvdXBDb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLmdldEdyb3VwcygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RTaG93R3JvdXBzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vbkdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29sbGVjdGlvbjogR3JvdXBDb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLmlzVmlzaWJsZSgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RTaG93U2VsZWN0aW9uKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25UeXBlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodHlwZTogUm93U2VsZWN0aW9uVHlwZSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1ggfHwgdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5SQURJTztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKmd1aUxldD1cInN0YXRlJDsgbGV0IGxvY2FsU3RhdGVcIj5cblx0PGRpdiAqbmdJZj1cImxvY2FsU3RhdGUuc2hvd0dyb3Vwc1wiXG5cdFx0IFtjaGVja2JveFNlbGVjdGlvbl09XCJsb2NhbFN0YXRlLnNob3dTZWxlY3Rpb25cIlxuXHRcdCBbZ3JvdXBzXT1cImxvY2FsU3RhdGUuZ3JvdXBzXCJcblx0XHQgY2xhc3M9XCJndWktaGVhZGVyXCJcblx0XHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXItZ3JvdXBzPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48ZGl2ICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBsb2NhbFN0YXRlXCJcblx0IFtjb2x1bW5zXT1cImxvY2FsU3RhdGUuaGVhZGVyQ29sdW1uc1wiXG5cdCBbZ3VpU3R5bGVdPVwid2lkdGgkXCJcblx0IFtzaG93U2VsZWN0aW9uXT1cImxvY2FsU3RhdGUuc2hvd1NlbGVjdGlvblwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXJcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1ucz5cbjwvZGl2PlxuXG48bmctY29udGFpbmVyICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBsb2NhbFN0YXRlXCI+XG5cdDxkaXYgKm5nSWY9XCJsb2NhbFN0YXRlLmZpbHRlclJvd0VuYWJsZWRcIlxuXHRcdCBbY29sdW1uc109XCJsb2NhbFN0YXRlLmhlYWRlckNvbHVtbnNcIlxuXHRcdCBbZ3VpU3R5bGVdPVwiZmlsdGVySGVhZGVySGVpZ2h0JFwiXG5cdFx0IGNsYXNzPVwiZ3VpLWhlYWRlclwiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnM+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=