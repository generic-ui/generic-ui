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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUd6SDtJQUM0RCxrRUFBYztJQUV6RSxnREFBNkIsNEJBQTBELEVBQzVFLG1DQUF3RSxFQUN4RSxvQkFBMEM7UUFGckQsWUFHQyxrQkFBTSwrQkFBK0IsQ0FBQyxTQUN0QztRQUo0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCx1REFBTTs7OztJQUFOLFVBQU8sT0FBd0M7O1lBRXhDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNOztZQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFbkUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQU5GLDRCQUE0QjtnQkFHNUIsbUNBQW1DO2dCQUxuQixvQkFBb0I7O0lBOEI3Qyw2Q0FBQztDQUFBLEFBdEJELENBQzRELGNBQWMsR0FxQnpFO1NBckJZLHNDQUFzQzs7Ozs7O0lBRXRDLDhFQUEyRTs7Ozs7SUFDcEYscUZBQWdGOzs7OztJQUNoRixzRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0cGhyYXNlID0gY29tbWFuZC5waHJhc2UsXG5cdFx0XHRzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRzdHJ1Y3R1cmUuYWRkU2VhcmNoUGhyYXNlKHBocmFzZSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQoc3RydWN0dXJlSWQsIHBocmFzZSkpO1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChzdHJ1Y3R1cmUuZ2V0RXZlbnRzKCkpO1xuXHR9XG5cbn1cbiJdfQ==