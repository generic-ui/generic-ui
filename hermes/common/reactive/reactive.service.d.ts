import { OnDestroy } from '@angular/core';
import { Reactive } from './reactive';
import * as i0 from "@angular/core";
export declare abstract class ReactiveService extends Reactive implements OnDestroy {
    protected constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReactiveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReactiveService>;
}
