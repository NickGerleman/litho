// (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.

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

package com.facebook.samples.litho.kotlin.mountables.widgets

import android.content.Context
import android.graphics.Color
import android.graphics.PorterDuff
import android.graphics.drawable.Drawable
import com.facebook.litho.MeasureScope
import com.facebook.litho.MountableComponent
import com.facebook.litho.MountableComponentScope
import com.facebook.litho.MountableRenderResult
import com.facebook.litho.SimpleMountable
import com.facebook.litho.SizeSpec
import com.facebook.litho.Style
import com.facebook.litho.widget.ProgressView
import com.facebook.rendercore.MeasureResult

/**
 * Renders an infinitely spinning progress bar.
 *
 * @param indeterminateDrawable Drawable to be shown to show progress.
 * @param color Tint color for the drawable.
 */
class Progress(
    private val color: Int = Color.TRANSPARENT,
    private val indeterminateDrawable: Drawable? = null,
    private val style: Style? = null
) : MountableComponent() {

  override fun MountableComponentScope.render(): MountableRenderResult {
    return MountableRenderResult(
        ProgressMountable(color = color, indeterminateDrawable = indeterminateDrawable), style)
  }
}

private const val defaultSize: Int = 50

internal class ProgressMountable(
    private val color: Int,
    private val indeterminateDrawable: Drawable?
) : SimpleMountable<ProgressView>(RenderType.VIEW) {

  override fun createContent(context: Context): ProgressView = ProgressView(context)

  override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {
    return if (SizeSpec.getMode(widthSpec) == SizeSpec.UNSPECIFIED &&
        SizeSpec.getMode(heightSpec) == SizeSpec.UNSPECIFIED) {
      MeasureResult(defaultSize, defaultSize)
    } else {
      withEqualSize(widthSpec, heightSpec)
    }
  }

  override fun mount(c: Context, content: ProgressView, layoutData: Any?) {
    indeterminateDrawable?.let { content.indeterminateDrawable = indeterminateDrawable }
    content.indeterminateDrawable?.let {
      if (color != Color.TRANSPARENT) {
        content.indeterminateDrawable.mutate().setColorFilter(color, PorterDuff.Mode.MULTIPLY)
      }
    }
  }

  override fun unmount(c: Context, content: ProgressView, layoutData: Any?) {
    // restore the color first, since it acts on the indeterminateDrawable
    if (color != Color.TRANSPARENT && content.indeterminateDrawable != null) {
      content.indeterminateDrawable.mutate().clearColorFilter()
    }
    content.indeterminateDrawable = null
  }

  override fun shouldUpdate(
      newMountable: SimpleMountable<ProgressView>,
      currentLayoutData: Any?,
      nextLayoutData: Any?
  ): Boolean {
    newMountable as ProgressMountable
    return newMountable.color != color ||
        newMountable.indeterminateDrawable != indeterminateDrawable
  }
}
