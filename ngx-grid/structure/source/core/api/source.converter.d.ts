import { Source } from './read/source';
import { SourceManager } from '../domain/core/source.manager';
export declare class SourceConverter {
    convert(aggregate: SourceManager): Source;
}
