/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
export class Entity {
    /**
     * @param {?} data
     * @param {?=} id
     * @param {?=} version
     */
    constructor(data, id, version = 0) {
        this.version = 0;
        this.data = data;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    /**
     * @return {?}
     */
    getData() {
        return this.data;
    }
    /**
     * @return {?}
     */
    getUiId() {
        return 'gui' + this.id.replace(/-/g, '');
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    equalsById(id) {
        return this.id === id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.data;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxNQUFNLE9BQU8sTUFBTTs7Ozs7O0lBUWxCLFlBQVksSUFBUyxFQUNsQixFQUFXLEVBQ1gsVUFBa0IsQ0FBQztRQUpMLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFLcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FFRDs7Ozs7O0lBMUNBLG9CQUE0Qjs7Ozs7SUFFNUIsc0JBQTJCOzs7OztJQUUzQix5QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhOiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJzaW9uOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IGFueSxcblx0XHRcdFx0aWQ/OiBzdHJpbmcsXG5cdFx0XHRcdHZlcnNpb246IG51bWJlciA9IDApIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0dGhpcy5pZCA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RGF0YSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblxuXHRnZXRVaUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWknICsgdGhpcy5pZC5yZXBsYWNlKC8tL2csICcnKTtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHk6IEVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBlbnRpdHkuaWQgJiYgdGhpcy5nZXRWZXJzaW9uKCkgPT09IGVudGl0eS5nZXRWZXJzaW9uKCk7XG5cdH1cblxuXHRlcXVhbHNCeUlkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pZCA9PT0gaWQ7XG5cdH1cblxufVxuIl19