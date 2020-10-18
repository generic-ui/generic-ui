import { SummariesType } from '../../../../structure/summaries/core/domain/summaries.type';
export interface ColumnSummariesConfig {
    enabled?: boolean;
    summariesTypes?: Array<SummariesType>;
}
