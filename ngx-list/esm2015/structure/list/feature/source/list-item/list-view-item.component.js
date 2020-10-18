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
			<div class="gui-list-item-container">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUF5QmxFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBWXZEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFMVCxZQUFPLEdBQVcsdUJBQXVCLENBQUM7SUFNMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQzs7O1lBaERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7RUFhVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCx1QkFBdUIsRUFBRSxRQUFRO2lCQUNqQzthQUNEOzs7OzttQkFHQyxLQUFLO3VCQUdMLEtBQUs7Ozs7SUFITixxQ0FDVTs7SUFFVix5Q0FDMkI7O0lBRTNCLHdDQUEwQzs7SUFFMUMsK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXctaXRlbVtpdGVtXVt0ZW1wbGF0ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc1RlbXBsYXRlUmVmOyBlbHNlIHRlbXBsYXRlTWV0aG9kXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtaXRlbS1jb250YWluZXJcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGUuZ2V0VGVtcGxhdGVSZWYoKTsgY29udGV4dDoge2l0ZW06IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZW1wbGF0ZU1ldGhvZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1pdGVtLWNvbnRhaW5lclwiXG5cdFx0XHRcdCBbaW5uZXJIVE1MXT1cImNvbnRleHRcIj48L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC1pdGVtXSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRpdGVtOiBhbnk7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0Y29udGV4dDogc3RyaW5nID0gJ1RlbXBsYXRlIG5vdCBwcm92aWRlZCc7XG5cblx0aGFzVGVtcGxhdGVSZWY6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMuaXRlbSkge1xuXG5cdFx0XHR0aGlzLmhhc1RlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZS5oYXNUZW1wbGF0ZVJlZigpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaGFzVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy50ZW1wbGF0ZS5nZXRUZW1wbGF0ZU1ldGhvZCgpKHRoaXMuaXRlbSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxufVxuIl19