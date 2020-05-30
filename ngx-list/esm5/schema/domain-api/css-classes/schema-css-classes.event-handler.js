/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCssClass } from './schema-css-class';
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
            this.schemaCssClassesRepository.setCssClass(new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring), aggregateId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVwRDtJQVdDLHNDQUFvQiwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUMxRSxDQUFDOzs7Ozs7SUFFTyw4Q0FBTzs7Ozs7SUFBZixVQUFnQixXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pKO0lBQ0YsQ0FBQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNDLE9BQU87WUFDTixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDRCQUE0QjtZQUM1QiwwQkFBMEI7U0FDMUIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsNkNBQU07Ozs7SUFBTixVQUFPLEtBQWdDO1FBRXRDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXVCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuRTtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQWdDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBOEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVFO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUV0QyxDQUFDOztnQkFqREQsVUFBVTs7OztnQkFoQkYsMEJBQTBCOztJQW1FbkMsbUNBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQWxEWSw0QkFBNEI7OztJQUV4QyxtREFBK0I7O0lBRS9CLHNEQUF3Qjs7SUFFeEIsb0RBQXNCOztJQUV0QixtREFBeUI7Ozs7O0lBRWIsa0VBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cbmV4cG9ydCB0eXBlIFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGUgPVxuXHRTY2hlbWFUaGVtZVNldEV2ZW50XG5cdHwgUm93Q29sb3JpbmdTZXRFdmVudFxuXHR8IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnRcblx0fCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZT4ge1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0c2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2goYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjaGVtYVRoZW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkuc2V0Q3NzQ2xhc3MobmV3IFNjaGVtYUNzc0NsYXNzKHRoaXMudmVydGljYWxHcmlkLCB0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVRoZW1lLCB0aGlzLnJvd0NvbG9yaW5nKSwgYWdncmVnYXRlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGZvckV2ZW50cygpOiBBcnJheTxUeXBlPFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGU+PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRSb3dDb2xvcmluZ1NldEV2ZW50LFxuXHRcdFx0U2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCxcblx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IChldmVudCBhcyBSb3dDb2xvcmluZ1NldEV2ZW50KS5nZXRSb3dDb2xvcmluZygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkuZ2V0SG9yaXpvbnRhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpLmdldFZlcnRpY2FsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFUaGVtZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2NoZW1hVGhlbWUgPSAoZXZlbnQgYXMgU2NoZW1hVGhlbWVTZXRFdmVudCkuZ2V0VGhlbWUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnB1Ymxpc2goZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0fVxuXG59XG4iXX0=