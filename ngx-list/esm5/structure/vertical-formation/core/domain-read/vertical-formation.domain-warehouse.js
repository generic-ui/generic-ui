/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { VerticalFormationRepository } from '../api/vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { Injectable } from '@angular/core';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
var VerticalFormationDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationDomainWarehouse, _super);
    function VerticalFormationDomainWarehouse(verticalFormationRepository, positionRepository) {
        var _this = _super.call(this) || this;
        _this.verticalFormationRepository = verticalFormationRepository;
        _this.positionRepository = positionRepository;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationDomainWarehouse.prototype.onVerticalScrollEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationDomainWarehouse.prototype.onRowHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationDomainWarehouse.prototype.onContainerHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationDomainWarehouse.prototype.onTopMargin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationDomainWarehouse.prototype.onScrollBarPosition = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.positionRepository.on(structureId);
    };
    VerticalFormationDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VerticalFormationDomainWarehouse.ctorParameters = function () { return [
        { type: VerticalFormationRepository },
        { type: VerticalFormationScrollBarPositionArchive }
    ]; };
    return VerticalFormationDomainWarehouse;
}(VerticalFormationWarehouse));
export { VerticalFormationDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationDomainWarehouse.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationDomainWarehouse.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4tcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBR3hILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHakY7SUFDc0QsNERBQTBCO0lBRS9FLDBDQUE2QiwyQkFBd0QsRUFDakUsa0JBQTZEO1FBRGpGLFlBRUMsaUJBQU8sU0FDUDtRQUg0QixpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ2pFLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkM7O0lBRWpGLENBQUM7Ozs7O0lBRUQsa0VBQXVCOzs7O0lBQXZCLFVBQXdCLFdBQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsc0RBQVc7Ozs7SUFBWCxVQUFZLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELDREQUFpQjs7OztJQUFqQixVQUFrQixXQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHNEQUFXOzs7O0lBQVgsVUFBWSxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCw4REFBbUI7Ozs7SUFBbkIsVUFBb0IsV0FBd0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQTFCRCxVQUFVOzs7O2dCQVJGLDJCQUEyQjtnQkFDM0IseUNBQXlDOztJQW1DbEQsdUNBQUM7Q0FBQSxBQTVCRCxDQUNzRCwwQkFBMEIsR0EyQi9FO1NBM0JZLGdDQUFnQzs7Ozs7O0lBRWhDLHVFQUF5RTs7Ozs7SUFDbEYsOERBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlIH0gZnJvbSAnLi9zY3JvbGwtYmFyL3ZlcnRpY2FsLWZvcm1hdGlvbi5zY3JvbGwtYmFyLXBvc2l0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Eb21haW5XYXJlaG91c2UgZXh0ZW5kcyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblRvcE1hcmdpbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblNjcm9sbEJhclBvc2l0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb25SZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=