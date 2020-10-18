import { TranslationChange } from '../api/translation-change';
import { Translation } from '../api/translation';
export declare class Dictionary {
    private resolver;
    private readonly translation;
    changeTranslation(change: TranslationChange | Translation): void;
    getTranslation(): Translation;
    setResolver(resolver: (key: string, value: string) => string): void;
}
