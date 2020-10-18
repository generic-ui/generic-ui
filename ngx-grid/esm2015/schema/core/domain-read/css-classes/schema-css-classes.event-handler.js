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
export class SchemaCssClassesEventHandler {
    /**
     * @param {?} schemaCssClassesRepository
     */
    constructor(schemaCssClassesRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    publish(aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.setCssClass(new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring), aggregateId);
        }
    }
    /**
     * @return {?}
     */
    forEvents() {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
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
    }
}
SchemaCssClassesEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassesEventHandler.ctorParameters = () => [
    { type: SchemaCssClassesRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVd4RSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBVXhDLFlBQW9CLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQzFFLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pKO0lBQ0YsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPO1lBQ04sbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFDNUIsMEJBQTBCO1NBQzFCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFnQztRQUV0QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUF1QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbkU7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFnQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNsRjtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQThCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RTtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7O1lBakRELFVBQVU7Ozs7WUFoQkYsMEJBQTBCOzs7O0lBbUJsQyxtREFBK0I7O0lBRS9CLHNEQUF3Qjs7SUFFeEIsb0RBQXNCOztJQUV0QixtREFBeUI7Ozs7O0lBRWIsa0VBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudFR5cGUsIE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9hcGkvc2NoZW1hLXRoZW1lJztcblxuZXhwb3J0IHR5cGUgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSA9XG5cdFNjaGVtYVRoZW1lU2V0RXZlbnRcblx0fCBSb3dDb2xvcmluZ1NldEV2ZW50XG5cdHwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudFxuXHR8IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBTY2hlbWFDc3NDbGFzc2VzRXZlbnRUeXBlPiB7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaChhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2NoZW1hVGhlbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeS5zZXRDc3NDbGFzcyhuZXcgU2NoZW1hQ3NzQ2xhc3ModGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hVGhlbWUsIHRoaXMucm93Q29sb3JpbmcpLCBhZ2dyZWdhdGVJZCk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yRXZlbnRzKCk6IEFycmF5PERvbWFpbkV2ZW50VHlwZTxTY2hlbWFDc3NDbGFzc2VzRXZlbnRUeXBlPj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50LFxuXHRcdFx0Um93Q29sb3JpbmdTZXRFdmVudCxcblx0XHRcdFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudFxuXHRcdF07XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGUpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdSb3dDb2xvcmluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmcgPSAoZXZlbnQgYXMgUm93Q29sb3JpbmdTZXRFdmVudCkuZ2V0Um93Q29sb3JpbmcoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gKGV2ZW50IGFzIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpLmdldEhvcml6b250YWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gKGV2ZW50IGFzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KS5nZXRWZXJ0aWNhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVGhlbWVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVRoZW1lID0gKGV2ZW50IGFzIFNjaGVtYVRoZW1lU2V0RXZlbnQpLmdldFRoZW1lKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wdWJsaXNoKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdH1cblxufVxuIl19