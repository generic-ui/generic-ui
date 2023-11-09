import { OnDestroy } from '@angular/core';
import { HermesObservable, HermesSubscription } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class GuiEffects implements OnDestroy {
    private readonly destroy$;
    register(effect$: HermesObservable<any>, next: (v: any) => void, complete?: () => void): HermesSubscription;
    destroy(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GuiEffects>;
}
