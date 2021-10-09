/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var ScrollBarPositionSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarPositionSetEvent, _super);
    function ScrollBarPositionSetEvent(aggregateId, position) {
        var _this = _super.call(this, aggregateId, position, 'ScrollBarPositionSetEvent') || this;
        _this.position = position;
        return _this;
    }
    /**
     * @return {?}
     */
    ScrollBarPositionSetEvent.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.position;
    };
    return ScrollBarPositionSetEvent;
}(StructureDomainEvent));
export { ScrollBarPositionSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetEvent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXRGO0lBQStDLHFEQUFvQjtJQUVsRSxtQ0FBWSxXQUF3QixFQUNoQixRQUFnQjtRQURwQyxZQUVDLGtCQUFNLFdBQVcsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLENBQUMsU0FDekQ7UUFGbUIsY0FBUSxHQUFSLFFBQVEsQ0FBUTs7SUFFcEMsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBQ0YsZ0NBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBK0Msb0JBQW9CLEdBVWxFOzs7Ozs7O0lBUEcsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXIpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgcG9zaXRpb24sICdTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG59XG4iXX0=