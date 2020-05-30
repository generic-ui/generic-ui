/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../field/domain/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJbEU7SUFBQTtRQUVTLGlCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUlwQyxxQkFBZ0IsR0FBb0I7WUFDM0MsUUFBUSxDQUFDLE1BQU07U0FDZixDQUFDO0lBK0NILENBQUM7Ozs7OztJQTdDQSx1Q0FBZTs7Ozs7SUFBZixVQUFnQixNQUF3QixFQUFFLFlBQW9CO1FBQTlELGlCQW1CQztRQWpCQSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDs7WUFFRyxnQkFBZ0IsR0FDbkIsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEtBQWdCO1lBQzlCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEVBQVksSUFBSyxPQUFBLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUM7UUFFSCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxRQUFpQztRQUF4QyxpQkFrQkM7UUFoQkEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7O1lBRUcsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFvQjtnQ0FFdEMsQ0FBQztZQUVULE9BQUssWUFBWTtpQkFDZixNQUFNOzs7O1lBQUMsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUE1QyxDQUE0QyxFQUFDO2lCQUMxRSxPQUFPOzs7WUFBQztnQkFDUixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDOzs7UUFOTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFBbEMsQ0FBQztTQU9UO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7Ozs7SUFyREEscUNBQTRDOzs7OztJQUU1QyxxQ0FBNkI7Ozs7O0lBRTdCLHlDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBzZWFyY2hGaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4gPSBbXTtcblxuXHRwcml2YXRlIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgZW5hYmxlZERhdGFUeXBlczogQXJyYXk8RGF0YVR5cGU+ID0gW1xuXHRcdERhdGFUeXBlLlNUUklOR1xuXHRdO1xuXG5cdGFkZFNlYXJjaFBocmFzZShmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoYWJsZUZpZWxkcyA9XG5cdFx0XHRmaWVsZHMuZmlsdGVyKChmaWVsZDogVHlwZUZpZWxkKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVuYWJsZWREYXRhVHlwZXMuc29tZSgoZHQ6IERhdGFUeXBlKSA9PiBkdCA9PT0gZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChzZWFyY2hhYmxlRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gc2VhcmNoYWJsZUZpZWxkcztcblxuXHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHR9XG5cblx0c2VhcmNoKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDAgfHwgdGhpcy5zZWFyY2hGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGVkSXRlbXMgPSBuZXcgU2V0PE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzXG5cdFx0XHRcdC5maWx0ZXIoKGZpZWxkOiBUeXBlRmllbGQpID0+IGZpZWxkLnNlYXJjaChlbnRpdGllc1tpXSwgdGhpcy5zZWFyY2hQaHJhc2UpKVxuXHRcdFx0XHQuZm9yRWFjaCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VhcmNoZWRJdGVtcy5hZGQoZW50aXRpZXNbaV0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbShzZWFyY2hlZEl0ZW1zKTtcblx0fVxuXG59XG4iXX0=