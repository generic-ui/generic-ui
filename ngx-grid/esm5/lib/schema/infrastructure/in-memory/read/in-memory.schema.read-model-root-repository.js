/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { SchemaReadModelRootRepository } from '../../../read/schema.read-model-root-repository';
import { SchemaThemeSetEvent } from '../../../domain/theme/schema-theme-set.event';
import { InMemorySchemaReadModelStore } from './in-memory.schema.read-model-store';
import { SchemaHorizontalGridSetEvent } from '../../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { RowColoringSetEvent } from '../../../domain/coloring/row-coloring-set.event';
import { SchemaVerticalGridSetEvent } from '../../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCreatedEvent } from '../../../domain/create/schema-created.event';
var InMemorySchemaReadModelRootRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemorySchemaReadModelRootRepository, _super);
    function InMemorySchemaReadModelRootRepository(domainEventBus, inMemorySchemaReadModelStore) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.inMemorySchemaReadModelStore = inMemorySchemaReadModelStore;
        _this.schemaIdToReadModel = new Map();
        _this.schemaIdToReadModel$ = new ReplaySubject(1);
        return _this;
    }
    /**
     * @param {?} readModelRootId
     * @return {?}
     */
    InMemorySchemaReadModelRootRepository.prototype.on = /**
     * @param {?} readModelRootId
     * @return {?}
     */
    function (readModelRootId) {
        return this.schemaIdToReadModel$
            .asObservable()
            .pipe(filter((/**
         * @param {?} schemaIdToReadModel
         * @return {?}
         */
        function (schemaIdToReadModel) {
            /** @type {?} */
            var key = readModelRootId.getId();
            return schemaIdToReadModel.has(key);
        })), map((/**
         * @param {?} schemaIdToReadModel
         * @return {?}
         */
        function (schemaIdToReadModel) { return schemaIdToReadModel.get(readModelRootId.getId()); })));
    };
    /**
     * @protected
     * @return {?}
     */
    InMemorySchemaReadModelRootRepository.prototype.forEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent,
            SchemaCreatedEvent
        ];
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    InMemorySchemaReadModelRootRepository.prototype.subscribe = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var aggregateId = event.getAggregateId();
        /** @type {?} */
        var optSchemaReadModel = this.inMemorySchemaReadModelStore.getById(aggregateId);
        optSchemaReadModel.ifPresent((/**
         * @param {?} schemaReadModelRoot
         * @return {?}
         */
        function (schemaReadModelRoot) {
            /** @type {?} */
            var key = schemaReadModelRoot.getId().toString();
            _this.schemaIdToReadModel.set(key, schemaReadModelRoot);
            _this.schemaIdToReadModel$.next(_this.schemaIdToReadModel);
        }));
    };
    InMemorySchemaReadModelRootRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemorySchemaReadModelRootRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemorySchemaReadModelStore }
    ]; };
    return InMemorySchemaReadModelRootRepository;
}(SchemaReadModelRootRepository));
export { InMemorySchemaReadModelRootRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelRootRepository.prototype.schemaIdToReadModel;
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelRootRepository.prototype.schemaIdToReadModel$;
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelRootRepository.prototype.inMemorySchemaReadModelStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR2pGO0lBQzJELGlFQUE2QjtJQU12RiwrQ0FBWSxjQUE4QixFQUN0Qiw0QkFBMEQ7UUFEOUUsWUFFQyxrQkFBTSxjQUFjLENBQUMsU0FDckI7UUFGbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUw3RCx5QkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztRQUU3RCwwQkFBb0IsR0FBRyxJQUFJLGFBQWEsQ0FBbUMsQ0FBQyxDQUFDLENBQUM7O0lBSy9GLENBQUM7Ozs7O0lBRUQsa0RBQUU7Ozs7SUFBRixVQUFHLGVBQXNDO1FBRXhDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQjthQUMxQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsbUJBQXFEOztnQkFFdEQsR0FBRyxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFFbkMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsbUJBQXFELElBQUssT0FBQSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQWhELENBQWdELEVBQUMsQ0FDaEgsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRVMseURBQVM7Ozs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFDNUIsMEJBQTBCO1lBQzFCLGtCQUFrQjtTQUNsQixDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMseURBQVM7Ozs7O0lBQW5CLFVBQW9CLEtBQWtCO1FBQXRDLGlCQWNDOztZQVpNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFOztZQUVwQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVqRixrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxtQkFBd0M7O2dCQUUvRCxHQUFHLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBRWxELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFFdkQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7O2dCQW5ERCxVQUFVOzs7O2dCQWJXLGNBQWM7Z0JBSzNCLDRCQUE0Qjs7SUE0RHJDLDRDQUFDO0NBQUEsQUFwREQsQ0FDMkQsNkJBQTZCLEdBbUR2RjtTQW5EWSxxQ0FBcUM7Ozs7OztJQUVqRCxvRUFBOEU7Ozs7O0lBRTlFLHFFQUErRjs7Ozs7SUFHNUYsNkVBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXN0b3JlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS9zY2hlbWEtY3JlYXRlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgZXh0ZW5kcyBTY2hlbWFSZWFkTW9kZWxSb290UmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZFRvUmVhZE1vZGVsID0gbmV3IE1hcDxzdHJpbmcsIFNjaGVtYVJlYWRNb2RlbFJvb3Q+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZFRvUmVhZE1vZGVsJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFNjaGVtYVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxTdG9yZTogSW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxTdG9yZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uKHJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxSZWFkb25seTxTY2hlbWFSZWFkTW9kZWxSb290Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hSWRUb1JlYWRNb2RlbCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc2NoZW1hSWRUb1JlYWRNb2RlbDogTWFwPHN0cmluZywgU2NoZW1hUmVhZE1vZGVsUm9vdD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gcmVhZE1vZGVsUm9vdElkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzY2hlbWFJZFRvUmVhZE1vZGVsLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hSWRUb1JlYWRNb2RlbDogTWFwPHN0cmluZywgU2NoZW1hUmVhZE1vZGVsUm9vdD4pID0+IHNjaGVtYUlkVG9SZWFkTW9kZWwuZ2V0KHJlYWRNb2RlbFJvb3RJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByb3RlY3RlZCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRSb3dDb2xvcmluZ1NldEV2ZW50LFxuXHRcdFx0U2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCxcblx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50LFxuXHRcdFx0U2NoZW1hQ3JlYXRlZEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdWJzY3JpYmUoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRTY2hlbWFSZWFkTW9kZWwgPSB0aGlzLmluTWVtb3J5U2NoZW1hUmVhZE1vZGVsU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRTY2hlbWFSZWFkTW9kZWwuaWZQcmVzZW50KChzY2hlbWFSZWFkTW9kZWxSb290OiBTY2hlbWFSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IHNjaGVtYVJlYWRNb2RlbFJvb3QuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHR0aGlzLnNjaGVtYUlkVG9SZWFkTW9kZWwuc2V0KGtleSwgc2NoZW1hUmVhZE1vZGVsUm9vdCk7XG5cblx0XHRcdHRoaXMuc2NoZW1hSWRUb1JlYWRNb2RlbCQubmV4dCh0aGlzLnNjaGVtYUlkVG9SZWFkTW9kZWwpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=