/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../core/api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
var ListViewContainerModeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerModeSelectComponent, _super);
    function ListViewContainerModeSelectComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
        function (val) { return !Number.isInteger(val); }));
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
        this.listViewModeRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listContainerMode = mode;
            _this.changeDetectorRef.detectChanges();
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
        this.listViewModeRepository.setMode(mode, this.listViewReadModelRootId.toAggregateId());
    };
    ListViewContainerModeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-mode-select',
                    template: "\n\n\t\t<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t\t\t[options]=\"options\"\n\t\t\t\t\t[selected]=\"listContainerMode\">\n\t\t</gui-select>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-mode-select]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewContainerModeSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUc5RjtJQWdCMEQsZ0VBQWM7SUFRdkUsOENBQTZCLGlCQUFvQyxFQUM3Qyx1QkFBZ0QsRUFDaEQsc0JBQThDO1FBRmxFLFlBR0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFKNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFSbEUsYUFBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzlCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsRUFBQzthQUN2QyxNQUFNOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQzs7SUFRN0MsQ0FBQzs7OztJQUVELHVEQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBa0I7WUFDN0IsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtFQUFtQjs7OztJQUFuQixVQUFvQixJQUFrQjtRQUNyQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOztnQkE1Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSw0S0FPVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7OztnQkF0QmlDLGlCQUFpQjtnQkFJMUMsdUJBQXVCO2dCQUR2QixzQkFBc0I7O0lBaUQvQiwyQ0FBQztDQUFBLEFBN0NELENBZ0IwRCxjQUFjLEdBNkJ2RTtTQTdCWSxvQ0FBb0M7OztJQUVoRCx1REFFNkM7O0lBRTdDLGlFQUFnQzs7Ozs7SUFFcEIsaUVBQXFEOzs7OztJQUM5RCx1RUFBaUU7Ozs7O0lBQ2pFLHNFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LW1vZGUtc2VsZWN0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZUNvbnRhaW5lck1vZGUoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cImxpc3RDb250YWluZXJNb2RlXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC1tb2RlLXNlbGVjdF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdG9wdGlvbnMgPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gbW9kZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZUNvbnRhaW5lck1vZGUobW9kZTogTGlzdFZpZXdNb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5LnNldE1vZGUobW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=