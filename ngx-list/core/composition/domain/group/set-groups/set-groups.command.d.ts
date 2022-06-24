import { CompositionId } from '../../../api/global/composition.id';
import { CompositionCommand } from '../../composition.command';
import { ColumnConfig, MultiColumnConfig } from '../../../api/column/column.config';
export declare class SetGroupsCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly configs;
    constructor(compositionId: CompositionId, configs: Array<ColumnConfig | MultiColumnConfig>);
    getConfigs(): Array<ColumnConfig | MultiColumnConfig>;
}
