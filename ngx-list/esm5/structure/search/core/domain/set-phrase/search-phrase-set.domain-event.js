/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBZ0Qsc0RBQW9CO0lBRW5FLG9DQUFZLFdBQXdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFnQjtRQUZwQyxZQUdDLGtCQUFNLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxTQUNoRDtRQUhtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsOENBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRixpQ0FBQztBQUFELENBQUMsQUFoQkQsQ0FBZ0Qsb0JBQW9CLEdBZ0JuRTs7Ozs7OztJQWJHLDRDQUErQjs7Ozs7SUFDL0IsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwaHJhc2U6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19