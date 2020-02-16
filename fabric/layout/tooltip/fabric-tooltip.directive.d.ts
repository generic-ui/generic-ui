import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector } from '@angular/core';
export declare class FabricTooltipDirective {
    private componentFactoryResolver;
    private injector;
    private elementRef;
    private applicationRef;
    private document;
    private platformId;
    text: string;
    tooltipRef: ComponentRef<any>;
    tooltipTopPosition: number;
    tooltipLeftPosition: number;
    private static readonly tooltipHeight;
    private static readonly tooltipOffset;
    private destroy$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, elementRef: ElementRef, applicationRef: ApplicationRef, document: any, platformId: any);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private appendTooltip;
    private removeTooltip;
    private calculateCords;
}
