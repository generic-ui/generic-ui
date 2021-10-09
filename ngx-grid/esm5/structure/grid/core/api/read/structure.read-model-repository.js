/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '@generic-ui/hermes';
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
            .ofEvent.apply(domainEventBus, tslib_1.__spread(_this.forEvents())).pipe(_this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subs(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
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
     * @param {?} structureId
     * @return {?}
     */
    StructureReadModelRepository.prototype.getStructure = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    StructureReadModelRepository.prototype.on = function (structureId) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpRCxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU03Rjs7OztJQUEyRCx3REFBUTtJQUVsRSxzQ0FBc0IsY0FBOEI7UUFBcEQsWUFDQyxpQkFBTyxTQWtCUDtRQWhCQSxjQUFjO2FBQ1osT0FBTyxPQURULGNBQWMsbUJBRVQsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUVuQixJQUFJLENBQ0osS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRTFDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7SUFVRixtQ0FBQztBQUFELENBQUMsQUEvQkQsQ0FBMkQsUUFBUSxHQStCbEU7Ozs7Ozs7Ozs7O0lBUkEsaUZBQXdFOzs7Ozs7SUFFeEUsdUVBQWdGOzs7Ozs7SUFFaEYsbUVBQTBEOzs7Ozs7O0lBRTFELG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgSGVybWVzT2JzZXJ2YWJsZSwgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Li4udGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc3VicyhldmVudCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q7XG5cblx0YWJzdHJhY3Qgb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnMoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPik6IHZvaWQ7XG5cbn1cbiJdfQ==