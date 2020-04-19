/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogService } from '../common/dialog.service';
var FabricDrawerService = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDrawerService, _super);
    function FabricDrawerService(componentFactoryResolver, applicationRef, injector, document) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.applicationRef = applicationRef;
        _this.injector = injector;
        _this.document = document;
        _this.drawerRef = null;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricDrawerService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeDrawer();
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    FabricDrawerService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.drawerRef) {
            /** @type {?} */
            var theme = Theme.FABRIC;
            /** @type {?} */
            var parentInjector = this.injector;
            /** @type {?} */
            var closeOnClickOutside = false;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.closeOnClickOutside) {
                closeOnClickOutside = config.closeOnClickOutside;
            }
            /** @type {?} */
            var injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(element, component, injector, closeOnClickOutside);
            this.closeOnEscKey();
        }
    };
    /**
     * @return {?}
     */
    FabricDrawerService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeDrawer();
    };
    /**
     * @private
     * @return {?}
     */
    FabricDrawerService.prototype.closeOnEscKey = /**
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
        function (key) { return key.code === 'Escape'; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} component
     * @param {?} injector
     * @param {?} closeOnClickOutside
     * @return {?}
     */
    FabricDrawerService.prototype.createAndAppend = /**
     * @private
     * @param {?} element
     * @param {?} component
     * @param {?} injector
     * @param {?} closeOnClickOutside
     * @return {?}
     */
    function (element, component, injector, closeOnClickOutside) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDrawerComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.instance.closeOnClickOutside = closeOnClickOutside;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDrawerElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        element.nativeElement.appendChild(domDrawerElement);
        this.drawerRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDrawerService.prototype.removeDrawer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.drawerRef) {
            this.applicationRef.detachView(this.drawerRef.hostView);
            this.drawerRef.destroy();
            this.drawerRef = null;
        }
    };
    FabricDrawerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDrawerService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricDrawerService;
}(DialogService));
export { FabricDrawerService };
if (false) {
    /** @type {?} */
    FabricDrawerService.prototype.drawerRef;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUl6RDtJQUN5QywrQ0FBYTtJQUlyRCw2QkFBb0Isd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUgxQyxZQUlDLGlCQUFPLFNBQ1A7UUFMbUIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGNBQVEsR0FBUixRQUFRLENBQUs7UUFMMUMsZUFBUyxHQUE4QyxJQUFJLENBQUM7O0lBTzVELENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVELGtDQUFJ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QUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7O2dCQWxHRCxVQUFVOzs7O2dCQXJCVix3QkFBd0I7Z0JBRHhCLGNBQWM7Z0JBT2QsUUFBUTtnREF1QkosTUFBTSxTQUFDLFFBQVE7O0lBNEZwQiwwQkFBQztDQUFBLEFBcEdELENBQ3lDLGFBQWEsR0FtR3JEO1NBbkdZLG1CQUFtQjs7O0lBRS9CLHdDQUE0RDs7Ozs7SUFFaEQsdURBQTBEOzs7OztJQUNuRSw2Q0FBc0M7Ozs7O0lBQ3RDLHVDQUEwQjs7Ozs7SUFDMUIsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZmFicmljLm5lc3RlZC1kaWFsb2cuY29tcG9uZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRHJhd2VyU2VydmljZSBleHRlbmRzIERpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGRyYXdlclJlZjogQ29tcG9uZW50UmVmPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4gPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlRHJhd2VyKCk7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sXG5cdFx0IGNvbmZpZz86IHsgaW5qZWN0b3I/OiBJbmplY3RvciwgdGhlbWU/OiBUaGVtZSwgY2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW4gfSk6IHZvaWQge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmRyYXdlclJlZikge1xuXG5cdFx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0Y2xvc2VPbkNsaWNrT3V0c2lkZSA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmNsb3NlT25DbGlja091dHNpZGUpIHtcblx0XHRcdFx0Y2xvc2VPbkNsaWNrT3V0c2lkZSA9IGNvbmZpZy5jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGVsZW1lbnQsIGNvbXBvbmVudCwgaW5qZWN0b3IsIGNsb3NlT25DbGlja091dHNpZGUpO1xuXHRcdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVEcmF3ZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmRvY3VtZW50LCAna2V5dXAnKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFuZEFwcGVuZChlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50Pixcblx0XHRcdFx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRcdFx0XHRjbG9zZU9uQ2xpY2tPdXRzaWRlOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljRHJhd2VyQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmNsb3NlT25DbGlja091dHNpZGUgPSBjbG9zZU9uQ2xpY2tPdXRzaWRlO1xuXHRcdGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbURyYXdlckVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdGVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChkb21EcmF3ZXJFbGVtZW50KTtcblxuXHRcdHRoaXMuZHJhd2VyUmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVEcmF3ZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZHJhd2VyUmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5kcmF3ZXJSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5kcmF3ZXJSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5kcmF3ZXJSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=