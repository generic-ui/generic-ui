/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../core/api/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../core/api/list-view.warehouse';
var ListViewLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewLayoutComponent, _super);
    function ListViewLayoutComponent(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewWarehouse = listViewWarehouse;
        _this.listModeEnabled = false;
        _this.cardModeEnabled = false;
        _this.selectorEnabled = false;
        _this.searchBarEnabled = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listModeEnabled = mode === ListViewMode.LIST;
            _this.cardModeEnabled = mode === ListViewMode.CARD;
        }));
        this.hermesSubscribe(this.listViewWarehouse.onSelector(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.selectorEnabled = enabled;
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewLayoutComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-view-layout';
    };
    ListViewLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-view-layout]',
                    template: "<div class=\"gui-flex\">\n\n\t<div *ngIf=\"searchBarEnabled\" class=\"gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto\" gui-search-bar></div>\n\n\t<!--\t\t\t<div gui-sorting-selector></div>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n</div>\n<div class=\"gui-list-panel-top gui-items-center gui-flex gui-px-6\">\n\t<div *ngIf=\"selectorEnabled\" gui-list-mode-select></div>\n\n\t<div [minimal]=\"true\" [position]=\"0\" class=\"gui-ml-auto\" gui-paging></div>\n</div>\n\n<div *ngIf=\"listModeEnabled\" gui-list-view-source></div>\n\n<div *ngIf=\"cardModeEnabled\" gui-list-container-card></div>\n\n<div [position]=\"1\" class=\"gui-ml-auto\" gui-paging></div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewLayoutComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ListViewReadModelRootId },
        { type: ListViewWarehouse }
    ]; };
    return ListViewLayoutComponent;
}(SmartComponent));
export { ListViewLayoutComponent };
if (false) {
    /** @type {?} */
    ListViewLayoutComponent.prototype.listModeEnabled;
    /** @type {?} */
    ListViewLayoutComponent.prototype.cardModeEnabled;
    /** @type {?} */
    ListViewLayoutComponent.prototype.selectorEnabled;
    /** @type {?} */
    ListViewLayoutComponent.prototype.searchBarEnabled;
    /**
     * @type {?}
     * @private
     */
    ListViewLayoutComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewLayoutComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewLayoutComponent.prototype.listViewWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd2RTtJQU02QyxtREFBYztJQVUxRCxpQ0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsdUJBQWdELEVBQ2hELGlCQUFvQztRQUh4RCxZQUtDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUNwQztRQU40Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVh4RCxxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBUWpDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFnQkM7UUFkQSxJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7OztRQUMzRSxVQUFDLElBQWtCO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztRQUNuRCxDQUFDLEVBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQy9FLFVBQUMsT0FBZ0I7WUFDaEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLGlEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkE1Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDh3QkFBZ0Q7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBYmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUlqRSx1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjs7SUFnRDFCLDhCQUFDO0NBQUEsQUE3Q0QsQ0FNNkMsY0FBYyxHQXVDMUQ7U0F2Q1ksdUJBQXVCOzs7SUFFbkMsa0RBQWlDOztJQUVqQyxrREFBaUM7O0lBRWpDLGtEQUFpQzs7SUFFakMsbURBQWlDOzs7OztJQUVyQixvREFBcUQ7Ozs7O0lBRTlELDBEQUFpRTs7Ozs7SUFDakUsb0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3Qtdmlldy1sYXlvdXRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0xheW91dENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRsaXN0TW9kZUVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjYXJkTW9kZUVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWxlY3RvckVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWFyY2hCYXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdXYXJlaG91c2U6IExpc3RWaWV3V2FyZWhvdXNlXG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmxpc3RWaWV3V2FyZWhvdXNlLm9uTW9kZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0XHRcdHRoaXMuY2FyZE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Vmlld1dhcmVob3VzZS5vblNlbGVjdG9yKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldy1sYXlvdXQnO1xuXHR9XG59XG4iXX0=