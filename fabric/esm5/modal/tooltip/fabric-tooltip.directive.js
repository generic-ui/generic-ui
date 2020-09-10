/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
var FabricTooltipDirective = /** @class */ (function (_super) {
    tslib_1.__extends(FabricTooltipDirective, _super);
    function FabricTooltipDirective(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.injector = injector;
        _this.elementRef = elementRef;
        _this.applicationRef = applicationRef;
        _this.document = document;
        _this.platformId = platformId;
        _this.text = '';
        _this.tooltipRef = null;
        return _this;
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
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show(); }));
        close$
            .pipe(this.takeUntil())
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
        tooltipRef.instance.text = this.text;
        tooltipRef.changeDetectorRef.detectChanges();
        /** @type {?} */
        var domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
        this.calculateCords();
        this.tooltipRef.instance.correctPosition();
        this.tooltipRef.changeDetectorRef.detectChanges();
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
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
            this.tooltipRef.instance.top = this.tooltipTopPosition;
            this.tooltipRef.instance.left = this.tooltipLeftPosition;
            this.tooltipRef.changeDetectorRef.detectChanges();
        }
    };
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
}(FabricReactive));
export { FabricTooltipDirective };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQ7SUFJNEMsa0RBQWM7SUFVekQsZ0NBQTZCLHdCQUFrRCxFQUMzRCxRQUFrQixFQUNsQixVQUFzQixFQUN0QixjQUE4QixFQUNaLFFBQWEsRUFDVixVQUFlO1FBTHhELFlBTUMsaUJBQU8sU0FDUDtRQVA0Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1osY0FBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGdCQUFVLEdBQVYsVUFBVSxDQUFLO1FBWHhELFVBQUksR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVSxHQUF5QyxJQUFJLENBQUM7O0lBV3hELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFlQzs7WUFkTSxLQUFLLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxF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LFlBQVk7aUJBQ3RCOzs7O2dCQXRCQSx3QkFBd0I7Z0JBTXhCLFFBQVE7Z0JBSFIsVUFBVTtnQkFKVixjQUFjO2dEQXNDVixNQUFNLFNBQUMsUUFBUTtnREFDZixNQUFNLFNBQUMsV0FBVzs7O3VCQVpyQixLQUFLLFNBQUMsYUFBYTs7SUFtRnJCLDZCQUFDO0NBQUEsQUExRkQsQ0FJNEMsY0FBYyxHQXNGekQ7U0F0Rlksc0JBQXNCOzs7Ozs7SUFDbEMscUNBQWtEOztJQUVsRCxzQ0FDVTs7SUFFViw0Q0FBd0Q7O0lBQ3hELG9EQUEyQjs7SUFDM0IscURBQTRCOzs7OztJQUVoQiwwREFBbUU7Ozs7O0lBQzVFLDBDQUFtQzs7Ozs7SUFDbkMsNENBQXVDOzs7OztJQUN2QyxnREFBK0M7Ozs7O0lBQy9DLDBDQUFnRDs7Ozs7SUFDaEQsNENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmFicmljVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLXRvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aS10b29sdGlwXScsXG5cdGV4cG9ydEFzOiAnZ3VpVG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB0b29sdGlwT2Zmc2V0OiBudW1iZXIgPSA4O1xuXG5cdEBJbnB1dCgnZ3VpLXRvb2x0aXAnKVxuXHR0ZXh0ID0gJyc7XG5cblx0dG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPEZhYnJpY1Rvb2x0aXBDb21wb25lbnQ+ID0gbnVsbDtcblx0dG9vbHRpcFRvcFBvc2l0aW9uOiBudW1iZXI7XG5cdHRvb2x0aXBMZWZ0UG9zaXRpb246IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG5cblx0XHRvcGVuJFxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93KCkpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3coKTogdm9pZCB7XG5cdFx0Y29uc3QgdG9vbHRpcFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdCAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNUb29sdGlwQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHQgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50ZXh0ID0gdGhpcy50ZXh0O1xuXG5cdFx0dG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHRjb25zdCBkb21FbGVtZW50ID0gKHRvb2x0aXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG5cdFx0dGhpcy50b29sdGlwUmVmID0gdG9vbHRpcFJlZjtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb3JyZWN0UG9zaXRpb24oKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpO1xuXHRcdHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XG5cdFx0dGhpcy50b29sdGlwUmVmID0gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0ZWxlbWVudFJlY3QgPSBlbGVtZW50UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uID1cblx0XHRcdFx0ZWxlbWVudEJvdHRvbSArIHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRcdC0gZWxlbWVudFJlZi5vZmZzZXRIZWlnaHRcblx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBPZmZzZXQ7XG5cblx0XHRcdHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYICsgZWxlbWVudExlZnQgKyBlbGVtZW50UmVmLm9mZnNldFdpZHRoIC8gMjtcblxuXHRcdFx0dGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnRvcCA9IHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uO1xuXHRcdFx0dGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmxlZnQgPSB0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb247XG5cblx0XHRcdHRoaXMudG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==