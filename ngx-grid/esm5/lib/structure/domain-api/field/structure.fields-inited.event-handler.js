/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
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
        if (event.ofMessageType('FieldsInitedEvent')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSzNFO0lBQ3VELDZEQUFrRDtJQUV4RywyQ0FBb0IseUJBQWtELEVBQzNELHlCQUFvRDtRQUQvRCxZQUVDLGlCQUFPLFNBQ1A7UUFIbUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUMzRCwrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCOztJQUUvRCxDQUFDOzs7OztJQUVELGtEQUFNOzs7O0lBQU4sVUFBTyxLQUF3QjtRQUU5QixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTs7Z0JBRXZDLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV4RSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQU5GLHVCQUF1QjtnQkFDdkIseUJBQXlCOztJQXdCbEMsd0NBQUM7Q0FBQSxBQW5CRCxDQUN1RCxrQkFBa0IsR0FrQnhFO1NBbEJZLGlDQUFpQzs7Ozs7O0lBRWpDLHNFQUEwRDs7Ozs7SUFDbkUsc0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXI6IFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpZWxkc1JlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWVsZHMpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==