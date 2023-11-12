import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { StructureColumnConfigService } from '../structure.column-config.service';
import { SmartComponent } from '../../../../../../feature/common/component/src/smart-component';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigTriggerComponent extends SmartComponent {
    private readonly structureColumnConfigService;
    readonly headerDialogContainer?: ElementRef;
    column: CellTemplateWithContext;
    private readonly structureColumnMenuConfigArchive;
    readonly isEnabled$: HermesObservable<boolean>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, structureColumnConfigService: StructureColumnConfigService);
    openConfigDialog(): void;
    protected getSelectorName(): string;
    private selectIsEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigTriggerComponent, "div[gui-structure-column-config-trigger]", never, { "column": { "alias": "column"; "required": false; }; }, {}, never, never, false, never>;
}
