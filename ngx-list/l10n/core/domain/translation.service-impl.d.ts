import { Observable } from 'rxjs';
import { TranslationService } from '../api/translation.service';
import { Translation } from '../api/translation';
import { TranslationChange } from '../api/translation-change';
export declare class TranslationServiceImpl extends TranslationService {
    private readonly defaultTranslation;
    private readonly dictionary;
    private readonly dictionary$;
    getTranslation(): Translation;
    onTranslation(): Observable<Translation>;
    setDefaultTranslation(): void;
    changeTranslation(change: TranslationChange): void;
    setResolver(resolver: (key: string, value: string) => string): void;
    private changeTranslationAndPropagate;
    private setResolverAndPropagate;
}
