/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './schema-theme-set.event';
export class SchemaThemeSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetAggregateEvent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsY0FBd0I7Ozs7O0lBRXpFLFlBQVksUUFBa0IsRUFDVixLQUFrQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEN0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUV0QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRDs7Ozs7O0lBUEcsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZTogU2NoZW1hVGhlbWUpIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYVRoZW1lU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnRoZW1lKTtcblx0fVxufVxuIl19