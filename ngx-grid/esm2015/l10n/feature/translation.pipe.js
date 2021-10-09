/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { TranslationFacade } from '../core/api/translation.facade';
export class TranslationPipe {
    /**
     * @param {?} changeDetectorRef
     * @param {?} translationService
     */
    constructor(changeDetectorRef, translationService) {
        this.changeDetectorRef = changeDetectorRef;
        this.translationService = translationService;
        this.actualTranslationValue = '';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription =
            this.translationService
                .onTranslation()
                .subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            (translation) => {
                /** @type {?} */
                const value = translation[key];
                if (!value) {
                    this.actualTranslationValue = key;
                }
                this.actualTranslationValue = value;
                this.changeDetectorRef.markForCheck();
            }));
        return this.actualTranslationValue;
    }
}
TranslationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'guiTranslate',
                pure: false
            },] }
];
/** @nocollapse */
TranslationPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TranslationFacade }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.actualTranslationValue;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBU25FLE1BQU0sT0FBTyxlQUFlOzs7OztJQU0zQixZQUE2QixpQkFBb0MsRUFDN0Msa0JBQXFDO1FBRDVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUxqRCwyQkFBc0IsR0FBVyxFQUFFLENBQUM7SUFNNUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFFcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWTtZQUNoQixJQUFJLENBQUMsa0JBQWtCO2lCQUNyQixhQUFhLEVBQUU7aUJBQ2YsU0FBUzs7OztZQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFOztzQkFDakMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLENBQUMsRUFBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEMsQ0FBQzs7O1lBekNELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLEtBQUs7YUFDWDs7OztZQVZRLGlCQUFpQjtZQUVqQixpQkFBaUI7Ozs7Ozs7SUFXekIsaURBQTRDOzs7OztJQUU1Qyx1Q0FBeUM7Ozs7O0lBRTdCLDRDQUFxRDs7Ozs7SUFDOUQsNkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmlwdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQFBpcGUoe1xuXHRuYW1lOiAnZ3VpVHJhbnNsYXRlJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGFjdHVhbFRyYW5zbGF0aW9uVmFsdWU6IHN0cmluZyA9ICcnO1xuXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Vcblx0XHRcdFx0Lm9uVHJhbnNsYXRpb24oKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRyYW5zbGF0aW9uW2tleV07XG5cblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdHVhbFRyYW5zbGF0aW9uVmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==