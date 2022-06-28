import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { GeometryService } from './geometry.service';
import { Placement } from './placement';
import { FabricReactive } from '../../common/fabric-reactive';
import { Direction } from '../../common/icons/arrow-icon/direction';
import * as i0 from "@angular/core";
export declare class FabricDropdownComponent extends FabricReactive implements OnChanges, OnInit {
    private readonly platformId;
    private readonly elementRef;
    private readonly renderer;
    private readonly changeDetectorRef;
    private readonly geometryService;
    readonly dropdownMenuRef?: ElementRef;
    readonly containerRef?: ElementRef;
    onResize(): void;
    disabled: boolean;
    dropdownText: string;
    isArrowEnabled: boolean;
    placement?: Placement;
    width: number;
    showOnHover: boolean;
    containerWidth: number;
    containerHeight: number;
    windowSize: number;
    horizontalPosition: number;
    bottomPosition: number | null;
    topPosition: number | null;
    arrowDirection: Direction;
    private canOpenDownward;
    private canOpenUpward;
    private open;
    private readonly topBorderWidth;
    constructor(platformId: any, elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, geometryService: GeometryService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    tryToOpen(event: any): void;
    tryToOpenOnHover(): void;
    hideOnHover(): void;
    clickOutside(event: any): void;
    isDirectionLeft(): boolean;
    private openMenu;
    private showItems;
    private openDownward;
    private openUpward;
    private openRight;
    private openLeft;
    private changePlacement;
    private hideItems;
    private isContainerClicked;
    private isContainerDisabled;
    private addClass;
    private removeClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricDropdownComponent, "gui-dropdown", never, { "disabled": "disabled"; "dropdownText": "dropdownText"; "isArrowEnabled": "isArrowEnabled"; "placement": "placement"; "width": "width"; "showOnHover": "showOnHover"; }, {}, never, ["*"], false>;
}
