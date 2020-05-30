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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTdDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxPQUFPOzs7Ozs7O0lBRXhELFlBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFdBQW1CO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUhoQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUV2QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Q0FFRDs7Ozs7O0lBbEJHLCtDQUFpQzs7Ozs7SUFDakMsd0RBQXlDOzs7OztJQUN6QyxtREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRFeHRlcm5hbEZpbHRlcklkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxGaWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19