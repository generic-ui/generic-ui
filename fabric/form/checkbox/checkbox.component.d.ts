import { AfterViewInit, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FabricCheckboxComponent implements OnChanges, AfterViewInit {
    private elementRef;
    private renderer;
    readonly inputRef?: ElementRef;
    name: string;
    inputChecked: boolean;
    disabled: boolean;
    readonly: boolean;
    indeterminate: boolean;
    readonly changed: EventEmitter<boolean>;
    checked: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    check(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricCheckboxComponent, "gui-checkbox", never, { "name": "name"; "inputChecked": "checked"; "disabled": "disabled"; "readonly": "readonly"; "indeterminate": "indeterminate"; }, { "changed": "changed"; }, never, ["*"], false, never>;
}
