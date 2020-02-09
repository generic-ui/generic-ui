/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetColumnsCommand } from './set-columns.command';
export class SetColumnsCommandHandler extends CommandHandler {
    /**
     * @param {?} compositionAggregateRepository
     * @param {?} domainEventPublisher
     * @param {?} compositionEventConverter
     */
    constructor(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        super(SetColumnsCommand);
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const setColumnsParams = command.getParams();
        /** @type {?} */
        const composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setColumns(setColumnsParams);
        this.compositionAggregateRepository.save(composition);
        this.publishEvents(composition, command);
    }
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    publishEvents(composition, command) {
        /** @type {?} */
        const events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        const domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetColumnsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetColumnsCommandHandler.ctorParameters = () => [
    { type: CompositionAggregateRepository },
    { type: DomainEventPublisher },
    { type: CompositionEventConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetColumnsCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUVwSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUsxRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7O0lBRTNELFlBQTZCLDhCQUE4RCxFQUM5RSxvQkFBMEMsRUFDNUMseUJBQW9EO1FBQzlELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBSEcsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFFL0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMEI7O2NBRTFCLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztjQUMzQyxnQkFBZ0IsR0FBd0IsT0FBTyxDQUFDLFNBQVMsRUFBRTs7Y0FFdEQsV0FBVyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTVFLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBaUMsRUFBRSxPQUFnQjs7Y0FFbEUsTUFBTSxHQUFHLG1CQUFBLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBeUI7O2NBRXpELFlBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVuRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQTlCRCxVQUFVOzs7O1lBUkYsOEJBQThCO1lBRlcsb0JBQW9CO1lBRzdELHlCQUF5Qjs7Ozs7OztJQVVyQixrRUFBK0U7Ozs7O0lBQ3hGLHdEQUFvRDs7Ozs7SUFDcEQsNkRBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmQgfSBmcm9tICcuL3NldC1jb2x1bW5zLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4ucGFyYW1zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByb3RlY3RlZCBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHRcdHN1cGVyKFNldENvbHVtbnNDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRDb2x1bW5zQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHNldENvbHVtbnNQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4gPSBjb21tYW5kLmdldFBhcmFtcygpO1xuXG5cdFx0Y29uc3QgY29tcG9zaXRpb24gPSB0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldENvbHVtbnMoc2V0Q29sdW1uc1BhcmFtcyk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGNvbXBvc2l0aW9uKTtcblxuXHRcdHRoaXMucHVibGlzaEV2ZW50cyhjb21wb3NpdGlvbiwgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdH1cbn1cbiJdfQ==