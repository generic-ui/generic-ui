/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../common/cdk/component/gate';
export class ListViewTemplateGate extends Gate {
    /**
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     */
    constructor(containerTemplateArchive, listCardTemplateArchive) {
        super();
        this.containerTemplateArchive = containerTemplateArchive;
        this.listCardTemplateArchive = listCardTemplateArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('template', changes)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', changes)) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
    }
}
ListViewTemplateGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[mode]'
            },] }
];
/** @nocollapse */
ListViewTemplateGate.ctorParameters = () => [
    { type: ListViewTemplateArchive },
    { type: ListViewCardTemplateArchive }
];
ListViewTemplateGate.propDecorators = {
    template: [{ type: Input }],
    cardTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewTemplateGate.prototype.template;
    /** @type {?} */
    ListViewTemplateGate.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListViewTemplateGate.prototype.containerTemplateArchive;
    /**
     * @type {?}
     * @private
     */
    ListViewTemplateGate.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFbkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBT2hFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJOzs7OztJQVE3QyxZQUE2Qix3QkFBaUQsRUFDMUQsdUJBQW9EO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBRm9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDMUQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE2QjtJQUV4RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUF3QztRQUVuRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjthQUMvQjs7OztZQVhRLHVCQUF1QjtZQUN2QiwyQkFBMkI7Ozt1QkFhbEMsS0FBSzsyQkFHTCxLQUFLOzs7O0lBSE4sd0NBQzJCOztJQUUzQiw0Q0FDbUM7Ozs7O0lBRXZCLHdEQUFrRTs7Ozs7SUFDM0UsdURBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W21vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1RlbXBsYXRlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3VGVtcGxhdGVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd0ZW1wbGF0ZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY2FyZFRlbXBsYXRlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLmNhcmRUZW1wbGF0ZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==