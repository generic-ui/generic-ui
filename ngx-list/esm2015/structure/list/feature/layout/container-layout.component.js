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
export class ContainerLayoutComponent extends SmartComponent {
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
ContainerLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-container-layout',
                template: `

		<div class="gui-list-panel-top">
			<gui-list-mode-select *ngIf="selectorEnabled"></gui-list-mode-select>

			<gui-paging [minimal]="true" [position]="0"></gui-paging>
		</div>

		<gui-container-source *ngIf="listModeEnabled"></gui-container-source>

		<gui-list-container-card *ngIf="cardModeEnabled"></gui-list-container-card>

		<gui-paging [position]="1"></gui-paging>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-container-layout]': `"true"`
                }
            }] }
];
/** @nocollapse */
ContainerLayoutComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ListViewReadModelRootId },
    { type: ListViewModeRepository },
    { type: ListViewSelectorRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2NvbnRhaW5lci1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUF5QjFHLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7Ozs7O0lBUTNELFlBQ2tCLGlCQUFvQyxFQUNwQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLDBCQUFzRDtRQUV2RSxLQUFLLEVBQUUsQ0FBQztRQUxTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFHeEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQywwQkFBMEI7YUFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7RUFjVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCw4QkFBOEIsRUFBRSxRQUFRO2lCQUN4QzthQUNEOzs7O1lBOUJpQyxpQkFBaUI7WUFJMUMsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0QiwwQkFBMEI7Ozs7SUEyQmxDLG1EQUF5Qjs7SUFFekIsbURBQXlCOztJQUV6QixtREFBeUI7Ozs7O0lBR3hCLHFEQUFxRDs7Ozs7SUFDckQsMkRBQWlFOzs7OztJQUNqRSwwREFBK0Q7Ozs7O0lBQy9ELDhEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNvbnRhaW5lci1sYXlvdXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcFwiPlxuXHRcdFx0PGd1aS1saXN0LW1vZGUtc2VsZWN0ICpuZ0lmPVwic2VsZWN0b3JFbmFibGVkXCI+PC9ndWktbGlzdC1tb2RlLXNlbGVjdD5cblxuXHRcdFx0PGd1aS1wYWdpbmcgW21pbmltYWxdPVwidHJ1ZVwiIFtwb3NpdGlvbl09XCIwXCI+PC9ndWktcGFnaW5nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1jb250YWluZXItc291cmNlICpuZ0lmPVwibGlzdE1vZGVFbmFibGVkXCI+PC9ndWktY29udGFpbmVyLXNvdXJjZT5cblxuXHRcdDxndWktbGlzdC1jb250YWluZXItY2FyZCAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiPjwvZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQ+XG5cblx0XHQ8Z3VpLXBhZ2luZyBbcG9zaXRpb25dPVwiMVwiPjwvZ3VpLXBhZ2luZz5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNvbnRhaW5lci1sYXlvdXRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckxheW91dENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRsaXN0TW9kZUVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y2FyZE1vZGVFbmFibGVkOiBib29sZWFuO1xuXG5cdHNlbGVjdG9yRW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdFx0XHR0aGlzLmNhcmRNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RvckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=