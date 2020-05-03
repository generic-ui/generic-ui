/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
import { FieldsInitedEvent } from '../../domain/structure/field/init/fields-inited.event';
var StructureFieldsInitedEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureFieldsInitedEventHandler, _super);
    function StructureFieldsInitedEventHandler(structureFieldsRepository, structureFieldUiConverter) {
        var _this = _super.call(this) || this;
        _this.structureFieldsRepository = structureFieldsRepository;
        _this.structureFieldUiConverter = structureFieldUiConverter;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureFieldsInitedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof FieldsInitedEvent) {
            /** @type {?} */
            var fields = this.structureFieldUiConverter.convert(event.getFields());
            this.structureFieldsRepository.next(event.getAggregateId(), fields);
        }
    };
    StructureFieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldsInitedEventHandler.ctorParameters = function () { return [
        { type: StructureFieldUiArchive },
        { type: StructureFieldUiConverter }
    ]; };
    return StructureFieldsInitedEventHandler;
}(DomainEventHandler));
export { StructureFieldsInitedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldUiConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9maWVsZC9zdHJ1Y3R1cmUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUkxRjtJQUN1RCw2REFBK0I7SUFFckYsMkNBQW9CLHlCQUFrRCxFQUMzRCx5QkFBb0Q7UUFEL0QsWUFFQyxpQkFBTyxTQUNQO1FBSG1CLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBeUI7UUFDM0QsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjs7SUFFL0QsQ0FBQzs7Ozs7SUFFRCxrREFBTTs7OztJQUFOLFVBQU8sS0FBd0I7UUFFOUIsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7O2dCQUVqQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFeEUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEU7SUFFRixDQUFDOztnQkFqQkQsVUFBVTs7OztnQkFORix1QkFBdUI7Z0JBQ3ZCLHlCQUF5Qjs7SUF3QmxDLHdDQUFDO0NBQUEsQUFuQkQsQ0FDdUQsa0JBQWtCLEdBa0J4RTtTQWxCWSxpQ0FBaUM7Ozs7OztJQUVqQyxzRUFBMEQ7Ozs7O0lBQ25FLHNFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXI6IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRmllbGRzSW5pdGVkRXZlbnQpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWVsZHMpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==