/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListViewCardTemplate } from '../template/list-view.card-template';
var ListViewCardItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewCardItemComponent, _super);
    function ListViewCardItemComponent() {
        var _this = _super.call(this) || this;
        _this.context = 'Template not provided';
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewCardItemComponent.prototype.ngOnChanges = /**
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
    ListViewCardItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-card-item[item][template]',
                    template: "\n\n\t\t<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t\t\t<div class=\"gui-list-card-wrapper\" >\n\t\t\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t\t\t</div>\n\t\t</ng-container>\n\n\t\t<ng-template #templateMethod>\n\t\t\t<div class=\"gui-list-card-wrapper\"\n\t\t\t\t [innerHTML]=\"context\"></div>\n\t\t</ng-template>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-card]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewCardItemComponent.ctorParameters = function () { return []; };
    ListViewCardItemComponent.propDecorators = {
        item: [{ type: Input }],
        template: [{ type: Input }]
    };
    return ListViewCardItemComponent;
}(PureComponent));
export { ListViewCardItemComponent };
if (false) {
    /** @type {?} */
    ListViewCardItemComponent.prototype.item;
    /** @type {?} */
    ListViewCardItemComponent.prototype.template;
    /** @type {?} */
    ListViewCardItemComponent.prototype.context;
    /** @type {?} */
    ListViewCardItemComponent.prototype.hasTemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHM0U7SUFzQitDLHFEQUFhO0lBWTNEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTkQsYUFBTyxHQUFXLHVCQUF1QixDQUFDOztJQU0xQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7O2dCQWhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsUUFBUSxFQUFFLHVaQWFUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLHVCQUF1QixFQUFFLFVBQVE7cUJBQ2pDO2lCQUNEOzs7Ozt1QkFHQyxLQUFLOzJCQUdMLEtBQUs7O0lBdUJQLGdDQUFDO0NBQUEsQUFsREQsQ0FzQitDLGFBQWEsR0E0QjNEO1NBNUJZLHlCQUF5Qjs7O0lBRXJDLHlDQUNVOztJQUVWLDZDQUMrQjs7SUFFL0IsNENBQTBDOztJQUUxQyxtREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtY2FyZC1pdGVtW2l0ZW1dW3RlbXBsYXRlXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzVGVtcGxhdGVSZWY7IGVsc2UgdGVtcGxhdGVNZXRob2RcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1jYXJkLXdyYXBwZXJcIiA+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlLmdldFRlbXBsYXRlUmVmKCk7IGNvbnRleHQ6IHtpdGVtOiBpdGVtfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVNZXRob2Q+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtY2FyZC13cmFwcGVyXCJcblx0XHRcdFx0IFtpbm5lckhUTUxdPVwiY29udGV4dFwiPjwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LWNhcmRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRpdGVtOiBhbnk7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLml0ZW0pIHtcblxuXHRcdFx0dGhpcy5oYXNUZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGUuaGFzVGVtcGxhdGVSZWYoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmhhc1RlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMudGVtcGxhdGUuZ2V0VGVtcGxhdGVNZXRob2QoKSh0aGlzLml0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==