/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var SearchPhraseSetDomainEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPhraseSetDomainEvent, _super);
    function SearchPhraseSetDomainEvent(aggregateId, phrase, initial) {
        var _this = _super.call(this, aggregateId, 'SearchPhraseSetDomainEvent') || this;
        _this.phrase = phrase;
        _this.initial = initial;
        return _this;
    }
    /**
     * @return {?}
     */
    SearchPhraseSetDomainEvent.prototype.getPhrase = /**
     * @return {?}
     */
    function () {
        return this.phrase;
    };
    /**
     * @return {?}
     */
    SearchPhraseSetDomainEvent.prototype.isInitial = /**
     * @return {?}
     */
    function () {
        return this.initial;
    };
    return SearchPhraseSetDomainEvent;
}(DomainEvent));
export { SearchPhraseSetDomainEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetDomainEvent.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    SearchPhraseSetDomainEvent.prototype.initial;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRDtJQUFnRCxzREFBd0I7SUFFdkUsb0NBQVksV0FBd0IsRUFDaEIsTUFBYyxFQUNkLE9BQWdCO1FBRnBDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDRCQUE0QixDQUFDLFNBQ2hEO1FBSG1CLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQsOENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLGlDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFnRCxXQUFXLEdBZ0IxRDs7Ozs7OztJQWJHLDRDQUErQjs7Ozs7SUFDL0IsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwaHJhc2U6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19