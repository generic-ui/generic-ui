/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
var FabricInlineDialogService = /** @class */ (function () {
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
        this.inlineDialogRef = null;
        this.opened = false;
        this.opened$ = new BehaviorSubject(false);
        this.unsub$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
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
            var placement = FabricPlacement.BOTTOM;
            /** @type {?} */
            var offset = 0;
            /** @type {?} */
            var theme = Theme.FABRIC;
            /** @type {?} */
            var customClass = void 0;
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
            if (config && config.customClass) {
                customClass = config.customClass;
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
            this.appendInlineDialogToElement(component, injector, customClass);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
            this.closeOnEscKey();
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
        this.unsub$.next();
        this.unsub$.complete();
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
     * @param {?} customClass
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @param {?} customClass
     * @return {?}
     */
    function (component, injector, customClass) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        componentRef.instance.customClass = customClass;
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
    /**
     * @private
     * @return {?}
     */
    FabricInlineDialogService.prototype.closeOnEscKey = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key.code === 'Escape'; })), takeUntil(this.unsub$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
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
}());
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
    FabricInlineDialogService.prototype.unsub$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzVFO0lBVUMsbUNBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFYM0Qsb0JBQWUsR0FBOEMsSUFBSSxDQUFDO1FBRWxFLFdBQU0s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LFFBQVEsRUFBckIsQ0FBcUIsRUFBQyxFQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUN0QjthQUNBLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBM0lELFVBQVU7Ozs7Z0JBdEJWLHdCQUF3QjtnQkFEeEIsY0FBYztnQkFPZCxRQUFRO2dEQTZCSixNQUFNLFNBQUMsUUFBUTtnQkF0QlgsMkJBQTJCOztJQXFKcEMsZ0NBQUM7Q0FBQSxBQTVJRCxJQTRJQztTQTNJWSx5QkFBeUI7Ozs7OztJQUVyQyxvREFBMEU7Ozs7O0lBRTFFLDJDQUF1Qjs7Ozs7SUFFdkIsNENBQTZDOzs7OztJQUM3QywyQ0FBd0M7Ozs7O0lBRTVCLDZEQUEwRDs7Ozs7SUFDbkUsbURBQXNDOzs7OztJQUN0Qyw2Q0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLXBsYWNlbWVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nUmVmOiBDb21wb25lbnRSZWY8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiA9IG51bGw7XG5cblx0cHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIG9wZW5lZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlKSB7XG5cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlSW5saW5lRGlhbG9nKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LFxuXHRcdCBjb25maWc/OiB7XG5cdFx0XHQgaW5qZWN0b3I/OiBJbmplY3Rvcixcblx0XHRcdCBwbGFjZW1lbnQ/OiBGYWJyaWNQbGFjZW1lbnQsXG5cdFx0XHQgb2Zmc2V0PzogbnVtYmVyLFxuXHRcdFx0IHRoZW1lPzogVGhlbWUsXG5cdFx0XHQgY3VzdG9tQ2xhc3M/OiBzdHJpbmdcblx0XHQgfSk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cblx0XHRcdGxldCBwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdHBsYWNlbWVudCA9IEZhYnJpY1BsYWNlbWVudC5CT1RUT00sXG5cdFx0XHRcdG9mZnNldCA9IDAsXG5cdFx0XHRcdHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRjdXN0b21DbGFzcztcblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnBsYWNlbWVudCkge1xuXHRcdFx0XHRwbGFjZW1lbnQgPSBjb25maWcucGxhY2VtZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5vZmZzZXQpIHtcblx0XHRcdFx0b2Zmc2V0ID0gY29uZmlnLm9mZnNldDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmN1c3RvbUNsYXNzKSB7XG5cdFx0XHRcdGN1c3RvbUNsYXNzID0gY29uZmlnLmN1c3RvbUNsYXNzO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc2V0T3BlbmVkKHRydWUpO1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3RvciwgY3VzdG9tQ2xhc3MpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UuZ2V0SW5saW5lRGlhbG9nQ29yZHMoZWxlbWVudCwgcGxhY2VtZW50LCBvZmZzZXQpO1xuXHRcdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHRcdHRoaXMuc2V0T3BlbmVkKGZhbHNlKTtcblx0fVxuXG5cdGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcblx0fVxuXG5cdG9uT3BlbmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yLCBjdXN0b21DbGFzczogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbURpYWxvZ0VsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21EaWFsb2dFbGVtZW50KTtcblxuXHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVJbmxpbmVEaWFsb2coKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5pbmxpbmVEaWFsb2dSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0T3BlbmVkKG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXHRcdHRoaXMub3BlbmVkJC5uZXh0KHRoaXMub3BlbmVkKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmRvY3VtZW50LCAna2V5dXAnKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cbn1cbiJdfQ==