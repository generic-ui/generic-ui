/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { TranslationService } from '../core/api/translation.service';
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
                name: 'translate',
                pure: false
            },] }
];
/** @nocollapse */
TranslationPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TranslationService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUXJFLE1BQU0sT0FBTyxlQUFlOzs7OztJQU0zQixZQUE2QixpQkFBb0MsRUFDN0Msa0JBQXNDO1FBRDdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUxsRCwyQkFBc0IsR0FBVyxFQUFFLENBQUM7SUFNNUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFFcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWTtZQUNoQixJQUFJLENBQUMsa0JBQWtCO2lCQUNyQixhQUFhLEVBQUU7aUJBQ2YsU0FBUzs7OztZQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFOztzQkFDakMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLENBQUMsRUFBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEMsQ0FBQzs7O1lBekNELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDs7OztZQVZRLGlCQUFpQjtZQUdqQixrQkFBa0I7Ozs7Ozs7SUFVMUIsaURBQTRDOzs7OztJQUU1Qyx1Q0FBbUM7Ozs7O0lBRXZCLDRDQUFxRDs7Ozs7SUFDOUQsNkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuXG5cbkBQaXBlKHtcblx0bmFtZTogJ3RyYW5zbGF0ZScsXG5cdHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgYWN0dWFsVHJhbnNsYXRpb25WYWx1ZTogc3RyaW5nID0gJyc7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Vcblx0XHRcdFx0Lm9uVHJhbnNsYXRpb24oKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRyYW5zbGF0aW9uW2tleV07XG5cblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdHVhbFRyYW5zbGF0aW9uVmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==