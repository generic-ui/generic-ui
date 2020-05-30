/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { FabricDialogComponent } from './fabric-dialog.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
var FabricDialogService = /** @class */ (function () {
    function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
        this.unsub$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
    };
    /**
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    FabricDialogService.prototype.open = /**
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (component, config) {
        if (!this.dialogRef) {
            /** @type {?} */
            var theme = Theme.FABRIC;
            /** @type {?} */
            var parentInjector = this.injector;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            /** @type {?} */
            var injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(component, injector);
            this.closeOnEscKey();
        }
    };
    /**
     * @return {?}
     */
    FabricDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
        this.unsub$.next();
        this.unsub$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    FabricDialogService.prototype.closeOnEscKey = /**
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
    /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    FabricDialogService.prototype.createAndAppend = /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.dialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDialogService.prototype.removeDialog = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dialogRef) {
            this.applicationRef.detachView(this.dialogRef.hostView);
            this.dialogRef.destroy();
            this.dialogRef = null;
        }
    };
    FabricDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricDialogService;
}());
export { FabricDialogService };
if (false) {
    /** @type {?} */
    FabricDialogService.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.unsub$;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBaUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQ7SUFPQyw2QkFBb0Isd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUh0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVAxQyxjQUFTLEdBQThDLElBQUksQ0FBQztRQUUzQyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU14QyxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELGtDQUFJOzs7OztJQUFKLFVBQUssU0FBNEMsRUFBRSxNQUErQztRQUVqRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBRWhCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTs7Z0JBQ3ZCLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUUvQixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUMzQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNyQjtZQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pDOztnQkFFSyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsU0FBUyxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLFFBQVEsRUFBRSxLQUFLO3FCQUNmLENBQUM7Z0JBQ0YsTUFBTSxFQUFFLGNBQWM7YUFDdEIsQ0FBQztZQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sMkNBQWE7Ozs7SUFBckI7UUFBQSxpQkFTQzs7WUFSTSxNQUFNLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1FBRXJELE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQXJCLENBQXFCLEVBQUMsRUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEI7YUFDQSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksRUFBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFFTyw2Q0FBZTs7Ozs7O0lBQXZCLFVBQXdCLFNBQTRDLEVBQUUsUUFBa0I7O1lBRWpGLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDO2FBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFDeEQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFaEQsZ0JBQWdCLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUMvQixDQUFDOzs7OztJQUVPLDBDQUFZOzs7O0lBQXBCO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7O2dCQXZGRCxVQUFVOzs7O2dCQVhjLHdCQUF3QjtnQkFBeEMsY0FBYztnQkFBK0UsUUFBUTtnREFxQnpHLE1BQU0sU0FBQyxRQUFROztJQStFcEIsMEJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSxtQkFBbUI7OztJQUUvQix3Q0FBNEQ7Ozs7O0lBRTVELHFDQUF3Qzs7Ozs7SUFFNUIsdURBQTBEOzs7OztJQUNuRSw2Q0FBc0M7Ozs7O0lBQ3RDLHVDQUEwQjs7Ozs7SUFDMUIsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRkaWFsb2dSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlRGlhbG9nKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LCBjb25maWc/OiB7IGluamVjdG9yPzogSW5qZWN0b3IsIHRoZW1lPzogVGhlbWUgfSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmRpYWxvZ1JlZikge1xuXG5cdFx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGNvbXBvbmVudCwgaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVEaWFsb2coKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmRvY3VtZW50LCAna2V5dXAnKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFuZEFwcGVuZChjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiwgaW5qZWN0b3I6IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5kaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5kaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==