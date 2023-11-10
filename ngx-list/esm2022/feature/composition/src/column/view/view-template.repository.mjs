import { Injectable } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
import * as i0 from "@angular/core";
import * as i1 from "./view-template.factory";
export class ViewTemplateRepository {
    columnTemplateFactory;
    constructor(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    static services = [ViewTemplateFactory];
    findTemplate(view) {
        const typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewTemplateRepository, deps: [{ token: i1.ViewTemplateFactory }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewTemplateRepository });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewTemplateRepository, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ViewTemplateFactory }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBSzlELE1BQU0sT0FBTyxzQkFBc0I7SUFFTDtJQUE3QixZQUE2QixxQkFBMEM7UUFBMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFxQjtJQUN2RSxDQUFDO0lBRUQsTUFBTSxDQUFVLFFBQVEsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFakQsWUFBWSxDQUFDLElBQWM7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO3dHQVhXLHNCQUFzQjs0R0FBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5UZW1wbGF0ZUZhY3Rvcnk6IFZpZXdUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtWaWV3VGVtcGxhdGVGYWN0b3J5XTtcblxuXHRmaW5kVGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRjb25zdCB0eXBlVG9UZW1wbGF0ZSA9IHRoaXMuY29sdW1uVGVtcGxhdGVGYWN0b3J5LmdldFRlbXBsYXRlcygpO1xuXG5cdFx0cmV0dXJuIHR5cGVUb1RlbXBsYXRlLmdldCh2aWV3KTtcblx0fVxuXG59XG4iXX0=