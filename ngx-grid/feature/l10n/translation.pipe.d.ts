import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { TranslationFacade } from '../../core/l10n/src/api/translation.facade';
import * as i0 from "@angular/core";
export declare class TranslationPipe implements PipeTransform, OnDestroy {
    private readonly changeDetectorRef;
    private readonly translationService;
    private actualTranslationValue;
    private subscription;
    constructor(changeDetectorRef: ChangeDetectorRef, translationService: TranslationFacade);
    ngOnDestroy(): void;
    transform(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslationPipe, "guiTranslate", false>;
}
