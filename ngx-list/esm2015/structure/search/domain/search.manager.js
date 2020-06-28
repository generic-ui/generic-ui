/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFJeEUsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFFUyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFJaEMscUJBQWdCLEdBQW9CO1lBQzNDLFFBQVEsQ0FBQyxNQUFNO1NBQ2YsQ0FBQztJQStDSCxDQUFDOzs7Ozs7SUE3Q0EsZUFBZSxDQUFDLE1BQW9CLEVBQUUsWUFBb0I7UUFFekQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1A7O1lBRUcsZ0JBQWdCLEdBQ25CLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxFQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUM7UUFFSCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDO1FBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sUUFBUSxDQUFDO1NBQ2hCOztZQUVHLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0I7UUFFL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUU1QyxJQUFJLENBQUMsWUFBWTtpQkFDZixNQUFNOzs7O1lBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQztpQkFDdEUsT0FBTzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNiLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUQ7Ozs7OztJQXJEQSxxQ0FBd0M7Ozs7O0lBRXhDLHFDQUE2Qjs7Ozs7SUFFN0IseUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hbmFnZXIge1xuXG5cdHByaXZhdGUgc2VhcmNoRmllbGRzOiBBcnJheTxGaWVsZD4gPSBbXTtcblxuXHRwcml2YXRlIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgZW5hYmxlZERhdGFUeXBlczogQXJyYXk8RGF0YVR5cGU+ID0gW1xuXHRcdERhdGFUeXBlLlNUUklOR1xuXHRdO1xuXG5cdGFkZFNlYXJjaFBocmFzZShmaWVsZHM6IEFycmF5PEZpZWxkPiwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICghc2VhcmNoUGhyYXNlKSB7XG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hhYmxlRmllbGRzID1cblx0XHRcdGZpZWxkcy5maWx0ZXIoKGZpZWxkOiBGaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbmFibGVkRGF0YVR5cGVzLnNvbWUoKGR0OiBEYXRhVHlwZSkgPT4gZHQgPT09IGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc2VhcmNoYWJsZUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IHNlYXJjaGFibGVGaWVsZHM7XG5cblx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0fVxuXG5cdHNlYXJjaChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuc2VhcmNoRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hlZEl0ZW1zID0gbmV3IFNldDxPcmlnaW5JdGVtRW50aXR5PigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkc1xuXHRcdFx0XHQuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IGZpZWxkLnNlYXJjaChlbnRpdGllc1tpXSwgdGhpcy5zZWFyY2hQaHJhc2UpKVxuXHRcdFx0XHQuZm9yRWFjaCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VhcmNoZWRJdGVtcy5hZGQoZW50aXRpZXNbaV0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbShzZWFyY2hlZEl0ZW1zKTtcblx0fVxuXG59XG4iXX0=