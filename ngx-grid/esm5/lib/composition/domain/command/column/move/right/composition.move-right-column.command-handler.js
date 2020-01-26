/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
var CompositionMoveRightColumnCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionMoveRightColumnCommandHandler, _super);
    function CompositionMoveRightColumnCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, CompositionMoveRightColumnCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CompositionMoveRightColumnCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var columnId = command.getColumnId();
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.moveRight(columnId);
        this.compositionAggregateRepository.save(composition);
        this.publishEvents(composition, command);
    };
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    CompositionMoveRightColumnCommandHandler.prototype.publishEvents = /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    };
    CompositionMoveRightColumnCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionMoveRightColumnCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return CompositionMoveRightColumnCommandHandler;
}(CommandHandler));
export { CompositionMoveRightColumnCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionMoveRightColumnCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionMoveRightColumnCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUVwSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU1RjtJQUM4RCxvRUFBYztJQUUzRSxrREFBNkIsOEJBQThELEVBQzlFLG9CQUEwQyxFQUM1Qyx5QkFBb0Q7UUFGL0QsWUFHQyxrQkFBTSxpQ0FBaUMsQ0FBQyxTQUN4QztRQUo0QixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjs7SUFFL0QsQ0FBQzs7Ozs7SUFFRCx5REFBTTs7OztJQUFOLFVBQU8sT0FBMEM7O1lBRTFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztZQUMzQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTVFLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7O0lBRU8sZ0VBQWE7Ozs7OztJQUFyQixVQUFzQixXQUFpQyxFQUFFLE9BQWdCOztZQUVsRSxNQUFNLEdBQUcsbUJBQUEsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUF5Qjs7WUFFekQsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOztnQkFoQ0QsVUFBVTs7OztnQkFMRiw4QkFBOEI7Z0JBRlcsb0JBQW9CO2dCQUc3RCx5QkFBeUI7O0lBcUNsQywrQ0FBQztDQUFBLEFBakNELENBQzhELGNBQWMsR0FnQzNFO1NBaENZLHdDQUF3Qzs7Ozs7O0lBRXhDLGtGQUErRTs7Ozs7SUFDeEYsd0VBQW9EOzs7OztJQUNwRCw2RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kLCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi1ldmVudC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb2x1bW5JZCA9IGNvbW1hbmQuZ2V0Q29sdW1uSWQoKTtcblxuXHRcdGNvbnN0IGNvbXBvc2l0aW9uID0gdGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb21wb3NpdGlvbi5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShjb21wb3NpdGlvbik7XG5cblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb24sIGNvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRXZlbnRzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gY29tcG9zaXRpb24uZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ+O1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoZXZlbnRzKTtcblxuXHRcdGlmIChkb21haW5FdmVudHMgJiYgZG9tYWluRXZlbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHRcdH1cblx0fVxufVxuIl19