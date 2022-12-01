import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { StructureHeaderColumnsComponent } from './column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { RowSelectionType } from '../../../../core/structure/formation/src/api/row-selected/row-selection';
import { StyleModifier } from '../../../../feature/common/src/cdk/component/lib/src/dom/style/style-modifier';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../core/structure/filter/src/api/filter.warehouse";
import * as i4 from "../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i5 from "../../../../core/structure/formation/src/api/formation.warehouse";
import * as i6 from "../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i7 from "../../../../feature/composition/src/column/composition.template-warehouse";
import * as i8 from "../../../../core/composition/src/api/composition.warehouse";
import * as i9 from "@angular/common";
import * as i10 from "./column/structure-header-columns.component";
import * as i11 from "./group/structure-header-groups.component";
import * as i12 from "./filters/structure-header-filters.component";
export class StructureHeaderComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, filterWarehouse, structureWarehouse, formationWarehouse, structureVerticalFormationWarehouse, compositionTemplateWarehouse, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionTemplateWarehouse = compositionTemplateWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.headerColumns = [];
        this.filterRowEnabled = false;
        this.showGroups = false;
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    ngOnInit() {
        this.subscribe(this.formationWarehouse.onType(this.structureId), (type) => {
            this.showSelection = type === RowSelectionType.CHECKBOX || type === RowSelectionType.RADIO;
        });
        this.subscribe(this.compositionTemplateWarehouse.onHeaderCols(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.subscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.containerRef.nativeElement).setWidth(width);
        });
        this.subscribe(this.filterWarehouse.onFilteringEnabled(this.structureId), (enabled) => {
            this.filterRowEnabled = enabled;
        });
        this.subscribe(this.compositionWarehouse.onGroups(this.compositionId), (collection) => {
            this.showGroups = collection.isVisible();
            this.groups = collection.getGroups();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.subscribeWithoutRender(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            const headerHeight = +(rowHeight) + 2;
            if (this.filtersRef) {
                this.styleModifier.getElement(this.filtersRef.nativeElement).setHeight(headerHeight);
            }
        });
    }
    getSelectorName() {
        return 'gui-structure-header';
    }
}
StructureHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureHeaderComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.FilterWarehouse }, { token: i4.StructureWarehouse }, { token: i5.FormationWarehouse }, { token: i6.VerticalFormationWarehouse }, { token: i7.CompositionTemplateWarehouse }, { token: i8.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: StructureHeaderComponent, selector: "div[gui-structure-header]", viewQueries: [{ propertyName: "containerRef", first: true, predicate: StructureHeaderColumnsComponent, descendants: true, read: ElementRef, static: true }, { propertyName: "filtersRef", first: true, predicate: StructureHeaderFiltersComponent, descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"showSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [columns]=\"headerColumns\"\n\t [showSelection]=\"showSelection\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n", dependencies: [{ kind: "directive", type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i10.StructureHeaderColumnsComponent, selector: "div[gui-structure-header-columns][columns]", inputs: ["columns", "showSelection"] }, { kind: "component", type: i11.StructureHeaderGroupsComponent, selector: "div[gui-structure-header-groups][groups][checkboxSelection]", inputs: ["groups", "showGroups", "checkboxSelection"] }, { kind: "component", type: i12.StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: ["columns"], outputs: ["closed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"showSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [columns]=\"headerColumns\"\n\t [showSelection]=\"showSelection\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.FilterWarehouse }, { type: i4.StructureWarehouse }, { type: i5.FormationWarehouse }, { type: i6.VerticalFormationWarehouse }, { type: i7.CompositionTemplateWarehouse }, { type: i8.CompositionWarehouse }]; }, propDecorators: { containerRef: [{
                type: ViewChild,
                args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true }]
            }], filtersRef: [{
                type: ViewChild,
                args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkosT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRXRHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSTlGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRy9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBSTNHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFZOUcsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFvQjNELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsbUNBQStELEVBQy9ELDRCQUEwRCxFQUMxRCxvQkFBMEM7UUFDN0QsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBVlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3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QUFzQixDQUFDO0lBQy9CLENBQUM7O3FIQTNGVyx3QkFBd0I7eUdBQXhCLHdCQUF3QiwrR0FFekIsK0JBQStCLDJCQUFVLFVBQVUsd0VBR25ELCtCQUErQiwyQkFBVSxVQUFVLGtFQ2hDL0Qsb2JBa0JBOzJGRFNhLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDQywyQkFBMkIsbUJBRXBCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OFlBSzVCLFlBQVk7c0JBRHBCLFNBQVM7dUJBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSXJFLFVBQVU7c0JBRGxCLFNBQVM7dUJBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NyYy9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dyb3VwL2dyb3VwLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uVGVtcGxhdGVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRyZWFkb25seSBjb250YWluZXJSZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBWaWV3Q2hpbGQoU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cmVhZG9ubHkgZmlsdGVyc1JlZj86IEVsZW1lbnRSZWY7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclJvd0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzaG93U2VsZWN0aW9uOiBib29sZWFuO1xuXG5cdGdyb3VwczogQXJyYXk8R3JvdXA+O1xuXG5cdHNob3dHcm91cHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2U6IENvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Uub25UeXBlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5zaG93U2VsZWN0aW9uID0gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWCB8fCB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLlJBRElPO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZS5vbkhlYWRlckNvbHModGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChjb2x1bW5zOiBBcnJheTxDb21wb3NpdGlvblRlbXBsYXRlTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyUm93RW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGNvbGxlY3Rpb246IEdyb3VwQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNob3dHcm91cHMgPSBjb2xsZWN0aW9uLmlzVmlzaWJsZSgpO1xuXHRcdFx0XHR0aGlzLmdyb3VwcyA9IGNvbGxlY3Rpb24uZ2V0R3JvdXBzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSArKHJvd0hlaWdodCkgKyAyO1xuXG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcnNSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmZpbHRlcnNSZWYubmF0aXZlRWxlbWVudCkuc2V0SGVpZ2h0KGhlYWRlckhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXInO1xuXHR9XG5cbn1cbiIsIjxkaXYgKm5nSWY9XCJzaG93R3JvdXBzXCJcblx0IFtjaGVja2JveFNlbGVjdGlvbl09XCJzaG93U2VsZWN0aW9uXCJcblx0IFtncm91cHNdPVwiZ3JvdXBzXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlclwiXG5cdCBndWktc3RydWN0dXJlLWhlYWRlci1ncm91cHM+XG48L2Rpdj5cblxuPGRpdiBbY29sdW1uc109XCJoZWFkZXJDb2x1bW5zXCJcblx0IFtzaG93U2VsZWN0aW9uXT1cInNob3dTZWxlY3Rpb25cIlxuXHQgY2xhc3M9XCJndWktaGVhZGVyXCJcblx0IGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnM+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImZpbHRlclJvd0VuYWJsZWRcIlxuXHQgW2NvbHVtbnNdPVwiaGVhZGVyQ29sdW1uc1wiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXJcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVycz5cbjwvZGl2PlxuIl19