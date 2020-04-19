/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, InlineDialogPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../schema/feature-api/schema.warehouse';
export class StructureColumnConfigService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaReadModelRepository
     * @param {?} structureThemeConverter
     * @param {?} inlineDialogService
     */
    constructor(injector, schemaReadModelRepository, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.structureThemeConverter = structureThemeConverter;
        this.inlineDialogService = inlineDialogService;
    }
    /**
     * @param {?} elementRef
     * @param {?} column
     * @return {?}
     */
    open(elementRef, column) {
        /** @type {?} */
        const injector = Injector.create({
            providers: [{
                    provide: 'column',
                    // TODO
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaReadModelRepository
            .onSingleTheme()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: InlineDialogPlacement.Top,
                offset: -2,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        }));
    }
    /**
     * @return {?}
     */
    close() {
        this.inlineDialogService.close();
    }
}
StructureColumnConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureColumnConfigService.ctorParameters = () => [
    { type: Injector },
    { type: SchemaWarehouse },
    { type: StructureThemeConverter },
    { type: FabricInlineDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.inlineDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFHbEYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7Ozs7Ozs7SUFFekQsWUFBNkIsUUFBa0IsRUFDM0IseUJBQTBDLEVBQzFDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFKb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQWlCO1FBQzFDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtJQUVsRSxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBc0IsRUFBRSxNQUErQjs7Y0FFckQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFFBQVE7O29CQUNqQixRQUFRLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQztZQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QjthQUM1QixhQUFhLEVBQUU7YUFDZixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtnQkFDekUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHO2dCQUNwQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzthQUN2RCxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQXJDRCxVQUFVOzs7O1lBWHNCLFFBQVE7WUFTaEMsZUFBZTtZQURmLHVCQUF1QjtZQU52Qix5QkFBeUI7Ozs7Ozs7SUFZckIsZ0RBQW1DOzs7OztJQUM1QyxpRUFBMkQ7Ozs7O0lBQzNELCtEQUFpRTs7Ozs7SUFDakUsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSwgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogJ2NvbHVtbicsIC8vIFRPRE9cblx0XHRcdFx0dXNlVmFsdWU6IGNvbHVtblxuXHRcdFx0fV0sXG5cdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2luZ2xlVGhlbWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wLFxuXHRcdFx0XHRcdG9mZnNldDogLTIsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXG59XG4iXX0=