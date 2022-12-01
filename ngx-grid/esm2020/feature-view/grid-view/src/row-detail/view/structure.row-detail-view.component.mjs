import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { DynamicallyCreatedComponent } from '../../../../../feature/common/src/cdk/component/lib/src/dynamically-created-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../../core/structure/formation/src/api/row-selected/selected-row";
export class StructureRowDetailViewComponent extends DynamicallyCreatedComponent {
    constructor(elRef, item, template, sanitizer) {
        super(elRef);
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getItem(), this.item.getIndex()));
    }
    ngOnInit() {
        this.selectedRowValue = this.item.getItem();
    }
    getSelectorName() {
        return 'gui-row-detail';
    }
}
StructureRowDetailViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureRowDetailViewComponent, deps: [{ token: i0.ElementRef }, { token: structureRowDetailViewItem }, { token: structureRowDetailViewTemplate }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
StructureRowDetailViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: StructureRowDetailViewComponent, selector: "div[gui-row-detail]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"safeHTML\"></div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureRowDetailViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-row-detail]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"safeHTML\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i2.SelectedRow, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewItem]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewTemplate]
                }] }, { type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFaEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUZBQXVGLENBQUM7Ozs7QUFVcEksTUFBTSxPQUFPLCtCQUFnQyxTQUFRLDJCQUEyQjtJQU0vRSxZQUFZLEtBQWlCLEVBQzJCLElBQWlCLEVBQ2IsUUFBYSxFQUNyRCxTQUF1QjtRQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIMEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDckQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs0SEFyQlcsK0JBQStCLDRDQU9oQywwQkFBMEIsYUFDMUIsOEJBQThCO2dIQVI3QiwrQkFBK0Isa0ZDZjVDLHdDQUNBOzJGRGNhLCtCQUErQjtrQkFOM0MsU0FBUzsrQkFDQyxxQkFBcUIsbUJBRWQsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBU2pDLE1BQU07MkJBQUMsMEJBQTBCOzswQkFDakMsTUFBTTsyQkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcm93LWRldGFpbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgZXh0ZW5kcyBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkUm93VmFsdWU6IEl0ZW1FbnRpdHk7XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtKSBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IFNlbGVjdGVkUm93LFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSkgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGVtcGxhdGUodGhpcy5pdGVtLmdldEl0ZW0oKSwgdGhpcy5pdGVtLmdldEluZGV4KCkpKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZSA9IHRoaXMuaXRlbS5nZXRJdGVtKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcm93LWRldGFpbCc7XG5cdH1cblxufVxuIiwiPGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+PC9kaXY+XG4iXX0=