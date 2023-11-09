import { HermesObservable } from '@generic-ui/hermes';
export declare class GuiSubscriber {
    private readonly destroy$;
    private subscription;
    subscribe(obs$: HermesObservable<any>, next: (v: any) => void): void;
    destroy(): void;
    onError(_error: any): void;
    onComplete(): void;
}
