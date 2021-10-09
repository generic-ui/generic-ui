/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslationFacade } from '../api/translation.facade';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
import { HermesReplaySubject } from '@generic-ui/hermes';
export class TranslationDomainFacade extends TranslationFacade {
    constructor() {
        super(...arguments);
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new HermesReplaySubject(1);
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
        return this.dictionary$.toObservable();
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
TranslationDomainFacade.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationDomainFacade.prototype.defaultTranslation;
    /**
     * @type {?}
     * @private
     */
    TranslationDomainFacade.prototype.dictionary;
    /**
     * @type {?}
     * @private
     */
    TranslationDomainFacade.prototype.dictionary$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi90cmFuc2xhdGlvbi5kb21haW4tZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQW9CLG1CQUFtQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBSTFGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7SUFEOUQ7O1FBR2tCLHVCQUFrQixHQUFnQixhQUFhLENBQUM7UUFFaEQsZUFBVSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFFMUMsZ0JBQVcsR0FBK0IsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQW1DdkYsQ0FBQzs7OztJQWpDQSxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBeUI7UUFDMUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWdEO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyw2QkFBNkIsQ0FBQyxNQUF1QztRQUU1RSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxRQUFnRDtRQUUvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBekNELFVBQVU7Ozs7Ozs7SUFHVixxREFBaUU7Ozs7O0lBRWpFLDZDQUEyRDs7Ozs7SUFFM0QsOENBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IGVuVHJhbnNsYXRpb24gfSBmcm9tICcuL2xhbmcvZW4nO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNSZXBsYXlTdWJqZWN0LCBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Eb21haW5GYWNhZGUgZXh0ZW5kcyBUcmFuc2xhdGlvbkZhY2FkZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZWZhdWx0VHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0gZW5UcmFuc2xhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnk6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeSQ6IEhlcm1lc1N1YmplY3Q8VHJhbnNsYXRpb24+ID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3QoMSk7XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG9uVHJhbnNsYXRpb24oKTogSGVybWVzT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUodGhpcy5kZWZhdWx0VHJhbnNsYXRpb24pO1xuXHR9XG5cblx0Y2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlKTtcblx0fVxuXG5cdHNldFJlc29sdmVyKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VUcmFuc2xhdGlvbkFuZFByb3BhZ2F0ZShjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblxuXHRcdHRoaXMuZGljdGlvbmFyeS5jaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2UpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuc2V0UmVzb2x2ZXIocmVzb2x2ZXIpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxufVxuIl19