/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
/**
 * @abstract
 * @template T
 */
export class Gate {
    /**
     * @protected
     */
    constructor() {
        this.streamCloser = new StreamCloser();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.streamCloser.unsubscribe();
    }
    /**
     * @param {?} propertyName
     * @param {?} changes
     * @return {?}
     */
    isDefined(propertyName, changes) {
        return changes[propertyName] !== undefined && changes[propertyName].currentValue !== undefined;
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.streamCloser.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return this.streamCloser.takeUntil();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Gate.prototype.streamCloser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQUV6RCxNQUFNLE9BQWdCLElBQUk7Ozs7SUFJekI7UUFGaUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR25ELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsWUFBb0IsRUFBRSxPQUFxQjtRQUNwRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBRUQ7Ozs7OztJQXJCQSw0QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2F0ZTxUID0gYW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGlzRGVmaW5lZChwcm9wZXJ0eU5hbWU6IHN0cmluZywgY2hhbmdlczogTmdDaGFuZ2VzPFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19