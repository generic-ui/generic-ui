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
                    template: "\n\n\t\t<div class=\"gui-list-panel-search\">\n\n\t\t\t<gui-search-bar *ngIf=\"searchBarEnabled\"></gui-search-bar>\n\n\t\t\t<!--\t\t\t<gui-sorting-selector></gui-sorting-selector>-->\n\t\t\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>\n\t\t</div>\n\t\t<div class=\"gui-list-panel-top\">\n\t\t\t<gui-list-mode-select *ngIf=\"selectorEnabled\"></gui-list-mode-select>\n\n\t\t\t<gui-paging [minimal]=\"true\" [position]=\"0\"></gui-paging>\n\t\t</div>\n\n\t\t<gui-list-view-source *ngIf=\"listModeEnabled\"></gui-list-view-source>\n\n\t\t<gui-list-container-card *ngIf=\"cardModeEnabled\"></gui-list-container-card>\n\n\t\t<gui-paging [position]=\"1\"></gui-paging>\n\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRTFHO0lBK0I2QyxtREFBYztJQVUxRCxpQ0FDa0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFFOUMsMEJBQXNEO1FBTHhFLFlBT0MsaUJBQU8sU0FDUDtRQVBpQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUU5QyxnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBUHhFLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUFVakMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQXFCQztRQXBCQSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFrQjtZQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLDBCQUEwQjthQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBZ0I7WUFDM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDL0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsOHVCQXNCVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7OztnQkF0Q2lDLGlCQUFpQjtnQkFJMUMsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjs7SUEyRW5DLDhCQUFDO0NBQUEsQUF6RUQsQ0ErQjZDLGNBQWMsR0EwQzFEO1NBMUNZLHVCQUF1Qjs7O0lBRW5DLGtEQUF5Qjs7SUFFekIsa0RBQXlCOztJQUV6QixrREFBeUI7O0lBRXpCLG1EQUFpQzs7Ozs7SUFHaEMsb0RBQXFEOzs7OztJQUNyRCwwREFBaUU7Ozs7O0lBQ2pFLHlEQUErRDs7Ozs7SUFFL0QsNkRBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3LWxheW91dCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtcGFuZWwtc2VhcmNoXCI+XG5cblx0XHRcdDxndWktc2VhcmNoLWJhciAqbmdJZj1cInNlYXJjaEJhckVuYWJsZWRcIj48L2d1aS1zZWFyY2gtYmFyPlxuXG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1zb3J0aW5nLXNlbGVjdG9yPjwvZ3VpLXNvcnRpbmctc2VsZWN0b3I+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cdFx0XHQ8Z3VpLWZpbHRlci1tZW51LXRyaWdnZXI+PC9ndWktZmlsdGVyLW1lbnUtdHJpZ2dlcj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtcGFuZWwtdG9wXCI+XG5cdFx0XHQ8Z3VpLWxpc3QtbW9kZS1zZWxlY3QgKm5nSWY9XCJzZWxlY3RvckVuYWJsZWRcIj48L2d1aS1saXN0LW1vZGUtc2VsZWN0PlxuXG5cdFx0XHQ8Z3VpLXBhZ2luZyBbbWluaW1hbF09XCJ0cnVlXCIgW3Bvc2l0aW9uXT1cIjBcIj48L2d1aS1wYWdpbmc+XG5cdFx0PC9kaXY+XG5cblx0XHQ8Z3VpLWxpc3Qtdmlldy1zb3VyY2UgKm5nSWY9XCJsaXN0TW9kZUVuYWJsZWRcIj48L2d1aS1saXN0LXZpZXctc291cmNlPlxuXG5cdFx0PGd1aS1saXN0LWNvbnRhaW5lci1jYXJkICpuZ0lmPVwiY2FyZE1vZGVFbmFibGVkXCI+PC9ndWktbGlzdC1jb250YWluZXItY2FyZD5cblxuXHRcdDxndWktcGFnaW5nIFtwb3NpdGlvbl09XCIxXCI+PC9ndWktcGFnaW5nPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC12aWV3LWxheW91dF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0bGlzdE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdGNhcmRNb2RlRW5hYmxlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RvckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c2VhcmNoQmFyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5LFxuXHRcdC8vIHByaXZhdGUgcmVhZG9ubHkgYzogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5OiBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0XHRcdHRoaXMuY2FyZE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==