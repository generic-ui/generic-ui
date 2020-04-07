/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../../../common/cdk/reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StructureReadModelRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureReadModelRepository, _super);
    function StructureReadModelRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        domainEventBus
            .ofEvent.apply(domainEventBus, tslib_1.__spread(_this.forEvents())).pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subs(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
        return _this;
    }
    return StructureReadModelRepository;
}(Reactive));
/**
 * @abstract
 */
export { StructureReadModelRepository };
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureReadModelRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureReadModelRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureReadModelRepository.prototype.subs = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBSzNEOzs7O0lBQTJELHdEQUFRO0lBRWxFLHNDQUFzQixjQUE4QjtRQUFwRCxZQUNDLGlCQUFPLFNBZ0JQO1FBZkEsY0FBYzthQUNaLE9BQU8sT0FEVCxjQUFjLG1CQUVULEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FFbkIsSUFBSSxDQUNKLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUU3QixJQUFJO2dCQUNILEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQztJQVFGLG1DQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUEyRCxRQUFRLEdBMkJsRTs7Ozs7Ozs7Ozs7SUFOQSxnRkFBbUY7Ozs7OztJQUVuRixtRUFBMEQ7Ozs7Ozs7SUFFMUQsbUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHQuLi50aGlzLmZvckV2ZW50cygpXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnN1YnMoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRhYnN0cmFjdCBvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc3VicyhldmVudDogRG9tYWluRXZlbnQpOiB2b2lkO1xuXG59XG4iXX0=