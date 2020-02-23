/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var FabricTooltipDirective = /** @class */ (function () {
    function FabricTooltipDirective(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
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
    FabricTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
        /** @type {?} */
        var close$ = fromEvent(this.elementRef.nativeElement, 'mouseout');
        open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.appendTooltip(); }));
        close$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.tooltipRef) {
                _this.removeTooltip();
            }
        }));
    };
    /**
     * @return {?}
     */
    FabricTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    FabricTooltipDirective.prototype.appendTooltip = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tooltipRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricTooltipComponent)
            .create(this.injector);
        this.calculateCords();
        tooltipRef.instance.text = this.text;
        tooltipRef.instance.top = this.tooltipTopPosition;
        tooltipRef.instance.left = this.tooltipLeftPosition;
        tooltipRef.changeDetectorRef.detectChanges();
        /** @type {?} */
        var domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricTooltipDirective.prototype.removeTooltip = /**
     * @private
     * @return {?}
     */
    function () {
        this.applicationRef.detachView(this.tooltipRef.hostView);
        this.tooltipRef.destroy();
        this.tooltipRef = null;
    };
    /**
     * @private
     * @return {?}
     */
    FabricTooltipDirective.prototype.calculateCords = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementRef = this.elementRef.nativeElement;
        /** @type {?} */
        var elementRect = elementRef.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = elementRect.bottom;
        /** @type {?} */
        var elementLeft = elementRect.left;
        if (isPlatformBrowser(this.platformId)) {
            this.tooltipTopPosition =
                elementBottom + window.scrollY
                    - elementRef.offsetHeight
                    - FabricTooltipDirective.tooltipHeight
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
        }
    };
    FabricTooltipDirective.tooltipHeight = 24;
    FabricTooltipDirective.tooltipOffset = 6;
    FabricTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gui-tooltip]'
                },] }
    ];
    /** @nocollapse */
    FabricTooltipDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: ElementRef },
        { type: ApplicationRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    FabricTooltipDirective.propDecorators = {
        text: [{ type: Input, args: ['gui-tooltip',] }]
    };
    return FabricTooltipDirective;
}());
export { FabricTooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBaUJDLGdDQUFvQix3QkFBa0QsRUFDM0QsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDWixRQUFhLEVBQ1YsVUFBZTtRQUwzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWhCL0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBTzdCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBU2pDLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFBQSxpQkFlQzs7WUFkTSxLQUFLLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxVQUFVLENB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ZUFBZTtpQkFDekI7Ozs7Z0JBakJBLHdCQUF3QjtnQkFNeEIsUUFBUTtnQkFIUixVQUFVO2dCQUpWLGNBQWM7Z0RBcUNWLE1BQU0sU0FBQyxRQUFRO2dEQUNmLE1BQU0sU0FBQyxXQUFXOzs7dUJBakJyQixLQUFLLFNBQUMsYUFBYTs7SUF5RnJCLDZCQUFDO0NBQUEsQUE5RkQsSUE4RkM7U0EzRlksc0JBQXNCOzs7Ozs7SUFTbEMscUNBQW1EOzs7OztJQUNuRCxxQ0FBa0Q7O0lBUmxELHNDQUNVOztJQUVWLDRDQUFxQzs7SUFDckMsb0RBQTJCOztJQUMzQixxREFBNEI7Ozs7O0lBSzVCLDBDQUFpQzs7Ozs7SUFFckIsMERBQTBEOzs7OztJQUNuRSwwQ0FBMEI7Ozs7O0lBQzFCLDRDQUE4Qjs7Ozs7SUFDOUIsZ0RBQXNDOzs7OztJQUN0QywwQ0FBdUM7Ozs7O0lBQ3ZDLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUge1xuXG5cdEBJbnB1dCgnZ3VpLXRvb2x0aXAnKVxuXHR0ZXh0ID0gJyc7XG5cblx0dG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuXHR0b29sdGlwVG9wUG9zaXRpb246IG51bWJlcjtcblx0dG9vbHRpcExlZnRQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2x0aXBIZWlnaHQ6IG51bWJlciA9IDI0O1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwT2Zmc2V0OiBudW1iZXIgPSA2O1xuXG5cdHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZW91dCcpO1xuXG5cdFx0b3BlbiRcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hcHBlbmRUb29sdGlwKCkpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMudG9vbHRpcFJlZikge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZGVzdHJveSQubmV4dCgpO1xuXHRcdHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBhcHBlbmRUb29sdGlwKCkge1xuXHRcdGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHQgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljVG9vbHRpcENvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0ICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLnRvcCA9IHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uO1xuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UubGVmdCA9IHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbjtcblxuXHRcdHRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0Y29uc3QgZG9tRWxlbWVudCA9ICh0b29sdGlwUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZiA9IHRvb2x0aXBSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVRvb2x0aXAoKSB7XG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMudG9vbHRpcFJlZi5ob3N0Vmlldyk7XG5cdFx0dGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYgPSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcygpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRlbGVtZW50UmVjdCA9IGVsZW1lbnRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0dGhpcy50b29sdGlwVG9wUG9zaXRpb24gPVxuXHRcdFx0XHRlbGVtZW50Qm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0XHRcdFx0LSBlbGVtZW50UmVmLm9mZnNldEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcE9mZnNldDtcblxuXHRcdFx0dGhpcy50b29sdGlwTGVmdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggKyBlbGVtZW50TGVmdCArIGVsZW1lbnRSZWYub2Zmc2V0V2lkdGggLyAyO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=