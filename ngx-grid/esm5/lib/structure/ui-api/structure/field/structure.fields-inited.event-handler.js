/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
import { FieldsInitedEvent } from '../../../domain/structure/command/field/init/fields-inited.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBR3JHO0lBQ3VELDZEQUFrQjtJQUV4RSwyQ0FBb0IseUJBQWtELEVBQzNELHlCQUFvRDtRQUQvRCxZQUVDLGlCQUFPLFNBQ1A7UUFIbUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUMzRCwrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCOztJQUUvRCxDQUFDOzs7OztJQUVELGtEQUFNOzs7O0lBQU4sVUFBTyxLQUF3QjtRQUU5QixJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7Z0JBRWpDLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV4RSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUxGLHVCQUF1QjtnQkFDdkIseUJBQXlCOztJQXVCbEMsd0NBQUM7Q0FBQSxBQW5CRCxDQUN1RCxrQkFBa0IsR0FrQnhFO1NBbEJZLGlDQUFpQzs7Ozs7O0lBRWpDLHNFQUEwRDs7Ozs7SUFDbkUsc0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmllbGRzUmVwb3NpdG9yeTogU3RydWN0dXJlRmllbGRVaUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmllbGRVaUNvbnZlcnRlcjogU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IEZpZWxkc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBGaWVsZHNJbml0ZWRFdmVudCkge1xuXG5cdFx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLnN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIuY29udmVydChldmVudC5nZXRGaWVsZHMoKSk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlRmllbGRzUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGZpZWxkcyk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19