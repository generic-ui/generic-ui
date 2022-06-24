import { SummariesType } from '../../../structure/summaries/domain/summaries.type';
export interface ColumnSummariesConfig {
    enabled?: boolean;
    summariesTypes?: Array<SummariesType>;
}
