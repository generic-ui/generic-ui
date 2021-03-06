import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureCommandDispatcher } from '../../../../core/api/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './config/structure.column-menu-config';
import { FilterWarehouse } from '../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
export declare class StructureColumnConfigComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureCommandService;
    private readonly compositionReadModelService;
    private readonly filterWarehouse;
    private readonly translationService;
    private readonly structureColumnMenuConfigArchive;
    readonly column: CellTemplateWithContext;
    headerSortMenu: ElementRef;
    config: StructureColumnMenuConfig;
    uniqueValues: Array<any>;
    hideColumnTitle: string;
    dropdownTextTranslation: string;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureCommandService: StructureCommandDispatcher, compositionReadModelService: CompositionWarehouse, filterWarehouse: FilterWarehouse, translationService: TranslationService, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
    private setTabTitles;
}
