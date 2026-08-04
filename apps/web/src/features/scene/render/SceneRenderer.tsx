"use client";

import { Fragment } from "react";

import { useSceneObjects } from "../selectors";

import { ObjectRenderer } from "./ObjectRenderer";

export function SceneRenderer() {
  const objects = useSceneObjects();

  return (
    <>
      {objects.map((object) => (
        <Fragment
          key={object.id}
        >
          <ObjectRenderer
            object={object}
          />
        </Fragment>
      ))}
    </>
  );
}
