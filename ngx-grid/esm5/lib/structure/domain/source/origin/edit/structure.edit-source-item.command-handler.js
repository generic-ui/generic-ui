/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
var StructureEditSourceItemCommandHandler = /** @class */ (function () {
    function StructureEditSourceItemCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureEditSourceItemCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var params = command.getParams();
        structure.editItem(params);
    };
    StructureEditSourceItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditSourceItemCommandHandler.ctorParameters = function () { return [
        { type: StructureSourceDomainEventPublisher }
    ]; };
    return StructureEditSourceItemCommandHandler;
}());
export { StructureEditSourceItemCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXBHO0lBR0MsK0NBQW9CLG1DQUF3RTtRQUF4RSx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO0lBQzVGLENBQUM7Ozs7SUFFRCwwREFBVTs7O0lBQVY7UUFDQyxPQUFPLDhCQUE4QixDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELG1FQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUF1Qzs7WUFFbkYsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCwrREFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQXVDOztZQUUvRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVsQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQUpGLG1DQUFtQzs7SUE0QjVDLDRDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlkscUNBQXFDOzs7Ozs7SUFFckMsb0ZBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFyYW1zID0gY29tbWFuZC5nZXRQYXJhbXMoKTtcblxuXHRcdHN0cnVjdHVyZS5lZGl0SXRlbShwYXJhbXMpO1xuXHR9XG5cbn1cbiJdfQ==