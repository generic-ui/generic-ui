import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
export declare class FabricTooltipDirective extends FabricReactive implements OnInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly injector;
    private readonly elementRef;
    private readonly applicationRef;
    private readonly document;
    private readonly platformId;
    private static readonly tooltipOffset;
    text: string;
    tooltipRef: ComponentRef<FabricTooltipComponent>;
    tooltipTopPosition: number;
    tooltipLeftPosition: number;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, elementRef: ElementRef, applicationRef: ApplicationRef, document: any, platformId: any);
    ngOnInit(): void;
    private show;
    private hide;
    private calculateCords;
}
