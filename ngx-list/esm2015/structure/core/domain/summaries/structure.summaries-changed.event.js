/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class StructureSummariesChangedEvent extends DomainEvent {
    /**
     * @param {?} structureId
     * @param {?} values
     */
    constructor(structureId, values) {
        super(structureId, 'StructureSummariesChangedEvent');
        this.values = values;
    }
    /**
     * @return {?}
     */
    getSummaries() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedEvent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxXQUF3Qjs7Ozs7SUFFM0UsWUFBWSxXQUF3QixFQUNoQixNQUFvQztRQUN2RCxLQUFLLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7SUFFeEQsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogTWFwPHN0cmluZywgU3VtbWFyaWVzVmFsdWVzPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRTdW1tYXJpZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzO1xuXHR9XG5cbn1cbiJdfQ==