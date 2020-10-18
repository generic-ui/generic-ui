/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../../core/domain/structure.command';
export class UnselectUniqueFilterCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} fieldId
     * @param {?} uniqueValueId
     */
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'UnselectUniqueFilterCommand');
        this.fieldId = fieldId;
        this.uniqueValueId = uniqueValueId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * @return {?}
     */
    getUniqueValueId() {
        return this.uniqueValueId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnselectUniqueFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    UnselectUniqueFilterCommand.prototype.uniqueValueId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR2hGLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxnQkFBZ0I7Ozs7OztJQUVoRSxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLGFBQTRCO1FBQy9DLEtBQUssQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUYvQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEOzs7Ozs7SUFiRyw4Q0FBaUM7Ozs7O0lBQ2pDLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1Vuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0VW5pcXVlVmFsdWVJZCgpOiBVbmlxdWVWYWx1ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZUlkO1xuXHR9XG5cbn1cbiJdfQ==