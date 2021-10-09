/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEventBus, hermesMap } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from './grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from './grid/vertical/schema-vertical-grid-set.event';
import { RowColoringSetEvent } from './row-coloring/row-coloring-set.event';
import { SchemaEventRepository } from '../api/schema.event-repository';
import { Injectable } from '@angular/core';
export class SchemaDomainEventRepository extends SchemaEventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onThemeChanged(schemaId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.getTheme();
        })));
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onHorizontalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getHorizontalGrid())));
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onVerticalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getVerticalGrid())));
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onRowColoring(schemaId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getRowColoring())));
    }
}
SchemaDomainEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDomainEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBcUI7Ozs7SUFFckUsWUFBWSxjQUE4QjtRQUN6QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBK0I7UUFFN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQzthQUM1QyxJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsS0FBMEIsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLFFBQStCO1FBRXRELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7YUFDckQsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW1DLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQzdFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFFBQStCO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUM7YUFDbkQsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWlDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUN6RSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBK0I7UUFFNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQzthQUM1QyxJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsS0FBMEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQ2pFLENBQUM7SUFDUixDQUFDOzs7WUF2Q0QsVUFBVTs7OztZQVhGLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEJ1cywgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURvbWFpbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25UaGVtZUNoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IFNjaGVtYVRoZW1lU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBldmVudC5nZXRUaGVtZSgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KSA9PiBldmVudC5nZXRIb3Jpem9udGFsR3JpZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0VmVydGljYWxHcmlkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBSb3dDb2xvcmluZ1NldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBSb3dDb2xvcmluZ1NldEV2ZW50KSA9PiBldmVudC5nZXRSb3dDb2xvcmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==