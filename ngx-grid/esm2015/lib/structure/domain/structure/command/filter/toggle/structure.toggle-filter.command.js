/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class StructureToggleFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     */
    constructor(structureId, fieldId, externalFilterId, filterValue) {
        super(structureId, 'StructureToggleFilterCommand');
        this.fieldId = fieldId;
        this.externalFilterId = externalFilterId;
        this.filterValue = filterValue;
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
    getExternalFilterId() {
        return this.externalFilterId;
    }
    /**
     * @return {?}
     */
    getFilterValue() {
        return this.filterValue;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNN0MsTUFBTSxPQUFPLDRCQUE2QixTQUFRLE9BQU87Ozs7Ozs7SUFFeEQsWUFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixnQkFBd0IsRUFDeEIsV0FBbUI7UUFDdEMsS0FBSyxDQUFDLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBSGhDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBRXZDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztDQUVEOzs7Ozs7SUFsQkcsK0NBQWlDOzs7OztJQUNqQyx3REFBeUM7Ozs7O0lBQ3pDLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRFeHRlcm5hbEZpbHRlcklkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxGaWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19