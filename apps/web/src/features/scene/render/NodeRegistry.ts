import type Konva from "konva";

class NodeRegistry {

    private readonly nodes =
        new Map<
            string,
            Konva.Node
        >();

    register(
        id: string,
        node: Konva.Node,
    ) {
        this.nodes.set(
            id,
            node,
        );
    }

    unregister(
        id: string,
    ) {
        this.nodes.delete(id);
    }

    get(
        id: string,
    ) {
        return this.nodes.get(id);
    }

    has(
        id: string,
    ) {
        return this.nodes.has(id);
    }

    clear() {
        this.nodes.clear();
    }

    getAll() {
        return this.nodes;
    }
}

export const nodeRegistry =
    new NodeRegistry();
