/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/pure-component';
import { ContanierTemplate } from '../../template/contanier-template';
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
			<div>
				<ng-template *ngTemplateOutlet="template.getTemplateRef(); context: {item: item}"></ng-template>
			</div>
		</ng-container>

		<ng-template #templateMethod>
			<div [innerHTML]="context"></div>
		</ng-template>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': `"gui-list-item"`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvc291cmNlL2xpc3QtaXRlbS9jb250YWluZXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBd0J0RSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQVk1RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTFQsWUFBTyxHQUFXLHVCQUF1QixDQUFDO0lBTTFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7OztZQS9DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7RUFZVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsaUJBQWlCO2lCQUM1QjthQUNEOzs7OzttQkFHQyxLQUFLO3VCQUdMLEtBQUs7Ozs7SUFITiwwQ0FDVTs7SUFFViw4Q0FDNEI7O0lBRTVCLDZDQUEwQzs7SUFFMUMsb0RBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhbmllclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUvY29udGFuaWVyLXRlbXBsYXRlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29udGFpbmVyLWxpc3QtaXRlbVtpdGVtXVt0ZW1wbGF0ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc1RlbXBsYXRlUmVmOyBlbHNlIHRlbXBsYXRlTWV0aG9kXCI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZS5nZXRUZW1wbGF0ZVJlZigpOyBjb250ZXh0OiB7aXRlbTogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3RlbXBsYXRlTWV0aG9kPlxuXHRcdFx0PGRpdiBbaW5uZXJIVE1MXT1cImNvbnRleHRcIj48L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiBgXCJndWktbGlzdC1pdGVtXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyTGlzdEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRpdGVtOiBhbnk7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IENvbnRhbmllclRlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLml0ZW0pIHtcblxuXHRcdFx0dGhpcy5oYXNUZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGUuaGFzVGVtcGxhdGVSZWYoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmhhc1RlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMudGVtcGxhdGUuZ2V0VGVtcGxhdGVNZXRob2QoKSh0aGlzLml0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==