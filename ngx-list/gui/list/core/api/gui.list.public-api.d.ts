import { TranslationChange } from '../../../../core/l10n/api/translation-change';
export interface GuiListPaging {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
}
export declare enum GuiListMode {
    LIST = 0,
    CARD = 1
}
export interface GuiListView {
    active?: GuiListMode;
    selector?: boolean;
}
export interface GuiListField {
    field?: string;
    type?: GuiListFieldType;
}
export declare enum GuiListFieldType {
    UNKNOWN = 0,
    NUMBER = 1,
    STRING = 2,
    BOOLEAN = 3,
    DATE = 4,
    CUSTOM = 5
}
export interface GuiListSearching {
    enabled?: boolean;
    placeholder?: string;
    phrase?: string;
}
export interface GuiListLocalization {
    translation?: GuiListTranslation;
    translationResolver?: (key: string, value: string) => string;
}
export declare type GuiListTranslation = TranslationChange;
export declare const GuiListDefaultTranslation: import("../../../../core/l10n/api/translation").Translation;
