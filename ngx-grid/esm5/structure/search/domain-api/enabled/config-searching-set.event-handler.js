/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchingRepository } from './searching.repository';
import { ConfigSearchingSetEvent } from '../../domain/config/config-searching-set.event';
var ConfigSearchingSetEventHandler = /** @class */ (function () {
    function ConfigSearchingSetEventHandler(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @return {?}
     */
    ConfigSearchingSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ConfigSearchingSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigSearchingSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.structureSearchingRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    };
    ConfigSearchingSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigSearchingSetEventHandler.ctorParameters = function () { return [
        { type: SearchingRepository }
    ]; };
    return ConfigSearchingSetEventHandler;
}());
export { ConfigSearchingSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL2VuYWJsZWQvY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUl6RjtJQUdDLHdDQUFvQiw0QkFBaUQ7UUFBakQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFxQjtJQUNyRSxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0MsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELCtDQUFNOzs7O0lBQU4sVUFBTyxLQUE4QjtRQUVwQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQU5GLG1CQUFtQjs7SUF3QjVCLHFDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksOEJBQThCOzs7Ozs7SUFFOUIsc0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbmZpZy9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnk6IFNlYXJjaGluZ1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8Q29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuaXNFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==