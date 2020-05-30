/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListViewTemplate } from '../template/list-view-template';
export class ListViewItemComponent extends PureComponent {
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
ListViewItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view-item[item][template]',
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
ListViewItemComponent.ctorParameters = () => [];
ListViewItemComponent.propDecorators = {
    item: [{ type: Input }],
    template: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewItemComponent.prototype.item;
    /** @type {?} */
    ListViewItemComponent.prototype.template;
    /** @type {?} */
    ListViewItemComponent.prototype.context;
    /** @type {?} */
    ListViewItemComponent.prototype.hasTemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUF5QmxFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBWXZEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMVCxZQUFPLEdBQVcsdUJBQXVCLENBQUM7SUFNMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQzs7O1lBaERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7RUFhVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCx1QkFBdUIsRUFBRSxRQUFRO2lCQUNqQzthQUNEOzs7OzttQkFHQyxLQUFLO3VCQUdMLEtBQUs7Ozs7SUFITixxQ0FDVTs7SUFFVix5Q0FDMkI7O0lBRTNCLHdDQUEwQzs7SUFFMUMsK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXctaXRlbVtpdGVtXVt0ZW1wbGF0ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc1RlbXBsYXRlUmVmOyBlbHNlIHRlbXBsYXRlTWV0aG9kXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtaXRlbS1jb250YWluZXJcIiA+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlLmdldFRlbXBsYXRlUmVmKCk7IGNvbnRleHQ6IHtpdGVtOiBpdGVtfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVNZXRob2Q+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtaXRlbS1jb250YWluZXJcIlxuXHRcdFx0XHQgW2lubmVySFRNTF09XCJjb250ZXh0XCI+PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtaXRlbV0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLml0ZW0pIHtcblxuXHRcdFx0dGhpcy5oYXNUZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGUuaGFzVGVtcGxhdGVSZWYoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmhhc1RlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMudGVtcGxhdGUuZ2V0VGVtcGxhdGVNZXRob2QoKSh0aGlzLml0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==