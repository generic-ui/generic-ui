/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../domain-api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../domain-api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../domain-api/mode/selector/list-view.selector.repository';
var ListViewLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewLayoutComponent, _super);
    function ListViewLayoutComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        var _this = _super.call(this) || this;
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
                    template: "\n\n\t\t<div class=\"gui-list-panel-search\">\n\n\t\t\t<gui-search-bar *ngIf=\"searchBarEnabled\"></gui-search-bar>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"gui-list-panel-top\">\n\t\t\t<gui-list-mode-select *ngIf=\"selectorEnabled\"></gui-list-mode-select>\n\t\t\t\n\t\t\t<gui-paging [minimal]=\"true\" [position]=\"0\"></gui-paging>\n\t\t</div>\n\n\t\t<gui-list-view-source *ngIf=\"listModeEnabled\"></gui-list-view-source>\n\n\t\t<gui-list-container-card *ngIf=\"cardModeEnabled\"></gui-list-container-card>\n\n\t\t<gui-paging [position]=\"1\"></gui-paging>\n\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRTFHO0lBNEI2QyxtREFBYztJQVUxRCxpQ0FDa0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFFOUMsMEJBQXNEO1FBTHhFLFlBT0MsaUJBQU8sU0FDUDtRQVBpQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUU5QyxnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBUHhFLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUFVakMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQXFCQztRQXBCQSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFrQjtZQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLDBCQUEwQjthQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBZ0I7WUFDM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDL0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUscWpCQW1CVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7OztnQkFuQ2lDLGlCQUFpQjtnQkFJMUMsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjs7SUF3RW5DLDhCQUFDO0NBQUEsQUF0RUQsQ0E0QjZDLGNBQWMsR0EwQzFEO1NBMUNZLHVCQUF1Qjs7O0lBRW5DLGtEQUF5Qjs7SUFFekIsa0RBQXlCOztJQUV6QixrREFBeUI7O0lBRXpCLG1EQUFpQzs7Ozs7SUFHaEMsb0RBQXFEOzs7OztJQUNyRCwwREFBaUU7Ozs7O0lBQ2pFLHlEQUErRDs7Ozs7SUFFL0QsNkRBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3LWxheW91dCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtcGFuZWwtc2VhcmNoXCI+XG5cblx0XHRcdDxndWktc2VhcmNoLWJhciAqbmdJZj1cInNlYXJjaEJhckVuYWJsZWRcIj48L2d1aS1zZWFyY2gtYmFyPlxuXHRcdFx0XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcFwiPlxuXHRcdFx0PGd1aS1saXN0LW1vZGUtc2VsZWN0ICpuZ0lmPVwic2VsZWN0b3JFbmFibGVkXCI+PC9ndWktbGlzdC1tb2RlLXNlbGVjdD5cblx0XHRcdFxuXHRcdFx0PGd1aS1wYWdpbmcgW21pbmltYWxdPVwidHJ1ZVwiIFtwb3NpdGlvbl09XCIwXCI+PC9ndWktcGFnaW5nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1saXN0LXZpZXctc291cmNlICpuZ0lmPVwibGlzdE1vZGVFbmFibGVkXCI+PC9ndWktbGlzdC12aWV3LXNvdXJjZT5cblxuXHRcdDxndWktbGlzdC1jb250YWluZXItY2FyZCAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQ+XG5cblx0XHQ8Z3VpLXBhZ2luZyBbcG9zaXRpb25dPVwiMVwiPjwvZ3VpLXBhZ2luZz5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3Qtdmlldy1sYXlvdXRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGxpc3RNb2RlRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjYXJkTW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0b3JFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlYXJjaEJhckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHQvLyBwcml2YXRlIHJlYWRvbmx5IGM6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdFx0XHR0aGlzLmNhcmRNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RvckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=