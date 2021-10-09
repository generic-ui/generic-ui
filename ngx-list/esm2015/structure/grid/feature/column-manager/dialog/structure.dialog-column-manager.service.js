/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { StructureDialogColumnManagerComponent } from './structure.dialog-column-manager.component';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { Reactive } from '@generic-ui/hermes';
export class StructureDialogColumnManagerService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaWarehouse
     * @param {?} structureThemeConverter
     * @param {?} fabricDialogService
     */
    constructor(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    /**
     * @param {?} compositionId
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    open(compositionId, readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        /** @type {?} */
        const injector = Injector.create({ parent: parentInjector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaWarehouse
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.fabricDialogService.open(StructureDialogColumnManagerComponent, {
                injector: injector,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        }));
    }
}
StructureDialogColumnManagerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDialogColumnManagerService.ctorParameters = () => [
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
    StructureDialogColumnManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.schemaWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxRQUFROzs7Ozs7O0lBRWhFLFlBQTZCLFFBQWtCLEVBQzNCLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBd0M7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRTVELENBQUM7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsYUFBNEIsRUFBRSxXQUFrQyxFQUFFLGNBQXlCO1FBRS9GLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDL0I7O2NBRUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTlILElBQUksQ0FBQyxlQUFlO2FBQ2xCLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDdEIsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFFakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRTtnQkFDcEUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzthQUN2RCxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTlCRCxVQUFVOzs7O1lBYlUsUUFBUTtZQVFwQixlQUFlO1lBRGYsdUJBQXVCO1lBTHZCLG1CQUFtQjs7Ozs7OztJQWNmLHVEQUFtQzs7Ozs7SUFDNUMsOERBQWlEOzs7OztJQUNqRCxzRUFBaUU7Ozs7O0lBQ2pFLGtFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpIHtcblxuXHRcdGlmICghcGFyZW50SW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHBhcmVudDogcGFyZW50SW5qZWN0b3IsIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tcG9zaXRpb25JZCwgdXNlVmFsdWU6IGNvbXBvc2l0aW9uSWQgfV0gfSk7XG5cblx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0Lm9uY2VUaGVtZShyZWFkTW9kZWxJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblxuXHRcdFx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3BlbihTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=