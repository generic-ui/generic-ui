import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { DynamicallyCreatedComponent } from '../../../../../common/cdk/component/dynamically-created-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../source/core/api/formation/selected-row";
const _c0 = ["gui-row-detail", ""];
export class StructureRowDetailViewComponent extends DynamicallyCreatedComponent {
    constructor(item, template, sanitizer) {
        super();
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getSource(), this.item.getIndex()));
    }
    ngOnInit() {
        this.selectedRowValue = this.item.getSource();
    }
}
StructureRowDetailViewComponent.ɵfac = function StructureRowDetailViewComponent_Factory(t) { return new (t || StructureRowDetailViewComponent)(i0.ɵɵdirectiveInject(structureRowDetailViewItem), i0.ɵɵdirectiveInject(structureRowDetailViewTemplate), i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
StructureRowDetailViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureRowDetailViewComponent, selectors: [["div", "gui-row-detail", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function StructureRowDetailViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", ctx.safeHTML, i0.ɵɵsanitizeHtml);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureRowDetailViewComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-row-detail]',
                templateUrl: './structure.row-detail-view.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i2.SelectedRow, decorators: [{
                type: Inject,
                args: [structureRowDetailViewItem]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [structureRowDetailViewTemplate]
            }] }, { type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWhILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7OztBQVVoSCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsMkJBQTJCO0lBTS9FLFlBQWlFLElBQWlCLEVBQ3RCLFFBQWEsRUFDckQsU0FBdUI7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFId0QsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ3JELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFHMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7OzhHQWhCVywrQkFBK0IsdUJBTXZCLDBCQUEwQix3QkFDbkMsOEJBQThCO2tGQVA3QiwrQkFBK0I7UUNmNUMseUJBQWtDOztRQUE3QiwyREFBc0I7O3VGRGVkLCtCQUErQjtjQU4zQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOztzQkFPYSxNQUFNO3VCQUFDLDBCQUEwQjs7c0JBQzFDLE1BQU07dUJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXJvdy1kZXRhaWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGV4dGVuZHMgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlOiBPcmlnaW5JdGVtRW50aXR5O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtKSBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IFNlbGVjdGVkUm93LFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSkgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbS5nZXRTb3VyY2UoKSwgdGhpcy5pdGVtLmdldEluZGV4KCkpKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZSA9IHRoaXMuaXRlbS5nZXRTb3VyY2UoKTtcblx0fVxuXG59XG4iLCI8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cbiJdfQ==