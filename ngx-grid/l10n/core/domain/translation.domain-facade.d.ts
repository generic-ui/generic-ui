import { TranslationFacade } from '../api/translation.facade';
import { Translation } from '../api/translation';
import { TranslationChange } from '../api/translation-change';
import { HermesObservable } from '@generic-ui/hermes';
export declare class TranslationDomainFacade extends TranslationFacade {
    private readonly defaultTranslation;
    private readonly dictionary;
    private readonly dictionary$;
    constructor();
    getTranslation(): Translation;
    onTranslation(): HermesObservable<Translation>;
    setDefaultTranslation(): void;
    changeTranslation(change: TranslationChange): void;
    setResolver(resolver: (key: string, value: string) => string): void;
    private changeTranslationAndPropagate;
    private setResolverAndPropagate;
}
