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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibGF5b3V0L3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUNkLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBa0JDLGdDQUFvQix3QkFBa0QsRUFDM0QsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDWixRQUFhLEVBQ1YsVUFBZTtRQUwzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWhCL0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBTzdCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUWpDLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFlQzs7WUFkTSxLQUFLLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxVQUFVLENB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b0JBQ3pCLFFBQVEsRUFBRSxZQUFZO2lCQUN0Qjs7OztnQkFwQkEsd0JBQXdCO2dCQU14QixRQUFRO2dCQUhSLFVBQVU7Z0JBSlYsY0FBYztnREF3Q1YsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLFdBQVc7Ozt1QkFqQnJCLEtBQUssU0FBQyxhQUFhOztJQXVGckIsNkJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQXpGWSxzQkFBc0I7Ozs7OztJQVNsQyxxQ0FBbUQ7Ozs7O0lBQ25ELHFDQUFrRDs7SUFSbEQsc0NBQ1U7O0lBRVYsNENBQXFDOztJQUNyQyxvREFBMkI7O0lBQzNCLHFEQUE0Qjs7Ozs7SUFLNUIsMENBQWlDOzs7OztJQUVyQiwwREFBMEQ7Ozs7O0lBQ25FLDBDQUEwQjs7Ozs7SUFDMUIsNENBQThCOzs7OztJQUM5QixnREFBc0M7Ozs7O0lBQ3RDLDBDQUF1Qzs7Ozs7SUFDdkMsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nLFxuXHRleHBvcnRBczogJ2d1aVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCdndWktdG9vbHRpcCcpXG5cdHRleHQgPSAnJztcblxuXHR0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG5cdHRvb2x0aXBUb3BQb3NpdGlvbjogbnVtYmVyO1xuXHR0b29sdGlwTGVmdFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcEhlaWdodDogbnVtYmVyID0gMzI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2x0aXBPZmZzZXQ6IG51bWJlciA9IDg7XG5cblx0cHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IG9wZW4kID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJyksXG5cdFx0XHRjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKTtcblxuXHRcdG9wZW4kXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRlc3Ryb3kkLm5leHQoKTtcblx0XHR0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIHNob3coKSB7XG5cdFx0Y29uc3QgdG9vbHRpcFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdCAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNUb29sdGlwQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHQgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVDb3JkcygpO1xuXG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50ZXh0ID0gdGhpcy50ZXh0O1xuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudG9wID0gdGhpcy50b29sdGlwVG9wUG9zaXRpb247XG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS5sZWZ0ID0gdGhpcy50b29sdGlwTGVmdFBvc2l0aW9uO1xuXG5cdFx0dG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHRjb25zdCBkb21FbGVtZW50ID0gKHRvb2x0aXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG5cdFx0dGhpcy50b29sdGlwUmVmID0gdG9vbHRpcFJlZjtcblx0fVxuXG5cdHByaXZhdGUgaGlkZSgpIHtcblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy50b29sdGlwUmVmLmhvc3RWaWV3KTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xuXHRcdHRoaXMudG9vbHRpcFJlZiA9IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdGVsZW1lbnRSZWN0ID0gZWxlbWVudFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbiA9XG5cdFx0XHRcdGVsZW1lbnRCb3R0b20gKyB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0XHQtIGVsZW1lbnRSZWYub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdC0gRmFicmljVG9vbHRpcERpcmVjdGl2ZS50b29sdGlwSGVpZ2h0XG5cdFx0XHRcdC0gRmFicmljVG9vbHRpcERpcmVjdGl2ZS50b29sdGlwT2Zmc2V0O1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCArIGVsZW1lbnRMZWZ0ICsgZWxlbWVudFJlZi5vZmZzZXRXaWR0aCAvIDI7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==