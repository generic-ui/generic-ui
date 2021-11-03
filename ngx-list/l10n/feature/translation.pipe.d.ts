import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { TranslationFacade } from '../core/api/translation.facade';
export declare class TranslationPipe implements PipeTransform, OnDestroy {
    private readonly changeDetectorRef;
    private readonly translationService;
    private actualTranslationValue;
    private subscription;
    constructor(changeDetectorRef: ChangeDetectorRef, translationService: TranslationFacade);
    ngOnDestroy(): void;
    transform(key: string): string;
}
