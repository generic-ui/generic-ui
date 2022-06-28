import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { DynamicallyCreatedComponent } from '../../../../feature/common/cdk/component/dynamically-created-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../core/structure/formation/api/row-selected/selected-row";
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
StructureRowDetailViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailViewComponent, deps: [{ token: structureRowDetailViewItem }, { token: structureRowDetailViewTemplate }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
StructureRowDetailViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureRowDetailViewComponent, selector: "div[gui-row-detail]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"safeHTML\"></div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureRowDetailViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-row-detail]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"safeHTML\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i2.SelectedRow, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewItem]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [structureRowDetailViewTemplate]
                }] }, { type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWhILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDOzs7O0FBVXJILE1BQU0sT0FBTywrQkFBZ0MsU0FBUSwyQkFBMkI7SUFNL0UsWUFBaUUsSUFBaUIsRUFDdEIsUUFBYSxFQUNyRCxTQUF1QjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUh3RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDckQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7NEhBaEJXLCtCQUErQixrQkFNdkIsMEJBQTBCLGFBQ25DLDhCQUE4QjtnSEFQN0IsK0JBQStCLGtGQ2Y1Qyx3Q0FDQTsyRkRjYSwrQkFBK0I7a0JBTjNDLFNBQVM7K0JBQ0MscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQVF4QixNQUFNOzJCQUFDLDBCQUEwQjs7MEJBQzFDLE1BQU07MkJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1yb3ctZGV0YWlsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCBleHRlbmRzIER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZTogT3JpZ2luSXRlbUVudGl0eTtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSByZWFkb25seSBpdGVtOiBTZWxlY3RlZFJvdyxcblx0XHRcdFx0QEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUpIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLml0ZW0uZ2V0U291cmNlKCksIHRoaXMuaXRlbS5nZXRJbmRleCgpKSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93VmFsdWUgPSB0aGlzLml0ZW0uZ2V0U291cmNlKCk7XG5cdH1cblxufVxuIiwiPGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+PC9kaXY+XG4iXX0=