import { SourceIsLoadingModel } from '../core-read/source-is-loading.model';
import { SourceManager } from '../domain/source.manager';
export declare class SourceConverter {
    convert(aggregate: SourceManager): SourceIsLoadingModel;
}
