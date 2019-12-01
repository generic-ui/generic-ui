/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { PrevPageCommand } from './prev-page.command';
import { PrevPageEvent } from './prev-page.event';
var PrevPageCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(PrevPageCommandHandler, _super);
    function PrevPageCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, PrevPageCommand, PrevPageEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    PrevPageCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.prevPage();
        this.structureAggregateRepository.save(structure);
    };
    PrevPageCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PrevPageCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return PrevPageCommandHandler;
}(CommandHandler));
export { PrevPageCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PrevPageCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldi1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFekcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdsRDtJQUM0QyxrREFBYztJQUV6RCxnQ0FBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUQ3QyxZQUVDLGtCQUFNLGVBQWUsRUFDcEIsYUFBYSxFQUNiLG9CQUFvQixDQUFDLFNBQ3RCO1FBTG1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBSzlFLENBQUM7Ozs7O0lBRUQsdUNBQU07Ozs7SUFBTixVQUFPLE9BQXdCOztZQUV4QixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBRWpDLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFORiw0QkFBNEI7Z0JBRlosb0JBQW9COztJQTZCN0MsNkJBQUM7Q0FBQSxBQXJCRCxDQUM0QyxjQUFjLEdBb0J6RDtTQXBCWSxzQkFBc0I7Ozs7OztJQUV0Qiw4REFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZCB9IGZyb20gJy4vcHJldi1wYWdlLmNvbW1hbmQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4vcHJldi1wYWdlLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJldlBhZ2VDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFByZXZQYWdlQ29tbWFuZCxcblx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogUHJldlBhZ2VDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5wcmV2UGFnZSgpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0fVxuXG59XG4iXX0=