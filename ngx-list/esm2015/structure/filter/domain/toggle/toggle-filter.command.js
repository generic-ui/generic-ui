/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class ToggleFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     */
    constructor(structureId, fieldId, externalFilterId, filterValue) {
        super(structureId, 'ToggleFilterCommand');
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
    ToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi90b2dnbGUvdG9nZ2xlLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPN0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLE9BQU87Ozs7Ozs7SUFFL0MsWUFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixnQkFBd0IsRUFDeEIsV0FBbUI7UUFDdEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBSHZCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBRXZDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztDQUVEOzs7Ozs7SUFsQkcsc0NBQWlDOzs7OztJQUNqQywrQ0FBeUM7Ozs7O0lBQ3pDLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVG9nZ2xlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0RXh0ZXJuYWxGaWx0ZXJJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV4dGVybmFsRmlsdGVySWQ7XG5cdH1cblxuXHRnZXRGaWx0ZXJWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==