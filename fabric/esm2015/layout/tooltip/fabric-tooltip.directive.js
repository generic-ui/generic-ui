/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class FabricTooltipDirective {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} elementRef
     * @param {?} applicationRef
     * @param {?} document
     * @param {?} platformId
     */
    constructor(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.document = document;
        this.platformId = platformId;
        this.text = '';
        this.tooltipRef = null;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
        /** @type {?} */
        const close$ = fromEvent(this.elementRef.nativeElement, 'mouseout');
        open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.appendTooltip()));
        close$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.tooltipRef) {
                this.removeTooltip();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    appendTooltip() {
        /** @type {?} */
        const tooltipRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricTooltipComponent)
            .create(this.injector);
        this.calculateCords();
        tooltipRef.instance.text = this.text;
        tooltipRef.instance.top = this.tooltipTopPosition;
        tooltipRef.instance.left = this.tooltipLeftPosition;
        tooltipRef.changeDetectorRef.detectChanges();
        /** @type {?} */
        const domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeTooltip() {
        this.applicationRef.detachView(this.tooltipRef.hostView);
        this.tooltipRef.destroy();
        this.tooltipRef = null;
    }
    /**
     * @private
     * @return {?}
     */
    calculateCords() {
        /** @type {?} */
        const elementRef = this.elementRef.nativeElement;
        /** @type {?} */
        const elementRect = elementRef.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = elementRect.bottom;
        /** @type {?} */
        const elementLeft = elementRect.left;
        if (isPlatformBrowser(this.platformId)) {
            this.tooltipTopPosition =
                elementBottom + window.scrollY
                    - elementRef.offsetHeight
                    - FabricTooltipDirective.tooltipHeight
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
        }
    }
}
FabricTooltipDirective.tooltipHeight = 32;
FabricTooltipDirective.tooltipOffset = 8;
FabricTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gui-tooltip]'
            },] }
];
/** @nocollapse */
FabricTooltipDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: ElementRef },
    { type: ApplicationRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
FabricTooltipDirective.propDecorators = {
    text: [{ type: Input, args: ['gui-tooltip',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.tooltipHeight;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.tooltipOffset;
    /** @type {?} */
    FabricTooltipDirective.prototype.text;
    /** @type {?} */
    FabricTooltipDirective.prototype.tooltipRef;
    /** @type {?} */
    FabricTooltipDirective.prototype.tooltipTopPosition;
    /** @type {?} */
    FabricTooltipDirective.prototype.tooltipLeftPosition;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7OztJQWNsQyxZQUFvQix3QkFBa0QsRUFDM0QsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDWixRQUFhLEVBQ1YsVUFBZTtRQUwzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWhCL0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBTzdCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBU2pDLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNSLEtBQUssR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFVB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TXhCLFFBQVE7WUFIUixVQUFVO1lBSlYsY0FBYzs0Q0FxQ1YsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLFdBQVc7OzttQkFqQnJCLEtBQUssU0FBQyxhQUFhOzs7Ozs7O0lBT3BCLHFDQUFtRDs7Ozs7SUFDbkQscUNBQWtEOztJQVJsRCxzQ0FDVTs7SUFFViw0Q0FBcUM7O0lBQ3JDLG9EQUEyQjs7SUFDM0IscURBQTRCOzs7OztJQUs1QiwwQ0FBaUM7Ozs7O0lBRXJCLDBEQUEwRDs7Ozs7SUFDbkUsMENBQTBCOzs7OztJQUMxQiw0Q0FBOEI7Ozs7O0lBQzlCLGdEQUFzQzs7Ozs7SUFDdEMsMENBQXVDOzs7OztJQUN2Qyw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRJbnB1dCxcblx0UExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLXRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb29sdGlwRGlyZWN0aXZlIHtcblxuXHRASW5wdXQoJ2d1aS10b29sdGlwJylcblx0dGV4dCA9ICcnO1xuXG5cdHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcblx0dG9vbHRpcFRvcFBvc2l0aW9uOiBudW1iZXI7XG5cdHRvb2x0aXBMZWZ0UG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwSGVpZ2h0OiBudW1iZXIgPSAzMjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3Qgb3BlbiQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKSxcblx0XHRcdGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VvdXQnKTtcblxuXHRcdG9wZW4kXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXBwZW5kVG9vbHRpcCgpKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZVRvb2x0aXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRlc3Ryb3kkLm5leHQoKTtcblx0XHR0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cdH1cblxuXG5cdHByaXZhdGUgYXBwZW5kVG9vbHRpcCgpIHtcblx0XHRjb25zdCB0b29sdGlwUmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0ICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY1Rvb2x0aXBDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdCAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKCk7XG5cblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLnRleHQgPSB0aGlzLnRleHQ7XG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLmxlZnQgPSB0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb247XG5cblx0XHR0b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdGNvbnN0IGRvbUVsZW1lbnQgPSAodG9vbHRpcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cblx0XHR0aGlzLnRvb2x0aXBSZWYgPSB0b29sdGlwUmVmO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVUb29sdGlwKCkge1xuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpO1xuXHRcdHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XG5cdFx0dGhpcy50b29sdGlwUmVmID0gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0ZWxlbWVudFJlY3QgPSBlbGVtZW50UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uID1cblx0XHRcdFx0ZWxlbWVudEJvdHRvbSArIHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRcdC0gZWxlbWVudFJlZi5vZmZzZXRIZWlnaHRcblx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBIZWlnaHRcblx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBPZmZzZXQ7XG5cblx0XHRcdHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYICsgZWxlbWVudExlZnQgKyBlbGVtZW50UmVmLm9mZnNldFdpZHRoIC8gMjtcblx0XHR9XG5cdH1cblxufVxuIl19