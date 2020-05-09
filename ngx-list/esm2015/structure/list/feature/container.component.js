/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContainerGateway } from './container.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureIdGenerator } from '../../../lib/structure/feature/structure-id.generator';
import { structureIdFactory } from '../../../lib/structure/feature/structure.component';
import { StructureCommandDispatcher } from '../../../lib/structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/feature-api/source/source.command-dispatcher';
import { containerProviders } from './container.providers';
import { ContainerTemplateArchive } from './template/container-template.archive';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../../lib/structure/feature/local/local-providers';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
const ɵ0 = structureIdFactory;
/** @type {?} */
const componentProviders = [{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    },
    ...containerProviders,
    ...provideComponentServices(),
    PagingFeatureModule.forComponent()
];
export class ContainerComponent extends ContainerGateway {
    /**
     * @param {?} structureId
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     */
    constructor(structureId, sourceCommandService, containerTemplateArchive, structureCommandService, structurePagingCommandDispatcher) {
        super(structureId, sourceCommandService, containerTemplateArchive, structurePagingCommandDispatcher);
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
                providers: componentProviders,
                host: {
                    '[class.gui-container]': `"true"`,
                    '[class.gui-generic]': `"true"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-container-source{display:block;padding:8px}.gui-list-item{border-radius:4px;border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15);display:block;margin:8px 0;width:100%}.gui-list-item .gui-list-item-container{padding:12px 16px}", ".gui-container.gui-generic .gui-paging{border:0}"]
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: StructureId },
    { type: SourceCommandDispatcher },
    { type: ContainerTemplateArchive },
    { type: StructureCommandDispatcher },
    { type: PagingCommandDispatcher }
];
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.structureId;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQWtCLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7V0FLL0Usa0JBQWtCOztNQUZ6QixrQkFBa0IsR0FBRyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0Q7SUFDQSxHQUFHLGtCQUFrQjtJQUVyQixHQUFHLHdCQUF3QixFQUFFO0lBRTdCLG1CQUFtQixDQUFDLFlBQVksRUFBRTtDQUNsQztBQXFCRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQUV2RCxZQUE0QixXQUF3QixFQUNqRCxvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELHVCQUFtRCxFQUNuRCxnQ0FBeUQ7UUFFM0QsS0FBSyxDQUNKLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLGdDQUFnQyxDQUNoQyxDQUFDO1FBWHlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWW5ELHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7RUFHVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxrQkFBa0I7Z0JBSzdCLElBQUksRUFBRTtvQkFDTCx1QkFBdUIsRUFBRSxRQUFRO29CQUNqQyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixNQUFNLEVBQUUsd0JBQXdCO2lCQUNoQzs7YUFDRDs7OztZQTVDUSxXQUFXO1lBSVgsdUJBQXVCO1lBRXZCLHdCQUF3QjtZQUh4QiwwQkFBMEI7WUFNMUIsdUJBQXVCOzs7O0lBc0NuQix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWluZXJHYXRld2F5IH0gZnJvbSAnLi9jb250YWluZXIuZ2F0ZXdheSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlSWRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUtYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2ZlYXR1cmUtYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IGNvbnRhaW5lclByb3ZpZGVycyB9IGZyb20gJy4vY29udGFpbmVyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgbG9jYWxQcm92aWRlcnMsIHByb3ZpZGVDb21wb25lbnRTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC9sb2NhbC1wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5jb25zdCBjb21wb25lbnRQcm92aWRlcnMgPSBbe1xuXHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSxcblx0Li4uY29udGFpbmVyUHJvdmlkZXJzLFxuXG5cdC4uLnByb3ZpZGVDb21wb25lbnRTZXJ2aWNlcygpLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUuZm9yQ29tcG9uZW50KClcbl07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb250YWluZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jb250YWluZXItbGF5b3V0PjwvZ3VpLWNvbnRhaW5lci1sYXlvdXQ+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IGNvbXBvbmVudFByb3ZpZGVycyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc291cmNlL2NvbnRhaW5lci1zb3VyY2UuY29tcG9uZW50Lm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1jb250YWluZXJdJzogYFwidHJ1ZVwiYCxcblx0XHQnW2NsYXNzLmd1aS1nZW5lcmljXSc6IGBcInRydWVcImAsXG5cdFx0J1tpZF0nOiAnc3RydWN0dXJlSWQudG9TdHJpbmcoKSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBDb250YWluZXJHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlclxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHN0cnVjdHVyZUlkLFxuXHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRjb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==