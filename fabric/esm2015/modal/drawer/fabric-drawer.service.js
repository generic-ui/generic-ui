/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogService } from '../common/dialog.service';
export class FabricDrawerService extends DialogService {
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
        this.drawerRef = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeDrawer();
        super.ngOnDestroy();
    }
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.drawerRef) {
            /** @type {?} */
            let theme = Theme.FABRIC;
            /** @type {?} */
            let parentInjector = this.injector;
            /** @type {?} */
            let closeOnClickOutside = false;
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
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(element, component, injector, closeOnClickOutside);
            this.closeOnEscKey();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.removeDrawer();
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
     * @param {?} element
     * @param {?} component
     * @param {?} injector
     * @param {?} closeOnClickOutside
     * @return {?}
     */
    createAndAppend(element, component, injector, closeOnClickOutside) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDrawerComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.instance.closeOnClickOutside = closeOnClickOutside;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domDrawerElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        element.nativeElement.appendChild(domDrawerElement);
        this.drawerRef = componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeDrawer() {
        if (this.drawerRef) {
            this.applicationRef.detachView(this.drawerRef.hostView);
            this.drawerRef.destroy();
            this.drawerRef = null;
        }
    }
}
FabricDrawerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricDrawerService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7Ozs7O0lBSXJELFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDekMsS0FBSyxFQUFFLENBQUM7UUFKVyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUwxQyxjQUFTLEdBQThDLElBQUksQ0FBQztJQU81RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7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LEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7O1lBbEdELFVBQVU7Ozs7WUFyQlYsd0JBQXdCO1lBRHhCLGNBQWM7WUFPZCxRQUFROzRDQXVCSixNQUFNLFNBQUMsUUFBUTs7OztJQUxuQix3Q0FBNEQ7Ozs7O0lBRWhELHVEQUEwRDs7Ozs7SUFDbkUsNkNBQXNDOzs7OztJQUN0Qyx1Q0FBMEI7Ozs7O0lBQzFCLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlclNlcnZpY2UgZXh0ZW5kcyBEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRkcmF3ZXJSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZURyYXdlcigpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LFxuXHRcdCBjb25maWc/OiB7IGluamVjdG9yPzogSW5qZWN0b3IsIHRoZW1lPzogVGhlbWUsIGNsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuIH0pOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5kcmF3ZXJSZWYpIHtcblxuXHRcdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdGNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG5cdFx0XHRcdGNsb3NlT25DbGlja091dHNpZGUgPSBjb25maWcuY2xvc2VPbkNsaWNrT3V0c2lkZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZChlbGVtZW50LCBjb21wb25lbnQsIGluamVjdG9yLCBjbG9zZU9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlRHJhd2VyKCk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlT25Fc2NLZXkoKTogdm9pZCB7XG5cdFx0Y29uc3QgY2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5kb2N1bWVudCwgJ2tleXVwJyk7XG5cblx0XHRjbG9zZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGtleSkgPT4ga2V5LmNvZGUgPT09ICdFc2NhcGUnKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVBbmRBcHBlbmQoZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sXG5cdFx0XHRcdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0XHRcdFx0Y2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY0RyYXdlckNvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuZGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gY2xvc2VPbkNsaWNrT3V0c2lkZTtcblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EcmF3ZXJFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRHJhd2VyRWxlbWVudCk7XG5cblx0XHR0aGlzLmRyYXdlclJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlRHJhd2VyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmRyYXdlclJlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuZHJhd2VyUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuZHJhd2VyUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuZHJhd2VyUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19