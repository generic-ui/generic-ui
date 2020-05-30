/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../field/domain/data-type/data-type';
export class SearchManager {
    constructor() {
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
    addSearchPhrase(fields, searchPhrase) {
        if (!searchPhrase) {
            this.searchFields = [];
            return;
        }
        /** @type {?} */
        let searchableFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.enabledDataTypes.some((/**
             * @param {?} dt
             * @return {?}
             */
            (dt) => dt === field.getDataType()));
        }));
        if (searchableFields.length === 0) {
            return;
        }
        this.searchFields = searchableFields;
        this.searchPhrase = searchPhrase;
    }
    /**
     * @return {?}
     */
    removeSearchFilters() {
        this.searchFields = [];
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    search(entities) {
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        /** @type {?} */
        let searchedItems = new Set();
        for (let i = 0; i < entities.length; i += 1) {
            this.searchFields
                .filter((/**
             * @param {?} field
             * @return {?}
             */
            (field) => field.search(entities[i], this.searchPhrase)))
                .forEach((/**
             * @return {?}
             */
            () => {
                searchedItems.add(entities[i]);
            }));
        }
        return Array.from(searchedItems);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJbEUsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFFUyxpQkFBWSxHQUFxQixFQUFFLENBQUM7UUFJcEMscUJBQWdCLEdBQW9CO1lBQzNDLFFBQVEsQ0FBQyxNQUFNO1NBQ2YsQ0FBQztJQStDSCxDQUFDOzs7Ozs7SUE3Q0EsZUFBZSxDQUFDLE1BQXdCLEVBQUUsWUFBb0I7UUFFN0QsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1A7O1lBRUcsZ0JBQWdCLEdBQ25CLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztZQUFDLENBQUMsRUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7UUFDakYsQ0FBQyxFQUFDO1FBRUgsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFFckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFpQztRQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLFFBQVEsQ0FBQztTQUNoQjs7WUFFRyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW9CO1FBRS9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFNUMsSUFBSSxDQUFDLFlBQVk7aUJBQ2YsTUFBTTs7OztZQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDO2lCQUMxRSxPQUFPOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFRDs7Ozs7O0lBckRBLHFDQUE0Qzs7Ozs7SUFFNUMscUNBQTZCOzs7OztJQUU3Qix5Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hbmFnZXIge1xuXG5cdHByaXZhdGUgc2VhcmNoRmllbGRzOiBBcnJheTxUeXBlRmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWREYXRhVHlwZXM6IEFycmF5PERhdGFUeXBlPiA9IFtcblx0XHREYXRhVHlwZS5TVFJJTkdcblx0XTtcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFzZWFyY2hQaHJhc2UpIHtcblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGFibGVGaWVsZHMgPVxuXHRcdFx0ZmllbGRzLmZpbHRlcigoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbmFibGVkRGF0YVR5cGVzLnNvbWUoKGR0OiBEYXRhVHlwZSkgPT4gZHQgPT09IGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc2VhcmNoYWJsZUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IHNlYXJjaGFibGVGaWVsZHM7XG5cblx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0fVxuXG5cdHNlYXJjaChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuc2VhcmNoRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hlZEl0ZW1zID0gbmV3IFNldDxPcmlnaW5JdGVtRW50aXR5PigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkc1xuXHRcdFx0XHQuZmlsdGVyKChmaWVsZDogVHlwZUZpZWxkKSA9PiBmaWVsZC5zZWFyY2goZW50aXRpZXNbaV0sIHRoaXMuc2VhcmNoUGhyYXNlKSlcblx0XHRcdFx0LmZvckVhY2goKCkgPT4ge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oc2VhcmNoZWRJdGVtcyk7XG5cdH1cblxufVxuIl19