/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricTooltipComponent } from './fabric-tooltip.component';
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
    ngOnInit() {
        /** @type {?} */
        const open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
        /** @type {?} */
        const close$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
        open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.show()));
        close$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.tooltipRef) {
                this.hide();
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
    show() {
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
    hide() {
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
                selector: '[gui-tooltip]',
                exportAs: 'guiTooltip'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPcEUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBY2xDLFlBQW9CLHdCQUFrRCxFQUMzRCxRQUFrQixFQUNsQixVQUFzQixFQUN0QixjQUE4QixFQUNaLFFBQWEsRUFDVixVQUFlO1FBTDNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNaLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBaEIvQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVYsZUFBVSxHQUF5QyxJQUFJLENBQUM7UUFPaEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFRakMsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0QsS0FBSyxHQUFHLFNBQVMsQ0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7O2NBQ3hFLE1BQU0sR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1FBRXJFLEtBQUs7YUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztRQUUvQixNQUFNO2FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTyxJQUFJOztjQUNMLFVBQVUsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQ3ZDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDO2FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNsRCxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFcEQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDOztjQUV2QyxVQUFVLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxVQUFVLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQzlELFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sY0FBYzs7Y0FDZixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztjQUMvQyxXQUFXLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixFQUFFOztjQUNoRCxhQUFhLEdBQUcsV0FBVyxDQUFDLE1BQU07O2NBQ2xDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUUvQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUV2QyxJQUFJLENBQUMsa0JBQWtCO2dCQUN0QixhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU87c0JBQzVCLFVBQVUsQ0FBQyxZQUFZO3NCQUN2QixzQkFBc0IsQ0FBQyxhQUFhO3NCQUNwQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7WUFFeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ3JGO0lBQ0YsQ0FBQzs7QUE5RXVCLG9DQUFhLEdBQVcsRUFBRSxDQUFDO0FBQzNCLG9DQUFhLEdBQVcsQ0FBQyxDQUFDOztZQWRsRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxZQUFZO2FBQ3RCOzs7O1lBdEJBLHdCQUF3QjtZQU14QixRQUFRO1lBSFIsVUFBVTtZQUpWLGNBQWM7NENBMENWLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxXQUFXOzs7bUJBakJyQixLQUFLLFNBQUMsYUFBYTs7Ozs7OztJQU9wQixxQ0FBbUQ7Ozs7O0lBQ25ELHFDQUFrRDs7SUFSbEQsc0NBQ1U7O0lBRVYsNENBQXdEOztJQUN4RCxvREFBMkI7O0lBQzNCLHFEQUE0Qjs7Ozs7SUFLNUIsMENBQWlDOzs7OztJQUVyQiwwREFBMEQ7Ozs7O0lBQ25FLDBDQUEwQjs7Ozs7SUFDMUIsNENBQThCOzs7OztJQUM5QixnREFBc0M7Ozs7O0lBQ3RDLDBDQUF1Qzs7Ozs7SUFDdkMsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLXRvb2x0aXAuY29tcG9uZW50JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLXRvb2x0aXBdJyxcblx0ZXhwb3J0QXM6ICdndWlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgnZ3VpLXRvb2x0aXAnKVxuXHR0ZXh0ID0gJyc7XG5cblx0dG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPEZhYnJpY1Rvb2x0aXBDb21wb25lbnQ+ID0gbnVsbDtcblx0dG9vbHRpcFRvcFBvc2l0aW9uOiBudW1iZXI7XG5cdHRvb2x0aXBMZWZ0UG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwSGVpZ2h0OiBudW1iZXIgPSAzMjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3Qgb3BlbiQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKSxcblx0XHRcdGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xuXG5cdFx0b3BlbiRcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93KCkpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMudG9vbHRpcFJlZikge1xuXHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZGVzdHJveSQubmV4dCgpO1xuXHRcdHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgc2hvdygpIHtcblx0XHRjb25zdCB0b29sdGlwUmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0ICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZhYnJpY1Rvb2x0aXBDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdCAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKCk7XG5cblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLnRleHQgPSB0aGlzLnRleHQ7XG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLmxlZnQgPSB0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb247XG5cblx0XHR0b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdGNvbnN0IGRvbUVsZW1lbnQgPSAodG9vbHRpcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cblx0XHR0aGlzLnRvb2x0aXBSZWYgPSB0b29sdGlwUmVmO1xuXHR9XG5cblx0cHJpdmF0ZSBoaWRlKCkge1xuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpO1xuXHRcdHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XG5cdFx0dGhpcy50b29sdGlwUmVmID0gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0ZWxlbWVudFJlY3QgPSBlbGVtZW50UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uID1cblx0XHRcdFx0ZWxlbWVudEJvdHRvbSArIHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRcdC0gZWxlbWVudFJlZi5vZmZzZXRIZWlnaHRcblx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBIZWlnaHRcblx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBPZmZzZXQ7XG5cblx0XHRcdHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYICsgZWxlbWVudExlZnQgKyBlbGVtZW50UmVmLm9mZnNldFdpZHRoIC8gMjtcblx0XHR9XG5cdH1cblxufVxuIl19