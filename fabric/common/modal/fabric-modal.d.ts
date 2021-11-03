import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy, Type } from '@angular/core';
import { FabricReactive } from '../fabric-reactive';
import * as i0 from "@angular/core";
export declare abstract class FabricModal<T> extends FabricReactive implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    componentRef: ComponentRef<T>;
    protected constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: Document);
    ngOnDestroy(): void;
    abstract getComponent(): Type<T>;
    createAndAppend(injector?: Injector): void;
    removeComponent(): void;
    getComponentRef(): ComponentRef<T>;
    getInjector(): Injector;
    getDocument(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricModal<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricModal<any>, never, never, {}, {}, never>;
}
//# sourceMappingURL=fabric-modal.d.ts.map