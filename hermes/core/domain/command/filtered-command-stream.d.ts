import { InjectionToken } from '@angular/core';
import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
export declare const FILTERED_COMMAND_STREAM: InjectionToken<HermesSubject<Command<AggregateId>>>;
//# sourceMappingURL=filtered-command-stream.d.ts.map