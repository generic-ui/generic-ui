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
            default:
                break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHekY7SUFNMEQsZ0VBQWM7SUFXdkUsOENBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLHVCQUFnRCxFQUNoRCxzQkFBOEM7UUFIbEUsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFabEUsYUFBTyxHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNoRCxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLEVBQUM7YUFDdkMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO2FBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDUixPQUFPLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQzs7SUFTYixDQUFDOzs7O0lBRUQsdURBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFOQSxJQUFJLENBQUMsa0JBQWtCLENBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1FBQzVFLFVBQUMsSUFBa0I7WUFDbEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsa0VBQW1COzs7O0lBQW5CLFVBQW9CLElBQXFCOztZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGdFQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBNEI7UUFDckQsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyw2REFBYzs7Ozs7SUFBdEIsVUFBdUIsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUUxQjtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7OztJQUVTLDhEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkEzREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDhKQUErRDtvQkFDL0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFmaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBT2pFLHVCQUF1QjtnQkFEdkIsc0JBQXNCOztJQWdFL0IsMkNBQUM7Q0FBQSxBQTVERCxDQU0wRCxjQUFjLEdBc0R2RTtTQXREWSxvQ0FBb0M7OztJQUVoRCx1REFLYTs7SUFFYixpRUFBbUM7Ozs7O0lBRXZCLGlFQUFxRDs7Ozs7SUFFOUQsdUVBQWlFOzs7OztJQUNqRSxzRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3QtbW9kZS1zZWxlY3RdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKExpc3RWaWV3TW9kZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKChrZXk6IHN0cmluZykgPT4gTGlzdFZpZXdNb2RlW2tleV0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudG9HdWlTZWxlY3RPcHRpb24odmFsKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRsaXN0Q29udGFpbmVyTW9kZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZFJlbmRlcihcblx0XHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdENvbnRhaW5lck1vZGUgPSB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKG1vZGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRjaGFuZ2VDb250YWluZXJNb2RlKG1vZGU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkTW9kZSA9IHRoaXMudG9MaXN0Vmlld01vZGUobW9kZS52YWx1ZSk7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5LnNldE1vZGUoc2VsZWN0ZWRNb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIHRvR3VpU2VsZWN0T3B0aW9uKHZhbHVlOiBzdHJpbmcgfCBMaXN0Vmlld01vZGUpOiBHdWlTZWxlY3RPcHRpb24ge1xuXHRcdHJldHVybiB7IHZhbHVlLCBuYW1lOiB2YWx1ZSB9O1xuXHR9XG5cblx0cHJpdmF0ZSB0b0xpc3RWaWV3TW9kZShtb2RlOiBzdHJpbmcpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRjYXNlICdMaXN0Jzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXG5cdFx0XHRjYXNlICdDYXJkJzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1tb2RlLXNlbGVjdCc7XG5cdH1cbn1cbiJdfQ==