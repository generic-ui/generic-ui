import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { StructureCommandInvoker } from '../../core/api/structure.command-invoker';
import { listViewProviders } from './list-view.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { ListViewReadModelRootId } from '../core/api/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../core/api/list-view.command-invoker';
import { filterContainerToken } from '../../filter/core/api/config/filter-container-token';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import { TranslationFacade } from '../../../l10n/core/api/translation.facade';
import { CompositionId } from '../../../composition/core/api/composition.id';
import { SchemaReadModelRootId } from '../../../schema/core/api/schema.read-model-root-id';
import { LayoutComponent } from '../../../common/cdk/component/layout-component';
/** @internal */
export function listViewIdFactoryForList(generator) {
    return new ListViewReadModelRootId('gui-list-' + generator.generateId());
}
/** @internal */
export function structureIdFactoryForList(generator) {
    return new StructureId('gui-list-' + generator.generateId());
}
/** @internal */
export function compositionIdFactoryForList(generator) {
    return new CompositionId('gui-list-' + generator.generateId());
}
/** @internal */
export function schemaIdFactoryForList(generator) {
    return new SchemaReadModelRootId('gui-list-' + generator.generateId());
}
export const componentListProviders = [
    {
        provide: StructureId,
        useFactory: structureIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: CompositionId,
        useFactory: compositionIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: SchemaReadModelRootId,
        useFactory: schemaIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: ListViewReadModelRootId,
        useFactory: listViewIdFactoryForList,
        deps: [
            StructureIdGenerator
        ]
    },
    listViewProviders,
    PagingFeatureModule.forComponent(),
    TranslationFeatureModule.forComponent()
];
export class ListViewComponent extends LayoutComponent {
    constructor(structureId, listViewReadModelRootId, elementRef, structureCommandService, listViewCommandDispatcher, translationService) {
        super(elementRef);
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.elementRef = elementRef;
        this.addClassToHost('gui-generic');
        translationService.setDefaultTranslation();
        structureCommandService.create(this.structureId);
        listViewCommandDispatcher.create(this.listViewReadModelRootId);
    }
    getElementRef() {
        return this.elementRef;
    }
    getSelectorName() {
        return 'gui-list-view';
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view',
                template: "<div gui-list-view-layout></div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: StructureId,
                        useFactory: structureIdFactoryForList,
                        deps: [
                            StructureIdGenerator
                        ]
                    },
                    {
                        provide: CompositionId,
                        useFactory: compositionIdFactoryForList,
                        deps: [
                            StructureIdGenerator
                        ]
                    },
                    {
                        provide: SchemaReadModelRootId,
                        useFactory: schemaIdFactoryForList,
                        deps: [
                            StructureIdGenerator
                        ]
                    },
                    {
                        provide: ListViewReadModelRootId,
                        useFactory: listViewIdFactoryForList,
                        deps: [
                            StructureIdGenerator
                        ]
                    },
                    listViewProviders,
                    PagingFeatureModule.forComponent(),
                    TranslationFeatureModule.forComponent(),
                    {
                        provide: filterContainerToken,
                        useExisting: ListViewComponent
                    }
                ],
                host: {
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view *:after,.gui-list-view *:before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s all}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.149)}.gui-list-container-card{border-top:1px solid #d6d6d6}\n", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.149)}@media (min-width: 480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width: 768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}\n", ".gui-list-view.gui-generic .gui-paging{border:0}\n"]
            },] }
];
ListViewComponent.ctorParameters = () => [
    { type: StructureId },
    { type: ListViewReadModelRootId },
    { type: ElementRef },
    { type: StructureCommandInvoker },
    { type: ListViewCommandInvoker },
    { type: TranslationFacade }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUUzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR2pGLGdCQUFnQjtBQUNoQixNQUFNLFVBQVUsd0JBQXdCLENBQUMsU0FBK0I7SUFDdkUsT0FB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Qjt3QkFDbEMsSUFBSSxFQUFFOzRCQUNMLG9CQUFvQjt5QkFDcEI7cUJBQ0Q7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsVUFBVSxFQUFFLHdCQUF3Qjt3QkFDcEMsSUFBSSxFQUFFOzRCQUNMLG9CQUFvQjt5QkFDcEI7cUJBQ0Q7b0JBQ0QsaUJBQWlCO29CQUVqQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7b0JBQ2xDLHdCQUF3QixDQUFDLFlBQVksRUFBRTtvQkFDdkM7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsV0FBVyxFQUFFLGlCQUFpQjtxQkFDOUI7aUJBQ0Q7Z0JBTUQsSUFBSSxFQUFFO29CQUNMLE1BQU0sRUFBRSx3QkFBd0I7aUJBQ2hDOzthQUNEOzs7WUExSFEsV0FBVztZQUtYLHVCQUF1QjtZQVBhLFVBQVU7WUFJOUMsdUJBQXVCO1lBSXZCLHNCQUFzQjtZQUl0QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBsaXN0Vmlld1Byb3ZpZGVycyB9IGZyb20gJy4vbGlzdC12aWV3LnByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vY29yZS9hcGkvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvbGlzdC12aWV3LmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBmaWx0ZXJDb250YWluZXJUb2tlbiB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci10b2tlbic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJSZWYgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvY29uZmlnL2ZpbHRlci1jb250YWluZXItcmVmJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9sYXlvdXQtY29tcG9uZW50JztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFZpZXdJZEZhY3RvcnlGb3JMaXN0KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB7XG5cdHJldHVybiBuZXcgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQoJ2d1aS1saXN0LScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cnVjdHVyZUlkRmFjdG9yeUZvckxpc3QoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IFN0cnVjdHVyZUlkIHtcblx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVJZCgnZ3VpLWxpc3QtJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zaXRpb25JZEZhY3RvcnlGb3JMaXN0KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBDb21wb3NpdGlvbklkIHtcblx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbklkKCdndWktbGlzdC0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFJZEZhY3RvcnlGb3JMaXN0KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBTY2hlbWFSZWFkTW9kZWxSb290SWQge1xuXHRyZXR1cm4gbmV3IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCgnZ3VpLWxpc3QtJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG5leHBvcnQgY29uc3QgY29tcG9uZW50TGlzdFByb3ZpZGVycyA9IFtcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZUlkLFxuXHRcdHVzZUZhY3Rvcnk6IHN0cnVjdHVyZUlkRmFjdG9yeUZvckxpc3QsXG5cdFx0ZGVwczogW1xuXHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBDb21wb3NpdGlvbklkLFxuXHRcdHVzZUZhY3Rvcnk6IGNvbXBvc2l0aW9uSWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRkZXBzOiBbXG5cdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdF1cblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHR1c2VGYWN0b3J5OiBzY2hlbWFJZEZhY3RvcnlGb3JMaXN0LFxuXHRcdGRlcHM6IFtcblx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0dXNlRmFjdG9yeTogbGlzdFZpZXdJZEZhY3RvcnlGb3JMaXN0LFxuXHRcdGRlcHM6IFtcblx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XVxuXHR9LFxuXHRsaXN0Vmlld1Byb3ZpZGVycyxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpLFxuXHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUuZm9yQ29tcG9uZW50KClcbl07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFN0cnVjdHVyZUlkLFxuXHRcdFx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRcdGRlcHM6IFtcblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHR1c2VGYWN0b3J5OiBjb21wb3NpdGlvbklkRmFjdG9yeUZvckxpc3QsXG5cdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHR1c2VGYWN0b3J5OiBzY2hlbWFJZEZhY3RvcnlGb3JMaXN0LFxuXHRcdFx0ZGVwczogW1xuXHRcdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHR1c2VGYWN0b3J5OiBsaXN0Vmlld0lkRmFjdG9yeUZvckxpc3QsXG5cdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XHRdXG5cdFx0fSxcblx0XHRsaXN0Vmlld1Byb3ZpZGVycyxcblxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUuZm9yQ29tcG9uZW50KCksXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IGZpbHRlckNvbnRhaW5lclRva2VuLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IExpc3RWaWV3Q29tcG9uZW50XG5cdFx0fVxuXHRdLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9saXN0LXZpZXcubmd4LnNjc3MnLFxuXHRcdCcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tpZF0nOiAnc3RydWN0dXJlSWQudG9TdHJpbmcoKSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBleHRlbmRzIExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIEZpbHRlckNvbnRhaW5lclJlZiB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGVcblx0KSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWdlbmVyaWMnKTtcblx0XHR0cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuY3JlYXRlKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0Z2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldyc7XG5cdH1cblxufVxuIl19