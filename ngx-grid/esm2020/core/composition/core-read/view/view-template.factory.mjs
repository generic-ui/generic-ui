import { ComponentFactoryResolver } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
export class ViewTemplateFactory extends TemplateFactory {
    constructor(componentFactoryResolver) {
        super(ViewTemplatesComponent, componentFactoryResolver);
    }
    generateMapKeys() {
        return Object.keys(CellView)
            .map(key => CellView[key]);
    }
}
ViewTemplateFactory.services = [ComponentFactoryResolver];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBdUM7SUFFL0UsWUFBWSx3QkFBa0Q7UUFDN0QsS0FBSyxDQUNKLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEIsQ0FBQztJQUNILENBQUM7SUFJRCxlQUFlO1FBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDOztBQUxlLDRCQUFRLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PFZpZXdUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXTtcblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoQ2VsbFZpZXcpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IENlbGxWaWV3W2tleV0pO1xuXHR9XG59XG4iXX0=