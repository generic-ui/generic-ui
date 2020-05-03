/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
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
        if (event instanceof RowColoringSetEvent) {
            this.rowColoring = event.getRowColoring();
        }
        if (event instanceof SchemaHorizontalGridSetEvent) {
            this.horizontalGrid = event.getHorizontalGrid();
        }
        if (event instanceof SchemaVerticalGridSetEvent) {
            this.verticalGrid = event.getVerticalGrid();
        }
        if (event instanceof SchemaThemeSetEvent) {
            this.schemaTheme = event.getTheme();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZmVhdHVyZS1hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtwRDtJQUNrRCx3REFBNEI7SUFVN0Usc0NBQW9CLDBCQUFzRDtRQUExRSxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0Qjs7SUFFMUUsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8sS0FBNEc7UUFFbEgsSUFBSSxLQUFLLFlBQVksbUJBQW1CLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFJLEtBQUssWUFBWSw0QkFBNEIsRUFBRTtZQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxLQUFLLFlBQVksMEJBQTBCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLEtBQUssWUFBWSxtQkFBbUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7Ozs7O0lBRU8sOENBQU87Ozs7O0lBQWYsVUFBZ0IsV0FBcUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM3SSxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0SjtJQUNGLENBQUM7O2dCQXpDRCxVQUFVOzs7O2dCQVhGLDBCQUEwQjs7SUFzRG5DLG1DQUFDO0NBQUEsQUEzQ0QsQ0FDa0Qsa0JBQWtCLEdBMENuRTtTQTFDWSw0QkFBNEI7OztJQUV4QyxtREFBK0I7O0lBRS9CLHNEQUF3Qjs7SUFFeEIsb0RBQXNCOztJQUV0QixtREFBeUI7Ozs7O0lBRWIsa0VBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkPiB7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFUaGVtZVNldEV2ZW50IHwgUm93Q29sb3JpbmdTZXRFdmVudCB8IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgUm93Q29sb3JpbmdTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IGV2ZW50LmdldFJvd0NvbG9yaW5nKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IGV2ZW50LmdldEhvcml6b250YWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZXZlbnQuZ2V0VmVydGljYWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hVGhlbWVTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5zY2hlbWFUaGVtZSA9IGV2ZW50LmdldFRoZW1lKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wdWJsaXNoKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2goYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjaGVtYVRoZW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkuc2V0VGhlbWUobmV3IFNjaGVtYUNzc0NsYXNzKHRoaXMudmVydGljYWxHcmlkLCB0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVRoZW1lLCB0aGlzLnJvd0NvbG9yaW5nKSwgYWdncmVnYXRlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=