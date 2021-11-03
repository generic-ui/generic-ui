import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/core/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../composition/core/api/composition.id";
import * as i2 from "../../../../../../core/api/structure.id";
import * as i3 from "../../../../../../sorting/core/api/sorting.command-invoker";
import * as i4 from "../../../../../../../composition/core/api/composition.warehouse";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../icon/structure.column-menu-arrow-icon.component";
import * as i7 from "../../../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-column-config-sort", ""];
export class StructureColumnConfigSortComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
    }
    ngOnInit() {
        this.sortStatus = this.column.getSortStatus();
        this.hermesSubscribe(this.compositionReadModelService.onSortOrder(this.column.getFieldId(), this.compositionId), (sortStatus) => {
            this.sortStatus = sortStatus;
        });
    }
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    isNoneSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    setSortOrder(sort) {
        event.stopPropagation();
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-column-config-sort';
    }
}
StructureColumnConfigSortComponent.ɵfac = function StructureColumnConfigSortComponent_Factory(t) { return new (t || StructureColumnConfigSortComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CompositionId), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.SortingCommandInvoker), i0.ɵɵdirectiveInject(i4.CompositionWarehouse)); };
StructureColumnConfigSortComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnConfigSortComponent, selectors: [["div", "gui-structure-column-config-sort", ""]], inputs: { column: "column", dropdownTextTranslation: "dropdownTextTranslation" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 14, vars: 23, consts: [[1, "gui-header-menu-dropdown", 3, "dropdownText", "placement", "showOnHover", "width"], [3, "click"], [1, "gui-sort-title"], ["gui-structure-column-menu-arrow-icon", "", 3, "rotateDeg", "sort"]], template: function StructureColumnConfigSortComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-dropdown", 0);
        i0.ɵɵelementStart(1, "gui-dropdown-item", 1);
        i0.ɵɵlistener("click", function StructureColumnConfigSortComponent_Template_gui_dropdown_item_click_1_listener() { return ctx.setSortOrder(ctx.status.ASC); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "guiTranslate");
        i0.ɵɵelement(5, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "gui-dropdown-item", 1);
        i0.ɵɵlistener("click", function StructureColumnConfigSortComponent_Template_gui_dropdown_item_click_6_listener() { return ctx.setSortOrder(ctx.status.DESC); });
        i0.ɵɵelementStart(7, "div", 2);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "guiTranslate");
        i0.ɵɵelement(10, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "gui-dropdown-item", 1);
        i0.ɵɵlistener("click", function StructureColumnConfigSortComponent_Template_gui_dropdown_item_click_11_listener() { return ctx.setSortOrder(ctx.status.NONE); });
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dropdownText", ctx.dropdownTextTranslation)("placement", ctx.placement)("showOnHover", true)("width", 225);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("gui-header-item-active", ctx.isAscSort());
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 17, "headerMenuMainTabColumnSortAscending"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("rotateDeg", 0)("sort", true);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("gui-header-item-active", ctx.isDescSort());
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 19, "headerMenuMainTabColumnSortDescending"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("rotateDeg", 180)("sort", true);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("gui-header-item-active", ctx.isNoneSort());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 21, "headerMenuMainTabColumnSortNone"), " ");
    } }, directives: [i5.FabricDropdownComponent, i5.DropdownItemComponent, i6.StructureColumnMenuArrowIconComponent], pipes: [i7.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnConfigSortComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-column-config-sort]',
                templateUrl: './structure.column-config-sort.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.SortingCommandInvoker }, { type: i4.CompositionWarehouse }]; }, { column: [{
            type: Input
        }], dropdownTextTranslation: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7Ozs7Ozs7OztBQVkzRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsY0FBYztJQWNyRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxhQUE0QixFQUM1QixXQUF3QixFQUN4Qix3QkFBK0MsRUFDL0MsMkJBQWlEO1FBQ3BFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQUMvQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCO1FBWHJFLGNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFXbkIsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDMUYsQ0FBQyxVQUFxQixFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDOUIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWU7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDOztvSEFyRFcsa0NBQWtDO3FGQUFsQyxrQ0FBa0M7UUNuQi9DLHVDQUlzQztRQUVyQyw0Q0FDb0Q7UUFEakMsMEhBQVMsZ0NBQXdCLElBQUM7UUFFcEQsOEJBQTRCO1FBQzNCLFlBQ0E7O1FBQUEseUJBQ007UUFDUCxpQkFBTTtRQUNQLGlCQUFvQjtRQUVwQiw0Q0FDcUQ7UUFEbEMsMEhBQVMsaUNBQXlCLElBQUM7UUFFckQsOEJBQTRCO1FBQzNCLFlBQ0E7O1FBQUEsMEJBQ007UUFDUCxpQkFBTTtRQUNQLGlCQUFvQjtRQUVwQiw2Q0FDcUQ7UUFEbEMsMkhBQVMsaUNBQXlCLElBQUM7UUFFckQsYUFDRDs7UUFBQSxpQkFBb0I7UUFFckIsaUJBQWU7O1FBN0JELDBEQUF3Qyw0QkFBQSxxQkFBQSxjQUFBO1FBTzlDLGVBQTRDO1FBQTVDLHlEQUE0QztRQUVqRCxlQUNBO1FBREEsOEZBQ0E7UUFBSyxlQUFlO1FBQWYsNkJBQWUsY0FBQTtRQU1mLGVBQTZDO1FBQTdDLDBEQUE2QztRQUVsRCxlQUNBO1FBREEsK0ZBQ0E7UUFBSyxlQUFpQjtRQUFqQiwrQkFBaUIsY0FBQTtRQU1qQixlQUE2QztRQUE3QywwREFBNkM7UUFDbkQsZUFDRDtRQURDLDBGQUNEOzt1RkRSWSxrQ0FBa0M7Y0FOOUMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzswTkFJQSxNQUFNO2tCQURMLEtBQUs7WUFJTix1QkFBdUI7a0JBRHRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBJbnB1dCgpXG5cdGRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uOiBzdHJpbmc7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0c3RhdHVzID0gU29ydE9yZGVyO1xuXG5cdHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZS5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuREVTQztcblx0fVxuXG5cdGlzTm9uZVNvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLk5PTkU7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoc29ydDogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0Jztcblx0fVxufVxuIiwiPGd1aS1kcm9wZG93biBbZHJvcGRvd25UZXh0XT1cImRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uXCJcblx0XHRcdCAgW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0ICBbc2hvd09uSG92ZXJdPVwidHJ1ZVwiXG5cdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0ICBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1kcm9wZG93blwiPlxuXG5cdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPlxuXHRcdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0QXNjZW5kaW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8ZGl2IFtyb3RhdGVEZWddPVwiMFwiIFtzb3J0XT1cInRydWVcIiBndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPlxuXHRcdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0RGVzY2VuZGluZycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PGRpdiBbcm90YXRlRGVnXT1cIjE4MFwiIFtzb3J0XT1cInRydWVcIiBndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuTk9ORSlcIlxuXHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdHt7J2hlYWRlck1lbnVNYWluVGFiQ29sdW1uU29ydE5vbmUnIHwgZ3VpVHJhbnNsYXRlfX1cblx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuPC9ndWktZHJvcGRvd24+XG4iXX0=