/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogService } from '../common/dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
export class FabricInlineDialogService extends DialogService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     * @param {?} inlineDialogGeometryService
     */
    constructor(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        super();
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
    ngOnDestroy() {
        this.removeInlineDialog();
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
        if (!this.inlineDialogRef) {
            /** @type {?} */
            let parentInjector = this.injector;
            /** @type {?} */
            let placement = InlineDialogPlacement.Top;
            /** @type {?} */
            let offset = 0;
            /** @type {?} */
            let theme = Theme.FABRIC;
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
            const injector = Injector.create({
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
    }
    /**
     * @return {?}
     */
    close() {
        this.removeInlineDialog();
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
     * @return {?}
     */
    appendInlineDialogToElement(component, injector) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3RELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxhQUFhOzs7Ozs7OztJQVEzRCxZQUFvQix3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhLEVBQy9CLDJCQUF3RDtRQUNsRSxLQUFLLEVBQUUsQ0FBQztRQUxXLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFWM0Qsb0JBQWUsR0FB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Q0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN6QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLE1BQWU7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQS9HRCxVQUFVOzs7O1lBdEJWLHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0E0QkosTUFBTSxTQUFDLFFBQVE7WUFuQlgsMkJBQTJCOzs7Ozs7O0lBVW5DLG9EQUEwRTs7Ozs7SUFFMUUsMkNBQXVCOzs7OztJQUV2Qiw0Q0FBNkM7Ozs7O0lBRWpDLDZEQUEwRDs7Ozs7SUFDbkUsbURBQXNDOzs7OztJQUN0Qyw2Q0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsZ0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIGV4dGVuZHMgRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3BlbmVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlSW5saW5lRGlhbG9nKCk7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sIGNvbmZpZz86IHsgaW5qZWN0b3I/OiBJbmplY3RvciwgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIsIHRoZW1lPzogVGhlbWUgfSk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaW5saW5lRGlhbG9nUmVmKSB7XG5cblx0XHRcdGxldCBwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdHBsYWNlbWVudCA9IElubGluZURpYWxvZ1BsYWNlbWVudC5Ub3AsXG5cdFx0XHRcdG9mZnNldCA9IDAsXG5cdFx0XHRcdHRoZW1lID0gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcucGxhY2VtZW50KSB7XG5cdFx0XHRcdHBsYWNlbWVudCA9IGNvbmZpZy5wbGFjZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLm9mZnNldCkge1xuXHRcdFx0XHRvZmZzZXQgPSBjb25maWcub2Zmc2V0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNldE9wZW5lZCh0cnVlKTtcblx0XHRcdHRoaXMuYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudCwgaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UuZ2V0SW5saW5lRGlhbG9nQ29yZHMoZWxlbWVudCwgcGxhY2VtZW50LCBvZmZzZXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHR0aGlzLnNldE9wZW5lZChmYWxzZSk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50OiBhbnksIGluamVjdG9yOiBJbmplY3Rvcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUlubGluZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmlubGluZURpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cdFx0dGhpcy5vcGVuZWQkLm5leHQodGhpcy5vcGVuZWQpO1xuXHR9XG5cbn1cbiJdfQ==