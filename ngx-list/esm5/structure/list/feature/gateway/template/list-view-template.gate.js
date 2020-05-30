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
import { Gate } from '../../../../../common/cdk/gate';
var ListViewTemplateGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewTemplateGate, _super);
    function ListViewTemplateGate(containerTemplateArchive, listCardTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.containerTemplateArchive = containerTemplateArchive;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewTemplateGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('template', simpleChanges)) {
            this.containerTemplateArchive.next(this.template);
        }
        if (this.isDefined('cardTemplate', simpleChanges)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXRlbXBsYXRlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHdEQ7SUFHMEMsZ0RBQUk7SUFRN0MsOEJBQTZCLHdCQUFpRCxFQUMxRCx1QkFBb0Q7UUFEeEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDMUQsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUE2Qjs7SUFFeEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksYUFBNEI7UUFFdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDRixDQUFDOztnQkF6QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7aUJBQy9COzs7O2dCQVZRLHVCQUF1QjtnQkFDdkIsMkJBQTJCOzs7MkJBWWxDLEtBQUs7K0JBR0wsS0FBSzs7SUFtQlAsMkJBQUM7Q0FBQSxBQTNCRCxDQUcwQyxJQUFJLEdBd0I3QztTQXhCWSxvQkFBb0I7OztJQUVoQyx3Q0FDMkI7O0lBRTNCLDRDQUNtQzs7Ozs7SUFFdkIsd0RBQWtFOzs7OztJQUMzRSx1REFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbW9kZV0nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3VGVtcGxhdGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3RlbXBsYXRlJywgc2ltcGxlQ2hhbmdlcykpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjYXJkVGVtcGxhdGUnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMuY2FyZFRlbXBsYXRlKTtcblx0XHR9XG5cdH1cblxufVxuIl19