/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
export class SchemaVerticalGridSetAggregateEvent extends SchemaAggregateEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFcEUsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLG9CQUFvQjs7Ozs7SUFFNUUsWUFBWSxRQUFrQixFQUNWLFlBQXFCO1FBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUQ3QixpQkFBWSxHQUFaLFlBQVksQ0FBUztJQUV6QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FDRDs7Ozs7O0lBUEcsMkRBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NjaGVtYS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsR3JpZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnZlcnRpY2FsR3JpZCk7XG5cdH1cbn1cbiJdfQ==