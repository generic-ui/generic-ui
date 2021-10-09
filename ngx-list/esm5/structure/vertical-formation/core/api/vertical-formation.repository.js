/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, hermesDistinctUntilChanged, hermesFilter, hermesMap, HermesReplaySubject, Reactive } from '@generic-ui/hermes';
import { StructureCreatedEvent } from '../../../core/domain/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../domain/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../core/infrastructure/in-memory/api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../domain/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/core/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../domain/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../../source/core/domain/origin/set-origin/origin-set.event';
import { ScrollPositionSetEvent } from '../domain/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../domain/set-row-height-theme/row-height-set-based-on-theme.event';
import { SearchPhraseSetDomainEvent } from '../../../search/core/domain/phrase/set-phrase/search-phrase-set.domain-event';
import { PageChangedEvent } from '../../../paging/core/domain/page/page-changed.event';
import { PagingSetEvent } from '../../../paging/core/domain/set/paging-set.event';
var VerticalFormationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationRepository, _super);
    function VerticalFormationRepository(domainEventBus, inMemoryStructureReadStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        _this.verticalFormation = new Map();
        _this.verticalFormation$ = new HermesReplaySubject(1);
        _this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)), (/** @type {?} */ (PageChangedEvent)), (/** @type {?} */ (PagingSetEvent)))
            .pipe(_this.hermesTakeUntil())
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
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.isEnabled(); })), hermesDistinctUntilChanged());
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
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getRowHeight(); })), hermesDistinctUntilChanged());
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
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getViewPortHeight(); })), hermesDistinctUntilChanged());
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
            .pipe(hermesMap((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getTopMargin(); })), hermesDistinctUntilChanged());
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
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        function (idToVerticalFormation) {
            /** @type {?} */
            var key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), hermesMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTixjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixTQUFTLEVBRVQsbUJBQW1CLEVBQ25CLFFBQVEsRUFDUixNQUFNLG9CQUFvQixDQUFDO0FBSTVCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNoRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEY7SUFDaUQsdURB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QkFBOEQ7O2dCQUVyRSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUUvQixPQUFPLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsVUFBQyxxQkFBOEQsSUFBSyxPQUFBLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUM3SCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLDBDQUFJOzs7Ozs7SUFBWixVQUFhLFdBQXdCLEVBQUUsaUJBQTZDO1FBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFsR0QsVUFBVTs7OztnQkExQlYsY0FBYztnQkFhTiwwQkFBMEI7O0lBa0huQyxrQ0FBQztDQUFBLEFBckdELENBQ2lELFFBQVEsR0FvR3hEO1NBcEdZLDJCQUEyQjs7Ozs7O0lBRXZDLHdEQUFtRjs7Ozs7SUFFbkYseURBQTBHOzs7OztJQUU5RixxREFBK0M7Ozs7O0lBQ3hELGlFQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RG9tYWluRXZlbnQsXG5cdERvbWFpbkV2ZW50QnVzLFxuXHRoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCxcblx0aGVybWVzRmlsdGVyLFxuXHRoZXJtZXNNYXAsXG5cdEhlcm1lc09ic2VydmFibGUsXG5cdEhlcm1lc1JlcGxheVN1YmplY3QsXG5cdFJlYWN0aXZlXG59IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuLi9kb21haW4vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vc2V0L3BhZ2luZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oMSk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRSb3dIZWlnaHRTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQgYXMgYW55LCAvLyBUT0RPXG5cdFx0XHRcdFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IGFzIGFueSxcblx0XHRcdFx0U2Nyb2xsUG9zaXRpb25TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IGFzIGFueSxcblx0XHRcdFx0UGFnZUNoYW5nZWRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFBhZ2luZ1NldEV2ZW50IGFzIGFueVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0Y29uc3Qgb3B0U3RydWN0dXJlID0gdGhpcy5pbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0XHRvcHRTdHJ1Y3R1cmUuaWZQcmVzZW50KChzdHJ1Y3R1cmVSZWFkTW9kZWxSb290OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCB2ZXJ0aWNhbEZvcm1hdGlvbiA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdFx0XHRcdHRoaXMubmV4dChhZ2dyZWdhdGVJZCwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuaXNFbmFibGVkKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRWaWV3UG9ydEhlaWdodCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRUb3BNYXJnaW4oKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8VmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+IHtcblxuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBzdHJ1Y3R1cmVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiQubmV4dCh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uKTtcblx0fVxuXG5cbn1cbiJdfQ==