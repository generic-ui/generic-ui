/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../field/core/domain/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUkzRSxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVTLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUloQyxxQkFBZ0IsR0FBb0I7WUFDM0MsUUFBUSxDQUFDLE1BQU07U0FDZixDQUFDO0lBK0NILENBQUM7Ozs7OztJQTdDQSxlQUFlLENBQUMsTUFBb0IsRUFBRSxZQUFvQjtRQUV6RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDs7WUFFRyxnQkFBZ0IsR0FDbkIsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEVBQVksRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO1FBQ2pGLENBQUMsRUFBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7O1lBRUcsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxZQUFZO2lCQUNmLE1BQU07Ozs7WUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDO2lCQUN0RSxPQUFPOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFRDs7Ozs7O0lBckRBLHFDQUF3Qzs7Ozs7SUFFeEMscUNBQTZCOzs7OztJQUU3Qix5Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHNlYXJjaEZpZWxkczogQXJyYXk8RmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWREYXRhVHlwZXM6IEFycmF5PERhdGFUeXBlPiA9IFtcblx0XHREYXRhVHlwZS5TVFJJTkdcblx0XTtcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxGaWVsZD4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoYWJsZUZpZWxkcyA9XG5cdFx0XHRmaWVsZHMuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZW5hYmxlZERhdGFUeXBlcy5zb21lKChkdDogRGF0YVR5cGUpID0+IGR0ID09PSBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKHNlYXJjaGFibGVGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBzZWFyY2hhYmxlRmllbGRzO1xuXG5cdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdH1cblxuXHRzZWFyY2goZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNlYXJjaEZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoZWRJdGVtcyA9IG5ldyBTZXQ8T3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHNcblx0XHRcdFx0LmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiBmaWVsZC5zZWFyY2goZW50aXRpZXNbaV0sIHRoaXMuc2VhcmNoUGhyYXNlKSlcblx0XHRcdFx0LmZvckVhY2goKCkgPT4ge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oc2VhcmNoZWRJdGVtcyk7XG5cdH1cblxufVxuIl19