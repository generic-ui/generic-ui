/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataType } from '../field/data-type/data-type';
var SearchManager = /** @class */ (function () {
    function SearchManager() {
        this.searchFields = [];
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
            return field.getDataType() === DataType.STRING;
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
        var e_1, _a;
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        /** @type {?} */
        var searchedItems = new Set();
        for (var i = 0; i < entities.length; i += 1) {
            try {
                for (var _b = (e_1 = void 0, tslib_1.__values(this.searchFields)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var field = _c.value;
                    if (this.filterString(entities[i], field)) {
                        searchedItems.add(entities[i]);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return Array.from(searchedItems);
    };
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    SearchManager.prototype.filterString = /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        /** @type {?} */
        var value = field.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    SearchManager.prototype.filterNumber = /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        /** @type {?} */
        var numberValue = field.getValue(item);
        return numberValue > this.searchPhrase;
    };
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    SearchManager.prototype.filterBoolean = /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        /** @type {?} */
        var booleanValue = field.getValue(item);
        return booleanValue === this.searchPhrase;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZWFyY2gubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd4RDtJQUFBO1FBRVMsaUJBQVksR0FBaUIsRUFBRSxDQUFDO0lBd0V6QyxDQUFDOzs7Ozs7SUFwRUEsdUNBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBb0IsRUFBRSxZQUFvQjtRQUV6RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDs7WUFFRyxnQkFBZ0IsR0FDbkIsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEtBQVk7WUFDMUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxDQUFDLEVBQUM7UUFFSCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxRQUFpQzs7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7O1lBRUcsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFFNUMsS0FBa0IsSUFBQSxvQkFBQSxpQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWhDLElBQUksS0FBSyxXQUFBO29CQUViLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQzFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQy9CO2lCQUNEOzs7Ozs7Ozs7U0FDRDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7O0lBRU8sb0NBQVk7Ozs7OztJQUFwQixVQUFxQixJQUFzQixFQUFFLEtBQVk7O1lBQ2xELEtBQUssR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUV4QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Ozs7OztJQUVPLG9DQUFZOzs7Ozs7SUFBcEIsVUFBcUIsSUFBc0IsRUFBRSxLQUFZOztZQUNsRCxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFeEMsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRU8scUNBQWE7Ozs7OztJQUFyQixVQUFzQixJQUFzQixFQUFFLEtBQVk7O1lBQ25ELFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUV6QyxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7Ozs7Ozs7SUF4RUEscUNBQXdDOzs7OztJQUV4QyxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHNlYXJjaEZpZWxkczogQXJyYXk8RmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxGaWVsZD4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoYWJsZUZpZWxkcyA9XG5cdFx0XHRmaWVsZHMuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORztcblx0XHRcdH0pO1xuXG5cdFx0aWYgKHNlYXJjaGFibGVGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBzZWFyY2hhYmxlRmllbGRzO1xuXG5cdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdH1cblxuXHRzZWFyY2goZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNlYXJjaEZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoZWRJdGVtcyA9IG5ldyBTZXQ8T3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Zm9yIChsZXQgZmllbGQgb2YgdGhpcy5zZWFyY2hGaWVsZHMpIHtcblxuXHRcdFx0XHRpZiAodGhpcy5maWx0ZXJTdHJpbmcoZW50aXRpZXNbaV0sIGZpZWxkKSkge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHNlYXJjaGVkSXRlbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJTdHJpbmcoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBmaWVsZC5nZXRTZWFyY2hWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoUGhyYXNlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTnVtYmVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gbnVtYmVyVmFsdWUgPiB0aGlzLnNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyQm9vbGVhbihpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQpOiBib29sZWFuIHtcblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSBmaWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiBib29sZWFuVmFsdWUgPT09IHRoaXMuc2VhcmNoUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==