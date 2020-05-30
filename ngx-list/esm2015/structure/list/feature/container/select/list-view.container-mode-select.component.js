/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../domain-api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
export class ListViewContainerModeSelectComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     */
    constructor(changeDetectorRef, listViewReadModelRootId, listViewModeRepository) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewModeRepository = listViewModeRepository;
        this.options = Object.keys(ListViewMode)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => ListViewMode[key]))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
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
            this.listContainerMode = mode;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    changeContainerMode(mode) {
        this.listViewModeRepository.setMode(mode, this.listViewReadModelRootId.toAggregateId());
    }
}
ListViewContainerModeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-mode-select',
                template: `

		<gui-select (optionChanged)="changeContainerMode($event)"
					[options]="options"
					[selected]="listContainerMode">
		</gui-select>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-mode-select]': `"true"`
                }
            }] }
];
/** @nocollapse */
ListViewContainerModeSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ListViewReadModelRootId },
    { type: ListViewModeRepository }
];
if (false) {
    /** @type {?} */
    ListViewContainerModeSelectComponent.prototype.options;
    /** @type {?} */
    ListViewContainerModeSelectComponent.prototype.listContainerMode;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBbUJoRyxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsY0FBYzs7Ozs7O0lBUXZFLFlBQTZCLGlCQUFvQyxFQUM3Qyx1QkFBZ0QsRUFDaEQsc0JBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBSG9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBUmxFLFlBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUM5QixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQzthQUN2QyxNQUFNOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBUTdDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxJQUFrQjtRQUNyQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7WUE1Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7OztFQU9UO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNMLDhCQUE4QixFQUFFLFFBQVE7aUJBQ3hDO2FBQ0Q7Ozs7WUF0QmlDLGlCQUFpQjtZQUkxQyx1QkFBdUI7WUFEdkIsc0JBQXNCOzs7O0lBc0I5Qix1REFFNkM7O0lBRTdDLGlFQUFnQzs7Ozs7SUFFcEIsaUVBQXFEOzs7OztJQUM5RCx1RUFBaUU7Ozs7O0lBQ2pFLHNFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtbW9kZS1zZWxlY3QnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlQ29udGFpbmVyTW9kZSgkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJvcHRpb25zXCJcblx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwibGlzdENvbnRhaW5lck1vZGVcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LW1vZGUtc2VsZWN0XSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0b3B0aW9ucyA9IE9iamVjdC5rZXlzKExpc3RWaWV3TW9kZSlcblx0XHRcdFx0XHQubWFwKChrZXk6IHN0cmluZykgPT4gTGlzdFZpZXdNb2RlW2tleV0pXG5cdFx0XHRcdFx0LmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHRsaXN0Q29udGFpbmVyTW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gbW9kZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZUNvbnRhaW5lck1vZGUobW9kZTogTGlzdFZpZXdNb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5LnNldE1vZGUobW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=