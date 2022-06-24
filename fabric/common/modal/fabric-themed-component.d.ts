import { FabricReactive } from '../fabric-reactive';
import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import { Theme } from '../../themes/theme';
import * as i0 from "@angular/core";
export declare abstract class FabricThemedComponent extends FabricReactive implements AfterViewInit {
    private readonly elementRef;
    private readonly renderer;
    private readonly themeService;
    private static readonly CSS_CLASS_PREFIX;
    protected constructor(elementRef: ElementRef, renderer: Renderer2, themeService: FabricModalThemeService);
    ngAfterViewInit(): void;
    protected addTheme(theme: Theme): void;
    protected removeThemes(): void;
    protected getElementRef(): ElementRef;
    protected getRenderer(): Renderer2;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricThemedComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricThemedComponent, never, never, {}, {}, never>;
}
