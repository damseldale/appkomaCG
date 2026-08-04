"use client";

import { CanvasContainer }
from "./CanvasContainer";

import { StageView }
from "./StageView";

export function Canvas() {

    return (

        <section
        className="
        flex
        flex-1
        bg-neutral-800
        ">

            <CanvasContainer>

                <StageView/>

            </CanvasContainer>

        </section>

    );

}
