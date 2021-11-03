import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
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
}
