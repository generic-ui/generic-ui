/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../common/cdk/gate';
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
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (this.isDefined('template', simpleChanges)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', simpleChanges)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU10RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSTs7Ozs7SUFRN0MsWUFBNkIsd0JBQWlELEVBQzFELHVCQUFvRDtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQUZvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQzFELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7SUFFeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFFdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDRixDQUFDOzs7WUF6QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7YUFDL0I7Ozs7WUFWUSx1QkFBdUI7WUFDdkIsMkJBQTJCOzs7dUJBWWxDLEtBQUs7MkJBR0wsS0FBSzs7OztJQUhOLHdDQUMyQjs7SUFFM0IsNENBQ21DOzs7OztJQUV2Qix3REFBa0U7Ozs7O0lBQzNFLHVEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdUZW1wbGF0ZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGVtcGxhdGUnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NhcmRUZW1wbGF0ZScsIHNpbXBsZUNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy5jYXJkVGVtcGxhdGUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=