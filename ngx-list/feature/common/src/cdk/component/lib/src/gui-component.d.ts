import { ElementRef } from '@angular/core';
import { Changes } from './ng-changes';
import * as i0 from "@angular/core";
export declare abstract class GuiComponent {
    private readonly innerElementRef;
    private readonly innerClassModifier;
    protected constructor(innerElementRef: ElementRef);
    protected abstract getSelectorName(): string;
    addClassToHost(className: string): void;
    removeClassFromHost(className: string): void;
    hasChanged<T>(prop: Changes<T>): boolean;
    ifChanged<T>(prop: Changes<T>, callback: () => void): void;
    private addHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiComponent, never, never, {}, {}, never, never, false, never>;
}
