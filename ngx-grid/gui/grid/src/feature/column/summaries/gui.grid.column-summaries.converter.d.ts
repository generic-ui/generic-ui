import { ColumnSummariesConfig } from '../../../../../../core/composition/src/api/column/column-summaries.config';
import { GuiColumnSummaries } from '../../../../../../gui.grid.index';
export declare class GuiGridColumnSummariesConverter {
    convert(summariesConfig: GuiColumnSummaries): ColumnSummariesConfig;
    private convertSummariesTypes;
    private convertSummariesType;
}
