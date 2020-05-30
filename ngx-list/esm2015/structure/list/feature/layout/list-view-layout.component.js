/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewReadModelRootId } from '../../domain-api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../domain-api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../domain-api/mode/selector/list-view.selector.repository';
export class ListViewLayoutComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     * @param {?} listViewSelectorRepository
     */
    constructor(changeDetectorRef, listViewReadModelRootId, listViewModeRepository, listViewSelectorRepository) {
        super();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUE4QjFHLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7O0lBVTFELFlBQ2tCLGlCQUFvQyxFQUNwQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBRTlDLDBCQUFzRDtRQUV2RSxLQUFLLEVBQUUsQ0FBQztRQU5TLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBRTlDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFQeEUscUJBQWdCLEdBQVksSUFBSSxDQUFDO0lBVWpDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMEJBQTBCO2FBQzdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBckVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQlQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsOEJBQThCLEVBQUUsUUFBUTtpQkFDeEM7YUFDRDs7OztZQW5DaUMsaUJBQWlCO1lBSTFDLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIsMEJBQTBCOzs7O0lBZ0NsQyxrREFBeUI7O0lBRXpCLGtEQUF5Qjs7SUFFekIsa0RBQXlCOztJQUV6QixtREFBaUM7Ozs7O0lBR2hDLG9EQUFxRDs7Ozs7SUFDckQsMERBQWlFOzs7OztJQUNqRSx5REFBK0Q7Ozs7O0lBRS9ELDZEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlldy1sYXlvdXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXNlYXJjaFwiPlxuXG5cdFx0XHQ8Z3VpLXNlYXJjaC1iYXIgKm5nSWY9XCJzZWFyY2hCYXJFbmFibGVkXCI+PC9ndWktc2VhcmNoLWJhcj5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJndWktbGlzdC1wYW5lbC10b3BcIj5cblx0XHRcdDxndWktbGlzdC1tb2RlLXNlbGVjdCAqbmdJZj1cInNlbGVjdG9yRW5hYmxlZFwiPjwvZ3VpLWxpc3QtbW9kZS1zZWxlY3Q+XG5cdFx0XHRcblx0XHRcdDxndWktcGFnaW5nIFttaW5pbWFsXT1cInRydWVcIiBbcG9zaXRpb25dPVwiMFwiPjwvZ3VpLXBhZ2luZz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxndWktbGlzdC12aWV3LXNvdXJjZSAqbmdJZj1cImxpc3RNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3Qtdmlldy1zb3VyY2U+XG5cblx0XHQ8Z3VpLWxpc3QtY29udGFpbmVyLWNhcmQgKm5nSWY9XCJjYXJkTW9kZUVuYWJsZWRcIj48L2d1aS1saXN0LWNvbnRhaW5lci1jYXJkPlxuXG5cdFx0PGd1aS1wYWdpbmcgW3Bvc2l0aW9uXT1cIjFcIj48L2d1aS1wYWdpbmc+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LXZpZXctbGF5b3V0XSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0xheW91dENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRsaXN0TW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y2FyZE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlbGVjdG9yRW5hYmxlZDogYm9vbGVhbjtcblxuXHRzZWFyY2hCYXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0Ly8gcHJpdmF0ZSByZWFkb25seSBjOiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5LFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnk6IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5XG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnlcblx0XHRcdC5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBMaXN0Vmlld01vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5saXN0TW9kZUVuYWJsZWQgPSBtb2RlID09PSBMaXN0Vmlld01vZGUuTElTVDtcblx0XHRcdFx0dGhpcy5jYXJkTW9kZUVuYWJsZWQgPSBtb2RlID09PSBMaXN0Vmlld01vZGUuQ0FSRDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMubGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0XHRcdC5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0b3JFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19