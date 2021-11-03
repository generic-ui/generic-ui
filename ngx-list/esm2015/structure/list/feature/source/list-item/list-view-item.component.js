import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class ListViewItemComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.context = 'Template not provided';
        this.addClassToHost('gui-w-full');
        this.addClassToHost('gui-my-6');
        this.addClassToHost('gui-mx-0');
        this.addClassToHost('gui-block');
    }
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
    getSelectorName() {
        return 'gui-list-item';
    }
}
ListViewItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-list-view-item][item][template]',
                template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ListViewItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
ListViewItemComponent.propDecorators = {
    item: [{ type: Input }],
    template: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFVbkYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsWUFBTyxHQUFXLHVCQUF1QixDQUFDO1FBT3pDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7O1lBMUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCwwWUFBOEM7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O1lBWDRDLFVBQVU7OzttQkFjckQsS0FBSzt1QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3Qtdmlldy1pdGVtXVtpdGVtXVt0ZW1wbGF0ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRpdGVtOiBhbnk7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0Y29udGV4dDogc3RyaW5nID0gJ1RlbXBsYXRlIG5vdCBwcm92aWRlZCc7XG5cblx0aGFzVGVtcGxhdGVSZWY6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXctZnVsbCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1teS02Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLW14LTAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWl0ZW0nO1xuXHR9XG5cbn1cbiJdfQ==