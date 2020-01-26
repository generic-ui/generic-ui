/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FieldsInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} columns
     * @param {?} fields
     */
    constructor(aggregateId, compositionId, columns, // TODO merge
    fields) {
        super(aggregateId, 'FieldsInitedEvent');
        this.compositionId = compositionId;
        this.columns = columns;
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
    FieldsInitedEvent.prototype.compositionId;
    /** @type {?} */
    FieldsInitedEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFdBQVc7Ozs7Ozs7SUFFakQsWUFBWSxXQUF3QixFQUNqQixhQUE0QixFQUM1QixPQUE0QixFQUFFLGFBQWE7SUFDMUMsTUFBb0I7UUFDdkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBSHRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFFeEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNEOzs7SUFURywwQ0FBNEM7O0lBQzVDLG9DQUE0Qzs7Ozs7SUFDNUMsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2RhdGEtdHlwZS9maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxGaWVsZD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpZWxkc0luaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8RmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==