/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../core/api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
export class ListViewContainerModeSelectComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     */
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewModeRepository) {
        super(changeDetectorRef, elementRef);
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
        (val) => !Number.isInteger(val)))
            .map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            return this.toGuiSelectOption(val);
        }));
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
            this.listContainerMode = this.toGuiSelectOption(mode);
        }));
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    changeContainerMode(mode) {
        /** @type {?} */
        const selectedMode = this.toListViewMode(mode.value);
        this.listViewModeRepository.setMode(selectedMode, this.listViewReadModelRootId.toAggregateId());
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    toGuiSelectOption(value) {
        return { value, name: value };
    }
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    toListViewMode(mode) {
        switch (mode) {
            case 'List':
                return ListViewMode.LIST;
            case 'Card':
                return ListViewMode.CARD;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-list-mode-select';
    }
}
ListViewContainerModeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-list-mode-select]',
                template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ListViewContainerModeSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQVM5RixNQUFNLE9BQU8sb0NBQXFDLFNBQVEsY0FBYzs7Ozs7OztJQVd2RSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCx1QkFBZ0QsRUFDaEQsc0JBQThDO1FBQ2pFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUpULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBWmxFLFlBQU8sR0FBMkIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDaEQsR0FBRzs7OztRQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDdkMsTUFBTTs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDdkMsR0FBRzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztJQVNiLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGtCQUFrQixDQUN0QixJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7OztRQUM1RSxDQUFDLElBQWtCLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxJQUFxQjs7Y0FDbEMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxLQUE0QjtRQUNyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNGLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7OztZQXhERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsOEpBQStEO2dCQUMvRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFmaUMsaUJBQWlCO1lBQWEsVUFBVTtZQU9qRSx1QkFBdUI7WUFEdkIsc0JBQXNCOzs7O0lBWTlCLHVEQUthOztJQUViLGlFQUFtQzs7Ozs7SUFFdkIsaUVBQXFEOzs7OztJQUU5RCx1RUFBaUU7Ozs7O0lBQ2pFLHNFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LW1vZGUtc2VsZWN0XScsXG5cdHRlbXBsYXRlVXJsOiBgLi9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC5odG1sYCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKHZhbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRSZW5kZXIoXG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gdGhpcy50b0d1aVNlbGVjdE9wdGlvbihtb2RlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2hhbmdlQ29udGFpbmVyTW9kZShtb2RlOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZE1vZGUgPSB0aGlzLnRvTGlzdFZpZXdNb2RlKG1vZGUudmFsdWUpO1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5zZXRNb2RlKHNlbGVjdGVkTW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0d1aVNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nIHwgTGlzdFZpZXdNb2RlKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyB2YWx1ZSwgbmFtZTogdmFsdWUgfTtcblx0fVxuXG5cdHByaXZhdGUgdG9MaXN0Vmlld01vZGUobW9kZTogc3RyaW5nKTogTGlzdFZpZXdNb2RlIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSAnTGlzdCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblxuXHRcdFx0Y2FzZSAnQ2FyZCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuQ0FSRDtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1tb2RlLXNlbGVjdCc7XG5cdH1cbn1cbiJdfQ==