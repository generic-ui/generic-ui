import { ElementRef } from '@angular/core';
import { Changes } from './ng-changes';
export declare abstract class GuiComponent {
    private readonly innerElementRef;
    private readonly innerClassModifier;
    protected constructor(innerElementRef: ElementRef);
    protected abstract getSelectorName(): string;
    addClassToHost(className: string): void;
    removeClassFromHost(className: string): void;
    hasChanged<T>(prop: Changes<T>): boolean;
    private addHostClass;
}
