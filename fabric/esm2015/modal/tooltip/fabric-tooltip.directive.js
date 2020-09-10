/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
export class FabricTooltipDirective extends FabricReactive {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} elementRef
     * @param {?} applicationRef
     * @param {?} document
     * @param {?} platformId
     */
    constructor(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.document = document;
        this.platformId = platformId;
        this.text = '';
        this.tooltipRef = null;
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
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => this.show()));
        close$
            .pipe(this.takeUntil())
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
     * @private
     * @return {?}
     */
    show() {
        /** @type {?} */
        const tooltipRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricTooltipComponent)
            .create(this.injector);
        tooltipRef.instance.text = this.text;
        tooltipRef.changeDetectorRef.detectChanges();
        /** @type {?} */
        const domElement = (/** @type {?} */ (((/** @type {?} */ (tooltipRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
        this.calculateCords();
        this.tooltipRef.instance.correctPosition();
        this.tooltipRef.changeDetectorRef.detectChanges();
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
                    - FabricTooltipDirective.tooltipOffset;
            this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
            this.tooltipRef.instance.top = this.tooltipTopPosition;
            this.tooltipRef.instance.left = this.tooltipLeftPosition;
            this.tooltipRef.changeDetectorRef.detectChanges();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU85RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBVXpELFlBQTZCLHdCQUFrRCxFQUMzRCxRQUFrQixFQUNsQixVQUFzQixFQUN0QixjQUE4QixFQUNaLFFBQWEsRUFDVixVQUFlO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBTm9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNaLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBWHhELFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVixlQUFVLEdBQXlDLElBQUksQ0FBQztJQVd4RCxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDRCxLQUFLLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFF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QjtZQU14QixRQUFRO1lBSFIsVUFBVTtZQUpWLGNBQWM7NENBc0NWLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxXQUFXOzs7bUJBWnJCLEtBQUssU0FBQyxhQUFhOzs7Ozs7O0lBRnBCLHFDQUFrRDs7SUFFbEQsc0NBQ1U7O0lBRVYsNENBQXdEOztJQUN4RCxvREFBMkI7O0lBQzNCLHFEQUE0Qjs7Ozs7SUFFaEIsMERBQW1FOzs7OztJQUM1RSwwQ0FBbUM7Ozs7O0lBQ25DLDRDQUF1Qzs7Ozs7SUFDdkMsZ0RBQStDOzs7OztJQUMvQywwQ0FBZ0Q7Ozs7O0lBQ2hELDRDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nLFxuXHRleHBvcnRBczogJ2d1aVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRASW5wdXQoJ2d1aS10b29sdGlwJylcblx0dGV4dCA9ICcnO1xuXG5cdHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNUb29sdGlwQ29tcG9uZW50PiA9IG51bGw7XG5cdHRvb2x0aXBUb3BQb3NpdGlvbjogbnVtYmVyO1xuXHR0b29sdGlwTGVmdFBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3Qgb3BlbiQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKSxcblx0XHRcdGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xuXG5cdFx0b3BlbiRcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuXHRcdGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHQgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljVG9vbHRpcENvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0ICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcblxuXHRcdHRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0Y29uc3QgZG9tRWxlbWVudCA9ICh0b29sdGlwUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZiA9IHRvb2x0aXBSZWY7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKCk7XG5cblx0XHR0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29ycmVjdFBvc2l0aW9uKCk7XG5cdFx0dGhpcy50b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy50b29sdGlwUmVmLmhvc3RWaWV3KTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xuXHRcdHRoaXMudG9vbHRpcFJlZiA9IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdGVsZW1lbnRSZWN0ID0gZWxlbWVudFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbiA9XG5cdFx0XHRcdGVsZW1lbnRCb3R0b20gKyB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0XHQtIGVsZW1lbnRSZWYub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdC0gRmFicmljVG9vbHRpcERpcmVjdGl2ZS50b29sdGlwT2Zmc2V0O1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCArIGVsZW1lbnRMZWZ0ICsgZWxlbWVudFJlZi5vZmZzZXRXaWR0aCAvIDI7XG5cblx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5sZWZ0ID0gdGhpcy50b29sdGlwTGVmdFBvc2l0aW9uO1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=