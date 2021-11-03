import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
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
ListViewTemplateGate.ɵfac = function ListViewTemplateGate_Factory(t) { return new (t || ListViewTemplateGate)(i0.ɵɵdirectiveInject(i1.ListViewTemplateArchive), i0.ɵɵdirectiveInject(i2.ListViewCardTemplateArchive)); };
ListViewTemplateGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListViewTemplateGate, selectors: [["gui-list-view", "mode", ""]], inputs: { template: "template", cardTemplate: "cardTemplate" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewTemplateGate, [{
        type: Directive,
        args: [{
                selector: 'gui-list-view[mode]'
            }]
    }], function () { return [{ type: i1.ListViewTemplateArchive }, { type: i2.ListViewCardTemplateArchive }]; }, { template: [{
            type: Input
        }], cardTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQU81RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFPaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLElBQUk7SUFRN0MsWUFBNkIsd0JBQWlELEVBQzFELHVCQUFvRDtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQUZvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQzFELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7SUFFeEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF3QztRQUVuRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7O3dGQXRCVyxvQkFBb0I7dUVBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2FBQy9CO29IQUlBLFFBQVE7a0JBRFAsS0FBSztZQUlOLFlBQVk7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdUZW1wbGF0ZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld1RlbXBsYXRlR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGVtcGxhdGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NhcmRUZW1wbGF0ZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy5jYXJkVGVtcGxhdGUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=