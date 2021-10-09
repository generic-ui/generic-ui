/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SearchingEnabledArchive } from '../domain/enabled/searching-enabled.archive';
import { SearchPhraseArchive } from '../domain/phrase/search-phrase.archive';
import { Injectable } from '@angular/core';
import { SearchWarehouse } from '../api/search.warehouse';
import { SearchHighlightArchive } from '../domain/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain/placeholder/search-placeholder.archive';
var SearchDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDomainWarehouse, _super);
    function SearchDomainWarehouse(searchingEnabledArchive, searchPhraseArchive, searchHighlightArchive, searchPlaceholderArchive) {
        var _this = _super.call(this) || this;
        _this.searchingEnabledArchive = searchingEnabledArchive;
        _this.searchPhraseArchive = searchPhraseArchive;
        _this.searchHighlightArchive = searchHighlightArchive;
        _this.searchPlaceholderArchive = searchPlaceholderArchive;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onSearchEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.searchingEnabledArchive.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onPhrase = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.searchPhraseArchive.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onHighlight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.searchHighlightArchive.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainWarehouse.prototype.onPlaceholder = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.searchPlaceholderArchive.on(structureId);
    };
    SearchDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchDomainWarehouse.ctorParameters = function () { return [
        { type: SearchingEnabledArchive },
        { type: SearchPhraseArchive },
        { type: SearchHighlightArchive },
        { type: SearchPlaceholderArchive }
    ]; };
    return SearchDomainWarehouse;
}(SearchWarehouse));
export { SearchDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchingEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchPhraseArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRzVGO0lBQzJDLGlEQUFlO0lBRXpELCtCQUE2Qix1QkFBZ0QsRUFDekQsbUJBQXdDLEVBQ3hDLHNCQUE4QyxFQUM5Qyx3QkFBa0Q7UUFIdEUsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDekQseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7O0lBRXRFLENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixXQUF3QjtRQUN2QyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxXQUF3QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBeEJELFVBQVU7Ozs7Z0JBVkYsdUJBQXVCO2dCQUN2QixtQkFBbUI7Z0JBS25CLHNCQUFzQjtnQkFDdEIsd0JBQXdCOztJQTZCakMsNEJBQUM7Q0FBQSxBQTFCRCxDQUMyQyxlQUFlLEdBeUJ6RDtTQXpCWSxxQkFBcUI7Ozs7OztJQUVyQix3REFBaUU7Ozs7O0lBQzFFLG9EQUF5RDs7Ozs7SUFDekQsdURBQStEOzs7OztJQUMvRCx5REFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9lbmFibGVkL3NlYXJjaGluZy1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9waHJhc2Uvc2VhcmNoLXBocmFzZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaERvbWFpbldhcmVob3VzZSBleHRlbmRzIFNlYXJjaFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWFyY2hpbmdFbmFibGVkQXJjaGl2ZTogU2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoUGhyYXNlQXJjaGl2ZTogU2VhcmNoUGhyYXNlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uU2VhcmNoRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hpbmdFbmFibGVkQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblBocmFzZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaFBocmFzZUFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25IaWdobGlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblBsYWNlaG9sZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=