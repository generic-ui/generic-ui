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
export class FabricInlineDialogService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     * @param {?} inlineDialogGeometryService
     */
    constructor(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
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
    ngOnDestroy() {
        this.removeInlineDialog();
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
        if (!this.inlineDialogRef) {
            /** @type {?} */
            let parentInjector = this.injector;
            /** @type {?} */
            let placement = FabricPlacement.BOTTOM;
            /** @type {?} */
            let offset = 0;
            /** @type {?} */
            let theme = Theme.FABRIC;
            /** @type {?} */
            let customClass;
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
            const injector = Injector.create({
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
    }
    /**
     * @return {?}
     */
    close() {
        this.removeInlineDialog();
        this.unsub$.next();
        this.unsub$.complete();
        this.setOpened(false);
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.opened;
    }
    /**
     * @return {?}
     */
    onOpened() {
        return this.opened$.asObservable();
    }
    /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @param {?} customClass
     * @return {?}
     */
    appendInlineDialogToElement(component, injector, customClass) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        componentRef.instance.customClass = customClass;
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeInlineDialog() {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    }
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    setOpened(opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
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
        (key) => key.code === 'Escape')), takeUntil(this.unsub$))
            .subscribe((/**
         * @return {?}
         */
        () => this.close()));
    }
}
FabricInlineDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricInlineDialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: InlineDialogGeometryService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSTVFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7O0lBU3JDLFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFYM0Qsb0JBQWUsR0FB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RyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBM0lELFVBQVU7Ozs7WUF0QlYsd0JBQXdCO1lBRHhCLGNBQWM7WUFPZCxRQUFROzRDQTZCSixNQUFNLFNBQUMsUUFBUTtZQXRCWCwyQkFBMkI7Ozs7Ozs7SUFZbkMsb0RBQTBFOzs7OztJQUUxRSwyQ0FBdUI7Ozs7O0lBRXZCLDRDQUE2Qzs7Ozs7SUFDN0MsMkNBQXdDOzs7OztJQUU1Qiw2REFBMEQ7Ozs7O0lBQ25FLG1EQUFzQzs7Ozs7SUFDdEMsNkNBQTBCOzs7OztJQUMxQiw2Q0FBdUM7Ozs7O0lBQ3ZDLGdFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ1JlZjogQ29tcG9uZW50UmVmPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4gPSBudWxsO1xuXG5cdHByaXZhdGUgb3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2U6IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSkge1xuXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50Pixcblx0XHQgY29uZmlnPzoge1xuXHRcdFx0IGluamVjdG9yPzogSW5qZWN0b3IsXG5cdFx0XHQgcGxhY2VtZW50PzogRmFicmljUGxhY2VtZW50LFxuXHRcdFx0IG9mZnNldD86IG51bWJlcixcblx0XHRcdCB0aGVtZT86IFRoZW1lLFxuXHRcdFx0IGN1c3RvbUNsYXNzPzogc3RyaW5nXG5cdFx0IH0pOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXG5cdFx0XHRsZXQgcGFyZW50SW5qZWN0b3IgPSB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRwbGFjZW1lbnQgPSBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NLFxuXHRcdFx0XHRvZmZzZXQgPSAwLFxuXHRcdFx0XHR0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wbGFjZW1lbnQpIHtcblx0XHRcdFx0cGxhY2VtZW50ID0gY29uZmlnLnBsYWNlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcub2Zmc2V0KSB7XG5cdFx0XHRcdG9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5jdXN0b21DbGFzcykge1xuXHRcdFx0XHRjdXN0b21DbGFzcyA9IGNvbmZpZy5jdXN0b21DbGFzcztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNldE9wZW5lZCh0cnVlKTtcblx0XHRcdHRoaXMuYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudCwgaW5qZWN0b3IsIGN1c3RvbUNsYXNzKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHBsYWNlbWVudCwgb2Zmc2V0KTtcblx0XHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0XHR0aGlzLnNldE9wZW5lZChmYWxzZSk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50OiBhbnksIGluamVjdG9yOiBJbmplY3RvciwgY3VzdG9tQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcztcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlSW5saW5lRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuaW5saW5lRGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldE9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblx0XHR0aGlzLm9wZW5lZCQubmV4dCh0aGlzLm9wZW5lZCk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlT25Fc2NLZXkoKTogdm9pZCB7XG5cdFx0Y29uc3QgY2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5kb2N1bWVudCwgJ2tleXVwJyk7XG5cblx0XHRjbG9zZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGtleSkgPT4ga2V5LmNvZGUgPT09ICdFc2NhcGUnKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWIkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuXHR9XG59XG4iXX0=