/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from '../../domain/structure/summaries/structure.summaries-changed.event';
var StructureSummariesUiEventsRepository = /** @class */ (function () {
    function StructureSummariesUiEventsRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesUiEventsRepository.prototype.onSummariesChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof StructureSummariesChangedEvent; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })));
    };
    StructureSummariesUiEventsRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesUiEventsRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureSummariesUiEventsRepository;
}());
export { StructureSummariesUiEventsRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesUiEventsRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBR3BIO0lBR0MsOENBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELGlFQUFrQjs7OztJQUFsQixVQUFtQixXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxZQUFZLDhCQUE4QixFQUEvQyxDQUErQyxFQUFDLEVBQzVGLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUE1RCxDQUE0RCxFQUFDLENBQ3pHLENBQUM7SUFDUixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQU5XLGNBQWM7O0lBb0JwQywyQ0FBQztDQUFBLEFBZEQsSUFjQztTQWJZLG9DQUFvQzs7Ozs7O0lBRXBDLDhEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdG9uU3VtbWFyaWVzQ2hhbmdlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==