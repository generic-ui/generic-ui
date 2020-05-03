/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContainerGateway } from './container.gateway';
import { StructureId } from '../structure/domain/structure.id';
import { StructureIdGenerator } from '../structure/feature/structure-id.generator';
import { structureIdFactory } from '../structure/feature/structure.component';
import { StructureCommandDispatcher } from '../structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../structure/feature-api/source/source.command-dispatcher';
import { containerProviders } from './container.providers';
import { ContainerTemplateArchive } from './template/container-template.archive';
const ɵ0 = structureIdFactory;
/** @type {?} */
const localProviders = [{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    },
    ...containerProviders
];
export class ContainerComponent extends ContainerGateway {
    /**
     * @param {?} structureId
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} structureCommandService
     */
    constructor(structureId, sourceCommandService, containerTemplateArchive, structureCommandService) {
        super(structureId, sourceCommandService, containerTemplateArchive);
        this.structureId = structureId;
        structureCommandService.createStructure(this.structureId);
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-container',
                template: `

		<gui-container-layout></gui-container-layout>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: localProviders,
                host: {
                    '[class]': `"gui-container"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item div{padding:12px 16px}"]
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: StructureId },
    { type: SourceCommandDispatcher },
    { type: ContainerTemplateArchive },
    { type: StructureCommandDispatcher }
];
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztXQUtwRSxrQkFBa0I7O01BRnpCLGNBQWMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0Q7SUFDQSxHQUFHLGtCQUFrQjtDQUNyQjtBQW1CRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCOzs7Ozs7O0lBRXZELFlBQTRCLFdBQXdCLEVBQ2pELG9CQUE2QyxFQUM3Qyx3QkFBa0QsRUFDbEQsdUJBQW1EO1FBRXJELEtBQUssQ0FDSixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLHdCQUF3QixDQUN4QixDQUFDO1FBVHlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVW5ELHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBOUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7RUFHVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxjQUFjO2dCQUl6QixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGlCQUFpQjtvQkFDNUIsTUFBTSxFQUFFLHdCQUF3QjtpQkFDaEM7O2FBQ0Q7Ozs7WUFuQ1EsV0FBVztZQUlYLHVCQUF1QjtZQUV2Qix3QkFBd0I7WUFIeEIsMEJBQTBCOzs7O0lBbUN0Qix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWluZXJHYXRld2F5IH0gZnJvbSAnLi9jb250YWluZXIuZ2F0ZXdheSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IHN0cnVjdHVyZUlkRmFjdG9yeSB9IGZyb20gJy4uL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb250YWluZXJQcm92aWRlcnMgfSBmcm9tICcuL2NvbnRhaW5lci5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUuYXJjaGl2ZSc7XG5cblxuY29uc3QgbG9jYWxQcm92aWRlcnMgPSBbe1xuXHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSxcblx0Li4uY29udGFpbmVyUHJvdmlkZXJzXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY29udGFpbmVyJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY29udGFpbmVyLWxheW91dD48L2d1aS1jb250YWluZXItbGF5b3V0PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBsb2NhbFByb3ZpZGVycyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc291cmNlL2NvbnRhaW5lci1zb3VyY2UuY29tcG9uZW50Lm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiBgXCJndWktY29udGFpbmVyXCJgLFxuXHRcdCdbaWRdJzogJ3N0cnVjdHVyZUlkLnRvU3RyaW5nKCknXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQ29udGFpbmVyR2F0ZXdheSB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0c3RydWN0dXJlSWQsXG5cdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZSxcblx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZVxuXHRcdCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==