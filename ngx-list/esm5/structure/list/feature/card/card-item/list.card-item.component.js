/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ListCardTemplate } from '../template/list.card-template';
var ListCardItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListCardItemComponent, _super);
    function ListCardItemComponent() {
        var _this = _super.call(this) || this;
        _this.context = 'Template not provided';
        return _this;
    }
    /**
     * @return {?}
     */
    ListCardItemComponent.prototype.ngOnChanges = /**
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
    ListCardItemComponent.decorators = [
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
    ListCardItemComponent.ctorParameters = function () { return []; };
    ListCardItemComponent.propDecorators = {
        item: [{ type: Input }],
        template: [{ type: Input }]
    };
    return ListCardItemComponent;
}(PureComponent));
export { ListCardItemComponent };
if (false) {
    /** @type {?} */
    ListCardItemComponent.prototype.item;
    /** @type {?} */
    ListCardItemComponent.prototype.template;
    /** @type {?} */
    ListCardItemComponent.prototype.context;
    /** @type {?} */
    ListCardItemComponent.prototype.hasTemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jYXJkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NhcmQvY2FyZC1pdGVtL2xpc3QuY2FyZC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRTtJQXNCMkMsaURBQWE7SUFZdkQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFORCxhQUFPLEdBQVcsdUJBQXVCLENBQUM7O0lBTTFDLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQzs7Z0JBaERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxRQUFRLEVBQUUsdVpBYVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsdUJBQXVCLEVBQUUsVUFBUTtxQkFDakM7aUJBQ0Q7Ozs7O3VCQUdDLEtBQUs7MkJBR0wsS0FBSzs7SUF1QlAsNEJBQUM7Q0FBQSxBQWxERCxDQXNCMkMsYUFBYSxHQTRCdkQ7U0E1QlkscUJBQXFCOzs7SUFFakMscUNBQ1U7O0lBRVYseUNBQzJCOztJQUUzQix3Q0FBMEM7O0lBRTFDLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1jYXJkLWl0ZW1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZW1wbGF0ZVJlZjsgZWxzZSB0ZW1wbGF0ZU1ldGhvZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWNhcmQtd3JhcHBlclwiID5cblx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGUuZ2V0VGVtcGxhdGVSZWYoKTsgY29udGV4dDoge2l0ZW06IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZW1wbGF0ZU1ldGhvZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1jYXJkLXdyYXBwZXJcIlxuXHRcdFx0XHQgW2lubmVySFRNTF09XCJjb250ZXh0XCI+PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtY2FyZF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENhcmRJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLml0ZW0pIHtcblxuXHRcdFx0dGhpcy5oYXNUZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGUuaGFzVGVtcGxhdGVSZWYoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmhhc1RlbXBsYXRlUmVmKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMudGVtcGxhdGUuZ2V0VGVtcGxhdGVNZXRob2QoKSh0aGlzLml0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==