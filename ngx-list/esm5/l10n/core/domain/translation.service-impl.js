/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslationService } from '../api/translation.service';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
var TranslationServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(TranslationServiceImpl, _super);
    function TranslationServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultTranslation = enTranslation;
        _this.dictionary = new Dictionary();
        _this.dictionary$ = new ReplaySubject(1);
        return _this;
    }
    /**
     * @return {?}
     */
    TranslationServiceImpl.prototype.getTranslation = /**
     * @return {?}
     */
    function () {
        return this.dictionary.getTranslation();
    };
    /**
     * @return {?}
     */
    TranslationServiceImpl.prototype.onTranslation = /**
     * @return {?}
     */
    function () {
        return this.dictionary$
            .asObservable();
    };
    /**
     * @return {?}
     */
    TranslationServiceImpl.prototype.setDefaultTranslation = /**
     * @return {?}
     */
    function () {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TranslationServiceImpl.prototype.changeTranslation = /**
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
    TranslationServiceImpl.prototype.setResolver = /**
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
    TranslationServiceImpl.prototype.changeTranslationAndPropagate = /**
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
    TranslationServiceImpl.prototype.setResolverAndPropagate = /**
     * @private
     * @param {?} resolver
     * @return {?}
     */
    function (resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    };
    TranslationServiceImpl.decorators = [
        { type: Injectable }
    ];
    return TranslationServiceImpl;
}(TranslationService));
export { TranslationServiceImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsMTBuL2NvcmUvZG9tYWluL3RyYW5zbGF0aW9uLnNlcnZpY2UtaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHMUM7SUFDNEMsa0RBQWtCO0lBRDlEO1FBQUEscUVBMkNDO1FBeENpQix3QkFBa0IsR0FBZ0IsYUFBYSxDQUFDO1FBRWhELGdCQUFVLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUUxQyxpQkFBVyxHQUF5QixJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFvQzNFLENBQUM7Ozs7SUFsQ0EsK0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCw4Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ2pCLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzREFBcUI7OztJQUFyQjtRQUNDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELGtEQUFpQjs7OztJQUFqQixVQUFrQixNQUF5QjtRQUMxQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksUUFBZ0Q7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLDhEQUE2Qjs7Ozs7SUFBckMsVUFBc0MsTUFBdUM7UUFFNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sd0RBQXVCOzs7OztJQUEvQixVQUFnQyxRQUFnRDtRQUUvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBMUNELFVBQVU7O0lBMkNYLDZCQUFDO0NBQUEsQUEzQ0QsQ0FDNEMsa0JBQWtCLEdBMEM3RDtTQTFDWSxzQkFBc0I7Ozs7OztJQUVsQyxvREFBaUU7Ozs7O0lBRWpFLDRDQUEyRDs7Ozs7SUFFM0QsNkNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNoYW5nZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgZW5UcmFuc2xhdGlvbiB9IGZyb20gJy4vbGFuZy9lbic7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZWZhdWx0VHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0gZW5UcmFuc2xhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnk6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeSQ6IFN1YmplY3Q8VHJhbnNsYXRpb24+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG9uVHJhbnNsYXRpb24oKTogT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHNldERlZmF1bHRUcmFuc2xhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKHRoaXMuZGVmYXVsdFRyYW5zbGF0aW9uKTtcblx0fVxuXG5cdGNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKGNoYW5nZSk7XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSB8IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuY2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5LnNldFJlc29sdmVyKHJlc29sdmVyKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cbn1cbiJdfQ==