export function SceneRenderer() {

    const objects =
        useSceneObjects();

    const selection =
        SelectionController();

    useEffect(() => {
        bootstrapRenderers();
    }, []);

    return (
        <>
            {objects.map(object => (
                <ObjectRenderer
                    key={object.id}
                    object={object}
                />
            ))}

            <TransformerController />

        </>
    );

}
