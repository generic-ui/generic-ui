/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { structureIdFactory } from '../../grid/feature/structure.component';
import { StructureCommandDispatcher } from '../../core/api/structure.command-dispatcher';
import { SourceCommandInvoker } from '../../source/core/api/source.command-invoker';
import { listViewProviders } from './list-view.providers';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { provideComponentServices } from '../../grid/feature/local/local-providers';
import { PagingCommandInvoker } from '../../paging/core/api/paging.command-invoker';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../core/api/read/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../core/api/list-view.command-invoker';
import { filterContainerToken } from '../../filter/core/api/config/filter-container-token';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import { TranslationService } from '../../../l10n/core/api/translation.service';
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function listViewIdFactory(generator) {
    return new ListViewReadModelRootId('gui-' + generator.generateId());
}
const ɵ0 = structureIdFactory;
/** @type {?} */
const componentProviders = [{
        provide: StructureId,
        useFactory: ɵ0,
        deps: [
            StructureIdGenerator
        ]
    }, {
        provide: ListViewReadModelRootId,
        useFactory: listViewIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    ...listViewProviders,
    ...provideComponentServices(),
    PagingFeatureModule.forComponent(),
    TranslationFeatureModule.forComponent()
];
export class ListViewComponent {
    /**
     * @param {?} structureId
     * @param {?} listViewReadModelRootId
     * @param {?} elementRef
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} listViewCommandDispatcher
     * @param {?} translationService
     */
    constructor(structureId, listViewReadModelRootId, elementRef, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structureCommandService, structurePagingCommandDispatcher, listViewCommandDispatcher, translationService) {
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.elementRef = elementRef;
        this.translationService = translationService;
        this.translationService.setDefaultTranslation();
        structureCommandService.createStructure(this.structureId);
        listViewCommandDispatcher.create(this.listViewReadModelRootId);
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view',
                template: `

		<div gui-list-view-layout></div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    ...componentProviders,
                    {
                        provide: filterContainerToken,
                        useExisting: ListViewComponent
                    }
                ],
                host: {
                    '[class.gui-list-view]': `"true"`,
                    '[class.gui-generic]': `"true"`,
                    '[id]': 'structureId.toString()'
                },
                styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}@use 'common/variables';.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}@use 'common/variables';.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}@use 'common/variables';.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use 'common/variables';.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pt-10{padding-top:16px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-list-view{border-color:#d6d6d6}.gui-list-view *,.gui-list-view ::after,.gui-list-view ::before{box-sizing:border-box}.gui-list-view input{font-size:13px;outline:0}.gui-list-view *{border-color:#d6d6d6}.gui-list-view .gui-search-bar form .gui-search-icon-svg{top:10px}.gui-list-view .gui-search-bar form input{font-size:14px;padding:10px 6px 10px 38px}.gui-list-card-wrapper{border:1px solid transparent;min-height:100px;transition:.2s}.gui-list-card-wrapper:hover{border:1px solid #d6d6d6;box-shadow:0 2px 6px rgba(0,0,0,.15)}.gui-list-container-card{border-top:1px solid #d6d6d6}", ".gui-list-item{border:1px solid rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.15)}@media (min-width:480px){.gui-list-card{width:100%}.gui-list-item-container{padding-left:8px;padding-right:8px}}@media (min-width:768px){.gui-list-card{width:50%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:992px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:12px;padding-right:12px}}@media (min-width:1200px){.gui-list-card{width:33.3333%}.gui-list-item-container{padding-left:16px;padding-right:16px}}", ".gui-list-view.gui-generic .gui-paging{border:0}"]
            }] }
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: StructureId },
    { type: ListViewReadModelRootId },
    { type: ElementRef },
    { type: SourceCommandInvoker },
    { type: ListViewTemplateArchive },
    { type: ListViewCardTemplateArchive },
    { type: StructureCommandDispatcher },
    { type: PagingCommandInvoker },
    { type: ListViewCommandInvoker },
    { type: TranslationService }
];
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
    /**
     * @type {?}
     * @private
     */
    ListViewComponent.prototype.translationService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7OztBQUloRixNQUFNLFVBQVUsaUJBQWlCLENBQUMsU0FBK0I7SUFDaEUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO1dBSVksa0JBQWtCOztNQUZ6QixrQkFBa0IsR0FBRyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsSUFBb0I7UUFDOUIsSUFBSSxFQUFFO1lBQ0wsb0JBQW9CO1NBQ3BCO0tBQ0QsRUFBRTtRQUNGLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDTCxvQkFBb0I7U0FDcEI7S0FDRDtJQUNBLEdBQUcsaUJBQWlCO0lBRXBCLEdBQUcsd0JBQXdCLEVBQUU7SUFFN0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFO0lBQ2xDLHdCQUF3QixDQUFDLFlBQVksRUFBRTtDQUN2QztBQTRCRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7Ozs7O0lBRTdCLFlBQTRCLFdBQXdCLEVBQ2pDLHVCQUFnRCxFQUMvQyxVQUFzQixFQUN2QyxvQkFBMEMsRUFDMUMsd0JBQWlELEVBQ2pELHVCQUFvRCxFQUNwRCx1QkFBbUQsRUFDbkQsZ0NBQXNELEVBQ3RELHlCQUFpRCxFQUNoQyxrQkFBc0M7UUFUOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUMvQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBT3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDaEQsdUJBQXVCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7O1lBOUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7RUFHVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVixHQUFHLGtCQUFrQjtvQkFDckI7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsV0FBVyxFQUFFLGlCQUFpQjtxQkFDOUI7aUJBQ0Q7Z0JBTUQsSUFBSSxFQUFFO29CQUNMLHVCQUF1QixFQUFFLFFBQVE7b0JBQ2pDLHFCQUFxQixFQUFFLFFBQVE7b0JBQy9CLE1BQU0sRUFBRSx3QkFBd0I7aUJBQ2hDOzthQUNEOzs7O1lBdEVRLFdBQVc7WUFXWCx1QkFBdUI7WUFiYSxVQUFVO1lBTTlDLG9CQUFvQjtZQUtwQix1QkFBdUI7WUFDdkIsMkJBQTJCO1lBUDNCLDBCQUEwQjtZQUsxQixvQkFBb0I7WUFJcEIsc0JBQXNCO1lBSXRCLGtCQUFrQjs7OztJQXlEZCx3Q0FBd0M7O0lBQ2pELG9EQUFnRTs7Ozs7SUFDaEUsdUNBQXVDOzs7OztJQU92QywrQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IHN0cnVjdHVyZUlkRmFjdG9yeSB9IGZyb20gJy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IGxpc3RWaWV3UHJvdmlkZXJzIH0gZnJvbSAnLi9saXN0LXZpZXcucHJvdmlkZXJzJztcbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vZ3JpZC9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9jYXJkL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvY29uZmlnL2ZpbHRlci1jb250YWluZXItdG9rZW4nO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyUmVmIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXJlZic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFZpZXdJZEZhY3RvcnkoZ2VuZXJhdG9yOiBTdHJ1Y3R1cmVJZEdlbmVyYXRvcik6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIHtcblx0cmV0dXJuIG5ldyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCgnZ3VpLScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuY29uc3QgY29tcG9uZW50UHJvdmlkZXJzID0gW3tcblx0cHJvdmlkZTogU3RydWN0dXJlSWQsXG5cdHVzZUZhY3Rvcnk6IHN0cnVjdHVyZUlkRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdF1cbn0sIHtcblx0cHJvdmlkZTogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdHVzZUZhY3Rvcnk6IGxpc3RWaWV3SWRGYWN0b3J5LFxuXHRkZXBzOiBbXG5cdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XVxufSxcblx0Li4ubGlzdFZpZXdQcm92aWRlcnMsXG5cblx0Li4ucHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzKCksXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZS5mb3JDb21wb25lbnQoKSxcblx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLmZvckNvbXBvbmVudCgpXG5dO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgZ3VpLWxpc3Qtdmlldy1sYXlvdXQ+PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5jb21wb25lbnRQcm92aWRlcnMsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogZmlsdGVyQ29udGFpbmVyVG9rZW4sXG5cdFx0XHR1c2VFeGlzdGluZzogTGlzdFZpZXdDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL2xpc3Qtdmlldy5uZ3guc2NzcycsXG5cdFx0Jy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50Lm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LXZpZXddJzogYFwidHJ1ZVwiYCxcblx0XHQnW2NsYXNzLmd1aS1nZW5lcmljXSc6IGBcInRydWVcImAsXG5cdFx0J1tpZF0nOiAnc3RydWN0dXJlSWQudG9TdHJpbmcoKSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIEZpbHRlckNvbnRhaW5lclJlZiB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlXG5cdCkge1xuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldERlZmF1bHRUcmFuc2xhdGlvbigpO1xuXHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmNyZWF0ZVN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLmNyZWF0ZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG59XG4iXX0=