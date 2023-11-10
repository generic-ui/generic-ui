import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { DynamicallyCreatedComponent } from '../../../../../feature/common/component/src/dynamically-created-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../../core/structure/formation/src/api/row-selected/selected-row";
export class StructureRowDetailViewComponent extends DynamicallyCreatedComponent {
    item;
    template;
    sanitizer;
    selectedRowValue;
    safeHTML;
    constructor(elRef, item, template, sanitizer) {
        super(elRef);
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getItem(), this.item.getIndex()));
        this.selectedRowValue = this.item.getItem();
    }
    getSelectorName() {
        return 'gui-row-detail';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowDetailViewComponent, deps: [{ token: i0.ElementRef }, { token: structureRowDetailViewItem }, { token: structureRowDetailViewTemplate }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureRowDetailViewComponent, selector: "div[gui-row-detail]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"safeHTML\"></div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowDetailViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-row-detail]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"safeHTML\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i2.SelectedRow, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewItem]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewTemplate]
                }] }, { type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFaEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7Ozs7QUFVeEgsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLDJCQUEyQjtJQU92QjtJQUNJO0lBQ3hDO0lBUHBCLGdCQUFnQixDQUFhO0lBRTdCLFFBQVEsQ0FBVztJQUVuQixZQUFZLEtBQWlCLEVBQzJCLElBQWlCLEVBQ2IsUUFBYSxFQUNyRCxTQUF1QjtRQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIMEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDckQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzt3R0FsQlcsK0JBQStCLDRDQU9oQywwQkFBMEIsYUFDMUIsOEJBQThCOzRGQVI3QiwrQkFBK0Isa0ZDZjVDLHdDQUNBOzs0RkRjYSwrQkFBK0I7a0JBTjNDLFNBQVM7K0JBQ0MscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQVNqQyxNQUFNOzJCQUFDLDBCQUEwQjs7MEJBQ2pDLE1BQU07MkJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2RvbWFpbi9pdGVtL2l0ZW0uZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXJvdy1kZXRhaWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGV4dGVuZHMgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlOiBJdGVtRW50aXR5O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0QEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSByZWFkb25seSBpdGVtOiBTZWxlY3RlZFJvdyxcblx0XHRcdFx0QEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUpIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbS5nZXRJdGVtKCksIHRoaXMuaXRlbS5nZXRJbmRleCgpKSk7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd1ZhbHVlID0gdGhpcy5pdGVtLmdldEl0ZW0oKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1yb3ctZGV0YWlsJztcblx0fVxuXG59XG4iLCI8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cbiJdfQ==