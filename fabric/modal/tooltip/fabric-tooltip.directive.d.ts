import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { FabricTooltipComponent } from './fabric-tooltip.component';
import { FabricReactive } from '../../common/fabric-reactive';
import * as i0 from "@angular/core";
export declare class FabricTooltipDirective extends FabricReactive implements OnInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly injector;
    private readonly elementRef;
    private readonly applicationRef;
    private readonly document;
    private readonly platformId;
    private static readonly tooltipOffset;
    text: string;
    tooltipRef: ComponentRef<FabricTooltipComponent> | null;
    tooltipTopPosition: number | undefined;
    tooltipLeftPosition: number | undefined;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, elementRef: ElementRef, applicationRef: ApplicationRef, document: any, platformId: any);
    ngOnInit(): void;
    private show;
    private hide;
    private calculateCords;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricTooltipDirective, "[gui-tooltip]", ["guiTooltip"], { "text": { "alias": "gui-tooltip"; "required": false; }; }, {}, never, never, false, never>;
}
