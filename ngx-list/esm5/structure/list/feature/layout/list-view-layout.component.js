/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../core/api/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../core/api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../core/api/mode/selector/list-view.selector.repository';
var ListViewLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewLayoutComponent, _super);
    function ListViewLayoutComponent(changeDetectorRef, elementRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewModeRepository = listViewModeRepository;
        _this.listViewSelectorRepository = listViewSelectorRepository;
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
        this.subscribeAndRender(this.listViewModeRepository.on(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listModeEnabled = mode === ListViewMode.LIST;
            _this.cardModeEnabled = mode === ListViewMode.CARD;
        }));
        this.subscribeAndRender(this.listViewSelectorRepository.on(this.listViewReadModelRootId.toAggregateId()), (/**
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
                    template: "<div class=\"gui-flex gui-px-6\">\n\n\t<div *ngIf=\"searchBarEnabled\" class=\"gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto\" gui-search-bar></div>\n\n\t<!--\t\t\t<div gui-sorting-selector></div>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n</div>\n<div class=\"gui-list-panel-top gui-items-center gui-flex gui-px-6\">\n\t<div *ngIf=\"selectorEnabled\" gui-list-mode-select></div>\n\n\t<div [minimal]=\"true\" [position]=\"0\" class=\"gui-ml-auto\" gui-paging></div>\n</div>\n\n<div *ngIf=\"listModeEnabled\" gui-list-view-source></div>\n\n<div *ngIf=\"cardModeEnabled\" gui-list-container-card></div>\n\n<div [position]=\"1\" class=\"gui-ml-auto\" gui-paging></div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewLayoutComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ListViewReadModelRootId },
        { type: ListViewModeRepository },
        { type: ListViewSelectorRepository }
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
    ListViewLayoutComponent.prototype.listViewModeRepository;
    /**
     * @type {?}
     * @private
     */
    ListViewLayoutComponent.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUd4RztJQU02QyxtREFBYztJQVUxRCxpQ0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QywwQkFBc0Q7UUFKMUUsWUFNQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQU4xRSxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBU2pDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFnQkM7UUFkQSxJQUFJLENBQUMsa0JBQWtCLENBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQzVFLFVBQUMsSUFBa0I7WUFDbEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ25ELENBQUMsRUFDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGtCQUFrQixDQUN0QixJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7OztRQUNoRixVQUFDLE9BQWdCO1lBQ2hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxpREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx1eEJBQWdEO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWRpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFJakUsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjs7SUFpRG5DLDhCQUFDO0NBQUEsQUE5Q0QsQ0FNNkMsY0FBYyxHQXdDMUQ7U0F4Q1ksdUJBQXVCOzs7SUFFbkMsa0RBQXlCOztJQUV6QixrREFBeUI7O0lBRXpCLGtEQUF5Qjs7SUFFekIsbURBQWlDOzs7OztJQUVyQixvREFBcUQ7Ozs7O0lBRTlELDBEQUFpRTs7Ozs7SUFDakUseURBQStEOzs7OztJQUMvRCw2REFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXcuc2VsZWN0b3IucmVwb3NpdG9yeSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctbGF5b3V0XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bGlzdE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdGNhcmRNb2RlRW5hYmxlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RvckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c2VhcmNoQmFyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnk6IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5XG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRSZW5kZXIoXG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdFx0XHR0aGlzLmNhcmRNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZFJlbmRlcihcblx0XHRcdHRoaXMubGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RvckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC12aWV3LWxheW91dCc7XG5cdH1cbn1cbiJdfQ==