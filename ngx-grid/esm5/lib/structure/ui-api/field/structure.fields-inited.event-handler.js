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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZmllbGQvc3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFJMUY7SUFDdUQsNkRBQStCO0lBRXJGLDJDQUFvQix5QkFBa0QsRUFDM0QseUJBQW9EO1FBRC9ELFlBRUMsaUJBQU8sU0FDUDtRQUhtQiwrQkFBeUIsR0FBekIseUJBQXlCLENBQXlCO1FBQzNELCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7O0lBRS9ELENBQUM7Ozs7O0lBRUQsa0RBQU07Ozs7SUFBTixVQUFPLEtBQXdCO1FBRTlCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOztnQkFFakMsTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXhFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BFO0lBRUYsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBTkYsdUJBQXVCO2dCQUN2Qix5QkFBeUI7O0lBd0JsQyx3Q0FBQztDQUFBLEFBbkJELENBQ3VELGtCQUFrQixHQWtCeEU7U0FsQlksaUNBQWlDOzs7Ozs7SUFFakMsc0VBQTBEOzs7OztJQUNuRSxzRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyOiBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEZpZWxkc0luaXRlZEV2ZW50KSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuc3RydWN0dXJlRmllbGRVaUNvbnZlcnRlci5jb252ZXJ0KGV2ZW50LmdldEZpZWxkcygpKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGaWVsZHNSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZmllbGRzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=