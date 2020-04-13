import { ColumnSummariesConfig } from '../../../../../../lib/composition/domain/column/column-summaries.config';
import { GuiColumnSummaries } from '../../../../../../grid.index';
export declare class GridColumnSummariesConverter {
    convert(summariesConfig: GuiColumnSummaries): ColumnSummariesConfig;
    private convertSummariesTypes;
    private convertSummariesType;
}
