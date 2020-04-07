/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FabricDialogComponent } from './fabric-dialog.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogService } from '../common/dialog.service';
export class FabricDialogService extends DialogService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeDialog();
        super.ngOnDestroy();
    }
    /**
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(component, config) {
        if (!this.dialogRef) {
            /** @type {?} */
            let theme = Theme.FABRIC;
            /** @type {?} */
            let parentInjector = this.injector;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            /** @type {?} */
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(component, injector);
            this.closeOnEscKey();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.removeDialog();
    }
    /**
     * @private
     * @return {?}
     */
    closeOnEscKey() {
        /** @type {?} */
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key.code === 'Escape')), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => this.close()));
    }
    /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    createAndAppend(component, injector) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.dialogRef = componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeDialog() {
        if (this.dialogRef) {
            this.applicationRef.detachView(this.dialogRef.hostView);
            this.dialogRef.destroy();
            this.dialogRef = null;
        }
    }
}
FabricDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricDialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /** @type {?} */
    FabricDialogService.prototype.dialogRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFHeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7Ozs7O0lBSXJELFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDekMsS0FBSyxFQUFFLENBQUM7UUFKVyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUwxQyxjQUFTLEdBQThDLElBQUksQ0FBQztJQU81RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFNBQTRDLEVBQUUsTUFBK0M7UUFFakcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUVoQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07O2dCQUN2QixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFFL0IsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDckI7WUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUM5QixjQUFjLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqQzs7a0JBRUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixRQUFRLEVBQUUsS0FBSztxQkFDZixDQUFDO2dCQUNGLE1BQU0sRUFBRSxjQUFjO2FBQ3RCLENBQUM7WUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBTSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUVyRCxNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUMsRUFDdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFFTyxlQUFlLENBQUMsU0FBNEMsRUFBRSxRQUFrQjs7Y0FFakYsWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDMUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUM7YUFDOUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUV4QixZQUFZLENBQUMsUUFBUSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUN4RCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUVoRCxnQkFBZ0IsR0FBRyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUM7YUFDdEUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7O1lBckZELFVBQVU7Ozs7WUFwQlYsd0JBQXdCO1lBRHhCLGNBQWM7WUFNZCxRQUFROzRDQXVCSixNQUFNLFNBQUMsUUFBUTs7OztJQUxuQix3Q0FBNEQ7Ozs7O0lBRWhELHVEQUEwRDs7Ozs7SUFDbkUsNkNBQXNDOzs7OztJQUN0Qyx1Q0FBMEI7Ozs7O0lBQzFCLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRkaWFsb2dSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZURpYWxvZygpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LCBjb25maWc/OiB7IGluamVjdG9yPzogSW5qZWN0b3IsIHRoZW1lPzogVGhlbWUgfSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmRpYWxvZ1JlZikge1xuXG5cdFx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGNvbXBvbmVudCwgaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVEaWFsb2coKTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmRvY3VtZW50LCAna2V5dXAnKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFuZEFwcGVuZChjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiwgaW5qZWN0b3I6IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5kaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5kaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==