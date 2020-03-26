import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
export declare class FabricTooltipDirective implements OnInit, OnDestroy {
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
    ngOnInit(): void;
    ngOnDestroy(): void;
    private show;
    private hide;
    private calculateCords;
}
