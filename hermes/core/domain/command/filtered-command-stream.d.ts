import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare const FILTERED_COMMAND_STREAM: InjectionToken<Subject<Command<AggregateId>>>;
