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
import { SchemaCssClass } from '../schema-css-class';
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
            this.coloring = event.getRowColoring();
        }
        if (event instanceof SchemaHorizontalGridSetEvent) {
            this.hgrid = event.getHorizontalGrid();
        }
        if (event instanceof SchemaVerticalGridSetEvent) {
            this.vgrid = event.getVerticalGrid();
        }
        if (event instanceof SchemaThemeSetEvent) {
            this.theme = event.getTheme();
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
        if (this.coloring !== undefined && this.hgrid !== undefined && this.vgrid !== undefined && this.theme !== undefined) {
            this.schemaCssClassesRepository.setTheme(new SchemaCssClass(this.vgrid, this.hgrid, this.theme, this.coloring), aggregateId);
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
    SchemaCssClassesEventHandler.prototype.coloring;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.hgrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.vgrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesEventHandler.prototype.schemaCssClassesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3JEO0lBQ2tELHdEQUE0QjtJQVU3RSxzQ0FBb0IsMEJBQXNEO1FBQTFFLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCOztJQUUxRSxDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUE0RztRQUVsSCxJQUFJLEtBQUssWUFBWSxtQkFBbUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQUksS0FBSyxZQUFZLDRCQUE0QixFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLEtBQUssWUFBWSwwQkFBMEIsRUFBRTtZQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQztRQUVELElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUV0QyxDQUFDOzs7Ozs7SUFFTyw4Q0FBTzs7Ozs7SUFBZixVQUFnQixXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3BILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdIO0lBQ0YsQ0FBQzs7Z0JBekNELFVBQVU7Ozs7Z0JBVEYsMEJBQTBCOztJQW9EbkMsbUNBQUM7Q0FBQSxBQTNDRCxDQUNrRCxrQkFBa0IsR0EwQ25FO1NBMUNZLDRCQUE0Qjs7O0lBRXhDLGdEQUFjOztJQUVkLDZDQUFXOztJQUVYLDZDQUFXOztJQUVYLDZDQUFXOzs7OztJQUVDLGtFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vc2NoZW1hLWNzcy1jbGFzcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQ+IHtcblxuXHRjb2xvcmluZzogYW55O1xuXG5cdGhncmlkOiBhbnk7XG5cblx0dmdyaWQ6IGFueTtcblxuXHR0aGVtZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCB8IFJvd0NvbG9yaW5nU2V0RXZlbnQgfCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IHwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFJvd0NvbG9yaW5nU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuY29sb3JpbmcgPSBldmVudC5nZXRSb3dDb2xvcmluZygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuaGdyaWQgPSBldmVudC5nZXRIb3Jpem9udGFsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnZncmlkID0gZXZlbnQuZ2V0VmVydGljYWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hVGhlbWVTZXRFdmVudCkge1xuXHRcdFx0dGhpcy50aGVtZSA9IGV2ZW50LmdldFRoZW1lKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wdWJsaXNoKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2goYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhncmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy52Z3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGhlbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeS5zZXRUaGVtZShuZXcgU2NoZW1hQ3NzQ2xhc3ModGhpcy52Z3JpZCwgdGhpcy5oZ3JpZCwgdGhpcy50aGVtZSwgdGhpcy5jb2xvcmluZyksIGFnZ3JlZ2F0ZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19