/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModelRepository } from './field.read-model-repository';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
export class FieldsInitedEventHandler {
    /**
     * @param {?} fieldReadModelRepository
     * @param {?} fieldUiConverter
     */
    constructor(fieldReadModelRepository, fieldUiConverter) {
        this.fieldReadModelRepository = fieldReadModelRepository;
        this.fieldUiConverter = fieldUiConverter;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return FieldsInitedEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            /** @type {?} */
            const fields = this.fieldUiConverter.convert(event.getFields());
            this.fieldReadModelRepository.next(event.getAggregateId(), fields);
        }
    }
}
FieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldsInitedEventHandler.ctorParameters = () => [
    { type: FieldReadModelRepository },
    { type: FieldUiConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLMUUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFcEMsWUFBb0Isd0JBQWtELEVBQzNELGdCQUFrQztRQUR6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDN0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBRTlCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFOztrQkFFdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRS9ELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO0lBRUYsQ0FBQzs7O1lBcEJELFVBQVU7Ozs7WUFORix3QkFBd0I7WUFDeEIsZ0JBQWdCOzs7Ozs7O0lBUVosNERBQTBEOzs7OztJQUNuRSxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9maWVsZC5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeTogRmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGZpZWxkVWlDb252ZXJ0ZXI6IEZpZWxkVWlDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxGaWVsZHNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWVsZHNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRVaUNvbnZlcnRlci5jb252ZXJ0KGV2ZW50LmdldEZpZWxkcygpKTtcblxuXHRcdFx0dGhpcy5maWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWVsZHMpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==