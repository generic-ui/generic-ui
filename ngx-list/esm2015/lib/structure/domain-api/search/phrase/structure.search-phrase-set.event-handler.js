/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
export class StructureSearchPhraseSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchPhraseRepository
     */
    constructor(structureSearchPhraseRepository) {
        super();
        this.structureSearchPhraseRepository = structureSearchPhraseRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureSearchPhraseSetDomainEvent')) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    }
}
StructureSearchPhraseSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchPhraseSetEventHandler.ctorParameters = () => [
    { type: StructureSearchPhraseRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zZWFyY2gvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXZGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxrQkFBb0U7Ozs7SUFFN0gsWUFBb0IsK0JBQWdFO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRFcsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUVwRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUEwQztRQUVoRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMxRjtJQUVGLENBQUM7OztZQWJELFVBQVU7Ozs7WUFMRiwrQkFBK0I7Ozs7Ozs7SUFRM0IsK0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeS5zZXRQaHJhc2UoZXZlbnQuZ2V0UGhyYXNlKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==