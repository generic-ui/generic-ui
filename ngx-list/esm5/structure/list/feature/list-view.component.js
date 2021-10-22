/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function listViewIdFactoryForList(generator) {
    return new ListViewReadModelRootId('gui-list-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function structureIdFactoryForList(generator) {
    return new StructureId('gui-list-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function compositionIdFactoryForList(generator) {
    return new CompositionId('gui-list-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function schemaIdFactoryForList(generator) {
    return new SchemaReadModelRootId('gui-list-' + generator.generateId());
}
/** @type {?} */
export var componentListProviders = tslib_1.__spread([
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
    }
], listViewProviders, [
    PagingFeatureModule.forComponent(),
    TranslationFeatureModule.forComponent()
]);
var ListViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewComponent, _super);
    function ListViewComponent(structureId, listViewReadModelRootId, elementRef, structureCommandService, listViewCommandDispatcher, translationService) {
        var _this = _super.call(this, elementRef) || this;
        _this.structureId = structureId;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.elementRef = elementRef;
        _this.addClassToHost('gui-generic');
        translationService.setDefaultTranslation();
        structureCommandService.create(_this.structureId);
        listViewCommandDispatcher.create(_this.listViewReadModelRootId);
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-view';
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-view',
                    template: "<div gui-list-view-layout></div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: tslib_1.__spread(componentListProviders, [
                        {
                            provide: filterContainerToken,
                            useExisting: ListViewComponent
                        }
                    ]),
                    host: {
                        '[id]': 'structureId.toString()'
                    },
                    styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}@use 'common/variables';.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:-ms-grid;display:grid}@use 'common/variables';.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}@use 'common/variables';.gui-grid-cols-1{-ms-grid-columns:(minmax(0,1fr))[1];grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{-ms-grid-columns:(minmax(0,1fr))[2];grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{-ms-grid-columns:(minmax(0,1fr))[3];grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{-ms-grid-columns:(minmax(0,1fr))[4];grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{-ms-grid-columns:(minmax(0,1fr))[5];grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{-ms-grid-columns:(minmax(0,1fr))[6];grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{-ms-grid-columns:(minmax(0,1fr))[7];grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{-ms-grid-columns:(minmax(0,1fr))[8];grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{-ms-grid-columns:(minmax(0,1fr))[9];grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{-ms-grid-rows:(minmax(0,1fr))[1];grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{-ms-grid-rows:(minmax(0,1fr))[2];grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{-ms-grid-rows:(minmax(0,1fr))[3];grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{-ms-grid-rows:(minmax(0,1fr))[4];grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{-ms-grid-rows:(minmax(0,1fr))[5];grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{-ms-grid-rows:(minmax(0,1fr))[6];grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{-ms-grid-rows:(minmax(0,1fr))[7];grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{-ms-grid-rows:(minmax(0,1fr))[8];grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{-ms-grid-rows:(minmax(0,1fr))[9];grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}@use 'common/variables';.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use 'common/variables';.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view ::after,.gui-list-view ::before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15)}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
                }] }
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: ListViewReadModelRootId },
        { type: ElementRef },
        { type: StructureCommandInvoker },
        { type: ListViewCommandInvoker },
        { type: TranslationFacade }
    ]; };
    return ListViewComponent;
}(LayoutComponent));
export { ListViewComponent };
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.structureId;
    /** @type {?} */
    ListViewComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSWpGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7OztBQUlqRixNQUFNLFVBQVUsd0JBQXdCLENBQUMsU0FBK0I7SUFDdkUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUMxRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsU0FBK0I7SUFDeEUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFNBQStCO0lBQzFFLE9BQU8sSUFBSSxhQUFhLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxTQUErQjtJQUNyRSxPQUFPLElBQUkscUJBQXFCLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQjtJQUNsQztRQUNDLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0Q7SUFDRDtRQUNDLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0Q7SUFDRDtRQUNDLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRDtJQUNEO1FBQ0MsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxVQUFVLEVBQUUsd0JBQXdCO1FBQ3BDLElBQUksRUFBRTtZQUNMLG9CQUFvQjtTQUNwQjtLQUNEO0dBQ0UsaUJBQWlCO0lBRXBCLG1CQUFtQixDQUFDLFlBQVksRUFBRTtJQUNsQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUU7RUFDdkM7QUFFRDtJQXFCdUMsNkNBQWU7SUFFckQsMkJBQTRCLFdBQXdCLEVBQ2pDLHVCQUFnRCxFQUMvQyxVQUFzQixFQUN2Qyx1QkFBZ0QsRUFDaEQseUJBQWlELEVBQ2pELGtCQUFxQztRQUx4QyxZQU9DLGtCQUFNLFVBQVUsQ0FBQyxTQUtqQjtRQVoyQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQy9DLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBTXpDLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDbEMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMzQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7SUFDaEUsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVTLDJDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBM0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsOENBQXlDO29CQUN6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsbUJBQ0wsc0JBQXNCO3dCQUN6Qjs0QkFDQyxPQUFPLEVBQUUsb0JBQW9COzRCQUM3QixXQUFXLEVBQUUsaUJBQWlCO3lCQUM5QjtzQkFDRDtvQkFNRCxJQUFJLEVBQUU7d0JBQ0wsTUFBTSxFQUFFLHdCQUF3QjtxQkFDaEM7O2lCQUNEOzs7O2dCQS9GUSxXQUFXO2dCQVNYLHVCQUF1QjtnQkFYYSxVQUFVO2dCQUk5Qyx1QkFBdUI7Z0JBUXZCLHNCQUFzQjtnQkFJdEIsaUJBQWlCOztJQTBHMUIsd0JBQUM7Q0FBQSxBQTdDRCxDQXFCdUMsZUFBZSxHQXdCckQ7U0F4QlksaUJBQWlCOzs7SUFFakIsd0NBQXdDOztJQUNqRCxvREFBZ0U7Ozs7O0lBQ2hFLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdQcm92aWRlcnMgfSBmcm9tICcuL2xpc3Qtdmlldy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9jb3JlL2FwaS9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IGZpbHRlckNvbnRhaW5lclRva2VuIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXRva2VuJztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lclJlZiB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci1yZWYnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2xheW91dC1jb21wb25lbnQnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0Vmlld0lkRmFjdG9yeUZvckxpc3QoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIHtcblx0cmV0dXJuIG5ldyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCgnZ3VpLWxpc3QtJyArIGdlbmVyYXRvci5nZW5lcmF0ZUlkKCkpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlSWRGYWN0b3J5Rm9yTGlzdChnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogU3RydWN0dXJlSWQge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZUlkKCdndWktbGlzdC0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NpdGlvbklkRmFjdG9yeUZvckxpc3QoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IENvbXBvc2l0aW9uSWQge1xuXHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uSWQoJ2d1aS1saXN0LScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYUlkRmFjdG9yeUZvckxpc3QoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB7XG5cdHJldHVybiBuZXcgU2NoZW1hUmVhZE1vZGVsUm9vdElkKCdndWktbGlzdC0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRMaXN0UHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlSWQsXG5cdFx0dXNlRmFjdG9yeTogc3RydWN0dXJlSWRGYWN0b3J5Rm9yTGlzdCxcblx0XHRkZXBzOiBbXG5cdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvclxuXHRcdF1cblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uSWQsXG5cdFx0dXNlRmFjdG9yeTogY29tcG9zaXRpb25JZEZhY3RvcnlGb3JMaXN0LFxuXHRcdGRlcHM6IFtcblx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHVzZUZhY3Rvcnk6IHNjaGVtYUlkRmFjdG9yeUZvckxpc3QsXG5cdFx0ZGVwczogW1xuXHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHR1c2VGYWN0b3J5OiBsaXN0Vmlld0lkRmFjdG9yeUZvckxpc3QsXG5cdFx0ZGVwczogW1xuXHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRdXG5cdH0sXG5cdC4uLmxpc3RWaWV3UHJvdmlkZXJzLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUuZm9yQ29tcG9uZW50KCksXG5cdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKVxuXTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtdmlldycsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9uZW50TGlzdFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBmaWx0ZXJDb250YWluZXJUb2tlbixcblx0XHRcdHVzZUV4aXN0aW5nOiBMaXN0Vmlld0NvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvbGlzdC12aWV3Lm5neC5zY3NzJyxcblx0XHQnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbaWRdJzogJ3N0cnVjdHVyZUlkLnRvU3RyaW5nKCknXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBGaWx0ZXJDb250YWluZXJSZWYge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHR0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlXG5cdCkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1nZW5lcmljJylcblx0XHR0cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuY3JlYXRlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuY3JlYXRlKHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0Z2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldyc7XG5cdH1cblxufVxuIl19