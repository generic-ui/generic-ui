import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { listViewProviders } from './list-view.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { ListViewReadModelRootId } from '../core/api/list-view.read-model-root-id';
import { filterContainerToken } from '../../filter/core/api/config/filter-container-token';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import { CompositionId } from '../../../composition/core/api/composition.id';
import { SchemaReadModelRootId } from '../../../schema/core/api/schema.read-model-root-id';
import { LayoutComponent } from '../../../common/cdk/component/layout-component';
import * as i0 from "@angular/core";
import * as i1 from "../../core/api/structure.id";
import * as i2 from "../core/api/list-view.read-model-root-id";
import * as i3 from "../../core/api/structure.command-invoker";
import * as i4 from "../core/api/list-view.command-invoker";
import * as i5 from "../../../l10n/core/api/translation.facade";
import * as i6 from "./layout/list-view-layout.component";
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
ListViewComponent.ɵfac = function ListViewComponent_Factory(t) { return new (t || ListViewComponent)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.ListViewReadModelRootId), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.StructureCommandInvoker), i0.ɵɵdirectiveInject(i4.ListViewCommandInvoker), i0.ɵɵdirectiveInject(i5.TranslationFacade)); };
ListViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewComponent, selectors: [["gui-list-view"]], hostVars: 1, hostBindings: function ListViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.structureId.toString());
    } }, features: [i0.ɵɵProvidersFeature([
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
        ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["gui-list-view-layout", ""]], template: function ListViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, directives: [i6.ListViewLayoutComponent], styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:grid}.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use \"common/variables\";.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view *:after,.gui-list-view *:before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s all}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.149)}.gui-list-container-card{border-top:1px solid #d6d6d6}\n", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.149)}@media (min-width: 480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width: 768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width: 1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}\n", ".gui-list-view.gui-generic .gui-paging{border:0}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-list-view',
                templateUrl: './list-view.component.html',
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
                styleUrls: [
                    './style/list-view.ngx.scss',
                    './source/list-view-source.component.ngx.scss',
                    './style/theme/generic.list.ngx.scss'
                ],
                host: {
                    '[id]': 'structureId.toString()'
                }
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.ListViewReadModelRootId }, { type: i0.ElementRef }, { type: i3.StructureCommandInvoker }, { type: i4.ListViewCommandInvoker }, { type: i5.TranslationFacade }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUUzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7Ozs7OztBQUdqRixnQkFBZ0I7QUFDaEIsTUFBTSxVQUFVLHdCQUF3QixDQUFDLFNBQStCO0lBQ3ZFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFVB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QUFNLEVBQUUsd0JBQXdCO2lCQUNoQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdQcm92aWRlcnMgfSBmcm9tICcuL2xpc3Qtdmlldy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvY29uZmlnL2ZpbHRlci1jb250YWluZXItdG9rZW4nO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyUmVmIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXJlZic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbGF5b3V0LWNvbXBvbmVudCc7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RWaWV3SWRGYWN0b3J5Rm9yTGlzdChnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQge1xuXHRyZXR1cm4gbmV3IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKCdndWktbGlzdC0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVJZEZhY3RvcnlGb3JMaXN0KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBTdHJ1Y3R1cmVJZCB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlSWQoJ2d1aS1saXN0LScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2l0aW9uSWRGYWN0b3J5Rm9yTGlzdChnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogQ29tcG9zaXRpb25JZCB7XG5cdHJldHVybiBuZXcgQ29tcG9zaXRpb25JZCgnZ3VpLWxpc3QtJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZW1hSWRGYWN0b3J5Rm9yTGlzdChnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogU2NoZW1hUmVhZE1vZGVsUm9vdElkIHtcblx0cmV0dXJuIG5ldyBTY2hlbWFSZWFkTW9kZWxSb290SWQoJ2d1aS1saXN0LScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudExpc3RQcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0XHR1c2VGYWN0b3J5OiBzdHJ1Y3R1cmVJZEZhY3RvcnlGb3JMaXN0LFxuXHRcdGRlcHM6IFtcblx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ29tcG9zaXRpb25JZCxcblx0XHR1c2VGYWN0b3J5OiBjb21wb3NpdGlvbklkRmFjdG9yeUZvckxpc3QsXG5cdFx0ZGVwczogW1xuXHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0dXNlRmFjdG9yeTogc2NoZW1hSWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRkZXBzOiBbXG5cdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdF1cblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdHVzZUZhY3Rvcnk6IGxpc3RWaWV3SWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRkZXBzOiBbXG5cdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdF1cblx0fSxcblx0bGlzdFZpZXdQcm92aWRlcnMsXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKSxcblx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdHVzZUZhY3Rvcnk6IHN0cnVjdHVyZUlkRmFjdG9yeUZvckxpc3QsXG5cdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0dXNlRmFjdG9yeTogY29tcG9zaXRpb25JZEZhY3RvcnlGb3JMaXN0LFxuXHRcdFx0ZGVwczogW1xuXHRcdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dXNlRmFjdG9yeTogc2NoZW1hSWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRcdGRlcHM6IFtcblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dXNlRmFjdG9yeTogbGlzdFZpZXdJZEZhY3RvcnlGb3JMaXN0LFxuXHRcdFx0ZGVwczogW1xuXHRcdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0bGlzdFZpZXdQcm92aWRlcnMsXG5cblx0XHRQYWdpbmdGZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBmaWx0ZXJDb250YWluZXJUb2tlbixcblx0XHRcdHVzZUV4aXN0aW5nOiBMaXN0Vmlld0NvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvbGlzdC12aWV3Lm5neC5zY3NzJyxcblx0XHQnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbaWRdJzogJ3N0cnVjdHVyZUlkLnRvU3RyaW5nKCknXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBGaWx0ZXJDb250YWluZXJSZWYge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHR0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlXG5cdCkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1nZW5lcmljJyk7XG5cdFx0dHJhbnNsYXRpb25TZXJ2aWNlLnNldERlZmF1bHRUcmFuc2xhdGlvbigpO1xuXHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmNyZWF0ZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLmNyZWF0ZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LXZpZXcnO1xuXHR9XG5cbn1cbiIsIjxkaXYgZ3VpLWxpc3Qtdmlldy1sYXlvdXQ+PC9kaXY+XG4iXX0=