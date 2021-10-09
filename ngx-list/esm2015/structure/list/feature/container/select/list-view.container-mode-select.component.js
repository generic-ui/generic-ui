/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewModeArchive } from '../../../core/api/mode/list-view.mode.archive';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../../core/api/list-view.warehouse';
export class ListViewContainerModeSelectComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewWarehouse
     * @param {?} listViewModeRepository
     */
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse, listViewModeRepository) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
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
        this.hermesSubscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (/**
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
        this.listViewModeRepository.next(this.listViewReadModelRootId.toAggregateId(), selectedMode);
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
            default:
                break;
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
    { type: ListViewWarehouse },
    { type: ListViewModeArchive }
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
    ListViewContainerModeSelectComponent.prototype.listViewWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVMxRSxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsY0FBYzs7Ozs7Ozs7SUFXdkUsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsdUJBQWdELEVBQ2hELGlCQUFvQyxFQUNwQyxzQkFBMkM7UUFDOUQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFxQjtRQWIvRCxZQUFPLEdBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2hELEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFDO2FBQ3ZDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDO2FBQ3ZDLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7SUFVYixDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQzNFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQXFCOztjQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlGLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLEtBQTRCO1FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxJQUFZO1FBRWxDLFFBQVEsSUFBSSxFQUFFO1lBQ2IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRTFCO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7OztZQTVERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsOEpBQStEO2dCQUMvRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFoQmlDLGlCQUFpQjtZQUFhLFVBQVU7WUFPakUsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUZqQixtQkFBbUI7Ozs7SUFhM0IsdURBS2E7O0lBRWIsaUVBQW1DOzs7OztJQUV2QixpRUFBcUQ7Ozs7O0lBRTlELHVFQUFpRTs7Ozs7SUFDakUsaUVBQXFEOzs7OztJQUNyRCxzRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvbGlzdC12aWV3LndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LW1vZGUtc2VsZWN0XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKHZhbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdXYXJlaG91c2U6IExpc3RWaWV3V2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Vmlld1dhcmVob3VzZS5vbk1vZGUodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gdGhpcy50b0d1aVNlbGVjdE9wdGlvbihtb2RlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2hhbmdlQ29udGFpbmVyTW9kZShtb2RlOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZE1vZGUgPSB0aGlzLnRvTGlzdFZpZXdNb2RlKG1vZGUudmFsdWUpO1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5uZXh0KHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpLCBzZWxlY3RlZE1vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0d1aVNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nIHwgTGlzdFZpZXdNb2RlKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyB2YWx1ZSwgbmFtZTogdmFsdWUgfTtcblx0fVxuXG5cdHByaXZhdGUgdG9MaXN0Vmlld01vZGUobW9kZTogc3RyaW5nKTogTGlzdFZpZXdNb2RlIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSAnTGlzdCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblxuXHRcdFx0Y2FzZSAnQ2FyZCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuQ0FSRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3QtbW9kZS1zZWxlY3QnO1xuXHR9XG59XG4iXX0=