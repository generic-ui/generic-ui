/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricSelectOptionsComponent } from './options/select-options.component';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { DOCUMENT } from '@angular/common';
var SelectOptionModalService = /** @class */ (function (_super) {
    tslib_1.__extends(SelectOptionModalService, _super);
    function SelectOptionModalService(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
        var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        _this.selectOptionsGeometryService = selectOptionsGeometryService;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectOptionModalService.prototype.getComponent = /**
     * @return {?}
     */
    function () {
        return FabricSelectOptionsComponent;
    };
    /**
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    SelectOptionModalService.prototype.open = /**
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    function (options, width) {
        this.createAndAppend();
        this.getComponentRef().instance.options = options;
        this.getComponentRef().instance.width = width;
        this.getComponentRef().instance.detectChanges();
        this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
        this.getComponentRef().instance.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectOptionModalService.prototype.closeOptions = /**
     * @return {?}
     */
    function () {
        this.removeComponent();
    };
    SelectOptionModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectOptionModalService.ctorParameters = function () { return [
        { type: SelectOptionsGeometryService },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return SelectOptionModalService;
}(FabricModal));
export { SelectOptionModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOptionModalService.prototype.selectOptionsGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9zZWxlY3Qvc2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDO0lBQzhDLG9EQUF5QztJQUV0RixrQ0FBNkIsNEJBQTBELEVBQ3BGLHdCQUFrRCxFQUNsRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFKbEMsWUFLQyxrQkFBTSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUNuRTtRQU40QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQU12RixDQUFDOzs7O0lBRUQsK0NBQVk7OztJQUFaO1FBQ0MsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCx1Q0FBSTs7Ozs7SUFBSixVQUFLLE9BQStCLEVBQUUsS0FBYTtRQUNsRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELCtDQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkExQkQsVUFBVTs7OztnQkFKRiw0QkFBNEI7Z0JBSFosd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUFnRCxRQUFRO2dEQWMxRSxNQUFNLFNBQUMsUUFBUTs7SUFvQnBCLCtCQUFDO0NBQUEsQUEzQkQsQ0FDOEMsV0FBVyxHQTBCeEQ7U0ExQlksd0JBQXdCOzs7Ozs7SUFFeEIsZ0VBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4ob3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKCk7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLnNldEdlb21ldHJ5KHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpKTtcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlT3B0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHR9XG59XG4iXX0=