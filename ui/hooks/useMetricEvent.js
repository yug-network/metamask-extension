import { useContext, useCallback } from 'react';
import { MetaMetricsContext as NewMetaMetricsContext } from '../contexts/metametrics.new';
import { useEqualityCheck } from './useEqualityCheck';

// Type imports
/**
 * @typedef {import('../contexts/metametrics.new').UIMetricsEventPayload} UIMetricsEventPayload
 * @typedef {import('../../shared/constants/metametrics').MetaMetricsEventOptions} MetaMetricsEventOptions
 */

/**
 * track a metametrics event using segment
 * e.g metricsEvent({ event: 'Unlocked MetaMask', category: 'Navigation' })
 *
 * @param {UIMetricsEventPayload} payload - payload of the event to track
 * @param {MetaMetricsEventOptions} options - options for handling/routing event
 * @returns {() => Promise<void>} function to execute the tracking event
 */
export function useNewMetricEvent(payload, options) {
  const memoizedPayload = useEqualityCheck(payload);
  const memoizedOptions = useEqualityCheck(options);
  const metricsEvent = useContext(NewMetaMetricsContext);

  return useCallback(() => metricsEvent(memoizedPayload, memoizedOptions), [
    metricsEvent,
    memoizedPayload,
    memoizedOptions,
  ]);
}
