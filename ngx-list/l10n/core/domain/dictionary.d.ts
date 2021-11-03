import { TranslationChange } from '../api/translation-change';
import { Translation } from '../api/translation';
export declare class Dictionary {
    private readonly translation;
    private resolver;
    changeTranslation(change: TranslationChange | Translation): void;
    getTranslation(): Translation;
    setResolver(resolver: (key: string, value: string) => string): void;
}
