"use client";

import { Fragment } from "react";

import type { SceneObject } from "@/features/objects";

import { getBehaviors } from "./registry";

interface Props {
  object: SceneObject;
}

export function BehaviorHost({
  object,
}: Props) {
  const behaviors = getBehaviors();

  return (
    <>
      {behaviors.map((Behavior, index) => (
        <Fragment key={index}>
          <Behavior object={object} />
        </Fragment>
      ))}
    </>
  );
}
