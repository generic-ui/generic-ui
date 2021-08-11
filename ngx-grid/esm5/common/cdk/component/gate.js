/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
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
    }
    /**
     * @return {?}
     */
    Gate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.streamCloser.unsubscribe();
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQUV6RDs7Ozs7SUFJQztRQUZpQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbkQsQ0FBQzs7OztJQUVELDBCQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsd0JBQVM7Ozs7O0lBQVQsVUFBVSxZQUFvQixFQUFFLE9BQXFCO1FBQ3BELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUNoRyxDQUFDOzs7OztJQUVTLDBCQUFXOzs7O0lBQXJCO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVTLHdCQUFTOzs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRixXQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7Ozs7Ozs7SUFyQkEsNEJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4vbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdhdGU8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRpc0RlZmluZWQocHJvcGVydHlOYW1lOiBzdHJpbmcsIGNoYW5nZXM6IE5nQ2hhbmdlczxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjaGFuZ2VzW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzW3Byb3BlcnR5TmFtZV0uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB0YWtlVW50aWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpO1xuXHR9XG5cbn1cbiJdfQ==