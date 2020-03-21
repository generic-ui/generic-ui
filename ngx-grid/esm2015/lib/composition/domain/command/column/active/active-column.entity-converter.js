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
        return new ActiveColumnEntity(entity.getColumnId(), entity.getField(), entity.getHeader(), entity.getAlign(), entity.getView(), entity.getColumnConfig());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXZDLFdBQVcsQ0FBQyxRQUE2QjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBb0I7UUFFM0IsT0FBTyxJQUFJLGtCQUFrQixDQUM1QixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFDaEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUN4QixDQUFDO0lBQ0gsQ0FBQztDQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9jb2x1bW4uZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciB7XG5cblx0Y29udmVydE1hbnkoZW50aXRpZXM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gZW50aXRpZXMubWFwKGUgPT4gdGhpcy5jb252ZXJ0KGUpKTtcblx0fVxuXG5cdGNvbnZlcnQoZW50aXR5OiBDb2x1bW5FbnRpdHkpOiBBY3RpdmVDb2x1bW5FbnRpdHkge1xuXG5cdFx0cmV0dXJuIG5ldyBBY3RpdmVDb2x1bW5FbnRpdHkoXG5cdFx0XHRlbnRpdHkuZ2V0Q29sdW1uSWQoKSxcblx0XHRcdGVudGl0eS5nZXRGaWVsZCgpLFxuXHRcdFx0ZW50aXR5LmdldEhlYWRlcigpLFxuXHRcdFx0ZW50aXR5LmdldEFsaWduKCksXG5cdFx0XHRlbnRpdHkuZ2V0VmlldygpLFxuXHRcdFx0ZW50aXR5LmdldENvbHVtbkNvbmZpZygpXG5cdFx0KTtcblx0fVxuXG5cbn1cbiJdfQ==