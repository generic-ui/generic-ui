/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetSearchPhraseCommand } from './structure.set-search-phrase.command';
import { StructureSearchPhraseSetDomainEvent } from './structure.search-phrase-set.domain-event';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
var StructureSetSearchPhraseCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSetSearchPhraseCommandHandler, _super);
    function StructureSetSearchPhraseCommandHandler(structureAggregateRepository, structureSourceDomainEventPublisher, domainEventPublisher) {
        var _this = _super.call(this, StructureSetSearchPhraseCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var phrase = command.phrase;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.addSearchPhrase(phrase);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureSearchPhraseSetDomainEvent(structureId, phrase));
        this.structureSourceDomainEventPublisher.publish(structure.getEvents());
    };
    StructureSetSearchPhraseCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetSearchPhraseCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureSourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetSearchPhraseCommandHandler;
}(CommandHandler));
export { StructureSetSearchPhraseCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSearchPhraseCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUl6SDtJQUM0RCxrRUFBa0M7SUFFN0YsZ0RBQTZCLDRCQUEwRCxFQUM1RSxtQ0FBd0UsRUFDeEUsb0JBQTBDO1FBRnJELFlBR0Msa0JBQU0sK0JBQStCLENBQUMsU0FDdEM7UUFKNEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSx5Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXJELENBQUM7Ozs7O0lBRUQsdURBQU07Ozs7SUFBTixVQUFPLE9BQXdDOztZQUV4QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTs7WUFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRW5FLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksbUNBQW1DLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFQRiw0QkFBNEI7Z0JBRzVCLG1DQUFtQztnQkFMbkIsb0JBQW9COztJQStCN0MsNkNBQUM7Q0FBQSxBQXRCRCxDQUM0RCxjQUFjLEdBcUJ6RTtTQXJCWSxzQ0FBc0M7Ozs7OztJQUV0Qyw4RUFBMkU7Ozs7O0lBQ3BGLHFGQUFnRjs7Ozs7SUFDaEYsc0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQsXG5cdFx0XHRwaHJhc2UgPSBjb21tYW5kLnBocmFzZSxcblx0XHRcdHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5hZGRTZWFyY2hQaHJhc2UocGhyYXNlKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudChzdHJ1Y3R1cmVJZCwgcGhyYXNlKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHN0cnVjdHVyZS5nZXRFdmVudHMoKSk7XG5cdH1cblxufVxuIl19