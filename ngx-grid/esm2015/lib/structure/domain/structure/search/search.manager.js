/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl4RCxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVTLGlCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUlwQyxxQkFBZ0IsR0FBb0I7WUFDM0MsUUFBUSxDQUFDLE1BQU07U0FDZixDQUFDO0lBK0NILENBQUM7Ozs7OztJQTdDQSxlQUFlLENBQUMsTUFBd0IsRUFBRSxZQUFvQjtRQUU3RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDs7WUFFRyxnQkFBZ0IsR0FDbkIsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxFQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUM7UUFFSCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDO1FBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sUUFBUSxDQUFDO1NBQ2hCOztZQUVHLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0I7UUFFL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUU1QyxJQUFJLENBQUMsWUFBWTtpQkFDZixNQUFNOzs7O1lBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUM7aUJBQzFFLE9BQU87OztZQUFDLEdBQUcsRUFBRTtnQkFDYixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVEOzs7Ozs7SUFyREEscUNBQTRDOzs7OztJQUU1QyxxQ0FBNkI7Ozs7O0lBRTdCLHlDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hbmFnZXIge1xuXG5cdHByaXZhdGUgc2VhcmNoRmllbGRzOiBBcnJheTxUeXBlRmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWREYXRhVHlwZXM6IEFycmF5PERhdGFUeXBlPiA9IFtcblx0XHREYXRhVHlwZS5TVFJJTkdcblx0XTtcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFzZWFyY2hQaHJhc2UpIHtcblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNlYXJjaGFibGVGaWVsZHMgPVxuXHRcdFx0ZmllbGRzLmZpbHRlcigoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbmFibGVkRGF0YVR5cGVzLnNvbWUoKGR0OiBEYXRhVHlwZSkgPT4gZHQgPT09IGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc2VhcmNoYWJsZUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IHNlYXJjaGFibGVGaWVsZHM7XG5cblx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0fVxuXG5cdHNlYXJjaChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuc2VhcmNoRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hlZEl0ZW1zID0gbmV3IFNldDxPcmlnaW5JdGVtRW50aXR5PigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkc1xuXHRcdFx0XHQuZmlsdGVyKChmaWVsZDogVHlwZUZpZWxkKSA9PiBmaWVsZC5zZWFyY2goZW50aXRpZXNbaV0sIHRoaXMuc2VhcmNoUGhyYXNlKSlcblx0XHRcdFx0LmZvckVhY2goKCkgPT4ge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oc2VhcmNoZWRJdGVtcyk7XG5cdH1cblxufVxuIl19