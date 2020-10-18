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
                    template: "\n\n\t\t<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t\t\t<div class=\"gui-list-card-wrapper\">\n\t\t\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t\t\t</div>\n\t\t</ng-container>\n\n\t\t<ng-template #templateMethod>\n\t\t\t<div class=\"gui-list-card-wrapper\"\n\t\t\t\t [innerHTML]=\"context\"></div>\n\t\t</ng-template>\n\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHM0U7SUFzQitDLHFEQUFhO0lBWTNEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTkQsYUFBTyxHQUFXLHVCQUF1QixDQUFDOztJQU0xQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7O2dCQWhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsUUFBUSxFQUFFLHNaQWFUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLHVCQUF1QixFQUFFLFVBQVE7cUJBQ2pDO2lCQUNEOzs7Ozt1QkFHQyxLQUFLOzJCQUdMLEtBQUs7O0lBdUJQLGdDQUFDO0NBQUEsQUFsREQsQ0FzQitDLGFBQWEsR0E0QjNEO1NBNUJZLHlCQUF5Qjs7O0lBRXJDLHlDQUNVOztJQUVWLDZDQUMrQjs7SUFFL0IsNENBQTBDOztJQUUxQyxtREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtY2FyZC1pdGVtW2l0ZW1dW3RlbXBsYXRlXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzVGVtcGxhdGVSZWY7IGVsc2UgdGVtcGxhdGVNZXRob2RcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1jYXJkLXdyYXBwZXJcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGUuZ2V0VGVtcGxhdGVSZWYoKTsgY29udGV4dDoge2l0ZW06IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZW1wbGF0ZU1ldGhvZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1jYXJkLXdyYXBwZXJcIlxuXHRcdFx0XHQgW2lubmVySFRNTF09XCJjb250ZXh0XCI+PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtY2FyZF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW06IGFueTtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29udGV4dDogc3RyaW5nID0gJ1RlbXBsYXRlIG5vdCBwcm92aWRlZCc7XG5cblx0aGFzVGVtcGxhdGVSZWY6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMuaXRlbSkge1xuXG5cdFx0XHR0aGlzLmhhc1RlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZS5oYXNUZW1wbGF0ZVJlZigpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaGFzVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy50ZW1wbGF0ZS5nZXRUZW1wbGF0ZU1ldGhvZCgpKHRoaXMuaXRlbSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxufVxuIl19