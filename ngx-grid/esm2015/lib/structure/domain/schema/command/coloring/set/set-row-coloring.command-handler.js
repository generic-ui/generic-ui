/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { RowColoringSetEvent } from './row-coloring-set.event';
export class SetRowColoringCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetRowColoringCommand, RowColoringSetEvent, domainEventPublisher);
        this.structureAggregateRepository = structureAggregateRepository;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const coloring = command.coloring;
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const schema = structure.getSchema();
        schema.setRowColoring(coloring);
        this.structureAggregateRepository.save(structure);
    }
}
SetRowColoringCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetRowColoringCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbG9yaW5nL3NldC9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRTVHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSS9ELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxjQUFjOzs7OztJQUUvRCxZQUFvQiw0QkFBMEQsRUFDM0Usb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxxQkFBcUIsRUFDMUIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUFDLENBQUM7UUFKSixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBSzlFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQThCOztjQUU5QixRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVE7O2NBQ2hDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FFNUIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUN2RSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUUvQixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBckJELFVBQVU7Ozs7WUFORiw0QkFBNEI7WUFGWixvQkFBb0I7Ozs7Ozs7SUFXaEMsb0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldFJvd0NvbG9yaW5nQ29tbWFuZCxcblx0XHRcdFJvd0NvbG9yaW5nU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0Um93Q29sb3JpbmdDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGNvbG9yaW5nID0gY29tbWFuZC5jb2xvcmluZyxcblx0XHRcdHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNjaGVtYSA9IHN0cnVjdHVyZS5nZXRTY2hlbWEoKTtcblxuXHRcdHNjaGVtYS5zZXRSb3dDb2xvcmluZyhjb2xvcmluZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==