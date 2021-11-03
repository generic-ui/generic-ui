import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, Type } from '@angular/core';
import { Theme } from '../../themes/theme';
import { DialogService } from '../common/dialog.service';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import * as i0 from "@angular/core";
export declare class FabricDrawerService extends DialogService implements OnDestroy {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private document;
    drawerRef: ComponentRef<FabricNestedDialogComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    open(element: ElementRef, component: Type<FabricNestedDialogComponent>, config?: {
        injector?: Injector;
        theme?: Theme;
        closeOnClickOutside?: boolean;
    }): void;
    close(): void;
    private closeOnEscKey;
    private createAndAppend;
    private removeDrawer;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDrawerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDrawerService>;
}
//# sourceMappingURL=fabric-drawer.service.d.ts.map