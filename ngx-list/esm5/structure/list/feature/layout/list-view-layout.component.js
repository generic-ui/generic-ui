/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../core/api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../core/api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../core/api/mode/selector/list-view.selector.repository';
var ListViewLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewLayoutComponent, _super);
    function ListViewLayoutComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
        this.listViewModeRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listModeEnabled = mode === ListViewMode.LIST;
            _this.cardModeEnabled = mode === ListViewMode.CARD;
            _this.changeDetectorRef.detectChanges();
        }));
        this.listViewSelectorRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.selectorEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    ListViewLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-view-layout',
                    template: "\n\n\t\t<div class=\"gui-list-panel-search\">\n\n\t\t\t<gui-search-bar *ngIf=\"searchBarEnabled\"></gui-search-bar>\n\n\t\t\t<!--\t\t\t<gui-sorting-selector></gui-sorting-selector>-->\n\t\t\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t\t\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t\t</div>\n\t\t<div class=\"gui-list-panel-top\">\n\t\t\t<gui-list-mode-select *ngIf=\"selectorEnabled\"></gui-list-mode-select>\n\n\t\t\t<gui-paging [minimal]=\"true\" [position]=\"0\"></gui-paging>\n\t\t</div>\n\n\t\t<gui-list-view-source *ngIf=\"listModeEnabled\"></gui-list-view-source>\n\n\t\t<gui-list-container-card *ngIf=\"cardModeEnabled\"></gui-list-container-card>\n\n\t\t<gui-paging [position]=\"1\"></gui-paging>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-view-layout]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewLayoutComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRXhHO0lBK0I2QyxtREFBYztJQVUxRCxpQ0FDa0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFFOUMsMEJBQXNEO1FBTHhFLFlBT0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFQaUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFOUMsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQVB4RSxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBVWpDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFxQkM7UUFwQkEsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBa0I7WUFDN0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQywwQkFBMEI7YUFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQzNCLEtBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXhFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLDJ2QkFzQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsOEJBQThCLEVBQUUsVUFBUTtxQkFDeEM7aUJBQ0Q7Ozs7Z0JBdENpQyxpQkFBaUI7Z0JBSTFDLHVCQUF1QjtnQkFDdkIsc0JBQXNCO2dCQUN0QiwwQkFBMEI7O0lBMkVuQyw4QkFBQztDQUFBLEFBekVELENBK0I2QyxjQUFjLEdBMEMxRDtTQTFDWSx1QkFBdUI7OztJQUVuQyxrREFBeUI7O0lBRXpCLGtEQUF5Qjs7SUFFekIsa0RBQXlCOztJQUV6QixtREFBaUM7Ozs7O0lBR2hDLG9EQUFxRDs7Ozs7SUFDckQsMERBQWlFOzs7OztJQUNqRSx5REFBK0Q7Ozs7O0lBRS9ELDZEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3LWxheW91dCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtcGFuZWwtc2VhcmNoXCI+XG5cblx0XHRcdDxndWktc2VhcmNoLWJhciAqbmdJZj1cInNlYXJjaEJhckVuYWJsZWRcIj48L2d1aS1zZWFyY2gtYmFyPlxuXG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1zb3J0aW5nLXNlbGVjdG9yPjwvZ3VpLXNvcnRpbmctc2VsZWN0b3I+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcFwiPlxuXHRcdFx0PGd1aS1saXN0LW1vZGUtc2VsZWN0ICpuZ0lmPVwic2VsZWN0b3JFbmFibGVkXCI+PC9ndWktbGlzdC1tb2RlLXNlbGVjdD5cblxuXHRcdFx0PGd1aS1wYWdpbmcgW21pbmltYWxdPVwidHJ1ZVwiIFtwb3NpdGlvbl09XCIwXCI+PC9ndWktcGFnaW5nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1saXN0LXZpZXctc291cmNlICpuZ0lmPVwibGlzdE1vZGVFbmFibGVkXCI+PC9ndWktbGlzdC12aWV3LXNvdXJjZT5cblxuXHRcdDxndWktbGlzdC1jb250YWluZXItY2FyZCAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQ+XG5cblx0XHQ8Z3VpLXBhZ2luZyBbcG9zaXRpb25dPVwiMVwiPjwvZ3VpLXBhZ2luZz5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3Qtdmlldy1sYXlvdXRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGxpc3RNb2RlRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjYXJkTW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0b3JFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlYXJjaEJhckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHQvLyBwcml2YXRlIHJlYWRvbmx5IGM6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0XHRcdHRoaXMuY2FyZE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==