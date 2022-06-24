import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class FabricReactive implements OnDestroy {
    protected readonly unsubscribe$: Subject<void>;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricReactive, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabricReactive, never, never, {}, {}, never>;
}
