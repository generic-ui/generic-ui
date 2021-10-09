/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCssClass } from '../../api/css-classes/schema-css-class';
var SchemaCssClassesEventHandler = /** @class */ (function () {
    function SchemaCssClassesEventHandler(schemaCssClassesRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
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
            this.schemaCssClassesRepository.next(aggregateId, new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring));
        }
    };
    /**
     * @return {?}
     */
    SchemaCssClassesEventHandler.prototype.forEvents = /**
     * @return {?}
     */
    function () {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent
        ];
    };
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
    SchemaCssClassesEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassesEventHandler.ctorParameters = function () { return [
        { type: SchemaCssClassesRepository }
    ]; };
    return SchemaCssClassesEventHandler;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVV4RTtJQVdDLHNDQUFvQiwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUMxRSxDQUFDOzs7Ozs7SUFFTyw4Q0FBTzs7Ozs7SUFBZixVQUFnQixXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQ25DLFdBQVcsRUFDWCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzlGLENBQUM7U0FDRjtJQUNGLENBQUM7Ozs7SUFFRCxnREFBUzs7O0lBQVQ7UUFDQyxPQUFPO1lBQ04sbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFDNUIsMEJBQTBCO1NBQzFCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUFnQztRQUV0QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUF1QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbkU7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFnQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNsRjtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQThCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RTtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7Z0JBcERELFVBQVU7Ozs7Z0JBaEJGLDBCQUEwQjs7SUFzRW5DLG1DQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksNEJBQTRCOzs7SUFFeEMsbURBQStCOztJQUUvQixzREFBd0I7O0lBRXhCLG9EQUFzQjs7SUFFdEIsbURBQXlCOzs7OztJQUViLGtFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5leHBvcnQgdHlwZSBTY2hlbWFDc3NDbGFzc2VzRXZlbnRUeXBlID1cblx0U2NoZW1hVGhlbWVTZXRFdmVudFxuXHR8IFJvd0NvbG9yaW5nU2V0RXZlbnRcblx0fCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50XG5cdHwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgTXVsdGlEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGU+IHtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoKGFnZ3JlZ2F0ZUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgdGhpcy5ob3Jpem9udGFsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudmVydGljYWxHcmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY2hlbWFUaGVtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5Lm5leHQoXG5cdFx0XHRcdGFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRuZXcgU2NoZW1hQ3NzQ2xhc3ModGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hVGhlbWUsIHRoaXMucm93Q29sb3JpbmcpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGZvckV2ZW50cygpOiBBcnJheTxEb21haW5FdmVudFR5cGU8U2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZT4+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U2NoZW1hVGhlbWVTZXRFdmVudCxcblx0XHRcdFJvd0NvbG9yaW5nU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50LFxuXHRcdFx0U2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnRcblx0XHRdO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFDc3NDbGFzc2VzRXZlbnRUeXBlKTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnUm93Q29sb3JpbmdTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gKGV2ZW50IGFzIFJvd0NvbG9yaW5nU2V0RXZlbnQpLmdldFJvd0NvbG9yaW5nKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IChldmVudCBhcyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KS5nZXRIb3Jpem9udGFsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IChldmVudCBhcyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCkuZ2V0VmVydGljYWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFUaGVtZSA9IChldmVudCBhcyBTY2hlbWFUaGVtZVNldEV2ZW50KS5nZXRUaGVtZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMucHVibGlzaChldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHR9XG5cbn1cbiJdfQ==