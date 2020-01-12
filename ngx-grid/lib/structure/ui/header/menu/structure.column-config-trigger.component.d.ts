import { ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureColumnConfigService } from './structure.column-config.service';
import { StructureColumnMenuConfig } from './config/structure.column-menu-config';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
export declare class StructureColumnConfigTriggerComponent extends SmartComponent implements OnInit {
    private elementRef;
    private changeDetectorRef;
    private structureCommandService;
    private structureColumnMenuConfigArchive;
    private structureColumnConfigService;
    headerDialogContainer: ElementRef;
    column: CellTemplateWithContext;
    config: StructureColumnMenuConfig;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandService, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structureColumnConfigService: StructureColumnConfigService);
    ngOnInit(): void;
    openConfigDialog(): void;
    closeConfigDialog(): void;
    isEnabled(): boolean;
}
