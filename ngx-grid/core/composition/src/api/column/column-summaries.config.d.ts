import { SummariesType } from '../../../../structure/summaries/src/domain/summaries.type';
export interface ColumnSummariesConfig {
    enabled?: boolean;
    summariesTypes?: Array<SummariesType>;
}
