/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../core/api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHekY7SUFNMEQsZ0VBQWM7SUFXdkUsOENBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLHVCQUFnRCxFQUNoRCxzQkFBOEM7UUFIbEUsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFabEUsYUFBTyxHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNoRCxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLEVBQUM7YUFDdkMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO2FBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDUixPQUFPLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQzs7SUFTYixDQUFDOzs7O0lBRUQsdURBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFOQSxJQUFJLENBQUMsa0JBQWtCLENBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQzVFLFVBQUMsSUFBa0I7WUFDbEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsa0VBQW1COzs7O0lBQW5CLFVBQW9CLElBQXFCOztZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGdFQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBNEI7UUFDckQsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyw2REFBYzs7Ozs7SUFBdEIsVUFBdUIsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNGLENBQUM7Ozs7O0lBRVMsOERBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dCQXhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsOEpBQStEO29CQUMvRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWZpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFPakUsdUJBQXVCO2dCQUR2QixzQkFBc0I7O0lBNkQvQiwyQ0FBQztDQUFBLEFBekRELENBTTBELGNBQWMsR0FtRHZFO1NBbkRZLG9DQUFvQzs7O0lBRWhELHVEQUthOztJQUViLGlFQUFtQzs7Ozs7SUFFdkIsaUVBQXFEOzs7OztJQUU5RCx1RUFBaUU7Ozs7O0lBQ2pFLHNFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktbGlzdC1tb2RlLXNlbGVjdF0nLFxuXHR0ZW1wbGF0ZVVybDogYC4vbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuaHRtbGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoTGlzdFZpZXdNb2RlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKGtleTogc3RyaW5nKSA9PiBMaXN0Vmlld01vZGVba2V5XSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50b0d1aVNlbGVjdE9wdGlvbih2YWwpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdGxpc3RDb250YWluZXJNb2RlOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kUmVuZGVyKFxuXHRcdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKSxcblx0XHRcdChtb2RlOiBMaXN0Vmlld01vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5saXN0Q29udGFpbmVyTW9kZSA9IHRoaXMudG9HdWlTZWxlY3RPcHRpb24obW9kZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGNoYW5nZUNvbnRhaW5lck1vZGUobW9kZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb2RlID0gdGhpcy50b0xpc3RWaWV3TW9kZShtb2RlLnZhbHVlKTtcblx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkuc2V0TW9kZShzZWxlY3RlZE1vZGUsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdG9HdWlTZWxlY3RPcHRpb24odmFsdWU6IHN0cmluZyB8IExpc3RWaWV3TW9kZSk6IEd1aVNlbGVjdE9wdGlvbiB7XG5cdFx0cmV0dXJuIHsgdmFsdWUsIG5hbWU6IHZhbHVlIH07XG5cdH1cblxuXHRwcml2YXRlIHRvTGlzdFZpZXdNb2RlKG1vZGU6IHN0cmluZyk6IExpc3RWaWV3TW9kZSB7XG5cblx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdGNhc2UgJ0xpc3QnOlxuXHRcdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cblx0XHRcdGNhc2UgJ0NhcmQnOlxuXHRcdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3QtbW9kZS1zZWxlY3QnO1xuXHR9XG59XG4iXX0=