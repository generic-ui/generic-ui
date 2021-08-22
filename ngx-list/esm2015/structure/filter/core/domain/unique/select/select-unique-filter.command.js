/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../../core/domain/structure.command';
export class SelectUniqueFilterCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} fieldId
     * @param {?} uniqueValueId
     */
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'SelectUniqueFilterCommand');
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
    SelectUniqueFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SelectUniqueFilterCommand.prototype.uniqueValueId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR2hGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBZ0I7Ozs7OztJQUU5RCxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLGFBQTRCO1FBQy9DLEtBQUssQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUY3QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEOzs7Ozs7SUFiRyw0Q0FBaUM7Ozs7O0lBQ2pDLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRVbmlxdWVWYWx1ZUlkKCk6IFVuaXF1ZVZhbHVlSWQge1xuXHRcdHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlSWQ7XG5cdH1cblxufVxuIl19