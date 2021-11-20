import { SourceIsLoadingModel } from '../domain-read/source-is-loading.model';
import { SourceManager } from './core/source.manager';
export declare class SourceConverter {
    convert(aggregate: SourceManager): SourceIsLoadingModel;
}
