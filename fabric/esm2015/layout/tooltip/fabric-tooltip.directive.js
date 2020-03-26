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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7OztJQWNsQyxZQUFvQix3QkFBa0QsRUFDM0QsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDWixRQUFhLEVBQ1YsVUFBZTtRQUwzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWhCL0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBTzdCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUWpDLENBQUM7Ozs7SUFFRCxRQUFROztjQUNELEtBQUssR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFVB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Qjs7OztZQXBCQSx3QkFBd0I7WUFNeEIsUUFBUTtZQUhSLFVBQVU7WUFKVixjQUFjOzRDQXdDVixNQUFNLFNBQUMsUUFBUTs0Q0FDZixNQUFNLFNBQUMsV0FBVzs7O21CQWpCckIsS0FBSyxTQUFDLGFBQWE7Ozs7Ozs7SUFPcEIscUNBQW1EOzs7OztJQUNuRCxxQ0FBa0Q7O0lBUmxELHNDQUNVOztJQUVWLDRDQUFxQzs7SUFDckMsb0RBQTJCOztJQUMzQixxREFBNEI7Ozs7O0lBSzVCLDBDQUFpQzs7Ozs7SUFFckIsMERBQTBEOzs7OztJQUNuRSwwQ0FBMEI7Ozs7O0lBQzFCLDRDQUE4Qjs7Ozs7SUFDOUIsZ0RBQXNDOzs7OztJQUN0QywwQ0FBdUM7Ozs7O0lBQ3ZDLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLXRvb2x0aXBdJyxcblx0ZXhwb3J0QXM6ICdndWlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgnZ3VpLXRvb2x0aXAnKVxuXHR0ZXh0ID0gJyc7XG5cblx0dG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuXHR0b29sdGlwVG9wUG9zaXRpb246IG51bWJlcjtcblx0dG9vbHRpcExlZnRQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2x0aXBIZWlnaHQ6IG51bWJlciA9IDMyO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwT2Zmc2V0OiBudW1iZXIgPSA4O1xuXG5cdHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG5cblx0XHRvcGVuJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3coKSk7XG5cblx0XHRjbG9zZSRcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kZXN0cm95JC5uZXh0KCk7XG5cdFx0dGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93KCkge1xuXHRcdGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHQgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljVG9vbHRpcENvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0ICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLnRvcCA9IHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uO1xuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UubGVmdCA9IHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbjtcblxuXHRcdHRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0Y29uc3QgZG9tRWxlbWVudCA9ICh0b29sdGlwUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZiA9IHRvb2x0aXBSZWY7XG5cdH1cblxuXHRwcml2YXRlIGhpZGUoKSB7XG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMudG9vbHRpcFJlZi5ob3N0Vmlldyk7XG5cdFx0dGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYgPSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcygpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRlbGVtZW50UmVjdCA9IGVsZW1lbnRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0dGhpcy50b29sdGlwVG9wUG9zaXRpb24gPVxuXHRcdFx0XHRlbGVtZW50Qm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0XHRcdFx0LSBlbGVtZW50UmVmLm9mZnNldEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcE9mZnNldDtcblxuXHRcdFx0dGhpcy50b29sdGlwTGVmdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggKyBlbGVtZW50TGVmdCArIGVsZW1lbnRSZWYub2Zmc2V0V2lkdGggLyAyO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=