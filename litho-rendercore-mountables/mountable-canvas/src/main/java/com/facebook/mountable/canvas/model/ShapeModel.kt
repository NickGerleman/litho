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

package com.facebook.mountable.canvas.model

import android.annotation.SuppressLint
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.RectF
import com.facebook.mountable.utils.types.Point
import com.facebook.mountable.utils.types.Size

sealed interface CanvasShape

sealed interface CanvasShapeModel : CanvasShape {
  fun draw(canvas: Canvas, paint: Paint)
}

/**
 * A line segment with the specified start and stop x,y coordinates that can be drawn on a Canvas.
 *
 * @param startPoint The start point of the line
 * @param endPoint The end point of the line
 */
@Suppress("KtDataClass")
@SuppressLint("NotInvokedPrivateMethod")
data class CanvasShapeLine(private val startPoint: Point, private val endPoint: Point) :
    CanvasShapeModel {
  override fun draw(canvas: Canvas, paint: Paint) {
    canvas.drawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y, paint)
  }
  override fun toString(): String = ""
}

/**
 * A closed (optionally) round-rectangle that can be drawn on a Canvas.
 *
 * @property topLeft The coordinates of the top left point of the rectangle
 * @property size The size of the rectangle
 * @property cornerRadius The radius of the rounded corners
 */
@Suppress("KtDataClass")
@SuppressLint("NotInvokedPrivateMethod")
data class CanvasShapeRect(
    private val topLeft: Point,
    private val size: Size,
    private val cornerRadius: Float
) : CanvasShapeModel {
  override fun draw(canvas: Canvas, paint: Paint) {
    canvas.drawRoundRect(
        RectF(topLeft.x, topLeft.y, topLeft.x + size.width, topLeft.y + size.height),
        cornerRadius,
        cornerRadius,
        paint)
  }
  override fun toString(): String = ""
}

/**
 * A closed circle that can be drawn on a Canvas.
 *
 * @property center The center of the circle
 * @property radius The radius of the circle
 */
@Suppress("KtDataClass")
@SuppressLint("NotInvokedPrivateMethod")
data class CanvasShapeCircle(private val center: Point, private val radius: Float) :
    CanvasShapeModel {
  override fun draw(canvas: Canvas, paint: Paint) {
    canvas.drawCircle(center.x, center.y, radius, paint)
  }
  override fun toString(): String = ""
}

/**
 * An arc shape that can be drawn on a Canvas.
 *
 * @property center The center of the arc
 * @property radius The radius of the arc
 * @property startDegrees The angle to the starting point of the arc
 * @property endDegrees The angle to the end point of the arc
 * @property clockwise true to make a clockwise arc; false to make a counterclockwise arc
 */
@Suppress("KtDataClass")
@SuppressLint("NotInvokedPrivateMethod")
data class CanvasShapeArc(
    private val center: Point,
    private val radius: Float,
    private val startDegrees: Float,
    private val endDegrees: Float,
    private val clockwise: Boolean,
) : CanvasShapeModel {
  override fun draw(canvas: Canvas, paint: Paint) {
    val startAngle = if (clockwise) startDegrees else -startDegrees
    val endAngle = if (clockwise) endDegrees - startDegrees else startDegrees - endDegrees
    canvas.drawArc(
        RectF(center.x - radius, center.y - radius, center.x + radius, center.y + radius),
        startAngle,
        endAngle,
        false,
        paint)
  }
  override fun toString(): String = ""
}

/**
 * A closed ellipse that can be drawn on a Canvas.
 *
 * @property topLeft The coordinates of the top left point of the ellipse
 * @property size The size of the ellipse
 */
@Suppress("KtDataClass")
@SuppressLint("NotInvokedPrivateMethod")
data class CanvasShapeEllipse(private val topLeft: Point, private val size: Size) :
    CanvasShapeModel {
  override fun draw(canvas: Canvas, paint: Paint) {
    canvas.drawOval(
        RectF(topLeft.x, topLeft.y, topLeft.x + size.width, topLeft.y + size.height), paint)
  }
  override fun toString(): String = ""
}
