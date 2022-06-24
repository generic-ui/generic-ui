import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../source/template/list-view-template.archive";
import * as i2 from "../../card/template/list-view.card-template.archive";
export class ListViewTemplateGate extends Gate {
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
}
ListViewTemplateGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewTemplateGate, deps: [{ token: i1.ListViewTemplateArchive }, { token: i2.ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Directive });
ListViewTemplateGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: { template: "template", cardTemplate: "cardTemplate" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewTemplateGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[mode]'
                }]
        }], ctorParameters: function () { return [{ type: i1.ListViewTemplateArchive }, { type: i2.ListViewCardTemplateArchive }]; }, propDecorators: { template: [{
                type: Input
            }], cardTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvZ2F0ZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQU81RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFPckUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLElBQUk7SUFRN0MsWUFBNkIsd0JBQWlELEVBQzFELHVCQUFvRDtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQUZvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQzFELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7SUFFeEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF3QztRQUVuRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7O2tIQXRCVyxvQkFBb0I7c0dBQXBCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7aUJBQy9CO3dKQUlBLFFBQVE7c0JBRFAsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W21vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1RlbXBsYXRlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3VGVtcGxhdGVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd0ZW1wbGF0ZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY2FyZFRlbXBsYXRlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLmNhcmRUZW1wbGF0ZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==