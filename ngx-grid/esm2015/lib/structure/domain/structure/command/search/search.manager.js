/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
export class SearchManager {
    constructor() {
        this.searchFields = [];
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
            return field.getDataType() === DataType.STRING;
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
            for (let field of this.searchFields) {
                if (this.filterString(entities[i], field)) {
                    searchedItems.add(entities[i]);
                }
            }
        }
        return Array.from(searchedItems);
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterString(item, field) {
        /** @type {?} */
        const value = field.getValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterNumber(item, field) {
        /** @type {?} */
        const numberValue = field.getValue(item);
        return numberValue > this.searchPhrase;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    filterBoolean(item, field) {
        /** @type {?} */
        const booleanValue = field.getValue(item);
        return booleanValue === this.searchPhrase;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZWFyY2gubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3hELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRVMsaUJBQVksR0FBaUIsRUFBRSxDQUFDO0lBd0V6QyxDQUFDOzs7Ozs7SUFwRUEsZUFBZSxDQUFDLE1BQW9CLEVBQUUsWUFBb0I7UUFFekQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1A7O1lBRUcsZ0JBQWdCLEdBQ25CLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hELENBQUMsRUFBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7O1lBRUcsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTVDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDMUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRDtTQUNEO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQUMsSUFBc0IsRUFBRSxLQUFZOztjQUNsRCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFbEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQUMsSUFBc0IsRUFBRSxLQUFZOztjQUNsRCxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFeEMsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRU8sYUFBYSxDQUFDLElBQXNCLEVBQUUsS0FBWTs7Y0FDbkQsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRXpDLE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztDQUVEOzs7Ozs7SUF4RUEscUNBQXdDOzs7OztJQUV4QyxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHNlYXJjaEZpZWxkczogQXJyYXk8RmllbGQ+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxGaWVsZD4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoYWJsZUZpZWxkcyA9XG5cdFx0XHRmaWVsZHMuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORztcblx0XHRcdH0pO1xuXG5cdFx0aWYgKHNlYXJjaGFibGVGaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBzZWFyY2hhYmxlRmllbGRzO1xuXG5cdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRmllbGRzID0gW107XG5cdH1cblxuXHRzZWFyY2goZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNlYXJjaEZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoZWRJdGVtcyA9IG5ldyBTZXQ8T3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Zm9yIChsZXQgZmllbGQgb2YgdGhpcy5zZWFyY2hGaWVsZHMpIHtcblxuXHRcdFx0XHRpZiAodGhpcy5maWx0ZXJTdHJpbmcoZW50aXRpZXNbaV0sIGZpZWxkKSkge1xuXHRcdFx0XHRcdHNlYXJjaGVkSXRlbXMuYWRkKGVudGl0aWVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHNlYXJjaGVkSXRlbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJTdHJpbmcoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBmaWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoUGhyYXNlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTnVtYmVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gbnVtYmVyVmFsdWUgPiB0aGlzLnNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyQm9vbGVhbihpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQpOiBib29sZWFuIHtcblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSBmaWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiBib29sZWFuVmFsdWUgPT09IHRoaXMuc2VhcmNoUGhyYXNlO1xuXHR9XG5cbn1cbiJdfQ==