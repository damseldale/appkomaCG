"use client";

import { useMemo } from "react";

import { createStageController } from "../controllers/StageController";

export function useStageController() {
  return useMemo(
    () => createStageController(),
    [],
  );
}
