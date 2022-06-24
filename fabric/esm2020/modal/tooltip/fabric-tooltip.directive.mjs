import { Directive, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FabricTooltipDirective extends FabricReactive {
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
    ngOnInit() {
        const open$ = fromEvent(this.elementRef.nativeElement, 'mouseenter'), close$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
        open$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.show());
        close$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            if (this.tooltipRef) {
                this.hide();
            }
        });
    }
    show() {
        const tooltipRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricTooltipComponent)
            .create(this.injector);
        tooltipRef.instance.text = this.text;
        tooltipRef.changeDetectorRef.detectChanges();
        const domElement = tooltipRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
        this.tooltipRef = tooltipRef;
        this.calculateCords();
        this.tooltipRef.instance.correctPosition();
        this.tooltipRef.changeDetectorRef.detectChanges();
    }
    hide() {
        if (this.tooltipRef) {
            this.applicationRef.detachView(this.tooltipRef.hostView);
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        }
    }
    calculateCords() {
        if (this.tooltipRef) {
            const elementRef = this.elementRef.nativeElement, elementRect = elementRef.getBoundingClientRect(), elementBottom = elementRect.bottom, elementLeft = elementRect.left;
            if (isPlatformBrowser(this.platformId)) {
                this.tooltipTopPosition =
                    elementBottom + window.scrollY
                        - elementRef.offsetHeight
                        - FabricTooltipDirective.tooltipOffset;
                this.tooltipLeftPosition = window.scrollX + elementLeft + elementRef.offsetWidth / 2;
                if (this.tooltipTopPosition) {
                    this.tooltipRef.instance.top = this.tooltipTopPosition;
                }
                if (this.tooltipLeftPosition) {
                    this.tooltipRef.instance.left = this.tooltipLeftPosition;
                }
                this.tooltipRef.changeDetectorRef.detectChanges();
            }
        }
    }
}
FabricTooltipDirective.tooltipOffset = 8;
FabricTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipDirective, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.Injector }, { token: i0.ElementRef }, { token: i0.ApplicationRef }, { token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
FabricTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: FabricTooltipDirective, selector: "[gui-tooltip]", inputs: { text: ["gui-tooltip", "text"] }, exportAs: ["guiTooltip"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gui-tooltip]',
                    exportAs: 'guiTooltip'
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { text: [{
                type: Input,
                args: ['gui-tooltip']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTixTQUFTLEVBR1QsTUFBTSxFQUVOLEtBQUssRUFHTCxXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7SUFZekQsWUFBNkIsd0JBQWtELEVBQzNELFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQ1osUUFBYSxFQUNWLFVBQWU7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFOb0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGVBQVUsR0FBVixVQUFVLENBQUs7UUFieEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGVBQVUsR0FBZ0QsSUFBSSxDQUFDO0lBYS9ELENBQUM7SUFFRCxRQUFRO1FBQ1AsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxVQUFVLENB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QUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNsRDtTQUNEO0lBQ0YsQ0FBQzs7QUE5RnVCLG9DQUFhLEdBQVcsQ0FBRSxDQUFBO29IQUR0QyxzQkFBc0IsMElBZ0J2QixRQUFRLGFBQ1IsV0FBVzt3R0FqQlYsc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxZQUFZO2lCQUN0Qjs7MEJBaUJJLE1BQU07MkJBQUMsUUFBUTs7MEJBQ2YsTUFBTTsyQkFBQyxXQUFXOzRDQWJ0QixJQUFJO3NCQURILEtBQUs7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nLFxuXHRleHBvcnRBczogJ2d1aVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRASW5wdXQoJ2d1aS10b29sdGlwJylcblx0dGV4dCA9ICcnO1xuXG5cdHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNUb29sdGlwQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuXG5cdHRvb2x0aXBUb3BQb3NpdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdHRvb2x0aXBMZWZ0UG9zaXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG5cblx0XHRvcGVuJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93KCkpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3coKTogdm9pZCB7XG5cdFx0Y29uc3QgdG9vbHRpcFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdCAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNUb29sdGlwQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHQgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50ZXh0ID0gdGhpcy50ZXh0O1xuXG5cdFx0dG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHRjb25zdCBkb21FbGVtZW50ID0gKHRvb2x0aXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG5cdFx0dGhpcy50b29sdGlwUmVmID0gdG9vbHRpcFJlZjtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb3JyZWN0UG9zaXRpb24oKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudG9vbHRpcFJlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdGVsZW1lbnRSZWN0ID0gZWxlbWVudFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRcdHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uID1cblx0XHRcdFx0XHRlbGVtZW50Qm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0XHRcdFx0XHQtIGVsZW1lbnRSZWYub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBPZmZzZXQ7XG5cblx0XHRcdFx0dGhpcy50b29sdGlwTGVmdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggKyBlbGVtZW50TGVmdCArIGVsZW1lbnRSZWYub2Zmc2V0V2lkdGggLyAyO1xuXG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbikge1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb24pIHtcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UubGVmdCA9IHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==