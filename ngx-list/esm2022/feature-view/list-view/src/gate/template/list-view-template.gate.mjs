import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../source/template/list-view-template.archive";
import * as i2 from "../../card/template/list-view.card-template.archive";
export class ListViewTemplateGate extends Gate {
    containerTemplateArchive;
    listCardTemplateArchive;
    template;
    cardTemplate;
    constructor(containerTemplateArchive, listCardTemplateArchive) {
        super();
        this.containerTemplateArchive = containerTemplateArchive;
        this.listCardTemplateArchive = listCardTemplateArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('template', changes)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', changes)) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewTemplateGate, deps: [{ token: i1.ListViewTemplateArchive }, { token: i2.ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: { template: "template", cardTemplate: "cardTemplate" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewTemplateGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[mode]'
                }]
        }], ctorParameters: function () { return [{ type: i1.ListViewTemplateArchive }, { type: i2.ListViewCardTemplateArchive }]; }, propDecorators: { template: [{
                type: Input
            }], cardTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2dhdGUvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFPNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7O0FBT3hFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJO0lBUWhCO0lBQ1Q7SUFOcEIsUUFBUSxDQUFtQjtJQUczQixZQUFZLENBQXVCO0lBRW5DLFlBQTZCLHdCQUFpRCxFQUMxRCx1QkFBb0Q7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFGb0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQUMxRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCO0lBRXhFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBd0M7UUFFbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDRixDQUFDO3dHQXRCVyxvQkFBb0I7NEZBQXBCLG9CQUFvQjs7NEZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO2lCQUMvQjt3SkFJQSxRQUFRO3NCQURQLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdUZW1wbGF0ZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld1RlbXBsYXRlR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGVtcGxhdGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NhcmRUZW1wbGF0ZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy5jYXJkVGVtcGxhdGUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=