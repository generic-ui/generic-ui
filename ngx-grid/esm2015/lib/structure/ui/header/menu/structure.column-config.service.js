/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, InlineDialogPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../schema/ui-api/schema.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRzdFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFROzs7Ozs7O0lBRXpELFlBQTZCLFFBQWtCLEVBQzNCLHlCQUEwQyxFQUMxQyx1QkFBZ0QsRUFDaEQsbUJBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBSm9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQUMxQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7SUFFbEUsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQXNCLEVBQUUsTUFBK0I7O2NBRXJELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxRQUFROztvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ2hCLENBQUM7WUFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDckIsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsYUFBYSxFQUFFO2FBQ2YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUU7Z0JBQ3pFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUscUJBQXFCLENBQUMsR0FBRztnQkFDcEMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUFyQ0QsVUFBVTs7OztZQVhzQixRQUFRO1lBU2hDLGVBQWU7WUFEZix1QkFBdUI7WUFOdkIseUJBQXlCOzs7Ozs7O0lBWXJCLGdEQUFtQzs7Ozs7SUFDNUMsaUVBQTJEOzs7OztJQUMzRCwrREFBaUU7Ozs7O0lBQ2pFLDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsIElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL3VpLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRoZW1lQ29udmVydGVyOiBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRwcm92aWRlOiAnY29sdW1uJywgLy8gVE9ET1xuXHRcdFx0XHR1c2VWYWx1ZTogY29sdW1uXG5cdFx0XHR9XSxcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3RvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25TaW5nbGVUaGVtZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHRwbGFjZW1lbnQ6IElubGluZURpYWxvZ1BsYWNlbWVudC5Ub3AsXG5cdFx0XHRcdFx0b2Zmc2V0OiAtMixcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cbn1cbiJdfQ==