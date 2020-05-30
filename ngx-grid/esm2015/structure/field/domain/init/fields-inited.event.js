/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FieldsInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} fieldConfigs
     * @param {?} fields
     */
    constructor(aggregateId, fieldConfigs, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
}
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVNqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsV0FBd0I7Ozs7OztJQUU5RCxZQUFZLFdBQXdCLEVBQ2pCLFlBQWdDLEVBQUUsYUFBYTtJQUM5QyxNQUF3QjtRQUMzQyxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFGdEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTVDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7O0lBUkcseUNBQWdEOzs7OztJQUNoRCxtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnRmllbGRzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxUeXBlRmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==