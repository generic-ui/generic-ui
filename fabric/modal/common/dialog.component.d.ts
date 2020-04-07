import { ElementRef, Renderer2 } from '@angular/core';
import { Theme } from '../../themes/theme';
import { FabricReactive } from '../../common/fabric-reactive';
export declare abstract class DialogComponent extends FabricReactive {
    private readonly elementRef;
    private readonly renderer;
    private readonly theme;
    private static readonly CSS_CLASS_PREFIX;
    protected constructor(elementRef: ElementRef, renderer: Renderer2, theme: Theme);
    protected addTheme(): void;
}
