/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
export class SchemaVerticalGridSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} verticalGrid
     */
    constructor(schemaId, verticalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaVerticalGridSetEvent(this.getAggregateId(), this.verticalGrid);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetAggregateEvent.prototype.verticalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFJakUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFOUUsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGNBQXdCOzs7OztJQUVoRixZQUFZLFFBQWtCLEVBQ1YsWUFBcUI7UUFDeEMsS0FBSyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRDdCLGlCQUFZLEdBQVosWUFBWSxDQUFTO0lBRXpDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNEOzs7Ozs7SUFQRywyREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMudmVydGljYWxHcmlkKTtcblx0fVxufVxuIl19