/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl4RDtJQUFBO1FBRVMsaUJBQVksR0FBcUIsRUFBRSxDQUFDO1FBSXBDLHFCQUFnQixHQUFvQjtZQUMzQyxRQUFRLENBQUMsTUFBTTtTQUNmLENBQUM7SUErQ0gsQ0FBQzs7Ozs7O0lBN0NBLHVDQUFlOzs7OztJQUFmLFVBQWdCLE1BQXdCLEVBQUUsWUFBb0I7UUFBOUQsaUJBbUJDO1FBakJBLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNQOztZQUVHLGdCQUFnQixHQUNuQixNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBZ0I7WUFDOUIsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsRUFBWSxJQUFLLE9BQUEsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQ2pGLENBQUMsRUFBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCwyQ0FBbUI7OztJQUFuQjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLFFBQWlDO1FBQXhDLGlCQWtCQztRQWhCQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLFFBQVEsQ0FBQztTQUNoQjs7WUFFRyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW9CO2dDQUV0QyxDQUFDO1lBRVQsT0FBSyxZQUFZO2lCQUNmLE1BQU07Ozs7WUFBQyxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQTVDLENBQTRDLEVBQUM7aUJBQzFFLE9BQU87OztZQUFDO2dCQUNSLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7OztRQU5MLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUFsQyxDQUFDO1NBT1Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7Ozs7OztJQXJEQSxxQ0FBNEM7Ozs7O0lBRTVDLHFDQUE2Qjs7Ozs7SUFFN0IseUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBzZWFyY2hGaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4gPSBbXTtcblxuXHRwcml2YXRlIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgZW5hYmxlZERhdGFUeXBlczogQXJyYXk8RGF0YVR5cGU+ID0gW1xuXHRcdERhdGFUeXBlLlNUUklOR1xuXHRdO1xuXG5cdGFkZFNlYXJjaFBocmFzZShmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoYWJsZUZpZWxkcyA9XG5cdFx0XHRmaWVsZHMuZmlsdGVyKChmaWVsZDogVHlwZUZpZWxkKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVuYWJsZWREYXRhVHlwZXMuc29tZSgoZHQ6IERhdGFUeXBlKSA9PiBkdCA9PT0gZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChzZWFyY2hhYmxlRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gc2VhcmNoYWJsZUZpZWxkcztcblxuXHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHR9XG5cblx0c2VhcmNoKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDAgfHwgdGhpcy5zZWFyY2hGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGVkSXRlbXMgPSBuZXcgU2V0PE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzXG5cdFx0XHRcdC5maWx0ZXIoKGZpZWxkOiBUeXBlRmllbGQpID0+IGZpZWxkLnNlYXJjaChlbnRpdGllc1tpXSwgdGhpcy5zZWFyY2hQaHJhc2UpKVxuXHRcdFx0XHQuZm9yRWFjaCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VhcmNoZWRJdGVtcy5hZGQoZW50aXRpZXNbaV0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbShzZWFyY2hlZEl0ZW1zKTtcblx0fVxuXG59XG4iXX0=