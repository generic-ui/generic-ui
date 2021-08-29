/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ListViewCardTemplate } from '../template/list-view.card-template';
var ListViewCardItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewCardItemComponent, _super);
    function ListViewCardItemComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.context = 'Template not provided';
        _this.addClassToHost('gui-cursor-pointer');
        _this.addClassToHost('gui-block');
        _this.addClassToHost('gui-m-0');
        _this.addClassToHost('gui-p-0');
        _this.addClassToHost('gui-relative');
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
    /**
     * @protected
     * @return {?}
     */
    ListViewCardItemComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-card';
    };
    ListViewCardItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-card-item][item][template]',
                    template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\"></div>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewCardItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzNFO0lBTStDLHFEQUFhO0lBWTNELG1DQUFZLFVBQXNCO1FBQWxDLFlBQ0Msa0JBQU0sVUFBVSxDQUFDLFNBT2pCO1FBWkQsYUFBTyxHQUFXLHVCQUF1QixDQUFDO1FBT3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUNyQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FFRDtJQUNGLENBQUM7Ozs7O0lBRVMsbURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOztnQkExQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELHdkQUFtRDtvQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFYNEMsVUFBVTs7O3VCQWNyRCxLQUFLOzJCQUdMLEtBQUs7O0lBaUNQLGdDQUFDO0NBQUEsQUE1Q0QsQ0FNK0MsYUFBYSxHQXNDM0Q7U0F0Q1kseUJBQXlCOzs7SUFFckMseUNBQ1U7O0lBRVYsNkNBQytCOztJQUUvQiw0Q0FBMEM7O0lBRTFDLG1EQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LWNhcmQtaXRlbV1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb250ZXh0OiBzdHJpbmcgPSAnVGVtcGxhdGUgbm90IHByb3ZpZGVkJztcblxuXHRoYXNUZW1wbGF0ZVJlZjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktY3Vyc29yLXBvaW50ZXInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbS0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1yZWxhdGl2ZScpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWNhcmQnO1xuXHR9XG5cbn1cbiJdfQ==