/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { ActiveFilterMenuComponent } from './active-filter-menu.component';
import { StructureId } from '../../../../core/api/structure.id';
import { Reactive } from '@generic-ui/hermes';
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
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsUUFBUTs7Ozs7OztJQUVoRCxZQUE2QixRQUFrQixFQUMzQix5QkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELG1CQUF3QztRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUpvQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRTVELENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUFrQyxFQUFFLFdBQXdCOztjQUUxRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQy9DO1NBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUN0QixJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUN4RCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFiVSxRQUFRO1lBSXBCLGVBQWU7WUFDZix1QkFBdUI7WUFIdkIsbUJBQW1COzs7Ozs7O0lBY2YsdUNBQW1DOzs7OztJQUM1Qyx3REFBMkQ7Ozs7O0lBQzNELHNEQUFpRTs7Ozs7SUFDakUsa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9mZWF0dXJlL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5OiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihyZWFkTW9kZWxJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdXNlVmFsdWU6IHJlYWRNb2RlbElkIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogU3RydWN0dXJlSWQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVJZCB9XG5cdFx0XHRdXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbmNlVGhlbWUocmVhZE1vZGVsSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oQWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19