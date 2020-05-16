/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaCssClass } from './schema-css-class';
var SchemaCssClassesEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaCssClassesEventHandler, _super);
    function SchemaCssClassesEventHandler(schemaCssClassesRepository) {
        var _this = _super.call(this) || this;
        _this.schemaCssClassesRepository = schemaCssClassesRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaCssClassesEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.rowColoring = ((/** @type {?} */ (event))).getRowColoring();
        }
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGrid = ((/** @type {?} */ (event))).getHorizontalGrid();
        }
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.verticalGrid = ((/** @type {?} */ (event))).getVerticalGrid();
        }
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.schemaTheme = ((/** @type {?} */ (event))).getTheme();
        }
        this.publish(event.getAggregateId());
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    SchemaCssClassesEventHandler.prototype.publish = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.setTheme(new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring), aggregateId);
        }
    };
    SchemaCssClassesEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassesEventHandler.ctorParameters = function () { return [
        { type: SchemaCssClassesRepository }
    ]; };
    return SchemaCssClassesEventHandler;
}(DomainEventHandler));
export { SchemaCssClassesEventHandler };
if (false) {
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.rowColoring;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.horizontalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.verticalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.schemaTheme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesEventHandler.prototype.schemaCssClassesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU03RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNcEQ7SUFDa0Qsd0RBQXVEO0lBVXhHLHNDQUFvQiwwQkFBc0Q7UUFBMUUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7O0lBRTFFLENBQUM7Ozs7O0lBRUQsNkNBQU07Ozs7SUFBTixVQUFPLEtBQWdDO1FBRXRDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXVCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuRTtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQWdDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBOEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVFO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUV0QyxDQUFDOzs7Ozs7SUFFTyw4Q0FBTzs7Ozs7SUFBZixVQUFnQixXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RKO0lBQ0YsQ0FBQzs7Z0JBekNELFVBQVU7Ozs7Z0JBWkYsMEJBQTBCOztJQXVEbkMsbUNBQUM7Q0FBQSxBQTNDRCxDQUNrRCxrQkFBa0IsR0EwQ25FO1NBMUNZLDRCQUE0Qjs7O0lBRXhDLG1EQUErQjs7SUFFL0Isc0RBQXdCOztJQUV4QixvREFBc0I7O0lBRXRCLG1EQUF5Qjs7Ozs7SUFFYixrRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cbmV4cG9ydCB0eXBlIFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGUgPSBTY2hlbWFUaGVtZVNldEV2ZW50IHwgUm93Q29sb3JpbmdTZXRFdmVudCB8IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGU+IHtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGUpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdSb3dDb2xvcmluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmcgPSAoZXZlbnQgYXMgUm93Q29sb3JpbmdTZXRFdmVudCkuZ2V0Um93Q29sb3JpbmcoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gKGV2ZW50IGFzIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpLmdldEhvcml6b250YWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gKGV2ZW50IGFzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KS5nZXRWZXJ0aWNhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVGhlbWVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVRoZW1lID0gKGV2ZW50IGFzIFNjaGVtYVRoZW1lU2V0RXZlbnQpLmdldFRoZW1lKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wdWJsaXNoKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2goYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjaGVtYVRoZW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkuc2V0VGhlbWUobmV3IFNjaGVtYUNzc0NsYXNzKHRoaXMudmVydGljYWxHcmlkLCB0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVRoZW1lLCB0aGlzLnJvd0NvbG9yaW5nKSwgYWdncmVnYXRlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=