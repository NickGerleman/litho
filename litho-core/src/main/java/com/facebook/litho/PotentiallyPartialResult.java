/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho;

/**
 * Interface defining a result calculated from a {@link TreeFuture} that could be interrupted, and
 * therefore be partial (and resumed on the UI thread).
 */
public interface PotentiallyPartialResult {
  /** Return true if this result calculated from a {@link TreeFuture} is partial. */
  boolean isPartialResult();
}
