import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class FabricReactive implements OnDestroy {
    private readonly unsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    protected takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricReactive, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricReactive, never, never, {}, {}, never>;
}
//# sourceMappingURL=fabric-reactive.d.ts.map