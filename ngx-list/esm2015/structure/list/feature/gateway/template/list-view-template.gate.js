/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../common/cdk/gate';
export class ListViewTemplateGate extends Gate {
    /**
     * @param {?} changeDetectorRef
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     */
    constructor(changeDetectorRef, containerTemplateArchive, listCardTemplateArchive) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
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
    { type: ChangeDetectorRef },
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
    ListViewTemplateGate.prototype.changeDetectorRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU10RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSTs7Ozs7O0lBUTdDLFlBQTZCLGlCQUFvQyxFQUM3Qyx3QkFBaUQsRUFDakQsdUJBQW9EO1FBQ3ZFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBSEcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7SUFFeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFFdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDRixDQUFDOzs7WUExQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7YUFDL0I7Ozs7WUFaUSxpQkFBaUI7WUFFakIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjs7O3VCQVlsQyxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFITix3Q0FDMkI7O0lBRTNCLDRDQUNtQzs7Ozs7SUFFdkIsaURBQXFEOzs7OztJQUM5RCx3REFBa0U7Ozs7O0lBQ2xFLHVEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbW9kZV0nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3VGVtcGxhdGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3RlbXBsYXRlJywgc2ltcGxlQ2hhbmdlcykpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjYXJkVGVtcGxhdGUnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMuY2FyZFRlbXBsYXRlKTtcblx0XHR9XG5cdH1cblxufVxuIl19