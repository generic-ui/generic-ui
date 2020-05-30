/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
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
            let placement = InlineDialogPlacement.Top;
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
     * @param {?=} customClass
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFJeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7O0lBU3JDLFlBQW9CLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFYM0Qsb0JBQWUsR0FB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LEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXJJRCxVQUFVOzs7O1lBdEJWLHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0E2QkosTUFBTSxTQUFDLFFBQVE7WUFyQlgsMkJBQTJCOzs7Ozs7O0lBV25DLG9EQUEwRTs7Ozs7SUFFMUUsMkNBQXVCOzs7OztJQUV2Qiw0Q0FBNkM7Ozs7O0lBQzdDLDJDQUF3Qzs7Ozs7SUFFNUIsNkRBQTBEOzs7OztJQUNuRSxtREFBc0M7Ozs7O0lBQ3RDLDZDQUEwQjs7Ozs7SUFDMUIsNkNBQXVDOzs7OztJQUN2QyxnRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZmFicmljLm5lc3RlZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRwcml2YXRlIG9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3BlbmVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UpIHtcblxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sXG5cdFx0IGNvbmZpZz86IHsgaW5qZWN0b3I/OiBJbmplY3RvciwgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIsIHRoZW1lPzogVGhlbWUsIGN1c3RvbUNsYXNzPzogc3RyaW5nIH0pOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXG5cdFx0XHRsZXQgcGFyZW50SW5qZWN0b3IgPSB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRwbGFjZW1lbnQgPSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wLFxuXHRcdFx0XHRvZmZzZXQgPSAwLFxuXHRcdFx0XHR0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wbGFjZW1lbnQpIHtcblx0XHRcdFx0cGxhY2VtZW50ID0gY29uZmlnLnBsYWNlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcub2Zmc2V0KSB7XG5cdFx0XHRcdG9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5jdXN0b21DbGFzcykge1xuXHRcdFx0XHRjdXN0b21DbGFzcyA9IGNvbmZpZy5jdXN0b21DbGFzcztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNldE9wZW5lZCh0cnVlKTtcblx0XHRcdHRoaXMuYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudCwgaW5qZWN0b3IsIGN1c3RvbUNsYXNzKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHBsYWNlbWVudCwgb2Zmc2V0KTtcblx0XHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0XHR0aGlzLnNldE9wZW5lZChmYWxzZSk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50OiBhbnksIGluamVjdG9yOiBJbmplY3RvciwgY3VzdG9tQ2xhc3M/OiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmN1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3M7XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUlubGluZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmlubGluZURpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cdFx0dGhpcy5vcGVuZWQkLm5leHQodGhpcy5vcGVuZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9uRXNjS2V5KCk6IHZvaWQge1xuXHRcdGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZG9jdW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChrZXkpID0+IGtleS5jb2RlID09PSAnRXNjYXBlJyksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3ViJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcblx0fVxufVxuIl19