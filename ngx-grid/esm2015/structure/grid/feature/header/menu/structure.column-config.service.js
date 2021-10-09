/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, FabricPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { Reactive } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
export class StructureColumnConfigService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} schemaReadModelRootId
     * @param {?} schemaWarehouse
     * @param {?} structureThemeConverter
     * @param {?} inlineDialogService
     */
    constructor(injector, schemaReadModelRootId, schemaWarehouse, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.inlineDialogService = inlineDialogService;
    }
    /**
     * @param {?} elementRef
     * @param {?} column
     * @return {?}
     */
    open(elementRef, column) {
        this.close();
        /** @type {?} */
        const injector = Injector.create({
            providers: [{
                    provide: 'column',
                    // TODO
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaWarehouse
            .onceTheme(this.schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: FabricPlacement.BOTTOM,
                offset: -34,
                theme: this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
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
    { type: SchemaReadModelRootId },
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
    StructureColumnConfigService.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.schemaWarehouse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUdqRyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsUUFBUTs7Ozs7Ozs7SUFFekQsWUFBNkIsUUFBa0IsRUFDM0IscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7SUFFbEUsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQXNCLEVBQUUsTUFBK0I7UUFDM0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztjQUNQLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxRQUFROztvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ2hCLENBQUM7WUFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDckIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlO2FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUU7Z0JBQ3pFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxXQUFXLEVBQUUsK0JBQStCO2FBQzVDLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBdkNELFVBQVU7Ozs7WUFac0IsUUFBUTtZQVVoQyxxQkFBcUI7WUFGckIsZUFBZTtZQUZmLHVCQUF1QjtZQUp2Qix5QkFBeUI7Ozs7Ozs7SUFhckIsZ0RBQW1DOzs7OztJQUM1Qyw2REFBNkQ7Ozs7O0lBQzdELHVEQUFpRDs7Ozs7SUFDakQsK0RBQWlFOzs7OztJQUNqRSwyREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLCBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRwcm92aWRlOiAnY29sdW1uJywgLy8gVE9ET1xuXHRcdFx0XHR1c2VWYWx1ZTogY29sdW1uXG5cdFx0XHR9XSxcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3RvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Vcblx0XHRcdC5vbmNlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHRwbGFjZW1lbnQ6IEZhYnJpY1BsYWNlbWVudC5CT1RUT00sXG5cdFx0XHRcdFx0b2Zmc2V0OiAtMzQsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKSxcblx0XHRcdFx0XHRjdXN0b21DbGFzczogJ2d1aS1pbmxpbmUtZGlhbG9nLWhlYWRlci1tZW51J1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiJdfQ==