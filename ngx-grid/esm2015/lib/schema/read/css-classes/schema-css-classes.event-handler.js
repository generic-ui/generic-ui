/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCssClass } from '../schema-css-class';
export class SchemaCssClassesEventHandler extends DomainEventHandler {
    /**
     * @param {?} schemaCssClassesRepository
     */
    constructor(schemaCssClassesRepository) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
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
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    publish(aggregateId) {
        if (this.coloring !== undefined && this.hgrid !== undefined && this.vgrid !== undefined && this.theme !== undefined) {
            this.schemaCssClassesRepository.setTheme(new SchemaCssClass(this.vgrid, this.hgrid, this.theme, this.coloring), aggregateId);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJckQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGtCQUE0Qjs7OztJQVU3RSxZQUFvQiwwQkFBc0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFEVywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBRTFFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQTRHO1FBRWxILElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxLQUFLLFlBQVksNEJBQTRCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQUksS0FBSyxZQUFZLDBCQUEwQixFQUFFO1lBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxLQUFLLFlBQVksbUJBQW1CLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3BILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdIO0lBQ0YsQ0FBQzs7O1lBekNELFVBQVU7Ozs7WUFURiwwQkFBMEI7Ozs7SUFZbEMsZ0RBQWM7O0lBRWQsNkNBQVc7O0lBRVgsNkNBQVc7O0lBRVgsNkNBQVc7Ozs7O0lBRUMsa0VBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi9zY2hlbWEtY3NzLWNsYXNzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZD4ge1xuXG5cdGNvbG9yaW5nOiBhbnk7XG5cblx0aGdyaWQ6IGFueTtcblxuXHR2Z3JpZDogYW55O1xuXG5cdHRoZW1lOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFUaGVtZVNldEV2ZW50IHwgUm93Q29sb3JpbmdTZXRFdmVudCB8IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgUm93Q29sb3JpbmdTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5jb2xvcmluZyA9IGV2ZW50LmdldFJvd0NvbG9yaW5nKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5oZ3JpZCA9IGV2ZW50LmdldEhvcml6b250YWxHcmlkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMudmdyaWQgPSBldmVudC5nZXRWZXJ0aWNhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTY2hlbWFUaGVtZVNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnRoZW1lID0gZXZlbnQuZ2V0VGhlbWUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnB1Ymxpc2goZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaChhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaGdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZncmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy50aGVtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LnNldFRoZW1lKG5ldyBTY2hlbWFDc3NDbGFzcyh0aGlzLnZncmlkLCB0aGlzLmhncmlkLCB0aGlzLnRoZW1lLCB0aGlzLmNvbG9yaW5nKSwgYWdncmVnYXRlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=