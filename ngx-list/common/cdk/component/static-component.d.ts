import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiComponent } from './gui-component';
export declare abstract class StaticComponent extends GuiComponent implements OnInit {
    private readonly changeDetectorRef;
    protected constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
}
