import { SummariesType } from '../../../structure/core/domain/summaries/summaries.type';
export interface ColumnSummariesConfig {
    enabled?: boolean;
    summariesTypes?: Array<SummariesType>;
}
