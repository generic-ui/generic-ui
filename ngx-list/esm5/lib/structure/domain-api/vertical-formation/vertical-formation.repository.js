/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureCreatedEvent } from '../../domain/structure/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../infrastructure/in-memory/feature-api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../domain/source/origin/set-origin/origin-set.event';
import { ScrollPositionSetEvent } from '../../domain/structure/vertical-formation/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
import { StructureSearchPhraseSetDomainEvent } from '../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
var VerticalFormationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationRepository, _super);
    function VerticalFormationRepository(domainEventBus, inMemoryStructureReadStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        _this.verticalFormation = new Map();
        _this.verticalFormation$ = new ReplaySubject();
        _this.domainEventBus
            .ofEvent(StructureCreatedEvent, VerticalScrollEnabledSetEvent, (/** @type {?} */ (OriginSetEvent)), StructureHeightSetEvent, RowHeightSetEvent, (/** @type {?} */ (SchemaThemeSetEvent)), // TODO
        RowHeightSetBasedOnThemeEvent, ScrollPositionSetEvent, StructureSearchPhraseSetDomainEvent)
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.getAggregateId();
            /** @type {?} */
            var optStructure = _this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((/**
             * @param {?} structureReadModelRoot
             * @return {?}
             */
            function (structureReadModelRoot) {
                /** @type {?} */
                var verticalFormation = structureReadModelRoot.getVerticalFormation();
                /** @type {?} */
                var structureReadModelRootId = structureReadModelRoot.getId();
                _this.next(aggregateId, verticalFormation);
            }));
        }));
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onVerticalScrollEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.isEnabled(); })), distinctUntilChanged());
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onRowHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getRowHeight(); })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onContainerHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getViewPortHeight(); })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onTopMargin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getTopMargin(); })));
    };
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onVerticalFormation = /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormation$
            .asObservable()
            .pipe(filter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        function (idToVerticalFormation) {
            /** @type {?} */
            var key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), map((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        function (idToVerticalFormation) { return idToVerticalFormation.get(structureId.getId()); })));
    };
    /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    VerticalFormationRepository.prototype.next = /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    function (structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    };
    VerticalFormationRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VerticalFormationRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryStructureReadStore }
    ]; };
    return VerticalFormationRepository;
}(Reactive));
export { VerticalFormationRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation$;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3hJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBRWxILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUM3SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvR0FBb0csQ0FBQztBQUNuSixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUd4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VUFBQyxxQkFBOEQsSUFBSyxPQUFBLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUN2SCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLDBDQUFJOzs7Ozs7SUFBWixVQUFhLFdBQXdCLEVBQUUsaUJBQTZDO1FBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE1RkQsVUFBVTs7OztnQkFsQlcsY0FBYztnQkFPM0IsMEJBQTBCOztJQTBHbkMsa0NBQUM7Q0FBQSxBQS9GRCxDQUNpRCxRQUFRLEdBOEZ4RDtTQTlGWSwyQkFBMkI7Ozs7OztJQUV2Qyx3REFBbUY7Ozs7O0lBRW5GLHlEQUFtRzs7Ozs7SUFFdkYscURBQStDOzs7OztJQUN4RCxpRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4uLy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9mZWF0dXJlLWFwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC9yb3ctaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY3JvbGxQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uID0gbmV3IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+PigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0XHRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCxcblx0XHRcdFx0T3JpZ2luU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCxcblx0XHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQgYXMgYW55LCAvLyBUT0RPXG5cdFx0XHRcdFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0XHRTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudFxuXHRcdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0Y29uc3Qgb3B0U3RydWN0dXJlID0gdGhpcy5pbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0XHRvcHRTdHJ1Y3R1cmUuaWZQcmVzZW50KChzdHJ1Y3R1cmVSZWFkTW9kZWxSb290OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCB2ZXJ0aWNhbEZvcm1hdGlvbiA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0VmVydGljYWxGb3JtYXRpb24oKSxcblx0XHRcdFx0XHRcdHN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdHRoaXMubmV4dChhZ2dyZWdhdGVJZCwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuaXNFbmFibGVkKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Vmlld1BvcnRIZWlnaHQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFRvcE1hcmdpbigpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8VmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+IHtcblxuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBzdHJ1Y3R1cmVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiQubmV4dCh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uKTtcblx0fVxuXG5cbn1cbiJdfQ==