import { Observable } from 'rxjs';
import { Translation } from './translation';
import { TranslationChange } from './translation-change';
export declare abstract class TranslationService {
    abstract getTranslation(): Translation;
    abstract onTranslation(): Observable<Translation>;
    abstract setDefaultTranslation(): void;
    abstract changeTranslation(change: TranslationChange): void;
    abstract setResolver(resolver: (key: string, value: string) => string): void;
}
