import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../../../source/core/domain/source.dispatcher';
import { FilterConfig } from '../../../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../../../filter/core/api/quick-filters.config';
import { StructureDomainCommandInvoker } from '../../../../core/domain/structure.domain-command-invoker';
import { SchemaTheme } from '../../../../../schema/core';
export declare class LocalStructureCommandDispatcher extends StructureDomainCommandInvoker {
    private readonly structureId;
    private readonly compositionId;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, structureFilterCommandService: FilterCommandInvoker, sourceDispatcher: SourceDispatcher);
    create(): void;
    enableVerticalScroll(): void;
    disableVerticalScroll(): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    setScrollPosition(position: number): void;
    setOrigin(items: Array<any>): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    setRowHeight(rowHeight: number): void;
    setContainerHeight(rowHeight: number): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme): void;
}
