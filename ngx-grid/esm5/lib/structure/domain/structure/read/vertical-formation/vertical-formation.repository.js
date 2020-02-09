/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../../common/cdk/reactive';
import { StructureInitedEvent } from '../../command/init/structure-inited.event';
import { VerticalScrollEnabledSetEvent } from '../../command/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../../../infrastructure/in-memory/structure/read/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../command/vertical-formation/set-row-height/row-height-set.event';
var VerticalFormationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationRepository, _super);
    function VerticalFormationRepository(domainEventBus, inMemoryStructureQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        _this.verticalFormation = new Map();
        _this.verticalFormation$ = new ReplaySubject();
        _this.domainEventBus
            .ofEvent(StructureInitedEvent, VerticalScrollEnabledSetEvent, RowHeightSetEvent)
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.aggregateId;
            /** @type {?} */
            var structure = _this.inMemoryStructureQueryStore.getById(aggregateId);
            /** @type {?} */
            var verticalFormation = structure.getVerticalFormation();
            /** @type {?} */
            var structureId = structure.getId();
            _this.next(structureId, verticalFormation);
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
    VerticalFormationRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDL0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDaEksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFHekc7SUFDaUQsdURBQVE7SUFNeEQscUNBQTZCLGNBQThCLEVBQ2hELDJCQUF1RDtRQURsRSxZQUVDLGlCQUFPLFNBbUJQO1FBckI0QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDaEQsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE0QjtRQUxqRCx1QkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBc0MsQ0FBQztRQUVsRSx3QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBMkMsQ0FBQztRQU1sRyxLQUFJLENBQUMsY0FBYzthQUNqQixPQUFPLENBQ1Asb0JBQW9CLEVBQ3BCLDZCQUE2QixFQUM3QixpQkFBaUIsQ0FDakI7YUFDQSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCOztnQkFFdkIsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXOztnQkFFL0IsU0FBUyxHQUFHLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztnQkFDdEUsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFOztnQkFDcEQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFFaEMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7OztJQUVELDZEQUF1Qjs7OztJQUF2QixVQUF3QixXQUF3QjtRQUUvQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDdEMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLENBQTZCLElBQUssT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQ3JELENBQUM7SUFDUixDQUFDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxXQUF3QjtRQUVuQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDdEMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLENBQTZCLElBQUssT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQWhCLENBQWdCLEVBQUMsQ0FDeEQsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVPLHlEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsV0FBd0I7UUFFbkQsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2FBQ3hCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxxQkFBOEQ7O2dCQUUvRCxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUUvQixPQUFPLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxxQkFBOEQsSUFBSyxPQUFBLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUN2SCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVPLDBDQUFJOzs7Ozs7SUFBWixVQUFhLFdBQXdCLEVBQUUsaUJBQTZDO1FBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFoRUQsVUFBVTs7OztnQkFYVyxjQUFjO2dCQU8zQiwwQkFBMEI7O0lBdUVuQyxrQ0FBQztDQUFBLEFBbkVELENBQ2lELFFBQVEsR0FrRXhEO1NBbEVZLDJCQUEyQjs7Ozs7O0lBRXZDLHdEQUFtRjs7Ozs7SUFFbkYseURBQW1HOzs7OztJQUV2RixxREFBK0M7Ozs7O0lBQ3hELGtFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9pbml0L3N0cnVjdHVyZS1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL3JlYWQvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5U3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHRTdHJ1Y3R1cmVJbml0ZWRFdmVudCxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50XG5cdFx0XHQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKSxcblx0XHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHN0cnVjdHVyZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkID0gc3RydWN0dXJlLmdldElkKCk7XG5cblx0XHRcdFx0dGhpcy5uZXh0KHN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5pc0VuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFJvd0hlaWdodCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBvblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8VmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+IHtcblxuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChpZFRvVmVydGljYWxGb3JtYXRpb246IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBzdHJ1Y3R1cmVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb1ZlcnRpY2FsRm9ybWF0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIG5leHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCB2ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiQubmV4dCh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uKTtcblx0fVxuXG5cbn1cbiJdfQ==