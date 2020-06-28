/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFJeEU7SUFBQTtRQUVTLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUloQyxxQkFBZ0IsR0FBb0I7WUFDM0MsUUFBUSxDQUFDLE1BQU07U0FDZixDQUFDO0lBK0NILENBQUM7Ozs7OztJQTdDQSx1Q0FBZTs7Ozs7SUFBZixVQUFnQixNQUFvQixFQUFFLFlBQW9CO1FBQTFELGlCQW1CQztRQWpCQSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDs7WUFFRyxnQkFBZ0IsR0FDbkIsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEtBQVk7WUFDMUIsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsRUFBWSxJQUFLLE9BQUEsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQ2pGLENBQUMsRUFBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCwyQ0FBbUI7OztJQUFuQjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLFFBQWlDO1FBQXhDLGlCQWtCQztRQWhCQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLFFBQVEsQ0FBQztTQUNoQjs7WUFFRyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW9CO2dDQUV0QyxDQUFDO1lBRVQsT0FBSyxZQUFZO2lCQUNmLE1BQU07Ozs7WUFBQyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBNUMsQ0FBNEMsRUFBQztpQkFDdEUsT0FBTzs7O1lBQUM7Z0JBQ1IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQzs7O1FBTkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQWxDLENBQUM7U0FPVDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDOzs7Ozs7O0lBckRBLHFDQUF3Qzs7Ozs7SUFFeEMscUNBQTZCOzs7OztJQUU3Qix5Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBzZWFyY2hGaWVsZHM6IEFycmF5PEZpZWxkPiA9IFtdO1xuXG5cdHByaXZhdGUgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBlbmFibGVkRGF0YVR5cGVzOiBBcnJheTxEYXRhVHlwZT4gPSBbXG5cdFx0RGF0YVR5cGUuU1RSSU5HXG5cdF07XG5cblx0YWRkU2VhcmNoUGhyYXNlKGZpZWxkczogQXJyYXk8RmllbGQ+LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFzZWFyY2hQaHJhc2UpIHtcblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGFibGVGaWVsZHMgPVxuXHRcdFx0ZmllbGRzLmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVuYWJsZWREYXRhVHlwZXMuc29tZSgoZHQ6IERhdGFUeXBlKSA9PiBkdCA9PT0gZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChzZWFyY2hhYmxlRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gc2VhcmNoYWJsZUZpZWxkcztcblxuXHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHR9XG5cblx0c2VhcmNoKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDAgfHwgdGhpcy5zZWFyY2hGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGVkSXRlbXMgPSBuZXcgU2V0PE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzXG5cdFx0XHRcdC5maWx0ZXIoKGZpZWxkOiBGaWVsZCkgPT4gZmllbGQuc2VhcmNoKGVudGl0aWVzW2ldLCB0aGlzLnNlYXJjaFBocmFzZSkpXG5cdFx0XHRcdC5mb3JFYWNoKCgpID0+IHtcblx0XHRcdFx0XHRzZWFyY2hlZEl0ZW1zLmFkZChlbnRpdGllc1tpXSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHNlYXJjaGVkSXRlbXMpO1xuXHR9XG5cbn1cbiJdfQ==