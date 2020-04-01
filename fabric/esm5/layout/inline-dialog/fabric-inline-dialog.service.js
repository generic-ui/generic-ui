/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogService } from '../../common/dialog/dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
var FabricInlineDialogService = /** @class */ (function (_super) {
    tslib_1.__extends(FabricInlineDialogService, _super);
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.applicationRef = applicationRef;
        _this.injector = injector;
        _this.document = document;
        _this.inlineDialogGeometryService = inlineDialogGeometryService;
        _this.inlineDialogRef = null;
        _this.opened = false;
        _this.opened$ = new BehaviorSubject(false);
        return _this;
    }
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            /** @type {?} */
            var parentInjector = this.injector;
            /** @type {?} */
            var placement = InlineDialogPlacement.Top;
            /** @type {?} */
            var offset = 0;
            /** @type {?} */
            var theme = Theme.FABRIC;
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.placement) {
                placement = config.placement;
            }
            if (config && config.offset) {
                offset = config.offset;
            }
            if (config && config.theme) {
                theme = config.theme;
            }
            /** @type {?} */
            var injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.setOpened(true);
            this.appendInlineDialogToElement(component, injector);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
        this.setOpened(false);
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.opened;
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.onOpened = /**
     * @return {?}
     */
    function () {
        return this.opened$.asObservable();
    };
    /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricInlineDialogService.prototype.removeInlineDialog = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    };
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    FabricInlineDialogService.prototype.setOpened = /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
    };
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: InlineDialogGeometryService }
    ]; };
    return FabricInlineDialogService;
}(DialogService));
export { FabricInlineDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened$;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUl4QixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFHUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHdEQ7SUFDK0MscURBQWE7SUFRM0QsbUNBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSm5FLFlBS0MsaUJBQU8sU0FDUDtRQU5tQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsY0FBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBVjNELHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUx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QUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sc0RBQWtCOzs7O0lBQTFCO1FBQ0MsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNGLENBQUM7Ozs7OztJQUVPLDZDQUFTOzs7OztJQUFqQixVQUFrQixNQUFlO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkEvR0QsVUFBVTs7OztnQkFyQlYsd0JBQXdCO2dCQUR4QixjQUFjO2dCQU9kLFFBQVE7Z0RBMkJKLE1BQU0sU0FBQyxRQUFRO2dCQWxCWCwyQkFBMkI7O0lBdUhwQyxnQ0FBQztDQUFBLEFBakhELENBQytDLGFBQWEsR0FnSDNEO1NBaEhZLHlCQUF5Qjs7Ozs7O0lBRXJDLG9EQUFrRDs7Ozs7SUFFbEQsMkNBQXVCOzs7OztJQUV2Qiw0Q0FBNkM7Ozs7O0lBRWpDLDZEQUEwRDs7Ozs7SUFDbkUsbURBQXNDOzs7OztJQUN0Qyw2Q0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ1JlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuXG5cdHByaXZhdGUgb3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8YW55PiwgY29uZmlnPzogeyBpbmplY3Rvcj86IEluamVjdG9yLCBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlciwgdGhlbWU/OiBUaGVtZSB9KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblxuXHRcdFx0bGV0IHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0cGxhY2VtZW50ID0gSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcCxcblx0XHRcdFx0b2Zmc2V0ID0gMCxcblx0XHRcdFx0dGhlbWUgPSBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wbGFjZW1lbnQpIHtcblx0XHRcdFx0cGxhY2VtZW50ID0gY29uZmlnLnBsYWNlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcub2Zmc2V0KSB7XG5cdFx0XHRcdG9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc2V0T3BlbmVkKHRydWUpO1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5nZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50LCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHRcdHRoaXMuc2V0T3BlbmVkKGZhbHNlKTtcblx0fVxuXG5cdGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcblx0fVxuXG5cdG9uT3BlbmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlSW5saW5lRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuaW5saW5lRGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldE9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblx0XHR0aGlzLm9wZW5lZCQubmV4dCh0aGlzLm9wZW5lZCk7XG5cdH1cblxufVxuIl19