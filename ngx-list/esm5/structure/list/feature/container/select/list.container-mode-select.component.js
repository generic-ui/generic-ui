/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../domain-api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
var ListContainerModeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListContainerModeSelectComponent, _super);
    function ListContainerModeSelectComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository) {
        var _this = _super.call(this) || this;
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
    ListContainerModeSelectComponent.prototype.ngOnInit = /**
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
    ListContainerModeSelectComponent.prototype.changeContainerMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.listViewModeRepository.setMode(mode, this.listViewReadModelRootId.toAggregateId());
    };
    ListContainerModeSelectComponent.decorators = [
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
    ListContainerModeSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ListViewReadModelRootId },
        { type: ListViewModeRepository }
    ]; };
    return ListContainerModeSelectComponent;
}(SmartComponent));
export { ListContainerModeSelectComponent };
if (false) {
    /** @type {?} */
    ListContainerModeSelectComponent.prototype.options;
    /** @type {?} */
    ListContainerModeSelectComponent.prototype.listContainerMode;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NvbnRhaW5lci9zZWxlY3QvbGlzdC5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBR2hHO0lBZ0JzRCw0REFBYztJQVFuRSwwQ0FBNkIsaUJBQW9DLEVBQzdDLHVCQUFnRCxFQUNoRCxzQkFBOEM7UUFGbEUsWUFHQyxpQkFBTyxTQUNQO1FBSjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBUmxFLGFBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUM5QixHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLEVBQUM7YUFDdkMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUM7O0lBUTdDLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRBLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQWtCO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw4REFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBa0I7UUFDckMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Z0JBNUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsNEtBT1Q7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0wsOEJBQThCLEVBQUUsVUFBUTtxQkFDeEM7aUJBQ0Q7Ozs7Z0JBdEJpQyxpQkFBaUI7Z0JBSTFDLHVCQUF1QjtnQkFEdkIsc0JBQXNCOztJQWlEL0IsdUNBQUM7Q0FBQSxBQTdDRCxDQWdCc0QsY0FBYyxHQTZCbkU7U0E3QlksZ0NBQWdDOzs7SUFFNUMsbURBRTZDOztJQUU3Qyw2REFBZ0M7Ozs7O0lBRXBCLDZEQUFxRDs7Ozs7SUFDOUQsbUVBQWlFOzs7OztJQUNqRSxrRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LW1vZGUtc2VsZWN0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZUNvbnRhaW5lck1vZGUoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cImxpc3RDb250YWluZXJNb2RlXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC1tb2RlLXNlbGVjdF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0b3B0aW9ucyA9IE9iamVjdC5rZXlzKExpc3RWaWV3TW9kZSlcblx0XHRcdFx0XHQubWFwKChrZXk6IHN0cmluZykgPT4gTGlzdFZpZXdNb2RlW2tleV0pXG5cdFx0XHRcdFx0LmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHRsaXN0Q29udGFpbmVyTW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVSZXBvc2l0b3J5OiBMaXN0Vmlld01vZGVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gbW9kZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZUNvbnRhaW5lck1vZGUobW9kZTogTGlzdFZpZXdNb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5LnNldE1vZGUobW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=