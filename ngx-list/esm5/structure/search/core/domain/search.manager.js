/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../field/core/domain/field/data/data-type';
var SearchManager = /** @class */ (function () {
    function SearchManager() {
        this.searchFields = [];
        this.enabledDataTypes = [
            DataType.STRING
        ];
    }
    /**
     * @param {?} fields
     * @param {?} searchPhrase
     * @return {?}
     */
    SearchManager.prototype.addSearchPhrase = /**
     * @param {?} fields
     * @param {?} searchPhrase
     * @return {?}
     */
    function (fields, searchPhrase) {
        var _this = this;
        if (!searchPhrase) {
            this.searchFields = [];
            return;
        }
        /** @type {?} */
        var searchableFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return _this.enabledDataTypes.some((/**
             * @param {?} dt
             * @return {?}
             */
            function (dt) { return dt === field.getDataType(); }));
        }));
        if (searchableFields.length === 0) {
            return;
        }
        this.searchFields = searchableFields;
        this.searchPhrase = searchPhrase;
    };
    /**
     * @return {?}
     */
    SearchManager.prototype.removeSearchFilters = /**
     * @return {?}
     */
    function () {
        this.searchFields = [];
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    SearchManager.prototype.search = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        /** @type {?} */
        var searchedItems = new Set();
        var _loop_1 = function (i) {
            this_1.searchFields
                .filter((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return field.search(entities[i], _this.searchPhrase); }))
                .forEach((/**
             * @return {?}
             */
            function () {
                searchedItems.add(entities[i]);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < entities.length; i += 1) {
            _loop_1(i);
        }
        return Array.from(searchedItems);
    };
    return SearchManager;
}());
export { SearchManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.searchFields;
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.searchPhrase;
    /**
     * @type {?}
     * @private
     */
    SearchManager.prototype.enabledDataTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUkzRTtJQUFBO1FBRVMsaUJBQVksR0FBaUIsRUFBRSxDQUFDO1FBSWhDLHFCQUFnQixHQUFvQjtZQUMzQyxRQUFRLENBQUMsTUFBTTtTQUNmLENBQUM7SUErQ0gsQ0FBQzs7Ozs7O0lBN0NBLHVDQUFlOzs7OztJQUFmLFVBQWdCLE1BQW9CLEVBQUUsWUFBb0I7UUFBMUQsaUJBbUJDO1FBakJBLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNQOztZQUVLLGdCQUFnQixHQUNyQixNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBWTtZQUMxQixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFZLElBQUssT0FBQSxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDakYsQ0FBQyxFQUFDO1FBRUgsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFFckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDJDQUFtQjs7O0lBQW5CO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sUUFBaUM7UUFBeEMsaUJBa0JDO1FBaEJBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sUUFBUSxDQUFDO1NBQ2hCOztZQUVLLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0I7Z0NBRXhDLENBQUM7WUFFVCxPQUFLLFlBQVk7aUJBQ2YsTUFBTTs7OztZQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUE1QyxDQUE0QyxFQUFDO2lCQUN0RSxPQUFPOzs7WUFBQztnQkFDUixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDOzs7UUFOTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFBbEMsQ0FBQztTQU9UO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7Ozs7SUFyREEscUNBQXdDOzs7OztJQUV4QyxxQ0FBNkI7Ozs7O0lBRTdCLHlDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hbmFnZXIge1xuXG5cdHByaXZhdGUgc2VhcmNoRmllbGRzOiBBcnJheTxGaWVsZD4gPSBbXTtcblxuXHRwcml2YXRlIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgZW5hYmxlZERhdGFUeXBlczogQXJyYXk8RGF0YVR5cGU+ID0gW1xuXHRcdERhdGFUeXBlLlNUUklOR1xuXHRdO1xuXG5cdGFkZFNlYXJjaFBocmFzZShmaWVsZHM6IEFycmF5PEZpZWxkPiwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICghc2VhcmNoUGhyYXNlKSB7XG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlYXJjaGFibGVGaWVsZHMgPVxuXHRcdFx0ZmllbGRzLmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVuYWJsZWREYXRhVHlwZXMuc29tZSgoZHQ6IERhdGFUeXBlKSA9PiBkdCA9PT0gZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChzZWFyY2hhYmxlRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gc2VhcmNoYWJsZUZpZWxkcztcblxuXHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHR9XG5cblx0c2VhcmNoKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDAgfHwgdGhpcy5zZWFyY2hGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VhcmNoZWRJdGVtcyA9IG5ldyBTZXQ8T3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHNcblx0XHRcdFx0LmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiBmaWVsZC5zZWFyY2goZW50aXRpZXNbaV0sIHRoaXMuc2VhcmNoUGhyYXNlKSlcblx0XHRcdFx0LmZvckVhY2goKCkgPT4ge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oc2VhcmNoZWRJdGVtcyk7XG5cdH1cblxufVxuIl19