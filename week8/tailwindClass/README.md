# Tailwind CSS Cheatsheet

A quick reference for some common Tailwind CSS utilities.

## Flexbox

Utilities for controlling how flex items are positioned, aligned, and sized. To use them, first make an element a flex container with `.flex`.

### Justify Content

Controls how flex items are positioned along the main axis.

- `.justify-start`: Pack items against the start.
- `.justify-end`: Pack items against the end.
- `.justify-center`: Pack items in the center.
- `.justify-between`: Distribute items evenly, with the first item at the start and the last at the end.
- `.justify-around`: Distribute items evenly with equal space around them.
- `.justify-evenly`: Distribute items evenly with equal space between them.

## Grid

Utilities for creating grid layouts.

- `.grid`: Creates a grid container.
- `.grid-cols-{number}`: Sets the number of columns (e.g., `.grid-cols-4`).
- `.gap-{size}`: Controls the gap between grid items (e.g., `.gap-4`).

## Responsive Design

Use breakpoint prefixes to apply utilities at different screen sizes.

| Prefix | Minimum Width | Description         |
| ------ | ------------- | ------------------- |
| `sm`   | 640px         | Small screens       |
| `md`   | 768px         | Medium screens      |
| `lg`   | 1024px        | Large screens       |
| `xl`   | 1280px        | Extra-large screens |
| `2xl`  | 1536px        | 2x extra-large      |

Example: `md:text-center` will center text on medium screens and up.

## Colors

Tailwind includes a curated color palette. Each color has a scale from `50` (lightest) to `900` (darkest).

- **Usage**: `text-{color}-{shade}`, `bg-{color}-{shade}`, `border-{color}-{shade}`
- **Example**: `bg-blue-500`, `text-red-700`

### Neutral Colors

A great set of neutral colors are available for backgrounds, text, and borders.

- `slate`
- `gray`
- `zinc`
- `neutral`
- `stone`

## Font Size

Utilities for controlling the font size of an element.

| Class                | Font Size |
| -------------------- | --------- |
| `.text-xs`           | 0.75rem   |
| `.text-sm`           | 0.875rem  |
| `.text-base`         | 1rem      |
| `.text-lg`           | 1.125rem  |
| `.text-xl`           | 1.25rem   |
| `.text-2xl`          | 1.5rem    |
| ...up to `.text-9xl` |

## Border Radius

Utilities for controlling the corner radius of an element.

- `.rounded-sm`
- `.rounded`
- `.rounded-md`
- `.rounded-lg`
- `.rounded-xl`
- `.rounded-2xl`
- `.rounded-3xl`
- `.rounded-full` (for pills and circles)

## Spacing (Margin & Padding)

Utilities for controlling an element's margin or padding. The scale is based on `0.25rem`.

- **Margin**: `m-{size}`, `mx-{size}` (x-axis), `my-{size}` (y-axis), `mt-{size}` (top), etc.
- **Padding**: `p-{size}`, `px-{size}` (x-axis), `py-{size}` (y-axis), `pt-{size}` (top), etc.
- **Example**: `m-4` (margin: 1rem), `px-8` (padding-left: 2rem; padding-right: 2rem).

## Sizing (Width & Height)

Utilities for setting the width and height of an element.

- **Width**: `w-{size}` (e.g., `w-4`, `w-1/2`, `w-full`, `w-screen`).
- **Height**: `h-{size}` (e.g., `h-4`, `h-full`, `h-screen`).
- **Example**: `w-1/2` sets width to 50%, `h-screen` sets height to 100vh.

## More Typography

### Font Weight

| Class          | Property           |
| -------------- | ------------------ |
| `.font-thin`   | `font-weight: 100` |
| `.font-light`  | `font-weight: 300` |
| `.font-normal` | `font-weight: 400` |
| `.font-medium` | `font-weight: 500` |
| `.font-bold`   | `font-weight: 700` |
| `.font-black`  | `font-weight: 900` |

### Text Alignment

| Class           | Property              |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |

## Box Shadow

Utilities for adding box shadows to elements.

- `.shadow-sm`
- `.shadow`
- `.shadow-md`
- `.shadow-lg`
- `.shadow-xl`
- `.shadow-2xl`
- `.shadow-inner`

## Pseudo-Classes

Style elements on different states, like hover, focus, and more.

- **Usage**: `{state}:{utility}`
- **Example**: `hover:bg-blue-700`, `focus:ring-2`, `disabled:opacity-50`
- **Common States**: `hover`, `focus`, `active`, `disabled`, `first`, `last`, `odd`, `even`.
