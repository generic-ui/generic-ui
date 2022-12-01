import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { StructurePublisher } from '../../../../../../core/structure/structure-core/src/api/structure.publisher';
import { StructureColumnConfigService } from '../structure.column-config.service';
import { StructureColumnMenuConfig } from '../config/structure.column-menu-config';
import { SmartComponent } from '../../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { StructureColumnMenuConfigArchive } from '../config/structure.column-menu-config.archive';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigTriggerComponent extends SmartComponent implements OnInit {
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly structureCommandService;
    private readonly structureColumnMenuConfigArchive;
    private readonly structureColumnConfigService;
    readonly headerDialogContainer?: ElementRef;
    column: CellTemplateWithContext;
    config: StructureColumnMenuConfig;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, structureCommandService: StructurePublisher, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structureColumnConfigService: StructureColumnConfigService);
    ngOnInit(): void;
    openConfigDialog(): void;
    closeConfigDialog(): void;
    isEnabled(): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigTriggerComponent, "div[gui-structure-column-config-trigger]", never, { "column": "column"; }, {}, never, never, false, never>;
}
