import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../source/core/api/source.warehouse";
import * as i3 from "./template/list-view.card-template.archive";
import * as i4 from "@angular/common";
import * as i5 from "../../../source/feature/empty/empty-source.component";
import * as i6 from "./card-item/list-view.card-item.component";
const _c0 = ["gui-list-container-card", ""];
function ListViewContainerCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("item", element_r1)("template", ctx_r0.cardTemplate);
} }
export class ListViewContainerCardComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.items = [];
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-flex-wrap');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-rounded');
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureSourceWarehouse.onEntities(this.structureId), (items) => {
            this.items = items.map(i => i.getSourceItem());
        });
        this.hermesSubscribe(this.listCardTemplateArchive.on(), (template) => {
            this.cardTemplate = template;
            this.changeDetectorRef.detectChanges();
        });
    }
    getSelectorName() {
        return 'gui-list-container-card';
    }
}
ListViewContainerCardComponent.ɵfac = function ListViewContainerCardComponent_Factory(t) { return new (t || ListViewContainerCardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SourceWarehouse), i0.ɵɵdirectiveInject(i3.ListViewCardTemplateArchive)); };
ListViewContainerCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewContainerCardComponent, selectors: [["div", "gui-list-container-card", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["gui-list-card-item", "", 3, "item", "template", 4, "ngFor", "ngForOf"], ["gui-empty-source", "", 3, "items"], ["gui-list-card-item", "", 3, "item", "template"]], template: function ListViewContainerCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListViewContainerCardComponent_div_0_Template, 1, 2, "div", 0);
        i0.ɵɵelement(1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", ctx.items);
    } }, directives: [i4.NgForOf, i5.EmptySourceComponent, i6.ListViewCardItemComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewContainerCardComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-container-card]',
                templateUrl: './list-view.container-card.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SourceWarehouse }, { type: i3.ListViewCardTemplateArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7OztJQ0hsRix5QkFHTTs7OztJQUg2QixpQ0FBZ0IsaUNBQUE7O0FEZ0JuRCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsY0FBYztJQU1qRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsdUJBQW9EO1FBQ3ZFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCO1FBUnhFLFVBQUssR0FBZSxFQUFFLENBQUM7UUFXdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzFELENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUNqQyxDQUFDLFFBQThCLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7OzRHQXpDVyw4QkFBOEI7aUZBQTlCLDhCQUE4QjtRQ2hCM0MsK0VBR007UUFFTix5QkFDTTs7UUFObUIsbUNBQVE7UUFLNUIsZUFBZTtRQUFmLGlDQUFlOzt1RkRXUCw4QkFBOEI7Y0FOMUMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktbGlzdC1jb250YWluZXItY2FyZF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0Y2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWZsZXgtd3JhcCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1tLTAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcC0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXJvdW5kZWQnKTtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlLm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcy5tYXAoaSA9PiBpLmdldFNvdXJjZUl0ZW0oKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhcmRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQnO1xuXHR9XG5cbn1cbiIsIjxkaXYgKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgaXRlbXNcIiBbaXRlbV09XCJlbGVtZW50XCJcblx0IFt0ZW1wbGF0ZV09XCJjYXJkVGVtcGxhdGVcIlxuXHQgZ3VpLWxpc3QtY2FyZC1pdGVtPlxuPC9kaXY+XG5cbjxkaXYgW2l0ZW1zXT1cIml0ZW1zXCIgZ3VpLWVtcHR5LXNvdXJjZT5cbjwvZGl2PlxuIl19