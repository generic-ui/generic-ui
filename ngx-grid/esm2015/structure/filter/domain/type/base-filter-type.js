/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class BaseFilterType {
    /**
     * @protected
     * @param {?} filterTypeId
     */
    constructor(filterTypeId) {
        this.filterTypeId = filterTypeId;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.filterTypeId;
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterMany(entities, field, value) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            return this.filterEntity(item, field, value);
        }));
    }
    /**
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterOne(entity, field, value) {
        return this.filterEntity(entity, field, value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseFilterType.prototype.filterTypeId;
    /**
     * @abstract
     * @return {?}
     */
    BaseFilterType.prototype.getName = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    BaseFilterType.prototype.filterEntity = function (entity, field, value) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXItdHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdHlwZS9iYXNlLWZpbHRlci10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsTUFBTSxPQUFnQixjQUFjOzs7OztJQUluQyxZQUFzQixZQUEwQjtRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBTUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFFBQWlDLEVBQUUsS0FBWSxFQUFFLEtBQVE7UUFFbkUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBd0IsRUFBRSxLQUFZLEVBQUUsS0FBUTtRQUN6RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Q7Ozs7OztJQTVCQSxzQ0FBNEM7Ozs7O0lBTTVDLG1EQUEyQjs7Ozs7Ozs7O0lBRTNCLDRFQUEyRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuL2ZpbHRlci10eXBlLmlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGaWx0ZXJUeXBlPFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCkge1xuXHRcdHRoaXMuZmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0TmFtZSgpOiBzdHJpbmc7XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGZpbHRlckVudGl0eShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHksIGZpZWxkOiBGaWVsZCwgdmFsdWU6IFQpOiBib29sZWFuO1xuXG5cdGdldElkKCk6IEZpbHRlclR5cGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUlkO1xuXHR9XG5cblx0ZmlsdGVyTWFueShlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkOiBGaWVsZCwgdmFsdWU6IFQpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLmZpbHRlcigoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyRW50aXR5KGl0ZW0sIGZpZWxkLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXJPbmUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyRW50aXR5KGVudGl0eSwgZmllbGQsIHZhbHVlKTtcblx0fVxufVxuIl19