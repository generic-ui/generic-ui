import { ElementRef } from '@angular/core';
export declare class FabricTooltipComponent {
    private readonly elementRef;
    text: string;
    left: number;
    top: number;
    constructor(elementRef: ElementRef);
    correctPosition(): void;
}
