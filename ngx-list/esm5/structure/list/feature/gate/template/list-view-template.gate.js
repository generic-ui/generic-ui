/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ListViewTemplateArchive } from '../../source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from '../../card/template/list-view.card-template.archive';
import { ListViewTemplate } from '../../source/template/list-view-template';
import { ListViewCardTemplate } from '../../card/template/list-view.card-template';
import { Gate } from '../../../../../common/cdk/component/gate';
var ListViewTemplateGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewTemplateGate, _super);
    function ListViewTemplateGate(containerTemplateArchive, listCardTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.containerTemplateArchive = containerTemplateArchive;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ListViewTemplateGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('template', changes)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', changes)) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
    };
    ListViewTemplateGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[mode]'
                },] }
    ];
    /** @nocollapse */
    ListViewTemplateGate.ctorParameters = function () { return [
        { type: ListViewTemplateArchive },
        { type: ListViewCardTemplateArchive }
    ]; };
    ListViewTemplateGate.propDecorators = {
        template: [{ type: Input }],
        cardTemplate: [{ type: Input }]
    };
    return ListViewTemplateGate;
}(Gate));
export { ListViewTemplateGate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUloRTtJQUcwQyxnREFBSTtJQVE3Qyw4QkFBNkIsd0JBQWlELEVBQzFELHVCQUFvRDtRQUR4RSxZQUVDLGlCQUFPLFNBQ1A7UUFINEIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQUMxRCw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCOztJQUV4RSxDQUFDOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUF3QztRQUVuRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtpQkFDL0I7Ozs7Z0JBWFEsdUJBQXVCO2dCQUN2QiwyQkFBMkI7OzsyQkFhbEMsS0FBSzsrQkFHTCxLQUFLOztJQW1CUCwyQkFBQztDQUFBLEFBM0JELENBRzBDLElBQUksR0F3QjdDO1NBeEJZLG9CQUFvQjs7O0lBRWhDLHdDQUMyQjs7SUFFM0IsNENBQ21DOzs7OztJQUV2Qix3REFBa0U7Ozs7O0lBQzNFLHVEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdUZW1wbGF0ZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld1RlbXBsYXRlR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGVtcGxhdGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2NhcmRUZW1wbGF0ZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy5jYXJkVGVtcGxhdGUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=