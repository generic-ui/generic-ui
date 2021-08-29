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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBaUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQ7SUFPQyw2QkFBNkIsd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ1QsUUFBYTtRQUhiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUDFDLGNBQVMsR0FBOEMsSUFBSSxDQUFDO1FBRTNDLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTXhDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsa0NBQUk7Ozs7O0lBQUosVUFBSyxTQUE0QyxFQUFFLE1BQStDO1FBRWpHLElBQUksQ0FBQyxJQUFJ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SUFFNUQscUNBQXdDOzs7OztJQUU1Qix1REFBbUU7Ozs7O0lBQzVFLDZDQUErQzs7Ozs7SUFDL0MsdUNBQW1DOzs7OztJQUNuQyx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGRpYWxvZ1JlZjogQ29tcG9uZW50UmVmPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4gPSBudWxsO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sIGNvbmZpZz86IHsgaW5qZWN0b3I/OiBJbmplY3RvciwgdGhlbWU/OiBUaGVtZSB9KTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuZGlhbG9nUmVmKSB7XG5cblx0XHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmNsb3NlT25Fc2NLZXkoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZURpYWxvZygpO1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9uRXNjS2V5KCk6IHZvaWQge1xuXHRcdGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZG9jdW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChrZXkpID0+IGtleS5jb2RlID09PSAnRXNjYXBlJyksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3ViJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQW5kQXBwZW5kKGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LCBpbmplY3RvcjogSW5qZWN0b3IpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmRpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmRpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuZGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuZGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuZGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19