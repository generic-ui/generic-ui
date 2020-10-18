/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../core/api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../core/api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../core/api/mode/selector/list-view.selector.repository';
export class ListViewLayoutComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     * @param {?} listViewSelectorRepository
     */
    constructor(changeDetectorRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        super(changeDetectorRef);
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
        this.listViewModeRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.listModeEnabled = mode === ListViewMode.LIST;
            this.cardModeEnabled = mode === ListViewMode.CARD;
            this.changeDetectorRef.detectChanges();
        }));
        this.listViewSelectorRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.selectorEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
}
ListViewLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view-layout',
                template: `

		<div class="gui-list-panel-search">

			<gui-search-bar *ngIf="searchBarEnabled"></gui-search-bar>

			<!--			<gui-sorting-selector></gui-sorting-selector>-->
			<!--			<gui-filter-menu-trigger></gui-filter-menu-trigger>-->
			<!--			<gui-filter-menu-trigger></gui-filter-menu-trigger>-->
		</div>
		<div class="gui-list-panel-top">
			<gui-list-mode-select *ngIf="selectorEnabled"></gui-list-mode-select>

			<gui-paging [minimal]="true" [position]="0"></gui-paging>
		</div>

		<gui-list-view-source *ngIf="listModeEnabled"></gui-list-view-source>

		<gui-list-container-card *ngIf="cardModeEnabled"></gui-list-container-card>

		<gui-paging [position]="1"></gui-paging>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-view-layout]': `"true"`
                }
            }] }
];
/** @nocollapse */
ListViewLayoutComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFpQ3hHLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7O0lBVTFELFlBQ2tCLGlCQUFvQyxFQUNwQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBRTlDLDBCQUFzRDtRQUV2RSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQU5SLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBRTlDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFQeEUscUJBQWdCLEdBQVksSUFBSSxDQUFDO0lBVWpDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMEJBQTBCO2FBQzdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQlQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsOEJBQThCLEVBQUUsUUFBUTtpQkFDeEM7YUFDRDs7OztZQXRDaUMsaUJBQWlCO1lBSTFDLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIsMEJBQTBCOzs7O0lBbUNsQyxrREFBeUI7O0lBRXpCLGtEQUF5Qjs7SUFFekIsa0RBQXlCOztJQUV6QixtREFBaUM7Ozs7O0lBR2hDLG9EQUFxRDs7Ozs7SUFDckQsMERBQWlFOzs7OztJQUNqRSx5REFBK0Q7Ozs7O0lBRS9ELDZEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3LWxheW91dCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtcGFuZWwtc2VhcmNoXCI+XG5cblx0XHRcdDxndWktc2VhcmNoLWJhciAqbmdJZj1cInNlYXJjaEJhckVuYWJsZWRcIj48L2d1aS1zZWFyY2gtYmFyPlxuXG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1zb3J0aW5nLXNlbGVjdG9yPjwvZ3VpLXNvcnRpbmctc2VsZWN0b3I+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcFwiPlxuXHRcdFx0PGd1aS1saXN0LW1vZGUtc2VsZWN0ICpuZ0lmPVwic2VsZWN0b3JFbmFibGVkXCI+PC9ndWktbGlzdC1tb2RlLXNlbGVjdD5cblxuXHRcdFx0PGd1aS1wYWdpbmcgW21pbmltYWxdPVwidHJ1ZVwiIFtwb3NpdGlvbl09XCIwXCI+PC9ndWktcGFnaW5nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1saXN0LXZpZXctc291cmNlICpuZ0lmPVwibGlzdE1vZGVFbmFibGVkXCI+PC9ndWktbGlzdC12aWV3LXNvdXJjZT5cblxuXHRcdDxndWktbGlzdC1jb250YWluZXItY2FyZCAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQ+XG5cblx0XHQ8Z3VpLXBhZ2luZyBbcG9zaXRpb25dPVwiMVwiPjwvZ3VpLXBhZ2luZz5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3Qtdmlldy1sYXlvdXRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGxpc3RNb2RlRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjYXJkTW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0b3JFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlYXJjaEJhckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHQvLyBwcml2YXRlIHJlYWRvbmx5IGM6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0XHRcdHRoaXMuY2FyZE1vZGVFbmFibGVkID0gbW9kZSA9PT0gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==