import { OnDestroy } from '@angular/core';
import { Reactive } from './reactive';
export declare abstract class ReactiveService extends Reactive implements OnDestroy {
    protected constructor();
    ngOnDestroy(): void;
}
