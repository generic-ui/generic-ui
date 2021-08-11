/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { ActiveFilterMenuComponent } from './active-filter-menu.component';
import { StructureId } from '../../../../core/api/structure.id';
export class ActiveFilterService extends Reactive {
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
     * @param {?} structureId
     * @return {?}
     */
    open(readModelId, structureId) {
        /** @type {?} */
        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: SchemaReadModelRootId, useValue: readModelId },
                { provide: StructureId, useValue: structureId }
            ]
        });
        this.schemaReadModelRepository
            .onSingleTheme(readModelId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.fabricDialogService.open(ActiveFilterMenuComponent, {
                injector: injector,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        }));
    }
}
ActiveFilterService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActiveFilterService.ctorParameters = () => [
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
    ActiveFilterService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRXpHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsUUFBUTs7Ozs7OztJQUVoRCxZQUE2QixRQUFrQixFQUMzQix5QkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELG1CQUF3QztRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUpvQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRTVELENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUFrQyxFQUFFLFdBQXdCOztjQUUxRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQy9DO1NBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsYUFBYSxDQUFDLFdBQVcsQ0FBQzthQUMxQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUN4RCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFaVSxRQUFRO1lBS3BCLGVBQWU7WUFDZix1QkFBdUI7WUFKdkIsbUJBQW1COzs7Ozs7O0lBYWYsdUNBQW1DOzs7OztJQUM1Qyx3REFBMkQ7Ozs7O0lBQzNELHNEQUFpRTs7Ozs7SUFDakUsa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlclNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRoZW1lQ29udmVydGVyOiBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9wZW4ocmVhZE1vZGVsSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHVzZVZhbHVlOiByZWFkTW9kZWxJZCB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IFN0cnVjdHVyZUlkLCB1c2VWYWx1ZTogc3RydWN0dXJlSWQgfVxuXHRcdFx0XVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25TaW5nbGVUaGVtZShyZWFkTW9kZWxJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblxuXHRcdFx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3BlbihBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cbn1cbiJdfQ==