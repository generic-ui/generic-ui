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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBTTNEOzs7O0lBQTJELHdEQUFRO0lBRWxFLHNDQUFzQixjQUE4QjtRQUFwRCxZQUNDLGlCQUFPLFNBZ0JQO1FBZkEsY0FBYzthQUNaLE9BQU8sT0FEVCxjQUFjLG1CQUVULEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FFbkIsSUFBSSxDQUNKLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUErQjtZQUUxQyxJQUFJO2dCQUNILEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQztJQVFGLG1DQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUEyRCxRQUFRLEdBMkJsRTs7Ozs7Ozs7Ozs7SUFOQSxnRkFBbUY7Ozs7OztJQUVuRixtRUFBMEQ7Ozs7Ozs7SUFFMUQsbUVBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Li4udGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc3VicyhldmVudCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFic3RyYWN0IG9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pOiB2b2lkO1xuXG59XG4iXX0=