/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SearchPhraseSetDomainEvent } from './search-phrase-set.domain-event';
import { SourceDomainEventPublisher } from '../../../../../source/core/domain/source.domain-event.publisher';
var StructureSetSearchPhraseCommandHandler = /** @class */ (function () {
    function StructureSetSearchPhraseCommandHandler(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSearchPhraseCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSearchPhraseCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var phrase = command.getPhrase();
        /** @type {?} */
        var initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    };
    StructureSetSearchPhraseCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetSearchPhraseCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetSearchPhraseCommandHandler;
}());
export { StructureSetSearchPhraseCommandHandler };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9waHJhc2Uvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUk3RztJQUdDLGdEQUE2QixtQ0FBK0QsRUFDeEUsb0JBQTBDO1FBRGpDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7UUFDeEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsMkRBQVU7OztJQUFWO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCx1REFBTTs7Ozs7SUFBTixVQUFPLFNBQTZCLEVBQUUsT0FBK0I7O1lBRTlELE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRWxDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsd0RBQU87Ozs7O0lBQVAsVUFBUSxTQUE2QixFQUFFLE9BQStCOztZQUUvRCxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTs7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsbUNBQW1DLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQXpCRCxVQUFVOzs7O2dCQUpGLDBCQUEwQjtnQkFKRyxvQkFBb0I7O0lBbUMxRCw2Q0FBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLHNDQUFzQzs7Ozs7O0lBRXRDLHFGQUFnRjs7Ozs7SUFDekYsc0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4vc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRTZWFyY2hQaHJhc2VDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNlYXJjaFBocmFzZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBocmFzZSA9IGNvbW1hbmQuZ2V0UGhyYXNlKCk7XG5cblx0XHRhZ2dyZWdhdGUuYWRkU2VhcmNoUGhyYXNlKHBocmFzZSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwaHJhc2UgPSBjb21tYW5kLmdldFBocmFzZSgpLFxuXHRcdFx0aW5pdGlhbCA9IGNvbW1hbmQuaXNJbml0aWFsKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgcGhyYXNlLCBpbml0aWFsKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKSk7XG5cdH1cblxufVxuIl19