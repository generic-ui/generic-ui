/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../core/api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../core/api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../core/api/mode/selector/list-view.selector.repository';
export class ListViewLayoutComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     * @param {?} listViewSelectorRepository
     */
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewModeRepository = listViewModeRepository;
        this.listViewSelectorRepository = listViewSelectorRepository;
        this.searchBarEnabled = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndRender(this.listViewModeRepository.on(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.listModeEnabled = mode === ListViewMode.LIST;
            this.cardModeEnabled = mode === ListViewMode.CARD;
        }));
        this.subscribeAndRender(this.listViewSelectorRepository.on(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.selectorEnabled = enabled;
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-list-view-layout';
    }
}
ListViewLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-list-view-layout]',
                template: "<div class=\"gui-flex gui-px-6\">\n\n\t<div *ngIf=\"searchBarEnabled\" class=\"gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto\" gui-search-bar></div>\n\n\t<!--\t\t\t<div gui-sorting-selector></div>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\t<!--\t\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n</div>\n<div class=\"gui-list-panel-top gui-items-center gui-flex gui-px-6\">\n\t<div *ngIf=\"selectorEnabled\" gui-list-mode-select></div>\n\n\t<div [minimal]=\"true\" [position]=\"0\" class=\"gui-ml-auto\" gui-paging></div>\n</div>\n\n<div *ngIf=\"listModeEnabled\" gui-list-view-source></div>\n\n<div *ngIf=\"cardModeEnabled\" gui-list-container-card></div>\n\n<div [position]=\"1\" class=\"gui-ml-auto\" gui-paging></div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ListViewLayoutComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: ListViewReadModelRootId },
    { type: ListViewModeRepository },
    { type: ListViewSelectorRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBU3hHLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7OztJQVUxRCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLDBCQUFzRDtRQUV6RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFOVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBTjFFLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQVNqQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxrQkFBa0IsQ0FDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7UUFDNUUsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ25ELENBQUMsRUFDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGtCQUFrQixDQUN0QixJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7OztRQUNoRixDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7OztZQTdDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsdXhCQUFnRDtnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBZGlDLGlCQUFpQjtZQUFhLFVBQVU7WUFJakUsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0QiwwQkFBMEI7Ozs7SUFXbEMsa0RBQXlCOztJQUV6QixrREFBeUI7O0lBRXpCLGtEQUF5Qjs7SUFFekIsbURBQWlDOzs7OztJQUVyQixvREFBcUQ7Ozs7O0lBRTlELDBEQUFpRTs7Ozs7SUFDakUseURBQStEOzs7OztJQUMvRCw2REFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3Qtdmlldy1sYXlvdXRdJyxcblx0dGVtcGxhdGVVcmw6IGAuL2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50Lmh0bWxgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0xheW91dENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRsaXN0TW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y2FyZE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlbGVjdG9yRW5hYmxlZDogYm9vbGVhbjtcblxuXHRzZWFyY2hCYXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZFJlbmRlcihcblx0XHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0XHRcdHRoaXMuY2FyZE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kUmVuZGVyKFxuXHRcdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeS5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LXZpZXctbGF5b3V0Jztcblx0fVxufVxuIl19