import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
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
            .pipe(this.takeUntil())
            .subscribe(() => this.show());
        close$
            .pipe(this.takeUntil())
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
        this.applicationRef.detachView(this.tooltipRef.hostView);
        this.tooltipRef.destroy();
        this.tooltipRef = null;
    }
    calculateCords() {
        const elementRef = this.elementRef.nativeElement, elementRect = elementRef.getBoundingClientRect(), elementBottom = elementRect.bottom, elementLeft = elementRect.left;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU85RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYztJQVV6RCxZQUE2Qix3QkFBa0QsRUFDM0QsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDWixRQUFhLEVBQ1YsVUFBZTtRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQU5vQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVh4RCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVYsZUFBVSxHQUF5QyxJQUFJLENBQUM7SUFXeEQsQ0FBQztJQUVELFFBQVE7UUFDUCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FB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UUFBUTtZQUhSLFVBQVU7WUFKVixjQUFjOzRDQXNDVixNQUFNLFNBQUMsUUFBUTs0Q0FDZixNQUFNLFNBQUMsV0FBVzs7O21CQVpyQixLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktdG9vbHRpcF0nLFxuXHRleHBvcnRBczogJ2d1aVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRASW5wdXQoJ2d1aS10b29sdGlwJylcblx0dGV4dCA9ICcnO1xuXG5cdHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNUb29sdGlwQ29tcG9uZW50PiA9IG51bGw7XG5cdHRvb2x0aXBUb3BQb3NpdGlvbjogbnVtYmVyO1xuXHR0b29sdGlwTGVmdFBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IGFueSxcblx0XHRcdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3Qgb3BlbiQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKSxcblx0XHRcdGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xuXG5cdFx0b3BlbiRcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdGNsb3NlJFxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuXHRcdGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHQgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljVG9vbHRpcENvbXBvbmVudClcblx0XHRcdFx0XHRcdFx0ICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuXHRcdHRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcblxuXHRcdHRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0Y29uc3QgZG9tRWxlbWVudCA9ICh0b29sdGlwUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZiA9IHRvb2x0aXBSZWY7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKCk7XG5cblx0XHR0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29ycmVjdFBvc2l0aW9uKCk7XG5cdFx0dGhpcy50b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy50b29sdGlwUmVmLmhvc3RWaWV3KTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xuXHRcdHRoaXMudG9vbHRpcFJlZiA9IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdGVsZW1lbnRSZWN0ID0gZWxlbWVudFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbiA9XG5cdFx0XHRcdGVsZW1lbnRCb3R0b20gKyB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0XHQtIGVsZW1lbnRSZWYub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdC0gRmFicmljVG9vbHRpcERpcmVjdGl2ZS50b29sdGlwT2Zmc2V0O1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCArIGVsZW1lbnRMZWZ0ICsgZWxlbWVudFJlZi5vZmZzZXRXaWR0aCAvIDI7XG5cblx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5sZWZ0ID0gdGhpcy50b29sdGlwTGVmdFBvc2l0aW9uO1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=