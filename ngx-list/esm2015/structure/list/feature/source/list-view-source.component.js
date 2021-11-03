import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../source/core/api/source.warehouse";
import * as i3 from "./template/list-view-template.archive";
import * as i4 from "@angular/common";
import * as i5 from "../../../source/feature/empty/empty-source.component";
import * as i6 from "./list-item/list-view-item.component";
const _c0 = ["gui-list-view-source", ""];
function ListViewSourceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("item", element_r1)("template", ctx_r0.template);
} }
export class ListViewSourceComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.containerTemplateArchive = containerTemplateArchive;
        this.source = [];
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureSourceWarehouse.onEntities(this.structureId), (items) => {
            this.source = items.map(i => i.getSourceItem());
        });
        this.hermesSubscribe(this.containerTemplateArchive.on(), (template) => {
            this.template = template;
        });
    }
    getSelectorName() {
        return 'gui-list-view-source';
    }
}
ListViewSourceComponent.ɵfac = function ListViewSourceComponent_Factory(t) { return new (t || ListViewSourceComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SourceWarehouse), i0.ɵɵdirectiveInject(i3.ListViewTemplateArchive)); };
ListViewSourceComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewSourceComponent, selectors: [["div", "gui-list-view-source", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["gui-list-view-item", "", 3, "item", "template", 4, "ngFor", "ngForOf"], ["gui-empty-source", "", 3, "items"], ["gui-list-view-item", "", 3, "item", "template"]], template: function ListViewSourceComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListViewSourceComponent_div_0_Template, 1, 2, "div", 0);
        i0.ɵɵelement(1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.source);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", ctx.source);
    } }, directives: [i4.NgForOf, i5.EmptySourceComponent, i6.ListViewItemComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSourceComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-view-source]',
                templateUrl: './list-view-source.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SourceWarehouse }, { type: i3.ListViewTemplateArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFpQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7SUNGbEYseUJBSU07Ozs7SUFISixpQ0FBZ0IsNkJBQUE7O0FEYWxCLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjO0lBTTFELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLHdCQUF5QyxFQUN6Qyx3QkFBaUQ7UUFDcEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFSckUsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQVV2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzFELENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsRUFBRSxFQUNsQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7OEZBbENXLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDZHBDLHdFQUlNO1FBRU4seUJBQ007O1FBUG1CLG9DQUFTO1FBTTdCLGVBQWdCO1FBQWhCLGtDQUFnQjs7dUZEUVIsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctc291cmNlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlSXRlbSgpKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldy1zb3VyY2UnO1xuXHR9XG59XG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIHNvdXJjZVwiXG5cdCBbaXRlbV09XCJlbGVtZW50XCJcblx0IFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiXG5cdCBndWktbGlzdC12aWV3LWl0ZW0+XG48L2Rpdj5cblxuPGRpdiBbaXRlbXNdPVwic291cmNlXCIgZ3VpLWVtcHR5LXNvdXJjZT5cbjwvZGl2PlxuIl19