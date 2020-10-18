/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslationService } from '../api/translation.service';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
export class TranslationServiceImpl extends TranslationService {
    constructor() {
        super(...arguments);
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    getTranslation() {
        return this.dictionary.getTranslation();
    }
    /**
     * @return {?}
     */
    onTranslation() {
        return this.dictionary$
            .asObservable();
    }
    /**
     * @return {?}
     */
    setDefaultTranslation() {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    }
    /**
     * @param {?} change
     * @return {?}
     */
    changeTranslation(change) {
        this.changeTranslationAndPropagate(change);
    }
    /**
     * @param {?} resolver
     * @return {?}
     */
    setResolver(resolver) {
        this.setResolverAndPropagate(resolver);
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    changeTranslationAndPropagate(change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
    /**
     * @private
     * @param {?} resolver
     * @return {?}
     */
    setResolverAndPropagate(resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
}
TranslationServiceImpl.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationServiceImpl.prototype.defaultTranslation;
    /**
     * @type {?}
     * @private
     */
    TranslationServiceImpl.prototype.dictionary;
    /**
     * @type {?}
     * @private
     */
    TranslationServiceImpl.prototype.dictionary$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsMTBuL2NvcmUvZG9tYWluL3RyYW5zbGF0aW9uLnNlcnZpY2UtaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBRTFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUkxQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCO0lBRDlEOztRQUdrQix1QkFBa0IsR0FBZ0IsYUFBYSxDQUFDO1FBRWhELGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTFDLGdCQUFXLEdBQXlCLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBb0MzRSxDQUFDOzs7O0lBbENBLGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ2pCLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBeUI7UUFDMUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWdEO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyw2QkFBNkIsQ0FBQyxNQUF1QztRQUU1RSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxRQUFnRDtRQUUvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBMUNELFVBQVU7Ozs7Ozs7SUFHVixvREFBaUU7Ozs7O0lBRWpFLDRDQUEyRDs7Ozs7SUFFM0QsNkNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNoYW5nZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgZW5UcmFuc2xhdGlvbiB9IGZyb20gJy4vbGFuZy9lbic7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZWZhdWx0VHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0gZW5UcmFuc2xhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnk6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeSQ6IFN1YmplY3Q8VHJhbnNsYXRpb24+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG9uVHJhbnNsYXRpb24oKTogT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHNldERlZmF1bHRUcmFuc2xhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKHRoaXMuZGVmYXVsdFRyYW5zbGF0aW9uKTtcblx0fVxuXG5cdGNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKGNoYW5nZSk7XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSB8IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuY2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5LnNldFJlc29sdmVyKHJlc29sdmVyKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cbn1cbiJdfQ==