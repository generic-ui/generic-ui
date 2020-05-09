/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/pure-component';
import { ContanierTemplate } from '../../template/contanier-template';
var ContainerListItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerListItemComponent, _super);
    function ContainerListItemComponent() {
        var _this = _super.call(this) || this;
        _this.context = 'Template not provided';
        return _this;
    }
    /**
     * @return {?}
     */
    ContainerListItemComponent.prototype.ngOnChanges = /**
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
    ContainerListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-container-list-item[item][template]',
                    template: "\n\n\t\t<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t\t\t<div class=\"gui-list-item-container\" >\n\t\t\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t\t\t</div>\n\t\t</ng-container>\n\n\t\t<ng-template #templateMethod>\n\t\t\t<div class=\"gui-list-item-container\"\n\t\t\t\t [innerHTML]=\"context\"></div>\n\t\t</ng-template>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-item]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ContainerListItemComponent.ctorParameters = function () { return []; };
    ContainerListItemComponent.propDecorators = {
        item: [{ type: Input }],
        template: [{ type: Input }]
    };
    return ContainerListItemComponent;
}(PureComponent));
export { ContainerListItemComponent };
if (false) {
    /** @type {?} */
    ContainerListItemComponent.prototype.item;
    /** @type {?} */
    ContainerListItemComponent.prototype.template;
    /** @type {?} */
    ContainerListItemComponent.prototype.context;
    /** @type {?} */
    ContainerListItemComponent.prototype.hasTemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3QtaXRlbS9jb250YWluZXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd0RTtJQXNCZ0Qsc0RBQWE7SUFZNUQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFORCxhQUFPLEdBQVcsdUJBQXVCLENBQUM7O0lBTTFDLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQzs7Z0JBaERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUNBQXlDO29CQUNuRCxRQUFRLEVBQUUsMlpBYVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsdUJBQXVCLEVBQUUsVUFBUTtxQkFDakM7aUJBQ0Q7Ozs7O3VCQUdDLEtBQUs7MkJBR0wsS0FBSzs7SUF1QlAsaUNBQUM7Q0FBQSxBQWxERCxDQXNCZ0QsYUFBYSxHQTRCNUQ7U0E1QlksMEJBQTBCOzs7SUFFdEMsMENBQ1U7O0lBRVYsOENBQzRCOztJQUU1Qiw2Q0FBMEM7O0lBRTFDLG9EQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YW5pZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlL2NvbnRhbmllci10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lci1saXN0LWl0ZW1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZW1wbGF0ZVJlZjsgZWxzZSB0ZW1wbGF0ZU1ldGhvZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyXCIgPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZS5nZXRUZW1wbGF0ZVJlZigpOyBjb250ZXh0OiB7aXRlbTogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3RlbXBsYXRlTWV0aG9kPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyXCJcblx0XHRcdFx0IFtpbm5lckhUTUxdPVwiY29udGV4dFwiPjwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LWl0ZW1dJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBDb250YW5pZXJUZW1wbGF0ZTtcblxuXHRjb250ZXh0OiBzdHJpbmcgPSAnVGVtcGxhdGUgbm90IHByb3ZpZGVkJztcblxuXHRoYXNUZW1wbGF0ZVJlZjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG59XG4iXX0=