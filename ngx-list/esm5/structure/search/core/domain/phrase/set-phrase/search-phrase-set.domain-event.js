/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
var SearchPhraseSetDomainEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPhraseSetDomainEvent, _super);
    function SearchPhraseSetDomainEvent(aggregateId, phrase, initial) {
        var _this = _super.call(this, aggregateId, { phrase: phrase, initial: initial }, 'SearchPhraseSetDomainEvent') || this;
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL3BocmFzZS9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXpGO0lBQWdELHNEQUFvQjtJQUVuRSxvQ0FBWSxXQUF3QixFQUNoQixNQUFjLEVBQ2QsT0FBZ0I7UUFGcEMsWUFHQyxrQkFBTSxXQUFXLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLDRCQUE0QixDQUFDLFNBQ3JFO1FBSG1CLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQsOENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLGlDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFnRCxvQkFBb0IsR0FnQm5FOzs7Ozs7O0lBYkcsNENBQStCOzs7OztJQUMvQiw2Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBocmFzZTogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluaXRpYWw6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgeyBwaHJhc2UsIGluaXRpYWwgfSwgJ1NlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQaHJhc2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5waHJhc2U7XG5cdH1cblxuXHRpc0luaXRpYWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbDtcblx0fVxuXG59XG4iXX0=