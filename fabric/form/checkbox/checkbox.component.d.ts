import { ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
export declare class FabricCheckboxComponent implements OnChanges {
    private elementRef;
    private renderer;
    name: string;
    checked: boolean;
    disabled: boolean;
    readonly: boolean;
    changed: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    check(): void;
}
