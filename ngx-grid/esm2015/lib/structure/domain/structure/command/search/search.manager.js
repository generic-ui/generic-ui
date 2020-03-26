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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZWFyY2gubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXhELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRVMsaUJBQVksR0FBcUIsRUFBRSxDQUFDO1FBSXBDLHFCQUFnQixHQUFvQjtZQUMzQyxRQUFRLENBQUMsTUFBTTtTQUNmLENBQUM7SUErQ0gsQ0FBQzs7Ozs7O0lBN0NBLGVBQWUsQ0FBQyxNQUF3QixFQUFFLFlBQW9CO1FBRTdELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNQOztZQUVHLGdCQUFnQixHQUNuQixNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEVBQVksRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO1FBQ2pGLENBQUMsRUFBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7O1lBRUcsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxZQUFZO2lCQUNmLE1BQU07Ozs7WUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQztpQkFDMUUsT0FBTzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNiLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUQ7Ozs7OztJQXJEQSxxQ0FBNEM7Ozs7O0lBRTVDLHFDQUE2Qjs7Ozs7SUFFN0IseUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHNlYXJjaEZpZWxkczogQXJyYXk8VHlwZUZpZWxkPiA9IFtdO1xuXG5cdHByaXZhdGUgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBlbmFibGVkRGF0YVR5cGVzOiBBcnJheTxEYXRhVHlwZT4gPSBbXG5cdFx0RGF0YVR5cGUuU1RSSU5HXG5cdF07XG5cblx0YWRkU2VhcmNoUGhyYXNlKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPiwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICghc2VhcmNoUGhyYXNlKSB7XG5cdFx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IFtdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBzZWFyY2hhYmxlRmllbGRzID1cblx0XHRcdGZpZWxkcy5maWx0ZXIoKGZpZWxkOiBUeXBlRmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZW5hYmxlZERhdGFUeXBlcy5zb21lKChkdDogRGF0YVR5cGUpID0+IGR0ID09PSBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKHNlYXJjaGFibGVGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBzZWFyY2hhYmxlRmllbGRzO1xuXG5cdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdH1cblxuXHRzZWFyY2goZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNlYXJjaEZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoZWRJdGVtcyA9IG5ldyBTZXQ8T3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHNcblx0XHRcdFx0LmZpbHRlcigoZmllbGQ6IFR5cGVGaWVsZCkgPT4gZmllbGQuc2VhcmNoKGVudGl0aWVzW2ldLCB0aGlzLnNlYXJjaFBocmFzZSkpXG5cdFx0XHRcdC5mb3JFYWNoKCgpID0+IHtcblx0XHRcdFx0XHRzZWFyY2hlZEl0ZW1zLmFkZChlbnRpdGllc1tpXSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHNlYXJjaGVkSXRlbXMpO1xuXHR9XG5cbn1cbiJdfQ==