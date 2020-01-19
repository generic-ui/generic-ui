/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActiveColumnEntity } from './active-column.entity';
export class ActiveColumnEntityConverter {
    /**
     * @param {?} entities
     * @return {?}
     */
    convertMany(entities) {
        return entities.map((/**
         * @param {?} e
         * @return {?}
         */
        e => this.convert(e)));
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    convert(entity) {
        return new ActiveColumnEntity(entity.getColumnId(), entity.getField(), entity.getHeader(), entity.getView(), entity.getColumnConfig());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RCxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUV2QyxXQUFXLENBQUMsUUFBNkI7UUFDeEMsT0FBTyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQW9CO1FBRTNCLE9BQU8sSUFBSSxrQkFBa0IsQ0FDNUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUNwQixNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUNoQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQ3hCLENBQUM7SUFDSCxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uL2NvbHVtbi5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIHtcblxuXHRjb252ZXJ0TWFueShlbnRpdGllczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiBlbnRpdGllcy5tYXAoZSA9PiB0aGlzLmNvbnZlcnQoZSkpO1xuXHR9XG5cblx0Y29udmVydChlbnRpdHk6IENvbHVtbkVudGl0eSk6IEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0XHRyZXR1cm4gbmV3IEFjdGl2ZUNvbHVtbkVudGl0eShcblx0XHRcdGVudGl0eS5nZXRDb2x1bW5JZCgpLFxuXHRcdFx0ZW50aXR5LmdldEZpZWxkKCksXG5cdFx0XHRlbnRpdHkuZ2V0SGVhZGVyKCksXG5cdFx0XHRlbnRpdHkuZ2V0VmlldygpLFxuXHRcdFx0ZW50aXR5LmdldENvbHVtbkNvbmZpZygpXG5cdFx0KTtcblx0fVxuXG5cbn1cbiJdfQ==