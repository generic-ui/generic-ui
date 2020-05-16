/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ContainerTemplate } from '../template/container-template';
export class ContainerListItemComponent extends PureComponent {
    constructor() {
        super();
        this.context = 'Template not provided';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
}
ContainerListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-container-list-item[item][template]',
                template: `

		<ng-container *ngIf="hasTemplateRef; else templateMethod">
			<div class="gui-list-item-container" >
				<ng-template *ngTemplateOutlet="template.getTemplateRef(); context: {item: item}"></ng-template>
			</div>
		</ng-container>

		<ng-template #templateMethod>
			<div class="gui-list-item-container"
				 [innerHTML]="context"></div>
		</ng-template>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-item]': `"true"`
                }
            }] }
];
/** @nocollapse */
ContainerListItemComponent.ctorParameters = () => [];
ContainerListItemComponent.propDecorators = {
    item: [{ type: Input }],
    template: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContainerListItemComponent.prototype.item;
    /** @type {?} */
    ContainerListItemComponent.prototype.template;
    /** @type {?} */
    ContainerListItemComponent.prototype.context;
    /** @type {?} */
    ContainerListItemComponent.prototype.hasTemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3QtaXRlbS9jb250YWluZXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBeUJuRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQVk1RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTFQsWUFBTyxHQUFXLHVCQUF1QixDQUFDO0lBTTFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7OztZQWhERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0VBYVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsdUJBQXVCLEVBQUUsUUFBUTtpQkFDakM7YUFDRDs7Ozs7bUJBR0MsS0FBSzt1QkFHTCxLQUFLOzs7O0lBSE4sMENBQ1U7O0lBRVYsOENBQzRCOztJQUU1Qiw2Q0FBMEM7O0lBRTFDLG9EQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lci1saXN0LWl0ZW1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZW1wbGF0ZVJlZjsgZWxzZSB0ZW1wbGF0ZU1ldGhvZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyXCIgPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZS5nZXRUZW1wbGF0ZVJlZigpOyBjb250ZXh0OiB7aXRlbTogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3RlbXBsYXRlTWV0aG9kPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyXCJcblx0XHRcdFx0IFtpbm5lckhUTUxdPVwiY29udGV4dFwiPjwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LWl0ZW1dJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBDb250YWluZXJUZW1wbGF0ZTtcblxuXHRjb250ZXh0OiBzdHJpbmcgPSAnVGVtcGxhdGUgbm90IHByb3ZpZGVkJztcblxuXHRoYXNUZW1wbGF0ZVJlZjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG59XG4iXX0=