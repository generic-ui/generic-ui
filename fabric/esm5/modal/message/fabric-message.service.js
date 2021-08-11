/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricMessageComponent } from './fabric-message.component';
import { DOCUMENT } from '@angular/common';
var FabricMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(FabricMessageService, _super);
    function FabricMessageService(componentFactoryResolver, applicationRef, injector, document) {
        return _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
    }
    /**
     * @return {?}
     */
    FabricMessageService.prototype.getComponent = /**
     * @return {?}
     */
    function () {
        return FabricMessageComponent;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    FabricMessageService.prototype.open = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.createAndAppend();
        this.getComponentRef().instance.text = text;
        this.getComponentRef().instance.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricMessageService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeComponent();
    };
    FabricMessageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricMessageService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricMessageService;
}(FabricModal));
export { FabricMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL21lc3NhZ2UvZmFicmljLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQUMwQyxnREFBbUM7SUFFNUUsOEJBQVksd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtlQUNqQyxrQkFBTSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELG1DQUFJOzs7O0lBQUosVUFBSyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQUxjLHdCQUF3QjtnQkFBeEMsY0FBYztnQkFBZ0QsUUFBUTtnREFXMUUsTUFBTSxTQUFDLFFBQVE7O0lBaUJwQiwyQkFBQztDQUFBLEFBdkJELENBQzBDLFdBQVcsR0FzQnBEO1NBdEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljTWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNNZXNzYWdlQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY01lc3NhZ2VDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljTWVzc2FnZUNvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4odGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoKTtcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLnRleHQgPSB0ZXh0O1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxufVxuIl19