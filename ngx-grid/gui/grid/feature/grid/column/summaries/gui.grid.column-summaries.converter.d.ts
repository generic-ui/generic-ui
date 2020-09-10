import { ColumnSummariesConfig } from '../../../../../../composition/domain/column/column-summaries.config';
import { GuiColumnSummaries } from '../../../../../../gui.grid.index';
export declare class GuiGridColumnSummariesConverter {
    convert(summariesConfig: GuiColumnSummaries): ColumnSummariesConfig;
    private convertSummariesTypes;
    private convertSummariesType;
}
