/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { BehaviorSubject } from 'rxjs';
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
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, component, injector, placement, offset) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
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
     * @param {?=} injector
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?=} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        if (injector) {
            componentRef.instance.inlineDialogNestedInjector = injector;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBR25EO0lBU0MsbUNBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFWM0Qsb0JBQWUsR0FBc0IsSUFBSSxDQUFDO1FBRTFDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFPN0MsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7OztJQUVELHdDQUFJOzs7Ozs7OztJQUFKLFVBQUssT0FBbUIsRUFBRSxTQUFvQixFQUFFLFFBQW1CLEVB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ZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdGFibGUsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG5cblx0cHJpdmF0ZSBvcGVuZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIG9wZW5lZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2U6IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4sIGluamVjdG9yPzogSW5qZWN0b3IsIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuc2V0T3BlbmVkKHRydWUpO1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5nZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50LCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHRcdHRoaXMuc2V0T3BlbmVkKGZhbHNlKTtcblx0fVxuXG5cdGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcblx0fVxuXG5cdG9uT3BlbmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I/OiBJbmplY3Rvcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRpZiAoaW5qZWN0b3IpIHtcblx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3RvciA9IGluamVjdG9yO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbURpYWxvZ0VsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21EaWFsb2dFbGVtZW50KTtcblxuXHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVJbmxpbmVEaWFsb2coKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5pbmxpbmVEaWFsb2dSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0T3BlbmVkKG9wZW5lZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xuXHRcdHRoaXMub3BlbmVkJC5uZXh0KHRoaXMub3BlbmVkKTtcblx0fVxuXG59XG4iXX0=