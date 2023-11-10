import { Directive, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FabricTooltipDirective extends FabricReactive {
    componentFactoryResolver;
    injector;
    elementRef;
    applicationRef;
    document;
    platformId;
    static tooltipOffset = 8;
    text = '';
    tooltipRef = null;
    tooltipTopPosition;
    tooltipLeftPosition;
    constructor(componentFactoryResolver, injector, elementRef, applicationRef, document, platformId) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.document = document;
        this.platformId = platformId;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricTooltipDirective, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.Injector }, { token: i0.ElementRef }, { token: i0.ApplicationRef }, { token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: FabricTooltipDirective, selector: "[gui-tooltip]", inputs: { text: ["gui-tooltip", "text"] }, exportAs: ["guiTooltip"], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricTooltipDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTixTQUFTLEVBR1QsTUFBTSxFQUVOLEtBQUssRUFHTCxXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7SUFhNUI7SUFDVDtJQUNBO0lBQ0E7SUFDa0I7SUFDRztJQWhCakMsTUFBTSxDQUFVLGFBQWEsR0FBVyxDQUFDLENBQUM7SUFHbEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVWLFVBQVUsR0FBZ0QsSUFBSSxDQUFDO0lBRS9ELGtCQUFrQixDQUFxQjtJQUV2QyxtQkFBbUIsQ0FBcUI7SUFFeEMsWUFBNkIsd0JBQWtELEVBQzNELFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQ1osUUFBYSxFQUNWLFVBQWU7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFOb0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1osYUFBUSxH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SSxDQUFDLG1CQUFtQixFQUFFO29CQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUN6RDtnQkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2xEO1NBQ0Q7SUFDRixDQUFDO3dHQWhHVyxzQkFBc0IsMElBaUJ2QixRQUFRLGFBQ1IsV0FBVzs0RkFsQlYsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsWUFBWTtpQkFDdEI7OzBCQWtCSSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsV0FBVzs0Q0FidEIsSUFBSTtzQkFESCxLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLXRvb2x0aXBdJyxcblx0ZXhwb3J0QXM6ICdndWlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdG9vbHRpcE9mZnNldDogbnVtYmVyID0gODtcblxuXHRASW5wdXQoJ2d1aS10b29sdGlwJylcblx0dGV4dCA9ICcnO1xuXG5cdHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxGYWJyaWNUb29sdGlwQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuXG5cdHRvb2x0aXBUb3BQb3NpdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdHRvb2x0aXBMZWZ0UG9zaXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogYW55LFxuXHRcdFx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHRjb25zdCBvcGVuJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLFxuXHRcdFx0Y2xvc2UkID0gZnJvbUV2ZW50PGFueT4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG5cblx0XHRvcGVuJFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93KCkpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNob3coKTogdm9pZCB7XG5cdFx0Y29uc3QgdG9vbHRpcFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdCAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNUb29sdGlwQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHQgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0dG9vbHRpcFJlZi5pbnN0YW5jZS50ZXh0ID0gdGhpcy50ZXh0O1xuXG5cdFx0dG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHRjb25zdCBkb21FbGVtZW50ID0gKHRvb2x0aXBSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG5cdFx0dGhpcy50b29sdGlwUmVmID0gdG9vbHRpcFJlZjtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoKTtcblxuXHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb3JyZWN0UG9zaXRpb24oKTtcblx0XHR0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudG9vbHRpcFJlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b29sdGlwUmVmKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdGVsZW1lbnRSZWN0ID0gZWxlbWVudFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRcdHRoaXMudG9vbHRpcFRvcFBvc2l0aW9uID1cblx0XHRcdFx0XHRlbGVtZW50Qm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0XHRcdFx0XHQtIGVsZW1lbnRSZWYub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0LSBGYWJyaWNUb29sdGlwRGlyZWN0aXZlLnRvb2x0aXBPZmZzZXQ7XG5cblx0XHRcdFx0dGhpcy50b29sdGlwTGVmdFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggKyBlbGVtZW50TGVmdCArIGVsZW1lbnRSZWYub2Zmc2V0V2lkdGggLyAyO1xuXG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbikge1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS50b3AgPSB0aGlzLnRvb2x0aXBUb3BQb3NpdGlvbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLnRvb2x0aXBMZWZ0UG9zaXRpb24pIHtcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UubGVmdCA9IHRoaXMudG9vbHRpcExlZnRQb3NpdGlvbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==