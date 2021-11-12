import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricSelectOptionsComponent } from './options/select-options.component';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { GuiSelectOption } from './select-option';
export declare class SelectOptionModalService extends FabricModal<FabricSelectOptionsComponent> {
    private readonly selectOptionsGeometryService;
    constructor(selectOptionsGeometryService: SelectOptionsGeometryService, componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    getComponent(): Type<FabricSelectOptionsComponent>;
    open(options: Array<GuiSelectOption>, width: number): void;
    closeOptions(): void;
    private afterCompCreation;
}
