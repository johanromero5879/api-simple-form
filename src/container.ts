import { FormContainer } from "@form/form.container"

class Container {
    private static instance: Container;
    
    public static getInstance() {
        return this.instance || (this.instance = new this())
    }

    // containers
    form = new FormContainer()
}

export const container = Container.getInstance()