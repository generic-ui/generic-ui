import { OnDestroy } from '@angular/core';
import { Observable, Observer } from 'rxjs';
export declare abstract class SmartComponent implements OnDestroy {
    private readonly unsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    protected takeUntil(): import("../../../../../../../../../../../Users/lukaszpawelczak/Projects/gui/GenericUI/node_modules/rxjs/internal/types").MonoTypeOperatorFunction<{}>;
    protected subscribe(obs$: Observable<any>, observer: Observer<any>): void;
}
