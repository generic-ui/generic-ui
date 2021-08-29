/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ListViewTemplate } from '../template/list-view-template';
var ListViewItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewItemComponent, _super);
    function ListViewItemComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.context = 'Template not provided';
        _this.addClassToHost('gui-w-full');
        _this.addClassToHost('gui-my-6');
        _this.addClassToHost('gui-mx-0');
        _this.addClassToHost('gui-block');
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewItemComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewItemComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-item';
    };
    ListViewItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-view-item][item][template]',
                    template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ListViewItemComponent.propDecorators = {
        item: [{ type: Input }],
        template: [{ type: Input }]
    };
    return ListViewItemComponent;
}(PureComponent));
export { ListViewItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRTtJQU0yQyxpREFBYTtJQVl2RCwrQkFBWSxVQUFzQjtRQUFsQyxZQUNDLGtCQUFNLFVBQVUsQ0FBQyxTQU1qQjtRQVhELGFBQU8sR0FBVyx1QkFBdUIsQ0FBQztRQU96QyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQUNsQyxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBRUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7Ozs7O0lBRVMsK0NBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOztnQkExQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELDBZQUE4QztvQkFDOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFYNEMsVUFBVTs7O3VCQWNyRCxLQUFLOzJCQUdMLEtBQUs7O0lBaUNQLDRCQUFDO0NBQUEsQUE1Q0QsQ0FNMkMsYUFBYSxHQXNDdkQ7U0F0Q1kscUJBQXFCOzs7SUFFakMscUNBQ1U7O0lBRVYseUNBQzJCOztJQUUzQix3Q0FBMEM7O0lBRTFDLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctaXRlbV1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS13LWZ1bGwnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbXktNicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1teC0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblxuXHRcdGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMuaXRlbSkge1xuXG5cdFx0XHR0aGlzLmhhc1RlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZS5oYXNUZW1wbGF0ZVJlZigpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaGFzVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy50ZW1wbGF0ZS5nZXRUZW1wbGF0ZU1ldGhvZCgpKHRoaXMuaXRlbSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1pdGVtJztcblx0fVxuXG59XG4iXX0=