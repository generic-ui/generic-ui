/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSourceLoadingEvent } from './set-source-loading.event';
import { SourceSetLoadingCommand } from './source-set-loading.command';
var SourceSetLoadingCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SourceSetLoadingCommandHandler, _super);
    function SourceSetLoadingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SourceSetLoadingCommand, SetSourceLoadingEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var source = structure.getSource();
        source.setLoading(enabled);
        this.structureAggregateRepository.save(structure);
    };
    SourceSetLoadingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceSetLoadingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SourceSetLoadingCommandHandler;
}(CommandHandler));
export { SourceSetLoadingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2NvbW1hbmQvbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFO0lBQ29ELDBEQUFjO0lBRWpFLHdDQUFvQiw0QkFBMEQsRUFDM0Usb0JBQTBDO1FBRDdDLFlBRUMsa0JBQU0sdUJBQXVCLEVBQzVCLHFCQUFxQixFQUNyQixvQkFBb0IsQ0FBQyxTQUN0QjtRQUxtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUs5RSxDQUFDOzs7OztJQUVELCtDQUFNOzs7O0lBQU4sVUFBTyxPQUFnQzs7WUFFaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPOztZQUM5QixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQUxGLDRCQUE0QjtnQkFGWixvQkFBb0I7O0lBOEI3QyxxQ0FBQztDQUFBLEFBdkJELENBQ29ELGNBQWMsR0FzQmpFO1NBdEJZLDhCQUE4Qjs7Ozs7O0lBRTlCLHNFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4vc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFNvdXJjZVNldExvYWRpbmdDb21tYW5kIH0gZnJvbSAnLi9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kLFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNvdXJjZVNldExvYWRpbmdDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQsXG5cdFx0XHRzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzb3VyY2UgPSBzdHJ1Y3R1cmUuZ2V0U291cmNlKCk7XG5cblx0XHRzb3VyY2Uuc2V0TG9hZGluZyhlbmFibGVkKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdH1cblxufVxuIl19