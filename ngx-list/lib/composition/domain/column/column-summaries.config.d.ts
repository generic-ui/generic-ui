import { SummariesType } from '../../../structure/domain/structure/summaries/summaries.type';
export interface ColumnSummariesConfig {
    enabled?: boolean;
    summariesTypes?: Array<SummariesType>;
}
