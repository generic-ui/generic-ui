/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} phrase
     * @param {?} initial
     */
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, { phrase, initial }, 'SearchPhraseSetDomainEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9COzs7Ozs7SUFFbkUsWUFBWSxXQUF3QixFQUNoQixNQUFjLEVBQ2QsT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRm5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7Ozs7O0lBYkcsNENBQStCOzs7OztJQUMvQiw2Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBocmFzZTogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluaXRpYWw6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgeyBwaHJhc2UsIGluaXRpYWwgfSwgJ1NlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQaHJhc2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5waHJhc2U7XG5cdH1cblxuXHRpc0luaXRpYWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbDtcblx0fVxuXG59XG4iXX0=