/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricTooltipComponent } from './fabric-tooltip.component';
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
    FabricTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
        /** @type {?} */
        var close$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
        open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show(); }));
        close$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.tooltipRef) {
                _this.hide();
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
    FabricTooltipDirective.prototype.show = /**
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
    FabricTooltipDirective.prototype.hide = /**
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
    FabricTooltipDirective.tooltipHeight = 32;
    FabricTooltipDirective.tooltipOffset = 8;
    FabricTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gui-tooltip]',
                    exportAs: 'guiTooltip'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHcEU7SUFrQkMsZ0NBQW9CLHdCQUFrRCxFQUMzRCxRQUFrQixFQUNsQixVQUFzQixFQUN0QixjQUE4QixFQUNaLFFBQWEsRUFDVixVQUFlO1FBTDNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNaLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBaEIvQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVYsZUFBVSxHQUF5QyxJQUFJLENBQUM7UUFPaEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFRakMsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUFBLGlCQWVDOztZQWRNLEtBQUssR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FB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QkFDekIsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCOzs7O2dCQXRCQSx3QkFBd0I7Z0JBTXhCLFFBQVE7Z0JBSFIsVUFBVTtnQkFKVixjQUFjO2dEQTBDVixNQUFNLFNBQUMsUUFBUTtnREFDZixNQUFNLFNBQUMsV0FBVzs7O3VCQWpCckIsS0FBSyxTQUFDLGFBQWE7O0lBdUZyQiw2QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBekZZLHNCQUFzQjs7Ozs7O0lBU2xDLHFDQUFtRDs7Ozs7SUFDbkQscUNBQWtEOztJQVJsRCxzQ0FDVTs7SUFFViw0Q0FBd0Q7O0lBQ3hELG9EQUEyQjs7SUFDM0IscURBQTRCOzs7OztJQUs1QiwwQ0FBaUM7Ozs7O0lBRXJCLDBEQUEwRDs7Ozs7SUFDbkUsMENBQTBCOzs7OztJQUMxQiw0Q0FBOEI7Ozs7O0lBQzlCLGdEQUFzQzs7Ozs7SUFDdEMsMENBQXVDOzs7OztJQUN2Qyw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nLFxuXHRleHBvcnRBczogJ2d1aVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCdndWktdG9vbHRpcCcpXG5cdHRleHQgPSAnJztcblxuXHR0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8RmFicmljVG9vbHRpcENvbXBvbmVudD4gPSBudWxsO1xuXHR0b29sdGlwVG9wUG9zaXRpb246IG51bWJlcjtcblx0dG9vbHRpcExlZnRQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2x0aXBIZWlnaHQ6IG51bWJlciA9IDMyO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwT2Zmc2V0OiBudW1iZXIgPSA4O1xuXG5cdHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG5cblx0XHRvcGVuJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3coKSk7XG5cblx0XHRjbG9zZSRcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kZXN0cm95JC5uZXh0KCk7XG5cdFx0dGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93KCkge1xuXHRcdGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHQgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljVG9vbHRpcENvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0ICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcblx0XHR0b29sdGlwUmVmLmluc3RhbmNlLnRvcCA9IHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uO1xuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UubGVmdCA9IHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbjtcblxuXHRcdHRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0Y29uc3QgZG9tRWxlbWVudCA9ICh0b29sdGlwUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZiA9IHRvb2x0aXBSZWY7XG5cdH1cblxuXHRwcml2YXRlIGhpZGUoKSB7XG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMudG9vbHRpcFJlZi5ob3N0Vmlldyk7XG5cdFx0dGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYgPSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcygpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRlbGVtZW50UmVjdCA9IGVsZW1lbnRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0dGhpcy50b29sdGlwVG9wUG9zaXRpb24gPVxuXHRcdFx0XHRlbGVtZW50Qm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0XHRcdFx0LSBlbGVtZW50UmVmLm9mZnNldEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcEhlaWdodFxuXHRcdFx0XHQtIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUudG9vbHRpcE9mZnNldDtcblxuXHRcdFx0dGhpcy50b29sdGlwTGVmdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggKyBlbGVtZW50TGVmdCArIGVsZW1lbnRSZWYub2Zmc2V0V2lkdGggLyAyO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=