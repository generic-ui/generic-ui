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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXZDLFdBQVcsQ0FBQyxRQUE2QjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBb0I7UUFFM0IsT0FBTyxJQUFJLGtCQUFrQixDQUM1QixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsT0FBTyxFQUFFLEVBQ2hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FDeEIsQ0FBQztJQUNILENBQUM7Q0FHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vY29sdW1uLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnRNYW55KGVudGl0aWVzOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIGVudGl0aWVzLm1hcChlID0+IHRoaXMuY29udmVydChlKSk7XG5cdH1cblxuXHRjb252ZXJ0KGVudGl0eTogQ29sdW1uRW50aXR5KTogQWN0aXZlQ29sdW1uRW50aXR5IHtcblxuXHRcdHJldHVybiBuZXcgQWN0aXZlQ29sdW1uRW50aXR5KFxuXHRcdFx0ZW50aXR5LmdldENvbHVtbklkKCksXG5cdFx0XHRlbnRpdHkuZ2V0RmllbGQoKSxcblx0XHRcdGVudGl0eS5nZXRIZWFkZXIoKSxcblx0XHRcdGVudGl0eS5nZXRWaWV3KCksXG5cdFx0XHRlbnRpdHkuZ2V0Q29sdW1uQ29uZmlnKClcblx0XHQpO1xuXHR9XG5cblxufVxuIl19