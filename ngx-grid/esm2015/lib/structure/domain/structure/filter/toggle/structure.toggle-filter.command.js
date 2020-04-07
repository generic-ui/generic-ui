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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTdDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxPQUFPOzs7Ozs7O0lBRXhELFlBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFdBQW1CO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUhoQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUV2QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Q0FFRDs7Ozs7O0lBbEJHLCtDQUFpQzs7Ozs7SUFDakMsd0RBQXlDOzs7OztJQUN6QyxtREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0RXh0ZXJuYWxGaWx0ZXJJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV4dGVybmFsRmlsdGVySWQ7XG5cdH1cblxuXHRnZXRGaWx0ZXJWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==