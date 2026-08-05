```tsx
"use client";

import {
    Group,
    Text,
} from "react-konva";

import type {
    TextObject,
} from "@/features/objects";

import {
    useObjectInteraction,
} from "../../hooks/useObjectInteraction";

interface Props {
    object: TextObject;
}

export function TextRenderer({
    object,
}: Props) {

    const interaction =
        useObjectInteraction(
            object,
        );

    return (
        <Group
            ref={interaction.ref}
            {...interaction.groupProps}
        >
            <Text
                text={object.text}
                fontSize={object.fontSize}
                fontFamily={object.fontFamily}
                listening={false}
            />
        </Group>
    );
}
```
