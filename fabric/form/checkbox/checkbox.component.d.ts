import { AfterViewInit, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
export declare class FabricCheckboxComponent implements OnChanges, AfterViewInit {
    private elementRef;
    private renderer;
    inputRef: ElementRef;
    name: string;
    inputChecked: boolean;
    disabled: boolean;
    readonly: boolean;
    indeterminate: boolean;
    changed: EventEmitter<boolean>;
    checked: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    check(event: Event): void;
}
