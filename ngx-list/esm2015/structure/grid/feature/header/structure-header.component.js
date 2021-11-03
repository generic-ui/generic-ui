import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureHeaderColumnsComponent } from './column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "../../../core/api/structure.id";
import * as i3 from "../../../../composition/core/api/composition.id";
import * as i4 from "../../../filter/core/api/filter.warehouse";
import * as i5 from "../../core/api/structure.warehouse";
import * as i6 from "../../../source/core/api/formation/type/row-selection-type.archive";
import * as i7 from "../../../vertical-formation/core/api/vertical-formation.warehouse";
import * as i8 from "../../../../composition/core/api/composition.warehouse";
import * as i9 from "@angular/common";
import * as i10 from "./column/structure-header-columns.component";
import * as i11 from "./group/structure-header-groups.component";
import * as i12 from "./filters/structure-header-filters.component";
const _c0 = ["gui-structure-header", ""];
function StructureHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checkboxSelection", ctx_r0.checkboxSelection)("groups", ctx_r0.groups);
} }
function StructureHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("columns", ctx_r1.headerColumns);
} }
export class StructureHeaderComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, eventBus, structureId, compositionId, filterWarehouse, structureWarehouse, rowSelectionTypeArchive, structureVerticalFormationWarehouse, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.headerColumns = [];
        this.filterRowEnabled = false;
        this.showGroups = false;
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    ngOnInit() {
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.containerRef.nativeElement).setWidth(width);
        });
        this.hermesSubscribe(this.filterWarehouse.onFilteringEnabled(this.structureId), (enabled) => {
            this.filterRowEnabled = enabled;
        });
        this.hermesSubscribe(this.compositionWarehouse.onGroups(this.compositionId), (collection) => {
            this.showGroups = collection.isVisible();
            this.groups = collection.getGroups();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.hermesSubscribeWithoutRender(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
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
StructureHeaderComponent.ɵfac = function StructureHeaderComponent_Factory(t) { return new (t || StructureHeaderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomainEventBus), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.CompositionId), i0.ɵɵdirectiveInject(i4.FilterWarehouse), i0.ɵɵdirectiveInject(i5.StructureWarehouse), i0.ɵɵdirectiveInject(i6.RowSelectionTypeArchive), i0.ɵɵdirectiveInject(i7.VerticalFormationWarehouse), i0.ɵɵdirectiveInject(i8.CompositionWarehouse)); };
StructureHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureHeaderComponent, selectors: [["div", "gui-structure-header", ""]], viewQuery: function StructureHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(StructureHeaderColumnsComponent, 7, ElementRef);
        i0.ɵɵviewQuery(StructureHeaderFiltersComponent, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filtersRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 4, consts: [["class", "gui-header", "gui-structure-header-groups", "", 3, "checkboxSelection", "groups", 4, "ngIf"], ["gui-structure-header-columns", "", 1, "gui-header", 3, "checkboxSelection", "columns"], ["class", "gui-header", "gui-structure-header-filters", "", 3, "columns", 4, "ngIf"], ["gui-structure-header-groups", "", 1, "gui-header", 3, "checkboxSelection", "groups"], ["gui-structure-header-filters", "", 1, "gui-header", 3, "columns"]], template: function StructureHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureHeaderComponent_div_0_Template, 1, 2, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, StructureHeaderComponent_div_2_Template, 1, 1, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showGroups);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checkboxSelection", ctx.checkboxSelection)("columns", ctx.headerColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filterRowEnabled);
    } }, directives: [i9.NgIf, i10.StructureHeaderColumnsComponent, i11.StructureHeaderGroupsComponent, i12.StructureHeaderFiltersComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-header]',
                templateUrl: './structure-header.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.DomainEventBus }, { type: i2.StructureId }, { type: i3.CompositionId }, { type: i4.FilterWarehouse }, { type: i5.StructureWarehouse }, { type: i6.RowSelectionTypeArchive }, { type: i7.VerticalFormationWarehouse }, { type: i8.CompositionWarehouse }]; }, { containerRef: [{
            type: ViewChild,
            args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true }]
        }], filtersRef: [{
            type: ViewChild,
            args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUs5RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUcvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUsxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQmhGLHlCQUtNOzs7SUFKSiw0REFBdUMseUJBQUE7OztJQVl6Qyx5QkFJTTs7O0lBSEosOENBQXlCOztBRGMzQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYztJQW9CM0QsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsUUFBd0IsRUFDeEIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxtQ0FBK0QsRUFDL0Qsb0JBQTBDO1FBQzdELEtBQUssQ0FBQyxpQkFBaUIs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TyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnR0EzRlcsd0JBQXdCOzJFQUF4Qix3QkFBd0I7dUJBRXpCLCtCQUErQixLQUFVLFVBQVU7dUJBR25ELCtCQUErQixLQUFVLFVBQVU7Ozs7OztRQ2pDL0QseUVBS007UUFFTix5QkFJTTtRQUVOLHlFQUlNOztRQWpCQSxxQ0FBZ0I7UUFPakIsZUFBdUM7UUFBdkMseURBQXVDLDhCQUFBO1FBTXRDLGVBQXNCO1FBQXRCLDJDQUFzQjs7dUZEZWYsd0JBQXdCO2NBTnBDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7aVdBSUEsWUFBWTtrQkFEWCxTQUFTO21CQUFDLCtCQUErQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSTlFLFVBQVU7a0JBRFQsU0FBUzttQkFBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEdyb3VwQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2dyb3VwL2dyb3VwLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QFZpZXdDaGlsZChTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmaWx0ZXJzUmVmOiBFbGVtZW50UmVmO1xuXG5cdGhlYWRlckNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdGZpbHRlclJvd0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbjtcblxuXHRncm91cHM6IEFycmF5PEdyb3VwPjtcblxuXHRzaG93R3JvdXBzOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcihlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucm93U2VsZWN0aW9uVHlwZUFyY2hpdmUub24oKSxcblx0XHRcdCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hTZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25IZWFkZXJDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25Db250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KHdpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uRmlsdGVyaW5nRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyUm93RW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkdyb3Vwcyh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGNvbGxlY3Rpb246IEdyb3VwQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNob3dHcm91cHMgPSBjb2xsZWN0aW9uLmlzVmlzaWJsZSgpO1xuXHRcdFx0XHR0aGlzLmdyb3VwcyA9IGNvbGxlY3Rpb24uZ2V0R3JvdXBzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSArKHJvd0hlaWdodCkgKyAyO1xuXG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcnNSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmZpbHRlcnNSZWYubmF0aXZlRWxlbWVudCkuc2V0SGVpZ2h0KGhlYWRlckhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXInO1xuXHR9XG5cbn1cbiIsIjxkaXYgKm5nSWY9XCJzaG93R3JvdXBzXCJcblx0IFtjaGVja2JveFNlbGVjdGlvbl09XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdCBbZ3JvdXBzXT1cImdyb3Vwc1wiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXJcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXItZ3JvdXBzPlxuPC9kaXY+XG5cbjxkaXYgW2NoZWNrYm94U2VsZWN0aW9uXT1cImNoZWNrYm94U2VsZWN0aW9uXCJcblx0IFtjb2x1bW5zXT1cImhlYWRlckNvbHVtbnNcIlxuXHQgY2xhc3M9XCJndWktaGVhZGVyXCJcblx0IGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnM+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImZpbHRlclJvd0VuYWJsZWRcIlxuXHQgW2NvbHVtbnNdPVwiaGVhZGVyQ29sdW1uc1wiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXJcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVycz5cbjwvZGl2PlxuIl19