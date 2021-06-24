/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/** @public */
export type ChartSizeArray = [number | string | undefined, number | string | undefined];
/** @public */
export interface ChartSizeObject {
  width?: number | string;
  height?: number | string;
}

/** @public */
export type ChartSize = number | string | ChartSizeArray | ChartSizeObject;

/** @internal */
export function getChartSize(size?: ChartSize): ChartSizeObject {
  if (size === undefined) {
    return {};
  }
  if (Array.isArray(size)) {
    return {
      width: size[0] === undefined ? '100%' : size[0],
      height: size[1] === undefined ? '100%' : size[1],
    };
  }
  if (typeof size === 'object') {
    return {
      width: size.width === undefined ? '100%' : size.width,
      height: size.height === undefined ? '100%' : size.height,
    };
  }
  const sameSize = size === undefined ? '100%' : size;
  return {
    width: sameSize,
    height: sameSize,
  };
}