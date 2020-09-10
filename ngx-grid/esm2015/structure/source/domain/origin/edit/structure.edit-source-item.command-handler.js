/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
export class StructureEditSourceItemCommandHandler {
    /**
     * @param {?} structureSourceDomainEventPublisher
     */
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return StructureEditSourceItemCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        /** @type {?} */
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    handleAggregate(structure, command) {
        /** @type {?} */
        const params = command.getParams();
        structure.editItem(params);
    }
}
StructureEditSourceItemCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureEditSourceItemCommandHandler.ctorParameters = () => [
    { type: SourceDomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLakYsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUVqRCxZQUFvQixtQ0FBK0Q7UUFBL0Qsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUE0QjtJQUNuRixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBNkIsRUFBRSxPQUF1Qzs7Y0FFbkYsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBNkIsRUFBRSxPQUF1Qzs7Y0FFL0UsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFbEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF0QkQsVUFBVTs7OztZQUpGLDBCQUEwQjs7Ozs7OztJQU90QixvRkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZCc7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwYXJhbXMgPSBjb21tYW5kLmdldFBhcmFtcygpO1xuXG5cdFx0c3RydWN0dXJlLmVkaXRJdGVtKHBhcmFtcyk7XG5cdH1cblxufVxuIl19