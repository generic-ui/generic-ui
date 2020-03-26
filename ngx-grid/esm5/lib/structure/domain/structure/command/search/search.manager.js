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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZWFyY2gubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXhEO0lBQUE7UUFFUyxpQkFBWSxHQUFxQixFQUFFLENBQUM7UUFJcEMscUJBQWdCLEdBQW9CO1lBQzNDLFFBQVEsQ0FBQyxNQUFNO1NBQ2YsQ0FBQztJQStDSCxDQUFDOzs7Ozs7SUE3Q0EsdUNBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBd0IsRUFBRSxZQUFvQjtRQUE5RCxpQkFtQkM7UUFqQkEsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1A7O1lBRUcsZ0JBQWdCLEdBQ25CLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFnQjtZQUM5QixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFZLElBQUssT0FBQSxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDakYsQ0FBQyxFQUFDO1FBRUgsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFFckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDJDQUFtQjs7O0lBQW5CO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sUUFBaUM7UUFBeEMsaUJBa0JDO1FBaEJBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sUUFBUSxDQUFDO1NBQ2hCOztZQUVHLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0I7Z0NBRXRDLENBQUM7WUFFVCxPQUFLLFlBQVk7aUJBQ2YsTUFBTTs7OztZQUFDLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBNUMsQ0FBNEMsRUFBQztpQkFDMUUsT0FBTzs7O1lBQUM7Z0JBQ1IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQzs7O1FBTkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQWxDLENBQUM7U0FPVDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDOzs7Ozs7O0lBckRBLHFDQUE0Qzs7Ozs7SUFFNUMscUNBQTZCOzs7OztJQUU3Qix5Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hbmFnZXIge1xuXG5cdHByaXZhdGUgc2VhcmNoRmllbGRzOiBBcnJheTxUeXBlRmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWREYXRhVHlwZXM6IEFycmF5PERhdGFUeXBlPiA9IFtcblx0XHREYXRhVHlwZS5TVFJJTkdcblx0XTtcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFzZWFyY2hQaHJhc2UpIHtcblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGFibGVGaWVsZHMgPVxuXHRcdFx0ZmllbGRzLmZpbHRlcigoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbmFibGVkRGF0YVR5cGVzLnNvbWUoKGR0OiBEYXRhVHlwZSkgPT4gZHQgPT09IGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc2VhcmNoYWJsZUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IHNlYXJjaGFibGVGaWVsZHM7XG5cblx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0fVxuXG5cdHNlYXJjaChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuc2VhcmNoRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hlZEl0ZW1zID0gbmV3IFNldDxPcmlnaW5JdGVtRW50aXR5PigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkc1xuXHRcdFx0XHQuZmlsdGVyKChmaWVsZDogVHlwZUZpZWxkKSA9PiBmaWVsZC5zZWFyY2goZW50aXRpZXNbaV0sIHRoaXMuc2VhcmNoUGhyYXNlKSlcblx0XHRcdFx0LmZvckVhY2goKCkgPT4ge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oc2VhcmNoZWRJdGVtcyk7XG5cdH1cblxufVxuIl19