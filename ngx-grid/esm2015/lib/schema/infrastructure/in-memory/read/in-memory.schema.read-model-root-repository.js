/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class InMemorySchemaReadModelRootRepository extends SchemaReadModelRootRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemorySchemaReadModelStore
     */
    constructor(domainEventBus, inMemorySchemaReadModelStore) {
        super(domainEventBus);
        this.inMemorySchemaReadModelStore = inMemorySchemaReadModelStore;
        this.schemaIdToReadModel = new Map();
        this.schemaIdToReadModel$ = new ReplaySubject(1);
    }
    /**
     * @param {?} readModelRootId
     * @return {?}
     */
    on(readModelRootId) {
        return this.schemaIdToReadModel$
            .asObservable()
            .pipe(filter((/**
         * @param {?} schemaIdToReadModel
         * @return {?}
         */
        (schemaIdToReadModel) => {
            /** @type {?} */
            const key = readModelRootId.getId();
            return schemaIdToReadModel.has(key);
        })), map((/**
         * @param {?} schemaIdToReadModel
         * @return {?}
         */
        (schemaIdToReadModel) => schemaIdToReadModel.get(readModelRootId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent,
            SchemaCreatedEvent
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subscribe(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optSchemaReadModel = this.inMemorySchemaReadModelStore.getById(aggregateId);
        optSchemaReadModel.ifPresent((/**
         * @param {?} schemaReadModelRoot
         * @return {?}
         */
        (schemaReadModelRoot) => {
            /** @type {?} */
            const key = schemaReadModelRoot.getId().toString();
            this.schemaIdToReadModel.set(key, schemaReadModelRoot);
            this.schemaIdToReadModel$.next(this.schemaIdToReadModel);
        }));
    }
}
InMemorySchemaReadModelRootRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemorySchemaReadModelRootRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemorySchemaReadModelStore }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFJakYsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLDZCQUE2Qjs7Ozs7SUFNdkYsWUFBWSxjQUE4QixFQUN0Qiw0QkFBMEQ7UUFDN0UsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREgsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUw3RCx3QkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztRQUU3RCx5QkFBb0IsR0FBRyxJQUFJLGFBQWEsQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFLL0YsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsZUFBc0M7UUFFeEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CO2FBQzFCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxtQkFBcUQsRUFBRSxFQUFFOztrQkFFMUQsR0FBRyxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFFbkMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsbUJBQXFELEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUNoSCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFUyxTQUFTO1FBQ2xCLE9BQU87WUFDTixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDRCQUE0QjtZQUM1QiwwQkFBMEI7WUFDMUIsa0JBQWtCO1NBQ2xCLENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFUyxTQUFTLENBQUMsS0FBa0I7O2NBRS9CLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFOztjQUVwQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVqRixrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxtQkFBd0MsRUFBRSxFQUFFOztrQkFFbkUsR0FBRyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUVsRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUFuREQsVUFBVTs7OztZQWJXLGNBQWM7WUFLM0IsNEJBQTRCOzs7Ozs7O0lBV3BDLG9FQUE4RTs7Ozs7SUFFOUUscUVBQStGOzs7OztJQUc1Riw2RUFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc2NoZW1hLnJlYWQtbW9kZWwtc3RvcmUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY3JlYXRlL3NjaGVtYS1jcmVhdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxSb290UmVwb3NpdG9yeSBleHRlbmRzIFNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkVG9SZWFkTW9kZWwgPSBuZXcgTWFwPHN0cmluZywgU2NoZW1hUmVhZE1vZGVsUm9vdD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkVG9SZWFkTW9kZWwkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU2NoZW1hUmVhZE1vZGVsUm9vdD4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVNjaGVtYVJlYWRNb2RlbFN0b3JlOiBJbk1lbW9yeVNjaGVtYVJlYWRNb2RlbFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b24ocmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPFJlYWRvbmx5PFNjaGVtYVJlYWRNb2RlbFJvb3Q+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFJZFRvUmVhZE1vZGVsJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChzY2hlbWFJZFRvUmVhZE1vZGVsOiBNYXA8c3RyaW5nLCBTY2hlbWFSZWFkTW9kZWxSb290PikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSByZWFkTW9kZWxSb290SWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYUlkVG9SZWFkTW9kZWwuaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWFJZFRvUmVhZE1vZGVsOiBNYXA8c3RyaW5nLCBTY2hlbWFSZWFkTW9kZWxSb290PikgPT4gc2NoZW1hSWRUb1JlYWRNb2RlbC5nZXQocmVhZE1vZGVsUm9vdElkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U2NoZW1hVGhlbWVTZXRFdmVudCxcblx0XHRcdFJvd0NvbG9yaW5nU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50LFxuXHRcdFx0U2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRTY2hlbWFDcmVhdGVkRXZlbnRcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdFNjaGVtYVJlYWRNb2RlbCA9IHRoaXMuaW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdFNjaGVtYVJlYWRNb2RlbC5pZlByZXNlbnQoKHNjaGVtYVJlYWRNb2RlbFJvb3Q6IFNjaGVtYVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gc2NoZW1hUmVhZE1vZGVsUm9vdC5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuc2NoZW1hSWRUb1JlYWRNb2RlbC5zZXQoa2V5LCBzY2hlbWFSZWFkTW9kZWxSb290KTtcblxuXHRcdFx0dGhpcy5zY2hlbWFJZFRvUmVhZE1vZGVsJC5uZXh0KHRoaXMuc2NoZW1hSWRUb1JlYWRNb2RlbCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==