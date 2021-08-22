/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBZ0Qsc0RBQW9CO0lBRW5FLG9DQUFZLFdBQXdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFnQjtRQUZwQyxZQUdDLGtCQUFNLFdBQVcsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsNEJBQTRCLENBQUMsU0FDckU7UUFIbUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBaEJELENBQWdELG9CQUFvQixHQWdCbkU7Ozs7Ozs7SUFiRyw0Q0FBK0I7Ozs7O0lBQy9CLDZDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGhyYXNlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCB7IHBocmFzZSwgaW5pdGlhbCB9LCAnU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQnKTtcblx0fVxuXG5cdGdldFBocmFzZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBocmFzZTtcblx0fVxuXG5cdGlzSW5pdGlhbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsO1xuXHR9XG5cbn1cbiJdfQ==