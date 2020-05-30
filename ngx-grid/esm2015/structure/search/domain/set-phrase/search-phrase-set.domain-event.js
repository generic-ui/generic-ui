/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SearchPhraseSetDomainEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} phrase
     * @param {?} initial
     */
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, 'SearchPhraseSetDomainEvent');
        this.phrase = phrase;
        this.initial = initial;
    }
    /**
     * @return {?}
     */
    getPhrase() {
        return this.phrase;
    }
    /**
     * @return {?}
     */
    isInitial() {
        return this.initial;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxXQUF3Qjs7Ozs7O0lBRXZFLFlBQVksV0FBd0IsRUFDaEIsTUFBYyxFQUNkLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQ7Ozs7OztJQWJHLDRDQUErQjs7Ozs7SUFDL0IsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwaHJhc2U6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19