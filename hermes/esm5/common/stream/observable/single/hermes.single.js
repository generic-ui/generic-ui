/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesObservable } from '../hermes.observable';
import { HermesSingleSubscriber } from '../subscriber/hermes.single-subscriber';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesSingle = /** @class */ (function (_super) {
    tslib_1.__extends(HermesSingle, _super);
    function HermesSingle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    HermesSingle.prototype.createSubscriber = /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return new HermesSingleSubscriber({
            next: next,
            error: error,
            complete: complete
        });
    };
    return HermesSingle;
}(HermesObservable));
/**
 * @template T
 */
export { HermesSingle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9zaW5nbGUvaGVybWVzLnNpbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7O0FBR2hGOzs7O0lBQXFDLHdDQUFtQjtJQUF4RDs7SUFjQSxDQUFDOzs7Ozs7OztJQVpVLHVDQUFnQjs7Ozs7OztJQUExQixVQUNDLElBQXlCLEVBQ3pCLEtBQTRCLEVBQzVCLFFBQXFCO1FBR3JCLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQztZQUNqQyxJQUFJLE1BQUE7WUFDSixLQUFLLE9BQUE7WUFDTCxRQUFRLFVBQUE7U0FDUixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBcUMsZ0JBQWdCLEdBY3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IEhlcm1lc1NpbmdsZVN1YnNjcmliZXIgfSBmcm9tICcuLi9zdWJzY3JpYmVyL2hlcm1lcy5zaW5nbGUtc3Vic2NyaWJlcic7XG5cblxuZXhwb3J0IGNsYXNzIEhlcm1lc1NpbmdsZTxUPiBleHRlbmRzIEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdHByb3RlY3RlZCBjcmVhdGVTdWJzY3JpYmVyKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0XHRyZXR1cm4gbmV3IEhlcm1lc1NpbmdsZVN1YnNjcmliZXIoe1xuXHRcdFx0bmV4dCxcblx0XHRcdGVycm9yLFxuXHRcdFx0Y29tcGxldGVcblx0XHR9KTtcblx0fVxufVxuIl19