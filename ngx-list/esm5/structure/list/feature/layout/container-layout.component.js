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
var ContainerLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerLayoutComponent, _super);
    function ContainerLayoutComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewModeRepository = listViewModeRepository;
        _this.listViewSelectorRepository = listViewSelectorRepository;
        return _this;
    }
    /**
     * @return {?}
     */
    ContainerLayoutComponent.prototype.ngOnInit = /**
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
    ContainerLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-container-layout',
                    template: "\n\n\t\t<div class=\"gui-list-panel-top\">\n\t\t\t<gui-list-mode-select *ngIf=\"selectorEnabled\"></gui-list-mode-select>\n\n\t\t\t<gui-paging [minimal]=\"true\" [position]=\"0\"></gui-paging>\n\t\t</div>\n\n\t\t<gui-container-source *ngIf=\"listModeEnabled\"></gui-container-source>\n\n\t\t<gui-list-container-card *ngIf=\"cardModeEnabled\"></gui-list-container-card>\n\n\t\t<gui-paging [position]=\"1\"></gui-paging>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-container-layout]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ContainerLayoutComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ListViewReadModelRootId },
        { type: ListViewModeRepository },
        { type: ListViewSelectorRepository }
    ]; };
    return ContainerLayoutComponent;
}(SmartComponent));
export { ContainerLayoutComponent };
if (false) {
    /** @type {?} */
    ContainerLayoutComponent.prototype.listModeEnabled;
    /** @type {?} */
    ContainerLayoutComponent.prototype.cardModeEnabled;
    /** @type {?} */
    ContainerLayoutComponent.prototype.selectorEnabled;
    /**
     * @type {?}
     * @private
     */
    ContainerLayoutComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ContainerLayoutComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ContainerLayoutComponent.prototype.listViewModeRepository;
    /**
     * @type {?}
     * @private
     */
    ContainerLayoutComponent.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2NvbnRhaW5lci1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRTFHO0lBdUI4QyxvREFBYztJQVEzRCxrQ0FDa0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsMEJBQXNEO1FBSnhFLFlBTUMsaUJBQU8sU0FDUDtRQU5pQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCOztJQUd4RSxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBcUJDO1FBcEJBLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQWtCO1lBQzdCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMEJBQTBCO2FBQzdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUMzQixLQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMvQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwwYUFjVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7OztnQkE5QmlDLGlCQUFpQjtnQkFJMUMsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjs7SUFnRW5DLCtCQUFDO0NBQUEsQUE5REQsQ0F1QjhDLGNBQWMsR0F1QzNEO1NBdkNZLHdCQUF3Qjs7O0lBRXBDLG1EQUF5Qjs7SUFFekIsbURBQXlCOztJQUV6QixtREFBeUI7Ozs7O0lBR3hCLHFEQUFxRDs7Ozs7SUFDckQsMkRBQWlFOzs7OztJQUNqRSwwREFBK0Q7Ozs7O0lBQy9ELDhEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lci1sYXlvdXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcFwiPlxuXHRcdFx0PGd1aS1saXN0LW1vZGUtc2VsZWN0ICpuZ0lmPVwic2VsZWN0b3JFbmFibGVkXCI+PC9ndWktbGlzdC1tb2RlLXNlbGVjdD5cblxuXHRcdFx0PGd1aS1wYWdpbmcgW21pbmltYWxdPVwidHJ1ZVwiIFtwb3NpdGlvbl09XCIwXCI+PC9ndWktcGFnaW5nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1jb250YWluZXItc291cmNlICpuZ0lmPVwibGlzdE1vZGVFbmFibGVkXCI+PC9ndWktY29udGFpbmVyLXNvdXJjZT5cblxuXHRcdDxndWktbGlzdC1jb250YWluZXItY2FyZCAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQ+XG5cblx0XHQ8Z3VpLXBhZ2luZyBbcG9zaXRpb25dPVwiMVwiPjwvZ3VpLXBhZ2luZz5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNvbnRhaW5lci1sYXlvdXRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxheW91dENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRsaXN0TW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y2FyZE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlbGVjdG9yRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdFx0XHR0aGlzLmNhcmRNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RvckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=