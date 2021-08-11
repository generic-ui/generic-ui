/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../core/api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
var ListViewContainerModeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerModeSelectComponent, _super);
    function ListViewContainerModeSelectComponent(changeDetectorRef, elementRef, listViewReadModelRootId, listViewModeRepository) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewModeRepository = listViewModeRepository;
        _this.options = Object.keys(ListViewMode)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ListViewMode[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }))
            .map((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return _this.toGuiSelectOption(val);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeAndRender(this.listViewModeRepository.on(this.listViewReadModelRootId.toAggregateId()), (/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listContainerMode = _this.toGuiSelectOption(mode);
        }));
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.changeContainerMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        /** @type {?} */
        var selectedMode = this.toListViewMode(mode.value);
        this.listViewModeRepository.setMode(selectedMode, this.listViewReadModelRootId.toAggregateId());
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.toGuiSelectOption = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { value: value, name: value };
    };
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.toListViewMode = /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode) {
            case 'List':
                return ListViewMode.LIST;
            case 'Card':
                return ListViewMode.CARD;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-mode-select';
    };
    ListViewContainerModeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-mode-select]',
                    template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewContainerModeSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ListViewReadModelRootId },
        { type: ListViewModeRepository }
    ]; };
    return ListViewContainerModeSelectComponent;
}(SmartComponent));
export { ListViewContainerModeSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHOUY7SUFNMEQsZ0VBQWM7SUFXdkUsOENBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLHVCQUFnRCxFQUNoRCxzQkFBOEM7UUFIbEUsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFabEUsYUFBTyxHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNoRCxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLEVBQUM7YUFDdkMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO2FBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDUixPQUFPLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQzs7SUFTYixDQUFDOzs7O0lBRUQsdURBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFOQSxJQUFJLENBQUMsa0JBQWtCLENBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQzVFLFVBQUMsSUFBa0I7WUFDbEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsa0VBQW1COzs7O0lBQW5CLFVBQW9CLElBQXFCOztZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGdFQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBNEI7UUFDckQsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyw2REFBYzs7Ozs7SUFBdEIsVUFBdUIsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNGLENBQUM7Ozs7O0lBRVMsOERBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dCQXhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsOEpBQStEO29CQUMvRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWZpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFPakUsdUJBQXVCO2dCQUR2QixzQkFBc0I7O0lBNkQvQiwyQ0FBQztDQUFBLEFBekRELENBTTBELGNBQWMsR0FtRHZFO1NBbkRZLG9DQUFvQzs7O0lBRWhELHVEQUthOztJQUViLGlFQUFtQzs7Ozs7SUFFdkIsaUVBQXFEOzs7OztJQUU5RCx1RUFBaUU7Ozs7O0lBQ2pFLHNFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LW1vZGUtc2VsZWN0XScsXG5cdHRlbXBsYXRlVXJsOiBgLi9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC5odG1sYCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKHZhbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRSZW5kZXIoXG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gdGhpcy50b0d1aVNlbGVjdE9wdGlvbihtb2RlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2hhbmdlQ29udGFpbmVyTW9kZShtb2RlOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZE1vZGUgPSB0aGlzLnRvTGlzdFZpZXdNb2RlKG1vZGUudmFsdWUpO1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5zZXRNb2RlKHNlbGVjdGVkTW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0d1aVNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nIHwgTGlzdFZpZXdNb2RlKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyB2YWx1ZSwgbmFtZTogdmFsdWUgfTtcblx0fVxuXG5cdHByaXZhdGUgdG9MaXN0Vmlld01vZGUobW9kZTogc3RyaW5nKTogTGlzdFZpZXdNb2RlIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSAnTGlzdCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblxuXHRcdFx0Y2FzZSAnQ2FyZCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuQ0FSRDtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1tb2RlLXNlbGVjdCc7XG5cdH1cbn1cbiJdfQ==