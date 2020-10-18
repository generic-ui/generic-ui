/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../structure/grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../core/domain-read/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '../../../../common/cdk/reactive';
export class StructureDialogSchemaManagerService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaReadModelRepository
     * @param {?} structureThemeConverter
     * @param {?} fabricDialogService
     */
    constructor(injector, schemaReadModelRepository, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    /**
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    open(readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        /** @type {?} */
        const injector = Injector.create({
            providers: [{ provide: SchemaReadModelRootId, useValue: readModelId }],
            parent: parentInjector
        });
        this.schemaReadModelRepository
            .onSingleTheme(readModelId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.fabricDialogService.open(StructureDialogSchemaManagerComponent, {
                injector: injector,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        }));
    }
}
StructureDialogSchemaManagerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDialogSchemaManagerService.ctorParameters = () => [
    { type: Injector },
    { type: SchemaWarehouse },
    { type: StructureThemeConverter },
    { type: FabricDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUU1RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJM0QsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLFFBQVE7Ozs7Ozs7SUFFaEUsWUFBNkIsUUFBa0IsRUFDM0IseUJBQTBDLEVBQzFDLHVCQUFnRCxFQUNoRCxtQkFBd0M7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQWlCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUU1RCxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBa0MsRUFBRSxjQUF5QjtRQUVqRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1NBQzlCOztjQUVLLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUN0RSxNQUFNLEVBQUUsY0FBYztTQUN0QixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QjthQUM1QixhQUFhLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBRWpDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7Z0JBQ3BFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqQ0QsVUFBVTs7OztZQVpVLFFBQVE7WUFJcEIsZUFBZTtZQUNmLHVCQUF1QjtZQUh2QixtQkFBbUI7Ozs7Ozs7SUFhZix1REFBbUM7Ozs7O0lBQzVDLHdFQUEyRDs7Ozs7SUFDM0Qsc0VBQWlFOzs7OztJQUNqRSxrRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpOiB2b2lkIHtcblxuXHRcdGlmICghcGFyZW50SW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3RvclxuXHRcdH1cblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCB1c2VWYWx1ZTogcmVhZE1vZGVsSWQgfV0sXG5cdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblNpbmdsZVRoZW1lKHJlYWRNb2RlbElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=