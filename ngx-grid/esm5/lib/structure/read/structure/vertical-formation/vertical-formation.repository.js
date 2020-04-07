/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureCreatedEvent } from '../../../domain/structure/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../infrastructure/in-memory/read/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
var VerticalFormationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationRepository, _super);
    function VerticalFormationRepository(domainEventBus, inMemoryStructureReadStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        _this.verticalFormation = new Map();
        _this.verticalFormation$ = new ReplaySubject();
        _this.domainEventBus
            .ofEvent(StructureCreatedEvent, VerticalScrollEnabledSetEvent, (/** @type {?} */ (OriginSetEvent)), StructureHeightSetEvent, RowHeightSetEvent, SchemaThemeSetEvent, RowHeightSetBasedOnThemeEvent)
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
        function (v) { return v.isEnabled(); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0RkFBNEYsQ0FBQztBQUMzSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUVySCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUN2SSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFhM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFHdEo7SUFDaUQsdURBQVE7SUFNeEQscUNBQTZCLGNBQThCLEVBQ2hELDBCQUFzRDtRQURqRSxZQUVDLGlCQUFPLFNBNEJQO1FBOUI0QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7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MEJBQTBCOztJQXlHbkMsa0NBQUM7Q0FBQSxBQXBGRCxDQUNpRCxRQUFRLEdBbUZ4RDtTQW5GWSwyQkFBMkI7Ozs7OztJQUV2Qyx3REFBbUY7Ozs7O0lBRW5GLHlEQUFtRzs7Ozs7SUFFdkYscURBQStDOzs7OztJQUN4RCxpRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3JlYWQvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC9mb3JtYXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NvcnQvdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdFN0cnVjdHVyZUNyZWF0ZWRFdmVudCxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50LFxuXHRcdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudFxuXHRcdFx0KVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRcdG9wdFN0cnVjdHVyZS5pZlByZXNlbnQoKHN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHZlcnRpY2FsRm9ybWF0aW9uID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLFxuXHRcdFx0XHRcdFx0c3RydWN0dXJlUmVhZE1vZGVsUm9vdElkID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0dGhpcy5uZXh0KGFnZ3JlZ2F0ZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uVmVydGljYWxGb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgodjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpID0+IHYuZ2V0Vmlld1BvcnRIZWlnaHQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPiB7XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gc3RydWN0dXJlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiBpZFRvVmVydGljYWxGb3JtYXRpb24uZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24kLm5leHQodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdH1cblxuXG59XG4iXX0=