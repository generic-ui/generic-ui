/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslationFacade } from '../api/translation.facade';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
import { HermesReplaySubject } from '@generic-ui/hermes';
var TranslationDomainFacade = /** @class */ (function (_super) {
    tslib_1.__extends(TranslationDomainFacade, _super);
    function TranslationDomainFacade() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultTranslation = enTranslation;
        _this.dictionary = new Dictionary();
        _this.dictionary$ = new HermesReplaySubject(1);
        return _this;
    }
    /**
     * @return {?}
     */
    TranslationDomainFacade.prototype.getTranslation = /**
     * @return {?}
     */
    function () {
        return this.dictionary.getTranslation();
    };
    /**
     * @return {?}
     */
    TranslationDomainFacade.prototype.onTranslation = /**
     * @return {?}
     */
    function () {
        return this.dictionary$.toObservable();
    };
    /**
     * @return {?}
     */
    TranslationDomainFacade.prototype.setDefaultTranslation = /**
     * @return {?}
     */
    function () {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TranslationDomainFacade.prototype.changeTranslation = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.changeTranslationAndPropagate(change);
    };
    /**
     * @param {?} resolver
     * @return {?}
     */
    TranslationDomainFacade.prototype.setResolver = /**
     * @param {?} resolver
     * @return {?}
     */
    function (resolver) {
        this.setResolverAndPropagate(resolver);
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    TranslationDomainFacade.prototype.changeTranslationAndPropagate = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    };
    /**
     * @private
     * @param {?} resolver
     * @return {?}
     */
    TranslationDomainFacade.prototype.setResolverAndPropagate = /**
     * @private
     * @param {?} resolver
     * @return {?}
     */
    function (resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    };
    TranslationDomainFacade.decorators = [
        { type: Injectable }
    ];
    return TranslationDomainFacade;
}(TranslationFacade));
export { TranslationDomainFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi90cmFuc2xhdGlvbi5kb21haW4tZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFvQixtQkFBbUIsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRjtJQUM2QyxtREFBaUI7SUFEOUQ7UUFBQSxxRUEwQ0M7UUF2Q2lCLHdCQUFrQixHQUFnQixhQUFhLENBQUM7UUFFaEQsZ0JBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTFDLGlCQUFXLEdBQStCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBbUN2RixDQUFDOzs7O0lBakNBLGdEQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCx1REFBcUI7OztJQUFyQjtRQUNDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELG1EQUFpQjs7OztJQUFqQixVQUFrQixNQUF5QjtRQUMxQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksUUFBZ0Q7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLCtEQUE2Qjs7Ozs7SUFBckMsVUFBc0MsTUFBdUM7UUFFNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8seURBQXVCOzs7OztJQUEvQixVQUFnQyxRQUFnRDtRQUUvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBekNELFVBQVU7O0lBMENYLDhCQUFDO0NBQUEsQUExQ0QsQ0FDNkMsaUJBQWlCLEdBeUM3RDtTQXpDWSx1QkFBdUI7Ozs7OztJQUVuQyxxREFBaUU7Ozs7O0lBRWpFLDZDQUEyRDs7Ozs7SUFFM0QsOENBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IGVuVHJhbnNsYXRpb24gfSBmcm9tICcuL2xhbmcvZW4nO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNSZXBsYXlTdWJqZWN0LCBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Eb21haW5GYWNhZGUgZXh0ZW5kcyBUcmFuc2xhdGlvbkZhY2FkZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZWZhdWx0VHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0gZW5UcmFuc2xhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnk6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeSQ6IEhlcm1lc1N1YmplY3Q8VHJhbnNsYXRpb24+ID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3QoMSk7XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG9uVHJhbnNsYXRpb24oKTogSGVybWVzT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUodGhpcy5kZWZhdWx0VHJhbnNsYXRpb24pO1xuXHR9XG5cblx0Y2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlKTtcblx0fVxuXG5cdHNldFJlc29sdmVyKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VUcmFuc2xhdGlvbkFuZFByb3BhZ2F0ZShjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblxuXHRcdHRoaXMuZGljdGlvbmFyeS5jaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2UpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuc2V0UmVzb2x2ZXIocmVzb2x2ZXIpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxufVxuIl19