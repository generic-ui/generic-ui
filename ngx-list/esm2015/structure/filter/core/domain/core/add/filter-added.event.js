/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export class FilterAddedEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     */
    constructor(aggregateId, fieldId, filterTypeId, value) {
        super(aggregateId, { fieldId, filterTypeId, value }, 'FilterAddedEvent');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.filterTypeId;
    /**
     * @type {?}
     * @private
     */
    FilterAddedEvent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHekYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjs7Ozs7OztJQUV6RCxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLFlBQTBCLEVBQzFCLEtBQVU7UUFDN0IsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUh0RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQUs7SUFFOUIsQ0FBQztDQUVEOzs7Ozs7SUFORyxtQ0FBaUM7Ozs7O0lBQ2pDLHdDQUEyQzs7Ozs7SUFDM0MsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyQWRkZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYW55KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIHsgZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSB9LCAnRmlsdGVyQWRkZWRFdmVudCcpO1xuXHR9XG5cbn1cbiJdfQ==