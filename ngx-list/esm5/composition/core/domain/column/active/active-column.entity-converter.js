/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActiveColumnEntity } from './active-column.entity';
var ActiveColumnEntityConverter = /** @class */ (function () {
    function ActiveColumnEntityConverter() {
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    ActiveColumnEntityConverter.prototype.convertMany = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        return entities.map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.convert(e); }));
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ActiveColumnEntityConverter.prototype.convert = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return ActiveColumnEntity.fromEntity(entity);
    };
    return ActiveColumnEntityConverter;
}());
export { ActiveColumnEntityConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQ7SUFBQTtJQVlBLENBQUM7Ozs7O0lBVkEsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQTZCO1FBQXpDLGlCQUVDO1FBREEsT0FBTyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDZDQUFPOzs7O0lBQVAsVUFBUSxNQUFvQjtRQUUzQixPQUFPLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0Ysa0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vY29sdW1uLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnRNYW55KGVudGl0aWVzOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIGVudGl0aWVzLm1hcChlID0+IHRoaXMuY29udmVydChlKSk7XG5cdH1cblxuXHRjb252ZXJ0KGVudGl0eTogQ29sdW1uRW50aXR5KTogQWN0aXZlQ29sdW1uRW50aXR5IHtcblxuXHRcdHJldHVybiBBY3RpdmVDb2x1bW5FbnRpdHkuZnJvbUVudGl0eShlbnRpdHkpO1xuXHR9XG5cblxufVxuIl19