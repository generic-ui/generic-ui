import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
import * as i0 from "@angular/core";
export declare class FabricProgressSpinnerComponent extends AbstractSpinner implements OnChanges, OnInit {
    value: number;
    mode: SpinnerMode;
    color: string;
    animationsDisabled: boolean;
    secondCircleDisabled: boolean;
    valuePercentage: number;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    protected calculateValuePercentage(circumference: number, value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricProgressSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricProgressSpinnerComponent, "gui-progress-spinner", never, { "value": "value"; "mode": "mode"; "color": "color"; }, {}, never, never>;
}
//# sourceMappingURL=progress-spinner.component.d.ts.map