<Group
    ref={groupRef}
    draggable
    onDragEnd={(e) => {

        const node =
            e.target;

        updateTransform(
            object.id,
            {
                x: node.x(),
                y: node.y(),
            },
        );

    }}
>
