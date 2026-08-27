# AppkomaCG — Editor Architecture

## Goal

Build the project as a browser-based animation editor with a single scene model shared by the canvas, inspector, timeline, selection system, history, save/load, and export.

## Architecture

```text
App
├── EditorShell
│   ├── Navbar
│   ├── Workspace
│   │   ├── ToolPanel
│   │   ├── CanvasViewport
│   │   │   └── SceneRenderer
│   │   └── Inspector
│   └── Timeline
│
├── SceneStore
│   ├── objects
│   ├── rootIds
│   ├── selectedIds
│   ├── currentTime
│   ├── duration
│   └── viewport
│
├── Commands / History
│   ├── addObject
│   ├── removeObject
│   ├── duplicateObject
│   ├── updateTransform
│   ├── renameObject
│   ├── lockObject
│   ├── visibility
│   └── undo / redo
│
└── Persistence
    ├── project JSON
    ├── local storage / Firebase adapter
    └── export JSON
```

## Core rules

1. The scene store is the single source of truth.
2. Renderers never own persistent scene state.
3. Inspector edits dispatch scene updates; they do not mutate canvas nodes directly.
4. Timeline controls a scene clock and keyframes; it does not directly mutate renderer internals.
5. Canvas selection is handled by a selection controller.
6. User-visible mutations should be command-based so they can support undo/redo.
7. Rendering is a projection of scene state.
8. Persistence is isolated behind an adapter so Firebase can be replaced or disabled without changing editor components.

## Object model

Every scene object has:

- `id`
- `type`
- `name`
- `transform` (`x`, `y`, `rotation`, `scaleX`, `scaleY`)
- `visible`
- `locked`

Initial object types:

- `shape`
- `text`
- `image`
- `character`
- `group`

## Rendering flow

```text
SceneStore
   ↓
SceneRenderer
   ↓
ObjectRenderer
   ↓
Type-specific renderer
   ↓
Canvas node
```

Canvas nodes are registered by object ID so selection and transformation tools can resolve the correct node without making the node itself the source of truth.

## Interaction flow

```text
Pointer / Inspector / Timeline
            ↓
       Controller
            ↓
         Command
            ↓
       SceneStore
            ↓
        Renderer
```

## History

Commands should capture enough information to reverse and reapply a change. The history layer must remain independent from React components.

## Persistence

Use a serializable project format. The first implementation should support JSON export/import. Firebase should be an optional persistence adapter rather than a dependency of the core editor state.

## UI layout

The editor uses a full-height shell:

- top navigation: 60px minimum
- center workspace: flexible height
- right inspector: fixed/resizable panel
- bottom timeline: dedicated panel with its own scrolling/zooming

The workspace must use `min-height: 0` and avoid mixing fixed height calculations with flex sizing.

## Implementation order

### Phase 1 — Foundation

- scene types
- scene store
- object factory
- selectors
- editor shell
- stable canvas viewport

### Phase 2 — Canvas interaction

- object registry
- selection controller
- transform controller
- multi-selection
- snapping/grid foundations

### Phase 3 — Inspector

- controlled inputs
- transform editing
- visibility/lock
- rename
- object properties

### Phase 4 — Timeline

- playback clock
- play/pause
- scrubber
- tracks
- keyframe model

### Phase 5 — History

- command manager
- undo/redo
- keyboard shortcuts

### Phase 6 — Persistence

- JSON serializer
- import/export
- local persistence
- Firebase adapter

### Phase 7 — Advanced editor features

- groups
- layers
- character system
- poses/expressions
- background system
- animation presets
- project assets
