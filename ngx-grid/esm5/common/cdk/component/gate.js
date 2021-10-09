/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Gate = /** @class */ (function () {
    function Gate() {
        this.streamCloser = new StreamCloser();
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    Gate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    };
    /**
     * @param {?} propertyName
     * @param {?} changes
     * @return {?}
     */
    Gate.prototype.isDefined = /**
     * @param {?} propertyName
     * @param {?} changes
     * @return {?}
     */
    function (propertyName, changes) {
        return changes[propertyName] !== undefined && changes[propertyName].currentValue !== undefined;
    };
    /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @return {?}
     */
    Gate.prototype.subscribeAndEmit = /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @return {?}
     */
    function (stream$, emitter) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            emitter.emit(value);
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    Gate.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.streamCloser.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    Gate.prototype.hermesUnsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    Gate.prototype.hermesTakeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    };
    /**
     * @protected
     * @return {?}
     */
    Gate.prototype.takeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.streamCloser.takeUntil();
    };
    return Gate;
}());
/**
 * @abstract
 * @template T
 */
export { Gate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Gate.prototype.streamCloser;
    /**
     * @type {?}
     * @private
     */
    Gate.prototype.hermesUnsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUV0Rjs7Ozs7SUFNQztRQUppQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUdoRSxDQUFDOzs7O0lBRUQsMEJBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCx3QkFBUzs7Ozs7SUFBVCxVQUFVLFlBQW9CLEVBQUUsT0FBcUI7UUFDcEQsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ2hHLENBQUM7Ozs7Ozs7SUFFRCwrQkFBZ0I7Ozs7OztJQUFoQixVQUNDLE9BQTRCLEVBQzVCLE9BQXdCO1FBRXhCLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVE7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsMEJBQVc7Ozs7SUFBckI7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRVMsZ0NBQWlCOzs7O0lBQTNCO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVTLDhCQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFUyx3QkFBUzs7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUYsV0FBQztBQUFELENBQUMsQUFoREQsSUFnREM7Ozs7Ozs7Ozs7O0lBOUNBLDRCQUFtRDs7Ozs7SUFFbkQsa0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdhdGU8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzVW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGlzRGVmaW5lZChwcm9wZXJ0eU5hbWU6IHN0cmluZywgY2hhbmdlczogTmdDaGFuZ2VzPFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdHN1YnNjcmliZUFuZEVtaXQ8Vj4oXG5cdFx0c3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxWPixcblx0XHRlbWl0dGVyOiBFdmVudEVtaXR0ZXI8Vj5cblx0KTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBWKSA9PiB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19