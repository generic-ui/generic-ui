import { Translation } from './translation';
import { TranslationChange } from './translation-change';
import { HermesObservable } from '@generic-ui/hermes';
export declare abstract class TranslationFacade {
    abstract getTranslation(): Translation;
    abstract onTranslation(): HermesObservable<Translation>;
    abstract setDefaultTranslation(): void;
    abstract changeTranslation(change: TranslationChange): void;
    abstract setResolver(resolver: (key: string, value: string) => string): void;
}
